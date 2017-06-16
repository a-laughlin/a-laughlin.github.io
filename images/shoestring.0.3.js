/*!
 * Shoestring JavaScript Structure v0.3 
 * Copyright 2011, Adam Laughlin
 * http://a-laughlin.com
 * Licensed under MIT & GPL version 2
 * http://static.a-laughlin.com/mit_license.txt
 * http://static.a-laughlin.com/gpl_license.txt
 */

(function($){
//	function init(s){
		var w=window,
		s=w.shoestring||{}, // create the shoestring object if it doesn't exist already
		l=location,
		h=l.hostname,
		defaults={	// Define some variables to use during initialization.
			pageTarget:l.href, // target for ToC "page:" checks.
			fnContexts:[s,w], // default contexts for shoestring to execute entries' functions in
			preInitPlugins:{}, // stores plugins that must run before initial files load, that may optionally return entries to run after initial files load.
			initial:['js/'+location.hostname+'.toc.js'], // Array of files to load before executing Table of Contents.  Useful for loading the ToC in a separate file.
			urls:{},  // Standard place to store file paths.
			entryDefaults:{ // defaults for ToC entries
				is:'body', // is === jQuery selector.
				bind:'live' // jQuery bind type.  May contain 'one', 'bind', etc.
				//fn:'', // becomes either the name of a function to execute, or an object literal containing functions to execute
				//on:'', // space separated events 'click', "mouseenter mouseout", etc. When used, entry.eventObj is also set to the "event".  e.g. event.preventDefault() === entry.eventObj.preventDefault()
				//files:[] // array of file or $.ajax() objects to load, Each loaded file pushes its data back into entry.files[n].returnedData
				// when:1 // optional test. Falsey - 0,false,null,undefined,'',NaN, etc. will skip entry. (removing since it makes the if check longer.  No real need for a default either.)
			}
		},
		builtIns={
			version:'0.3',
			files:{}, // keeps track of loaded files
			toc:[], // stores functions that return ToC objects
			preInitEntries:[], // where the entries that run before the ToC go... this could probably be refactored to use toc instead.
			
			
			/*** DEFINE PUBLIC METHODS ***/
			
			/* shoestring.initToc public fn: shoestring core functionality. Parses an
			 *   object literal containing arrays of object literals
			 * param pagesArr []: array containing object literals
			 *   e.g., [{page:/http:/,entries:[{},{},{}]}, {page:/https:/,entries:[{},{},{}]}]
			 * returns: undefined
			 */
			initToc : function(pagesArr){
				var i=0,
				pageLen=pagesArr.length,
				entriesQueue=[],
				entriesLen,
				temp;
				for(;i<pageLen;i++){ // loop over the ToC's pages and queue any entries
					var page=pagesArr[i].page,
					t=s.pageTarget;
					if( page.substr ? t.indexOf(page)>-1 : page.test(t) ){ // duck type for string, if string test it, else assume regex
						entriesQueue.push.apply(entriesQueue,pagesArr[i].entries);
					}
				};
				
				i=0; // reset i
				entriesLen=entriesQueue.length;
				for(;i<entriesLen;i++){
					var entry = entriesQueue[i];
					if(entry.when||!('when' in entry)){ // if a page is defined to test, check it for the string or regex used,if the when doesn't exist, is truish and not a string, or is a string and is in location href/an element's id, continue... else skip this entry
						entry=$.extend({},s.entryDefaults,entry);// extend the entry object with defaults
						entry.files?  // are files required?
							fileRequest(entry): // yes, get them
							splitDocReadies(entry); // no, execute normally
					}
				}
				/*** DEFINE initEntries PRIVATE METHODS ***/
				
				/* fileRequest private fn: Create a file queue for each file.  Queue dependent entries that depend on it.  Dequeue them on load.
				 * param entry: object literal - the ToC entry object
				 * returns undefined
				 */
				function fileRequest(entry){
					entry.fl=0; // Iterator for files loaded.  Ensures files for this entry have all loaded before executing fns.
					for (var j=0; j<entry.files.length; j++) {//for each file in this entry's files string
						var temp = entry.files[j],// shortcut for files added
						ajaxObj = temp.url? temp:{ url:temp, dataType:'script', cache:true}, // if the file is a string, convert it to an object with script datatype as default
						key = ajaxObj.url.replace(/.*\/([^?]+).*/,'$1').replace(/min|[^\w\d]/g,''), //Create a storage key for the file.  Also strip invalid property chars and numbers, and "min" for dev cookie replace.
						f = s.files[key] = s.files[key] || $.extend({entries:[],fileKey:key},ajaxObj); // If no filz object exist with this key, create one with the url, any ajax properties, and a queue for its dependent entries 
						entry.files[j]=ajaxObj; // replace the original file path/object with a reference to the file object.
						f.entries.push(entry); // add the entry to this file's queue
						f.returnedData? // has the file loaded?
							dequeue(f): // Yes.  Dequeue Entry objects.
							request(f); // No. Make file request
					}
					
					/* dequeue private fn: attempt to dequeue all entries for a file once it returns - each entry must have all files loaded to dequeue
					 * param F object literal: (Specifically s.files[key] above)
					 * returns undefined
					 */
					function dequeue(F){  //  
						for(var x=0;x<F.entries.length;x++) {  // loop over this file's queued entries;
							var ent=F.entries[x], L=ent.files.length,i=0;
							for(;i<L;i++){ // loop over each entry's file objects
								if(F.url==ent.files[i].url) { // if the current entry array file has the same url as the file we're dequeuing
									ent.files[i]=F; // extend this entry's file object with F's properties so entries can reference it
									ent.fl++; // increment the loaded files for this entry
								}
								if(ent.fl===L) { // if the entry's files have all returned
									entry.id ?// does the entry have a triggerable ID?
										(s.entryIds[entry.id]=$.extend(entry,{selfExec:splitDocReadies})): // yes, Closure splitDocReadies in entry for self-execution; (// Creating a public function to execute one entry makes structure breaking too easy.)
											splitDocReadies(ent); // no, execute the entry's functions now
								}
							};
						}
					}
					
					/* request private fn: request a file if it hasn't been requested already.  Attempt dequeue on success.
					 * param F object literal: (Specifically s.files[key] above)
					 * returns undefined
					 */
					function request(F){
						if (!F.req){ // request the file if it hasn't been, else skip it
							F.req=1; // set requested to true;
							F.success=function(data,msg){ // once load is successful
								F.returnedData=data||msg; // Place data or message in the file's returnedData property
								dequeue(F); // dequeue this file's queued entries.
							};
							$.ajax(F) // Load file
						}
					}
				};
				
				/* splitDocReadies private fn: controls whether entry executes immediately or on doc ready
				 * param entry {}: object literal - the ToC entry object
				 * returns: undefined
				 */
				function splitDocReadies(entry){
					if(entry.fn){
						entry.bind=='live' && !$.isReady? // is the bind type live and the document is not ready? 
							bindOrExec(entry): // yes, it's okay to bind live before doc ready, so execute immediately for speed
							$(function(){ bindOrExec(entry) }); //no, queue for execution with implicit $(document).ready().
					}
				}
				
				/* bindOrExec private fn: Decides whether to bind to event or execute immediately  
				 * param entry {}: object literal - the ToC entry object
				 * param jq : jquery collection passed for context
				 * returns: undefined
				 * note: entry.bind defaults to "live"
				 */
				function bindOrExec(entry){
					var jq=$(entry.is);
					entry.on? // does entry.on exist? (e.g., {on:'click'}), 
						jq[entry.bind](entry.on,entry,function(event){ // yes, bind with entry.bind
							entry.eventObj=event; // attach the event object to the entry, for access within the function
							execEntryFns($(this),entry)// set jQuery context for function execution
						}):
						execEntryFns(jq,entry)// no event type specified. execute immediately
				}
				
				/* execEntryFns private fn: sequentially execute any entry fns
				 * param jq : jquery collection passed for context
				 * param entry {}: object literal - the ToC entry object
				 * returns: undefined
				 */
				function execEntryFns(jq,entry){

					function execOneFn (fname,arg){ // execute a function - used immediately in loop below
						jq[fname]? // does $(entry.is)[fname] exist as a function?
							(jq=jq[fname].apply(jq, // yes, reassign jq to preserve chain, and...
								fname.indexOf('ss_')===0 ? //is it a string that starts with ss_?
									[arg,entry]: // yes,  call function with arg and entry.
									[arg] // no, pass a single argument 
							)): 
							$.each(s.fnContexts,function(idx,context){
								if(context[fname])context[fname](arg)
							}) // no, check the user defined namespaces for the fn and execute if it exists
					};
					
					typeof entry.fn=='string'? // is entry.fn a function name string by itself?
						execOneFn(entry.fn): // yes, execute it
						$.each(entry.fn,function(fnam,arg){ // no, assume it's an object
							execOneFn(fnam, arg) // execute each function in the entry.fn object
						})
				}
			},
			
			
			/* pluginFactory public fn: factory for conveniently creating jQuery.fn plugins
			 * param pluginsObj {}: object literal containing functions
			 *   e.g., {ss_foo:function(entry,arg){}, ss_bar:function(entry,arg){}}
			 * returns: undefined
			 */
			pluginFactory:function (pluginsObj){
				$.each(pluginsObj,function(funcName,func){  // yes, iterate over functions in pluginsObj
					$.fn[funcName]=function(){ // create a plugin from each
						var args=arguments;
						return this.each(function(){ // loop over each element in the collection
							func.apply(this, args); // run the plugin in the context of each element
						});
					}
				})
			},
			
			dequeueToc:function(toc){ // executes the functions in s.toc if remote files pushed them there;
			//loop over array of queued entry container objects
				for (;toc[0];) s.initToc(toc.shift()(s)); // dequeue and execute any functions returning ToCs ... likely a 1 or 2 item array, so shift works well enough.
			}
		};
		
		// initialization stuff
		// TODO refactor this... and initToc... and dequeueToc.  Perhaps blend them all into a polymorphic s.toc()
		for(var d in defaults) s[d] = s[d] || defaults[d]; // extend s with defaults
		$.extend(s,builtIns); // extend s with builtins
		$.each(s.preInitPlugins,function(){ // execute any functions that must run before any initial files load
			var entry=this(s); // if the function returned a ToC entry
			if(entry)s.preInitEntries.push(entry); // push it into the initial ToC.
		});
		s.preInitEntries.push({files:s.initial,fn:{'dequeueToc':s.toc}}); // add the initial object to preInitEntries
		s.initToc([{page:/./,entries:s.preInitEntries}]); // execute preInitEntries and return any functions into the initial ToC
})(jQuery);