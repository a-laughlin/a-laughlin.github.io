---
title: ROI-Optimized React
comments: true
layout: post
tags: [javascript, software, draft]
---

## Article Audience
React Devs at various levels.



<p><a href="https://commons.wikimedia.org/wiki/File:Train_coupling.jpg#/media/File:Train_coupling.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Train_coupling.jpg/1200px-Train_coupling.jpg" alt="Train coupling.jpg"></a><br>By <a href="//commons.wikimedia.org/wiki/User:Dschwen" title="User:Dschwen">Daniel Schwen</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=4784168">Link</a></p>

>    Key takeaway. Code coupling dependency [graphs](https://en.wikipedia.org/wiki/Directed_graph) are subtle, prolific, and expensive to maintain.  Avoid them by default. Create them only when team and/or code performance quantitatively justify it.

A large contributor to front-end code ROI is changeability.

>  **Changeability** How fast can I make an error-free change to this code?

Changeability is similar to other [software quality](https://en.wikipedia.org/wiki/Software_quality) [attributes](https://en.wikipedia.org/wiki/List_of_system_quality_attributes) like maintainability. I prefer changeability because its simplicity makes it easier to remember when committing code.  Its concreteness also more intuitive when reasoning about metrics (e.g., [cost per change]()).

Experience has taught me that one of the fastest ways to improve changeability is by reducing unncessary code dependency graphs.  Toward that end, this article has three primary purposes:
Identify a set of front-end web application concerns
Identify how they can be coupled
Identify common coupling-created dependency graphs and their subsets that optimize changeability+ROI



## What concerns can be coupled?
Concerns in this case are functionally distinct code entities.  Opinions vary on what constitutes concerns.  I also likely missed some since these are off the top of my head.
- CSS Selectors: `foo, .foo, [foo], #foo`
- Style attributes: `width:10%; background-color:#ccc;`
- (Conceptual) Object: `{}, function lexical environment, window, document, DOM node, HTML element, React Element, React Component`
- Object keys/values : `name, type, style, hidden, checked, onclick, onchange`
- list values: `[a,b], (a,b)=>{}, ([a,b])=>{}`
- Conceptual Location: `cookie, localstorage, server, directory, file, endpoint http://example.com`
- States: `loading, loaded, error`
- Behaviors: `alert, logInUser()`
- Names: `var foo; .grey-button {}`
- Data: `1, 'hi@example.com'`
- Logic: `if, else, and, or`
- Types: `string, number`
- Time: `millisconds, seconds`
- IO channel: `web socket, HTTP POST/GET`

## How can can concerns be coupled?
Opinions also vary on what constitutes coupling[2]. For simplicity, clarity, and a foreseeable end to this article, there are two ways.  Reversing either breaks things:
### Spatial Order
- foo=1 vs 1=foo
- function foo(a=[],b=1)=>[...a,b].  foo([],1) vs foo(1,[])
- dog.age vs age.dog
- 1-2
### Temporal Order
- submit password then be logged in
- load HTML document then load its `<script src=""> tags`
- define foo(){}. Call foo().
- Promise().then().catch() (both spatial and temporal)

## Common Concern Couplings? (and ROI-optimized Subsets)
The above concerns enable infinite possible coupling permutations.  My aim for this section is to evaluate a common subset found in web application front-ends, and extract a ROI-optimized subset from those.[1]

### CSS Selectors Common Dependency Graphs
I was shocked when I stopped to reflect on how many dependency graphs CSS selectors actually create.
- CSS Selectors to Objects: `div`
- CSS Selectors to Objects to each other: `div a`
- CSS Selectors to Style attribute keys, to values, `div.foo -> <div class='foo'></div>`
- CSS Selectors to attributes, coupling attributes to each other `.foo {width:10%;background:#ccc;}`
- CSS cascade creates a graph
- CSS specificity creates a graph
- CSS Grid and Flexbox create parent-child HTML spatial order dependencies
- CSS File load order creates a dependency graph
- `<link href="a/c.css">` (Object > key > value > location > location > Selectors > Objects) 
- The list goes on: `a > .b > #c + [d]   e`

### CSS Selectors ROI-Optimized
CSS selectors themselves do no actual styling.  Their only purpose is to create dependency graphs between stylesheet entities and object entities.  Most are ommitable. Two one-deep graphs stand out as exceptions.
- [Browser-Standardizing Resets](https://cssreset.com/what-is-a-css-reset/)
- Global, un-changing styles (especially those that promote developer productivity e.g., `* {box-sizing:border-box}`)

### Style Attributes Common Dependency Graphs
Absent selectors' `{}`, Style attributes are simply a list of indepenendent keys with the exception of:
- Style Attributes > Objects (HTML Elements) > Style Attributes: The one-deep parent-child CSS Grid and Flexbox dependencies
- Style Attributes > States: e.g. browser-builtin state-tracking pseudo selectors like `:link, :hover, :visited, :active`

#### Style Attributes ROI-Optimized
- Style Attributes to Object (React Component)  i.e. CSS in JS
- [Resets](https://cssreset.com/what-is-a-css-reset/).
- Global un-changing styles `* {box-sizing:border-box}`
- browser-builtin state-tracking pseudo selectors like :link, :hover, :visited, :active`. Unless doing something special with these states' styles, maintaining alternate behavior in js is probably more expensive to maintain
- The one-deep parent-child CSS Grid and Flexbox dependencies.  The productivity benefits of using them outweigh the cost of the one-deep graph they require. Also, the dependency is only on spatially coupled HTML elements, not additional css selector coupling, so they work fine with CSS in JS.

** START **
- (Conceptual) Object: `{}, function lexical environment, window, document, DOM node, HTML element, React Element, React Component`
- Object keys/values : `name, type, style, hidden, checked, onclick, onchange`
- list values: `[a,b], (a,b)=>{}, ([a,b])=>{}`
- Conceptual Location: `cookie, localstorage, server, directory, file, endpoint http://example.com`
- States: `loading, loaded, error`
- Behaviors: `alert, logInUser()`
- Names: `var foo; .grey-button {}`
- Data: `1, 'hi@example.com'`
- Logic: `if, else, and, or`
- Types: `string, number`
- Time: `millisconds, seconds`
- IO channel: `web socket, HTTP POST/GET`
** END **
<!-- jsx -->
- Locations (React/HTML/DOM elements to each other) `<div><span><img /></span></div>`, `<span>Some Text</span>`
- Elements to Attributes/Properties keys `<div class></div>`, `<input checked />`
- Attribute keys to values`<div class='foo'></div>`, `<div onClick={()=>{...doStuff...}}></div>`
All 
<!-- Nesting -->
- Browser urls `http://example.com/a/b/c`
- API endpoints `http://api.example.com/a/b/c`
- Nested directories to each other and files `/app/components/reusable/buttons/red-button.js`
- Nested object keys`blog.author.posts[3].comments[4].author.name`
- Scope chains `const fun = (outerVar) => (innerVar) => return {outerVar,innerVar};`
- Routes `http://example.com/a/b/c`
- API endpoints `http://api.example.com/a/b/c`
- `require('some-module')`
<!-- OO -->
- [JS Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures): `[],{},Map,Set`
- Object to data`{foo:1}`
- Object to behavior `class Animal{ makeNoise(){alert(this.noise);} }`
- Object to state `class Animal{ setNoise(noise){this.noise=noise;} }`
- Object Inheritance (via prototypes in js) `class Dog extends Animal`
- Prototype chains, `const dog = new Dog(); setTimeout(dog.noise,0)`
<!-- Ordering -->
- Logic to Behaviors `if x or y then doA() else doB()`
- Conceptual Logic order `if x or y then a else b`
- Temporal Logic Order `after x then y timeout z`
- Variable definition order `line 10: a('hi!')` `line 20: const a = window.alert;`
- Function arguments `function ab(a,b){return a.map(b);}`
<!-- naming -->

- 
<!-- naming we can't get around -->
- `require('some-module')`

- Concurrency: time+behaviors+logic
- network IO is basically time + location + data + any req/response plumbing
- Data Persistence Duration (UI Component, Session, User... these are sort of time + location)
- UI state: data
- 
<!-- functional -->
- Abstractions: nameA>arguments>nameB property>name>property and indirections
- Documentation
- Component APIs "props" trees
- Component abstractions
- Interfaces to Documentation
- JS Data structures (both developer-accessible and built in): arrays, objects, sets, maps, scope chain, prototype chain
- State Relations: `loading -> loaded, loading -> error`
- Data Relations: `user.name, user.roles`
- Data mutations `user.name=a -> user.name=b`

- JSX `<div>{stuff}</div>`
- ...

## Optimize for Shallowest Dependency Tree that includes all concerns.
No nested elements.
No dynamic attributes.
No OO style objects (eliminates a source of properties, prototype chains, inheritence)
GraphQL - Turns endpoint graph into single url
Mutations, Observables
Observables for time+logic+state.
Global CSS (box-sizing:border-box)
Local CSS (width:50%)

UI is a pure function of data, so data gets all state.

HTML+Data
  Data
    Temporal Logic
    State
    Conceptual Logic (Business)
    Post
  FN:Component
    HTML element ()
    
    Fn:styles
    PropPasser(key)
    FN: Observable
    Fn: OPTIONAL Mutator:Fn(updater(props))
    Fn: Optional Children(key,...childhooks) creates data observables for children, logic for which children, different children for different styles
      
    
## List Graphs

styles flat
component
  - html element
  - child style overrides
  - data hook (read, mutate)
  - logic
styles tree
  - styles
data (tagged list)
styles (tagged list)
logic (tagged list)
data-update-list ( action creators, types, individual flat state updaters, graphql mutations)
data-read-list
  (where data gets composed (e.g., reducers, streams, graphql streams), types)
business-critical-integration-tests (data only, styles can be tested with screenshots seperately if necessary)
composed-components
  (business-styleguided styles)
  (sub-components)
  (passed data read/update key, or )




## Closing
Key takeways for this article are that code coupling dependency [graphs](https://en.wikipedia.org/wiki/Directed_graph) are subtle, prolific, and expensive to maintain.  Avoid them by default. Create them only when team and/or code performance quantitatively justify it.  Hopefully the subset of dependency graphs mentioned have been helpful food for thought.


[1] While many of these concepts apply to server-side js, and even to other languages, this article's primary focus is on front-end code related to a React application.  Explicitly out of scope are couplings between concepts (e.g., person "is a" admin, admin role "has" persons), server side code, directories, library code, and/or documentation.

For the common subset, my focus is structural code dependencies likely to produce front-end js runtime errors or user-visible errors.  For example, substituting `person[0].roles` for `person.roles[0]` might reference an undefined "0" property [1], and substututing CSS selector `ul > li` for `ol > li` might produce undesirable visual effects.[2]

But wait! `person.roles[0]` could be caught by type checking! Well, yes. Valid point. Errors due to mis-remembering nested properties on a dependency graph can be prevented by adding two additional dependency graphs of types and annotations.  The result is three dependency graphs, with the potential for all three to change for one app functionality change.

[2] I believe naming challenges, paradigm differences between OO/FP/Procedural, and semantics like "loose" and "tight" often obscure more than illuminate [coupling](https://en.wikipedia.org/wiki/Coupling_(computer_programming)).  While some can be useful, they all come down to spatial and temporal dependencies.  For this article I also consider Semantic Order like `small < large`, `loading < loaded`, and `1<2` to be spatial or temporal depending on context. For example, [2,1] and [1,2] are both valid spatial orders depending on desired list sort.
