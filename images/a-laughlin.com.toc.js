(function(s,$){
  s.toc.push(function(){

    /*** SECTION 1 OF 3  -  SET SHORTCUT VARIABLES ***/
    // define specific file paths
    $.extend(s.urls,{
      ga:'http'+(s.protocol=='https:'?'s://ssl':'://www')+'.google-analytics.com/ga.js',
      gwo:s.ga_gwo.gwo.file,
      prettify:'//static.1button.org/js/a-laughlin.com.prettify.js',
      cycle:'//static.1button.org/js/jquery.cycle.all.min.js',
      gApi:'//www.google.com/jsapi?key=ABQIAAAAd_blCJDpR7pVQKhZlGcAbxQ7mIViCMkczqaVrihGisSvMSgt2hQqj5OK1NlSz-mIQASxILE6Sji8AQ',
      gMapsApi:'http://maps.googleapis.com/maps/api/js?sensor=false&callback=isNaN',
      chicagoData:{url:'http://static.1button.org/js/ward_year_thefts_geo-centers.json', dataType:'jsonp', jsonpCallback:'ss_random',cache:true},
      nextStageFeed:'//knowledgeshop.nextstagevolution.com/knowledgeshop.xml',
      html5shiv:'//static.1button.org/js/html5.js',
      fisheyeGrid:'//static.1button.org/js/jquery.fisheyegrid.js',
      spine:'//static.1button.org/spine_example_app/js/libs/spine/spine.js',
      spine_tutorial:'//static.1button.org/spine_example_app/js/app_tree.js',
      handlebars:'//static.1button.org/spine_example_app/js/libs/handlebars-1.0.0.beta.6.js',
      gplus:'https://apis.google.com/js/plusone.js'
    });
    
    /*** SECTION 2 OF 3  -  TABLE OF CONTENTS ***/
    return [
      {page:/./, entries:[
          {is:'head', fn:{ss_ga:{type:'init'}}}, // execute the google analytics initialization functions.  No need to wait for the files to load given _gaq[]
          {is:'li#search-2', on:'mouseenter focus',fn:{ss_changeOpacityTo:{speed:1000,opacity:.8}}},
          {is:'div#trans-box',fn:{ss_ga:{type:'trans',extn:'ss_gaEcommerceSuccess'}}},
          {is:'a', on:'mouseup', fn:{ss_ga:{extn:'ss_gaPagePart',part:'elemLink'}}}
          ]},
      
      {page:/multi_test/, entries:[
          {is:'div.foo', files:[s.urls.gwo], fn:{ss_ga:{section:'section1', testFn:'ss_gwoTriggeredPlugin1'}}},
          {is:'div.bar', files:[s.urls.gwo], fn:{ss_ga:{section:'section2', testFn:'ss_gwoTriggeredPlugin2'}}},
          {is:'div.baz', files:[s.urls.gwo], fn:{ss_ga:{section:'section3', testFn:'ss_gwoTriggeredPlugin3'}}}
          ]},
      
      {page:/p=645|spine-js|a-laughlin.com\/?$/, entries:[
          {files:[s.urls.handlebars,s.urls.fisheyeGrid,s.urls.spine],fn:'ss_spineTutorial'},
          ]},
          
//      {page:/_test|optimizer/, entries:[
//          {is:'div.entry-content', fn:'ss_debugQueue' },
//          {is:'a', on:'mouseup', fn:'ss_debugQueue' }
//          ]},
      
//      {page:/shoestring-a-brief-tutorial|a-laughlin.com\/?$/, entries:[
//          {is:'div#slideshow' , files:[s.urls.cycle] , fn:'cycle'}
//          ]},

      {page:/fisheye-grid|a-laughlin.com\/?$/, entries:[
          {is:'div#fisheye-grid' , files:[s.urls.fisheyeGrid], fn:{ss_grid:{}, fisheyeGrid:{steps:15,width:640,height:480}, ss_gridDates:{populate:'.fisheye-cell'}} },
          {is:'div#kitten-grid' , files:[s.urls.fisheyeGrid], fn:{ss_grid:{}, fisheyeGrid:{steps:10,width:400,height:300}, ss_pageKittens:{h:180,w:240,n:5, populate:'.fisheye-cell'}} },
          ]},
      {page:/jquery-google-maps|a-laughlin.com\/?$/, entries:[
          {is:'div#chicago-theft-yrs', files:[s.urls.gApi, s.urls.chicagoData], fn:{ss_jsonMapsTutorial:'',ss_googleLoad:'maps'} }
          ]},
      
      {page:/./, entries:[
          {is:'.showGracefully', fn:'show'},
          {when:$.browser.msie && $.browser.version<9, is:'head', files:[s.urls.html5shiv]},
          {is:'a', fn:{ss_linkAffordances:{}} },
          {is:'head',files:[s.urls.ga]}, // load ga script
          {is:'pre', files:[s.urls.prettify], fn:{addClass:'prettyprint',prettyPrint:''}},
          {when:s.cookie.devEnv, is:'body', fn:'ss_virtualDevServer'}, // provides a notification which files you loaded in place of the live ones
          {is:'[class*=track_]',on:'mouseup',fn:{ss_ga:{extn:'ss_gaPagePart',part:'elemClass'}}},
          {files:s.files.gplus}
          ]}
    ]
    

  });
  

  // temporarily redefining plugin with a try function until updating the error handling infrastructure.  Someday.  Low priority.
  s.pluginFactory=function (pluginsObj){
    $.each(pluginsObj,function(funcName,func){  // yes, iterate over functions in pluginsObj
      $.fn[funcName]=function(){ // create a plugin from each
        var args=arguments;
        try{
          return this.each(function(){ // loop over each element in the collection
              func.apply(this, args); // run the plugin in the context of each element
          });
        } catch(e){
          console.debug(e.type,e.name,e.message);
          if($.fn.ss_ga) $(document).ss_ga({},{type:'event',eventCategory:'error',eventAction:e.name,eventLabel:'In ' + funcName + ', e.msg:' + e.message});
        }
      }
    })
  };
  
  /*** SECTION 3 of 3 - UTILITY FUNCTIONS ***/
  
  
  s.pluginFactory({

    /* ss_ga: Provides  tracking, an extension structure with standard variables,  cleans data, and ensures correct submission order 
     *
     */
    ss_ga:function(arg,entry){

      var defaults={
        page:'', // overrides the normal _trackPageview if specified
        type:'', // can be init, event, vpv, link, crossDomainLink,
        eventCategory:'defaultCategory',
        eventAction:'defaultAction',
        eventLabel: 'defaultLabel',
        eventAmount:'',
        vpv0:'/vpv/',
        vpv1:'/',
        vpv2:'/',
        vpv3:'/',
        vpv4:'/',
        extn:'', // plugin name to execute that will modify these default properties
        queue:[],// stores all the non-gwo commands to submit
        gwoQueue:[], // stores gwo commands to submit
        gwoFullDataQueue:[], // stores specific commands for the gwo all data tracker.  They bypass the main queue because the events would skew bounce rates.
        trans:{
          total:{
            val:'0',
            selector:'',
            clean:function(v){return this.val = (this.val+'').replace(/[^\d.]/g,'').replace(/(\d+?\.\d\d).*/,'$1')}
          },
          id:{
            val:'',
            selector:'',
            get:function(v){
              this.val= $(this.selector).text().replace(/[^\w\d\-]/g,'') || ('randomId-'+s.stamp('dy','hr','mi','sc')+'-'+  (s.cookie.__utma||'.').split('.')[1]); // get and clean the trans id, else generate a random one
            }
          }
        },
        items:{
          queue:[], // store the items to queue (a pre-queue pre-queue pre-_gaq item queue.  Because it made sense.  Fun to say is a bonus.)
          selector:el, // a selector containing the elements whose values are one transaction's items in one transaction
          get:transItems
        },
        item:{
          sku:{val:'defaultItemSku',selector:'',clean:function(v){return v.replace(/[^\d\w]/g,'')}},
          qty:{val:'1',selector:'',clean:function(v){return v.replace(/[^\d]/g,'')}},
          subtotal:{val:'',selector:'',clean:function(v){return ((Math.round(v.replace(/[^\d.]/g,'')*100)/100)+'')}},
          category:{val:'defaultItemCategory',selector:'',clean:function(v){return v.replace(/[\s\-\t]+/g,'_').replace(/[^\w\d]/g,'')}},
          name:{val:'defaultItemName',selector:'',clean:function(v){return v.replace(/[\s\-\t]+/g,'_').replace(/[^\w\d]/g,'')}},
          price:{val:'',selector:'',clean:function(v){return v.replace(/[^\d.]/g,'')}}
        }
      },
      el=this,
      $el=$(el),
      g=s.ga_gwo,
      gwo=g.gwo;
      if(el.href){$el.ss_guessLinkType(arg,entry)};
      s.ref=s.extendHrefProps(s.ref||document.referrer); // s.ref becomes a shortcut for document referrer, or uses s.ref if already defined
      if(s.search) s.searchObj=s.strToObj(s.search.slice(1)); // get location.search parameters
      
      for(var d in defaults) arg[d] = arg[d] || defaults[d]; // add defaults to arg where it doesn't already have them
      
      if(arg.extn) $el[arg.extn](arg,entry); // run extensions

      if (arg.type=='init'){ // automatically initialize if this is the first time ss_ga has run
        setTrackers(); // initializes each tracker, e.g., _gaq.push['main0._trackPageview'], where main1, main2, etc would be a rollup/subtrackers if you add one to the array
        $.merge(arg.queue,g.accountSettings); // Sets all details to make sure trackers work correctly for the deployment
        incrementPageLoadCookie(); // two part cookie ss_gaPageLoads. Format number|||referrer   The number tracks views of a page compared to the last page stored in the referrer part.
        customVars(arg,entry); // reads, evaluates, updates, stores, & queues custom variable values
        actionChooser(); // submit pageview
        submitQueue(); // everything goes into a pre-processing queue before submitting to GA so we can ensure format, handle the rollup trackers, etc.
      } else if(arg.testFn&&window.utmx_global_vd){
        arg.variation=gwo.activeSections[arg.section]; // set the variation for each gwo test section
        $el[arg.testFn](arg,entry); // execute gwo test functions
      } else if(arg.linkType!='javascript'&&arg.linkType!='internal'){ // provide a way to skip submission on post-init controls
        if(arg.type=='trans') trans() // transaction handling, uses the trans, item, and items defaults above;
        customVars(arg,entry); // reads, evaluates, updates, stores, & queues custom variable values
        actionChooser(); // submit an action on every call so that custom vars always increment correctly
        submitQueue(); // everything goes into a pre-processing queue before submitting to GA so we can ensure format, handle the rollup trackers, etc.
        if(arg.linkType== 'related') link(); // all cross-domain linking happens here
      }

      
        
      function trans(){ // each item in a transaction has its own selector and cleaning function.  Specifying selectors gets the values, and this handles the details.  Each transaction type is an extension. ss_gaTrackStandardDonation ss_gaTrackCatalogPurchase
        arg.trans.id.get(); // get the transaction id
        arg.items.get(); // get the items
        arg.trans.total.clean(); // get the total
        arg.eventAmount=Math.round(arg.trans.total.val/1)+''; // add the total for event tracking also (submitting an event ensures the custom var is incremented);
        arg.eventAction='ensureTransCustomVarSubmit';
        arg.queue.push(['_addTrans',arg.trans.id.val,'',arg.trans.total.val,'','','','','']);
        arg.queue.push.apply(arg.queue,arg.items.queue);
        arg.queue.push(['_trackTrans']);
      };
      
      function transItems(){ // get the values for each transaction item
        $(this.selector).each(function(iter){ // iterate over each item to submit.
          var oneItem=this,indivPrice,m=arg.item;
          $.each(m,function(n,itm){if(itm.selector) itm.val=$(itm.selector,oneItem).text()}); // use the specified selectors to get the values
          if(arg.items.parseFn )arg.items.parseFn(m,iter); // do any special mods to them (both the donateok and orderok pages use this);
          $.each(m,function(n,itm){itm.val = itm.clean(itm.val)}); // clean the vals and format them correctly
          m.price.val=(Math.round((m.price.selector? m.price.val : (m.subtotal.val/m.qty.val))*100)/100).toString(); // if an item price is specified, use that, else calculate it.
          arg.trans.total.val += (m.price.val * m.qty.val); // implicitly convert the subtotal to num and increment the total
          arg.items.queue.push(['_addItem',arg.trans.id.val,m.sku.val,m.name.val,m.category.val,m.price.val,m.qty.val]); // add the items to the queue
        })
      }
      
      function customVars(){ // handles custom variable CRUD operations
        if ( s.hostname == g.relatedHostnames[0]) { // ensure we only set custom vars on the main domainthe data on the main domain
          var scopes={visitor:1,session:2,page:3}; // create a lookup table for custom var scopes
          $.each(g.customVars,function(name,stor){ // loop over each custom var
            var cookieVal=s.cookie.read(name); // get the custom variable's val
            this.val=this.val||cookieVal; // set the custom variable val to itself, or use the cookie val (that happens the first run on every page) 
            this.update(arg,entry); // run each custom var's update function 
            if(this.val != cookieVal){ // if the val has changed
              s.cookie.write(name,this.val,this.expires); // write the custom variable cookie
              if( (this.gaName+this.val).length > 58) { // check it for length.  If it's too long...
                if(this.gaSlot) arg.queue.push(['_setCustomVar',this.gaSlot*1,this.gaName,'error: '+s.stamp('yr','mo','dy')+' custom var > 58 bytes',scopes[this.gaScope]*1]); // write the error to the custom variable in place of the normal value (still retained in the stc cookie), so we can figure out how we want to handle it depending on what data it happens with
                console.debug("custom variable " + this.gaName+ " >58 chars.",'val-' + this.val);//a custom variable\s value + name can be 58 bytes or less. "+arg.storageKey+"'s combined length is The value of '+this.gaName+' is'
              } else{  // else if it's okay
                if(this.gaSlot) arg.queue.push(['_setCustomVar',this.gaSlot*1,this.gaName,this.val,scopes[this.gaScope]*1]);
              }
            }
          })
        }
      }
      
      function actionChooser(){ //- determine whether to submit an event or vpv based on arg.type.  Event is default.  Meh.  Dislike this fn name.  Hmm...
        var label=arg.eventLabel,
        action=arg.eventAction,
        category=arg.eventCategory,
        lastArg=arg.page,
        pv = ['_trackPageview'];
        
        if (arg.type=='vpv'){ // if vpv, push the vpv using event params for consistency
          pv[1]=(arg.vpv0 + label + arg.vpv1 + action + arg.vpv2 + category + arg.vpv3 + lastArg + arg.vpv4);
        }else if(arg.type=='init'){ // add a virtual page if one exists
          if(arg.page)pv[1]=arg.page; 
        }else{
          pv[0]='_trackSocial';
          if(arg.type!='social'){
            pv[0]='_trackEvent';
            lastArg=Math.round((arg.eventAmount*1)||0);
          }
          pv.push(category , action , label , lastArg);
        }
        if(gwo.encounteredTests) gwoPathCheck((label==defaults.eventLabel? (arg.page||s.href) : label));// check for gwo path check successes
        arg.queue.push(pv);
      };
      
      
      function gwoPathCheck(testLoc){ // loop over goal success criteria defined in the test object and compare to any passed string
        $.each(gwo.encounteredTests,function(name,obj){
          if(testLoc.indexOf(obj.goalTest)>-1) submitGwoVals(name,obj,'gwoConversion','/goal'); // if this path contains the goal test string, submit a 
          if(testLoc.indexOf(obj.versionTest)>-1) submitGwoVals(name,obj,'gwoView','/test'); // if this path contains the version test string, submit a test
        });
        
        function submitGwoVals(name,obj,conv,suffix){
          arg.gwoQueue.push(['_trackPageview',obj.key+suffix]); //submit the test/goal page
          arg.gwoFullDataQueue.push(['_trackEvent',conv, name, obj.versionStr, arg.eventAmount||0]); // submit an event with detailed data and include transaction/event amount if there is one
        }
      };

      // creates a g.trackers tracker name for each UA # in g.profiles
      function setTrackers(){
        g.trackers={};
        $.each(g.profiles,function(baseName,uaSArray){
          g.trackers[baseName]=[]; // holds dynamically created tracker names. e.g., ['main0.','main1.',etc]
          $.each(g.profiles[baseName],function(iter,uaNum){
            var name=baseName+iter+'.'; // create the tracker name
            g.trackers[baseName].push(name) // add it to the array of tracker names
            _gaq.push([name+'_setAccount', uaNum]); // set each account
            if(s.ga_gwo.debugQueue) s.ga_gwo.debugQueue.push([name+'_setAccount', uaNum]); // push them on the debug array
          })
        });
      };
      
      
      function submitQueue(){// submit the queued commands to each tracker
        var trs=g.trackers;
        submitQueueForOneTrackerType(trs.main,arg.queue); // always submit main tracker
        
        if (arg.gwoQueue.length) { // if there are commands in the gwoQueue
          if(arg.type=='init') {submitQueueForOneTrackerType(trs.gwo,arg.queue)}; // submit all data to the gwo profile to ensure we get the account configurations
          submitQueueForOneTrackerType(trs.gwo,arg.gwoQueue); // submit the test submissions to the the full data queue also 
        }
        if (trs.gwoFullData) { // if the gwoFullData tracker exists in ga_gwo.trackers (created from ga_gwo.profiles) 
          submitQueueForOneTrackerType(trs.gwoFullData,$.merge(arg.queue.slice(0),arg.gwoFullDataQueue)); // merge the gwoFullDataQueue array into a copied queue array and submit those  
        }


        function submitQueueForOneTrackerType(trackerNamesArr,qu){
          for (var track,newCommandArray,t=0,taLen=trackerNamesArr.length,qLen=qu.length; t<taLen;t++) {
            for (track=0;track<qLen;track++) {
              newCommandArray=qu[track].slice(0);
              newCommandArray[0]=trackerNamesArr[t]+qu[track][0];
              window._gaq.push(newCommandArray);
              s.ga_gwo.debugQueue.push(newCommandArray); // TODO remove this once done testing
            }
          }
        }
      }
      

      function link(){ // Handles cross-domain linking
        if(el.target=='_blank') {
          _gat._getTrackerByName('main0')._getLinkerUrl(el.href); // tracker is 'main0' and not 'main0.' here since ga stores it that way
        } else{
          _gaq.push(['main0._link',el.href]);
          entry.eventObj.preventDefault(); // used in place of return false to prevent the click action
        }
      }
      

      function incrementPageLoadCookie(){ // increment page load counting cookie
        var plCookie=s.cookie.read('ss_gaPageLoads');
        if(plCookie){
          plCookie=plCookie.split('|');
          plCookie[0]=parseInt(plCookie[0])+1; // increment the counter
          g.lastPage=plCookie[1];
        } else{
          plCookie=[1,s.href];
        };
        if(s.href!==g.lastPage) s.cookie.write('ss_gaPageLoads',(plCookie[0]+'|'+s.href)); // if we're on a different page, write the cookie
      };

    },

    
    ss_spineTutorial:function(arg,entry){
      $.ajax({url:s.urls.spine_tutorial,cache:true,dataType:'script'});
    },
    
    
    ss_virtualDevServer:function(arg,entry){ 
      $(this).prepend('<div id="devCookieVals" style="position:fixed;left:0;top:0;z-index:1000;"><span style="background-color:#777;color:#DDD">Dev Files Loaded:</span> '+s.cookie.devEnv+'</div>');
    },
    
    
    ss_grid:function (arg,entry){ // create a grid of divs
      var el=this,
      $el=$(el),
      defaults={
        rows:5,
        cols:5
      },
      opts=$.extend({},defaults,arg),
      rowCount=opts.rows,
      colCount=opts.cols,
      $div=$('<div/>'),
      $row=$div.clone();
      for (;colCount--;) $row.append($div.clone());
      for (;rowCount--;) $el.append($row.clone());
    },
    
    
    ss_gridDates:function(arg,entry){ // add numbers and date headers to cells  ... TODO incorporate this into ss_grid
      var $el=$(this),
      $datebar=$('<div />'),
      $cell;
      if(arg.populate) {
        $el.find(arg.populate).each(function(){
          $cell=$(this);
          $cell.append($datebar.clone().addClass('date-bar').text($cell.index()));
        });
      }
    },
    
    
    ss_pageKittens:function(arg,entry){ // add a kitten image to specified elements
      var kitties=arg.n,
      $el=$(this),
      defaults={
        n:0,
        w:80,
        h:60,
        g:true,
        populate:false
      },
      opts=$.extend({},defaults,arg);

      if(opts.populate){
        $(this).find(arg.populate).append('<img src="'+'http://placekitten.com/' + (opts.g ? 'g/' : '') + opts.w +'/' + opts.h +'" />');
      }
    },
    
    
    ss_guessLinkType:function(arg,entry){
      var el=this;
      arg.linkType = el.protocol=="mailto:"? // mailto is link protocol?
        'mail':
        s.AinB(s.ga_gwo.downloadFileTypes,el.href)? // is one of the download types in link path?
          'download':
          el.protocol=='javascript:'?
            'javascript':
              s.domain == s.getDomain(el)?  // on the same domain?
                'internal'://yes, internal
                s.AinB(el.hostname,s.ga_gwo.relatedHostnames)? // no... is it a related domain?
                  'related': // yup;
                  'external'; // no.  external
    },
    
    ss_linkAffordances:function(arg,entry){
      var $link = $(this).ss_guessLinkType(arg,entry);
      switch(arg.linkType){
        case 'download':
          if(s.AinB('.pdf',this.pathname)) $link.addClass('pdf-right');// index of pdf?
          break;
        case 'external': // fall-through
        case 'related':
          $link.addClass('ext-right')
          break;
      }
    },
    
    ss_changeOpacityTo:function(arg,entry){ // provide an explicit property interface for the fadeTo function
      var defaults={
        speed:500,
        opacity:.9
      },
      opts=$.extend(defaults,arg);
      $(this).fadeTo(opts.speed,opts.opacity);
    },

    ss_gaEcommerceSuccess:function(arg,entry){
      arg.trans.id.selector='#trans-id';
      arg.items.selector='#trans-items .item';
      arg.item.sku.selector='.prod-id';
      arg.item.name.selector='.item-name';
      arg.item.qty.selector='.item-qty';
      arg.item.subtotal.selector='.item-subtotal';
      arg.items.parseFn=function(item,iter){
        arg.trans.id.val=arg.trans.id.val.replace(/.*(Random\d+)/,'$1');
      };
    },
    
    ss_gaPagePart:function(arg,entry){
      var el=this,
      parts = {
        elemClass:function(){
          arg.eventCategory = 'class';
          arg.eventAction = entry.on;
          arg.eventLabel = $(this).attr('class').replace(/.*track_([\w\d\-]+).*/,'$1');
        },
        elemLink:function(){
          arg.eventCategory = arg.linkType;
          arg.eventAction = entry.on;
          arg.eventLabel = el.hostname+el.pathname;
        }
      };
      return parts[arg.part]()
    },
    
    ss_gwoTriggeredPlugin1:function(arg,entry){
      $(this).css({color:arg.variation}).text(('Section: '+arg.section +'   Variation: '+arg.variation+'.    (Set by function '+arg.testFn+' )'));
    },
    
    ss_gwoTriggeredPlugin2:function(arg,entry){
      $(this).css({color:arg.variation}).text(('Section: '+arg.section +'   Variation: '+arg.variation+'.    (Set by function '+arg.testFn+' )'));
    },
    
    ss_gwoTriggeredPlugin3:function(arg,entry){ // multivariate test example function
      $(this).css({color:arg.variation}).text(('Section: '+arg.section +'. . . . Variation: '+arg.variation+'. . . . (Set by function '+arg.testFn+' )'));
    },


    
    ss_debugQueue:function(arg,entry){ // analytics debugging
      var $b=$('.entry-content'),
      $cont=$('<div id="debug-queue"/>'),
      $div=$('<div class="gaq_arrays" style="margin-left:20px"/>');
      $cont.empty().hide().prepend("<hr /><h3>_gaq.push()'d command arrays on this page.</h3>");
      $.each(s.ga_gwo.debugQueue,function(idx,arr){
//        if(i<3&&s.AinB('_setAccount',arr[0])){
//          arr[1]= arr[1].replace(/\d/g,i+1);
//        }
        $div.clone().text(arr.toSource?arr.toSource():arr.toString()).appendTo($cont);
      });
      $b.after($cont);
      $cont.fadeIn();
    },
    
    ss_googleLoad:function(arg,entry){
      var argObj=arg.api ? arg : {api:arg},
      template={
        version:1,
        params:{
          callback:entry[argObj.api+'Init']
        }
      },
      defaults={
        earth:template,
        feeds:template,
        maps:$.extend(true,{},template,{version:3.1,params:{other_params:'sensor=false'}})
      },
      options=$.extend(true,{}, defaults[argObj.api], argObj);
      if(google[options.api]) return; // prevent weird google.load quirk where it randomly and infrequently runs twice. (google.maps should not be defined before google load runs) 
        
      google.load(options.api,options.version, options.params);

    },
    
    ss_jsonMapsTutorial:function(arg,entry){
      var el=this,
      $el=$(el);
      
      entry.mapsInit=function(){ // mapsInit function called by ss_googleLoad when it runs after this function.
        var rows = entry.files[1].returnedData.rows, // shortcut for the JSON data
        mapOptions={ // set map options
          zoom: 11,
          center: new google.maps.LatLng(41.83, -87.68),
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl:false, // disable various controls
          zoomControl:false,
          maxZoom:11, // keep the zoom at appropriate distance
          minZoom:11, // keep the zoom at appropriate distance
          overviewMapControl:false,  // remove various controls...
          panControl:false, // ditto
          rotateControl:false, // ditto
          scaleControl:false, // ditto
          streetViewControl:false // ditto
        },
        map = new google.maps.Map(el, mapOptions), // create a map object
        styledMapType = new google.maps.StyledMapType( // create a new 
          [
            { featureType: 'all', elementType: 'all', stylers: [{ saturation: -99},{ visibility: 'off' }] }, // remove and desaturate all features
            { featureType: 'road.highway', elementType: 'all', stylers: [{ visibility: 'on' }]}, // add highways for reference
            { featureType: 'administrative.locality', elementType: 'all', stylers: [ { visibility: 'on' }]}, // add city names for reference
            { featureType: 'water', elementType: 'all', stylers: [ { visibility: 'on' }, { saturation: 30 }]} // add a little water color to distinguish it
          ],
          { map: map, name: 'chicagoTheftMap' } // name the map
        ),
        wards={}, // create a container for each ward's info
        infowindow = new google.maps.InfoWindow(); // create an infoWindow object to reuse for each ward

        map.mapTypes.set('map-style', styledMapType); // set the map type to the style
        map.setMapTypeId('map-style'); // apply the style
        
        for (var rowNum = 0,L=rows.length,maxTheft=0,minTheft=1e9; rowNum < L; rowNum++) { // loop over each ward's JSON info
          var row=rows[rowNum],
          ward=row.Ward,
          w = wards[ward] = wards[ward]||{centroid:row.geometry_pos, years:[],thefts:[]}; // since we're dealing with multiple years per ward, aggregate them in a single object.
          w.multiYearTotal=w.multiYearTotal||0; // multi-year total starts at 0 
          w.multiYearTotal+=row.Thefts_Total; // and add each year's totals as we loop;
          w.years.push(row.Year); // add the year number to an array
          w.thefts.push(row.Thefts_Total); // add the year's theft total to an array
          if(maxTheft<row.Thefts_Total)maxTheft=row.Thefts_Total; // if this row's total greater than max, set overall max
          if(minTheft>row.Thefts_Total)minTheft=row.Thefts_Total; // if this row's total less than min, set overall min
        };

        
        $.each(wards,function(wardNum,props){ // loop over wards
          
          var wardLatLng = new google.maps.LatLng(props.centroid[1], props.centroid[0]), // set the lat/long 
          totalTheftsPerYearArr=props.thefts[0], // get the original array of thefts for each year
          theftVarianceFrom2003Arr= $.map(props.thefts,function(val){ return val/totalTheftsPerYearArr }), // create an array
          imageSize=28,
          rangeMin='.2',
          rangeMax='1.2',
          seriesWidth=2,
          seriesColor='FFFFFF',
          baseLineWidth=1,
          imageObj={
            chf:'bg,s,67676700',
            chxt:'x,y',
            chxs:'0,000000,0,0,l,000000,FFFFFF|1,000000,0,0,l,000000,FFFFFF',
            chco:seriesColor,
            chds:rangeMin+','+rangeMax,
            chls:seriesWidth,
            chs:imageSize+'x'+imageSize,
            cht:'lc',
            chd:'t:'+theftVarianceFrom2003Arr.join(',')
          },
          imageStr='http://chart.googleapis.com/chart?'+s.objToStr(imageObj,'&','='),
          image = new google.maps.MarkerImage(imageStr,
            new google.maps.Size(imageSize,imageSize), // marker size
            new google.maps.Point(0,0), // marker origin x/y offset
            new google.maps.Point(14, 14)), // marker anchor x/y
          title='        Ward '+wardNum+' thefts:  '+props.multiYearTotal,
          infoWindowChartObj={
            chf:'bg,s,222222',
            chxl:'0:|2003|||||||2010||1:|0|1k|2k',
            chxs:'0,FFFFFF,10,0,_,FFFFFF|1,FFFFFF,10,0,_,FFFFFF',
            chxt:'x,y',
            chbh:'5,0,10',
            chs:'200x100',
            cht:'bvg',
            chco:'DDBBFF&chds=0,'+maxTheft,
            chma:'40,0,10,10',
            chtt:title,
            chts:'FFFFFF,12',
            chd:'t:'+props.thefts.join(',')
          },


          marker = new google.maps.Marker({position:wardLatLng, map:map,icon:image,title:title,zIndex: props.centroid[2]});
          
          if(wardNum==7){ // append a chart image to the legend
            $('#legend-trends').prepend('<img src="'+imageStr+'" width="30" height="30" style="background-color:#61536E;">');
          };


          google.maps.event.addListener(marker, 'click', function() {
            infowindow.setOptions({
              content:'<div class="chart-image" style="width:210px;height:110px;background-color:#222222" >'+
                        '<img width="200" height="100" src="'+
                        'http://chart.apis.google.com/chart?'+s.objToStr(infoWindowChartObj,'&','=')+
                        '" />'+
                      '</div>',
              disableAutoPan:true,
              position:map.getBounds().getNorthEast(),
              pixelOffset:new google.maps.Size(-155,200)
            });
            infowindow.open(map);
          });
          
          google.maps.event.addListener(infowindow,'domready',function(){
            // could remove the shadow with external library infoBubble class at http://google-maps-utility-library-v3.googlecode.com.  This is simpler for now.
            $el.find('.chart-image').parent().parent().parent().siblings().find('img').parent().filter(':gt(3)').hide(); // hide the white pointer
            // infoWindow domready event doesn't wait for the shadow, so manually wait for it
            setTimeout(function(){$el.find('img').filter('[src*="iws"]').hide()},500); // hide the shadow
          });
          
        });

        var layer = new google.maps.FusionTablesLayer({
          clickable:false,
          query: {
            select: 'geometry',
            from: '1758534'
          }
        });
        layer.setMap(map);
      }
    }
  }); // end plugin factory
  
})(shoestring,jQuery);