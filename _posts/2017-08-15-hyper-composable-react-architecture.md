---
title: Hyper-Composable React Architecture
comments: true
layout: post
tags: [javascript, software]
---

Note: This is an initial draft posted on my blog but not on medium, to share for feedback and because some folks have asked.  There are probably grammar, clarity, and other issues.  Feedback appreciated.


## Composing Dinner.  Then Software.
Think about composing dinner.  That is, combining ingredients into a meal.  Maybe you just got home from work.  Ever decide you're too tired?

What if you had a food replicator you could talk to?  "Replicator, make me rosemary garlic chicken, mashed potatoes, and steamed asparagus."  Poof!  Dinner!  Done!

Easier.  Right?

Why?  What makes meal composition via replicator more efficient than manually composing ingredients?

Each step of dinner composition involves deep [dependency graphs](https://en.wikipedia.org/wiki/Directed_graph) of action/decision sequences.  Planning meals. Acquiring ingredients (including travel). Merging new ingredients into home stashes.  Preparing.  Combining.  Cooking.  Plating...  Navigating all those graphs to compose a meal takes significant time and effort.

By contrast, the replicator composes atoms into the desired structure at the desired moment.  Assuming the atoms are piped in like natural gas, electric, and water are in US cities today, the dependency graphs are shallower.  No ingredients, no travel, no store, no fridge, no stove, no waiting, no effort.  Chicken. Mashed potatoes. Asparagus. Bam!

Composing food directly from atoms eliminates a huge amount of time and effort from dinner composition.  Can we gain similar efficiencies by applying the concept to UI composition?

TL;DR.  [Initial prototype](https://github.com/a-laughlin/hyper-composable-ui-architecture-demo) looks promising.  For its concepts in greater depth, read on.  

## UI Atoms
Dinner requires real atoms.  Carbon.  Nitrogen.  Oxygen.  User interface atoms are more conceptual: 
- HTML Elements: `div, span`
- HTML Attributes : `name, type, style`
- Styles: `width, height, background-color`
- Files: `index.html, .styles.css`
- Directories: `usr, bin, System`
- Event Hooks: `onclick, onchange`
- States: `doorStatus = 'open!'; doorStatus='closed!';`
- Behaviors: `alert, myFunction`
- logic: `if, else, and, or`
- Data: `'hi!',  1`
- [Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures): `[],{}` 

## Composing UI Atoms - Current 
Each connection (aka couple) between atoms creates a dependency graph.  What are some common ways we pre-couple UI atoms into deep dependency graphs?

- Elements to Elements `<div><span><img /></span></div>`
- Elements to Attributes `<div name='cheeky'></div>`
- Event Hook Attributes to Behaviors `onclick="()=>...doStuff..."`
- Nested directories to each other and files `/app/components/reusable/buttons/red-button.js`
- Nested object keys`blog.author.posts[3].comments[4].author.name`
- Nested prototypes `class Dog extends Animal{noise='woof!' woof(){alert(this.noise)}}`
- Prototype chains, `const dog = new Dog(); setTimeout(dog.woof,0)`
- Scope chains `const fun = (outerVar) => (innerVar) => return {outerVar,innerVar};`
- Function arguments `function ab(a,b){return a.map(b);}`
- Browser url and api endpoint paths `http://example.com/a/b/c`
- Logic order `if x or y then a else b`
- Variable definition order `line 10: a('hi!')` `line 20: const a = window.alert;`
- CSS Selectors to nodes, attributes, classes, `div > span` `.class-a .class-b` `input[type=text]`
- CSS selector ordering
- CSS selector specificity
- CSS selectors to `<style>` elements, or `<link>` Elements to href attribute to files and directories
- Abstractions and indirections create their own graphs, which we must traverse when we forget what's underneath, or need to learn it the first time, or have a bug.
- JS Data structures (both developer-accessible and built in): arrays, objects, sets, maps, scope chain, prototype chain
- ...

// Event propagation(i.e.bubbling) is another dependency graph where it's common to couple business logic,conditionals, and event handlers.
// visualize with 3 side-by-side files, html, css, js

There are many.  As a general rule, you can tell a dependency graph is at work when changing two atom positions breaks your code. e.g., `woof.dog() == error`.

## Composing UI Atoms Replicator Style - Potential Principles
- Couple all atoms at the point of use.  Pre-composing atoms like `element>element`, and `element>attribute` in one place, then requiring them in another, creates abstraction and file dependency graphs.
- Avoid tools/languages that encourage coupling atoms separately from that point.  This includes CSS selectors and their many interwoven graphs, as well as JSX and other forms of html templating[1] that encourage pre-coupling `elements>elements`, `elements>attributes`, `elements>handlers`.  While not strictly necessary, this is a [#pitOfSuccess](https://blog.codinghorror.com/falling-into-the-pit-of-success/) principle.
- Choose the smallest non-overlapping unit to start coupling on.  Starting with a unit like "page" is a huge conglomeration of dependency graphs.  The demo starts with string components like 'div'.  Originally I started with Stateless Functional Components, but then gave them up due to props abstraction graph, and the scope chain and JSX's enabling of other dependency graphs.  There's nothing you can do to a string element to couple it to anything else, so it's a great candidate.  Again, pit of success.
- Prefer Higher Order Component [(HOC)](https://facebook.github.io/react/docs/higher-order-components.html) composition over passing props.  Props encourage abstraction and logic dependency graphs within the component, [resulting in component bloat](https://medium.com/walmartlabs/building-react-components-for-multiple-brands-and-applications-7e9157a39db4) and more time to design/debug/maintain. In the demo, each 'div' component gets all its attributes, styles, data, children, logic, and any other needs from composing it with HOCs.
- Flatten flattenable graphs e.g., [in redux state](http://redux.js.org/docs/recipes/reducers/NormalizingStateShape.html#relationships-and-tables) `authorBooks` vs `author.books`, or use graphQL to query just the data a component needs vs jumping through hoops of sequentially querying (one graph) multiple endpoint urls (more graphs) and merging their data (yet more graphs).
- Couple to names over structures (and turn unflattenable graphs into names).  e.g., with Ramda's lenses, or npm's mojo that enables `require('react')` vs `require ../../node_modules/bin/react/.../react.js`.  Also, coupling to a redux state key is more flexible than passing data directly to them, since it has shallower graphs, and can make components standalone.
- Compose logic functions instead of creating a deep imperative control flow graph, with functions like `cond`,`ifElse`,`and`,`or`.  I can't link directly to [Ramda's docs](http://ramdajs.com/docs/) categories, but clicking one of the functions with "Logic" next to it yields some example functions.
- Flatten file structures.  As humans, we tend to think hierarchies make things simpler.  It's a form of abstraction that works well when information is naturally hierarchical.  UI components are not naturally hierarchical.
- Eliminate non-presentational HTML elements.  In the demo, there's no distinction between presentation and container components.  All components are presentational, with behavior or data HOCs as needed.
- Keep functions pure, to avoid creating scope and prototype chain graphs.  Better yet, prevent the possibility of creating dependency graphs by not creating functions in components.  The demo has very few, and then usually for example or where I was unsure how to do something cleanly without creating a function.
- Function argument order: cap all functions at 0 or 1 arguments, so there is no order dependency
- Eliminate CSS selectors' many graphs by composing Styles directly with Elements.
- Every REST url and returned data structure are their own graphs.  Wrapping them with GraphQL eliminates many.
- Increase your threshold for duplication.  I write this hesitantly, as it goes against my DRY sensibilities.  That said, duplication primarily causes problems when we duplicate multi-node dependency graphs.  For example, `setTimeout(dog.woof,0)` fails because we duplicated the 3 node `window.dog.woof` graph without duplicating the `window.dog.noise` graph.  Imagine taking simple code like `compose(multiplyBy5,add1)(1)`.  Let's say you use it 10 times, so you save a reference to it :`const add1Times5 = compose(multiplyBy5,add1);`.  In place of two clear 1-deep graphs and a compose function, you now have a 2-deep operations order dependency graph, a 2-deep execution order graph (if defined in that file... 3 deep if defined in another file), and you're creating a new name to learn where there was none before.  Abstraction -feels- like decreasing complexity in the moment, while actually increasing complexity in the system.  As long as there are no partial dependency graphs possible, duplication + multi-file find/replace is likely faster to change than any abstraction.
- Avoid object-oriented and imperative code when possible.  In JavaScript, functional dependency graphs tend to be broad but shallow - 1-2 deep, while OO and imperative dependency graphs tend to be 3+ deep.  Imperative code encourages n-deep logic and execution order graphs.  In OO code, each `window.dog.woof` is a 3 deep graph dependent on the n-deep prototype chain.  OO's concept of 'methods' also often combines it with the imperative approach, making 3 deep references that depend on other 3 deep references, plus n-deep logic and execution order, plus the n-deep prototype chain.
- Make your components [stars](https://en.wikipedia.org/wiki/Star_(graph_theory)), not trees, where each atom is a node, and composes together atom-type-specific arguments.  For example, `withStyles` composes together styles in the demo.  

## Demo Implementation
While the principles may seem long, shallow graphs' simplicity results in implementation simplicity.  From the [demo readme](https://github.com/a-laughlin/hyper-composable-ui-architecture-demo/blob/master/README.md):  
1. Start with string elements. `'div'`.
2. Wrap them in compose. `const Div = (...HOCs)=>compose(...HOCs)('div');`
3. Add React Higher Order Components for attributes, styles, behaviors, data, and everything else
  - Children via `withItems`
  - Styles via `withStyles` and `withItemContextStyles`
  - Events via `pipeClicks`, `pipeChanges`, etc.
  - Redux data via `withReduxData`
  - GraphQL data via `withGQLData`
4. Sprinkle some lodash/fp and recompose
5. That's it!

## Benefits?
**Flexibility**: Easily the most flexible architecture I've ever used.  You can swap out any part.  Often flip parts around.  Whatever.  That's a key benefit of shallow dependency graphs.  Once I was well into the demo, I realized that even React was swappable.  
**Debuggability**: Starting a component with 'div' means zero dependencies possible.  Once you know your utility functions, there are almost no lookups to other files.  All the problems are created and resolved right in front of you. I can't stress enough how awesome and fast that is.  While the demo is a contrived and simple example, I've been amazed how few bugs I've had using this architecture, and how fast tracking them down has been.  
**Learnability**: Few abstractions means little to learn.  
**Reusability**: Almost everything is reusable.  To the point of it being daunting without criteria for when/where/how to reuse things.  I don't believe pre-composing across atom types is a good idea.  I do think there might be some potential within atom types, though I'm unsure which ones, or what my criteria for success is.  See the [Reusability - Toward a Calculation]() section.  
**Testability**:  Super, super testable.  To start, `'div'` has nothing to test.  From there, every utility function is exported.  Most are one-liners.  Every component exported.  Any HOC is testable individually too.  
**Reliability**:  Dependent on test quality.  
**Portability**:  The flat DOM structure and Flexbox-based styling means a potentially fast transition to React Native.  Haven't tested.  
**Understandability**:  Shallow graphs are easier to understand than deep ones.
**Changeability** (aka Modifiability aka Maintainability): This is a rollup system quality attribute.  Factors like flexibility, testability, and understandability all contribute to fast changes.
**Productivity**:  Building new components is fast.  Really fast.  No file lookups.  No stylesheet lookups.  Once you know the basic tools like colors and utility functions, you can just go.
**Value**: All of these qualities directly increase potential value to organizations, teams, and users.  Potential, because the software has to be useful too!

## Tradeoffs?
**No Visual HTML**:  In the demo, each HTML element is a separate component decoupled from all others, so it doesn't look like HTML.  It took getting used to.  
**No CSS selectors**: (except for pseudo-selectors) was the most difficult transition.  Your experience with the demo may be different.  I found it really frustrating to express what I wanted at first.  However, that was before I wrote the withStyles HOCs, and before I realized the distinction between styles and context-specific styles (e.g, it doesn't make sense for children elements to apply their own outer margins).  I now spend less time planning and debugging styles than I did with separate CSS files + class names + selectors.  Their extra dependency graphs simply slow development.  
**High Signal Density**: High code signal to noise ratio can feel really dense.  Demo components are often under 100 characters.  I've gone back and forth between 1-lining and many-lining those components.  Multi-line format is slow to visually scan in a long multi-component file, but faster to debug and modify when working on just one.  I prefer one-lining them in a multi-component file like the demo, and will likely multi-line them in separate files in a real application.  
**Naming/Categorizing Functions**: When there are no structures to imply that a name belongs to some parent category, the classic FP tiny functions dilemma arises.  Deciding function names and if/how they should be categorized for learnability is a challenge.  From what I'm seeing so far, the lodash and ramda categories are probably sufficient for utility functions, with an additional category of HOCs.  
**Performance.  Maybe?**:  I'm not actually sure if performance will be worse or better with this setup.  Shallow dependency graphs might eliminate performance bottlenecks that come from overall system complexity.  Even if performance is worse with many HOCs, I'll trade some performance for developer productivity any day.  It's usually more valuable to build things fast then tweak for performance, than the other way around.  Especially when there are requirements miscommunications.  If performance is an issue, you can also use other HOCs like Recompose's `shouldUpdate` to control rendering.  
**Dev Tools Styles Awkwardness**: Dev tools aren't designed to work with Styletron's 20 tiny class names per element on a dynamically generated stylesheet.  I'd like it to be a little better, so I can edit them in dev tools.  However, it isn't a huge deal.  Why?  Because debugging only matters when you have bugs.  Now that I compose styles directly with elements, they usually just work.  I'll take no bugs over a good debugging experience any day.  Styletron is awesome for that.  I'm amazed how well it works.  
**Devt Tools React Awkwardness**: React dev tools don't seem to be designed for 2-10 HOCs per element.  The Chrome Dev Tools Elements Panel tree is fairly flat, while the React Panel's tree is super deep.  I'm unsure if something else could make the experience better, or even if it needs to be better.  


## Reusability - Toward a Calculation
When every component is reusable, deciding when and how to reuse them becomes paramount. Reuse adds dependency graphs... which add complexity costs...  But how much?  I want to get a more quantifiable answer than individual preference.

Cyclomatic Complexity (`Edges - Nodes + (2 * Predicate Nodes)`) is inadequate.  Most graphs lack predicate nodes.  Cyclomatic Complexity also doesn't account for human cognitive limitations when dealing with temporal and/or deeply nested graphs, especially when the two interact, and state is involved.  Or when parts of graphs can be passed around, like passing `dog.woof` without passing the prototype chain.  

This article is getting long enough, so I'll stop on this topic with a back-of-the napkin calculation as food for thought.  Accounting for cognitive and language complexity with `!`, the complexity of any one graph is `(ds)!`, where `d` is graph depth, and `s` is the number of atom types involved.  The definition of "one graph" is a separate question.

Have better measurement ideas?  Speak up in the comments!

## Definitional Challenges
While the "shallower graphs improves composability" idea is consistent throughout the article, my specific examples of graph depth are inconsistent due to unresolved definitional questions.  Are branches considered separate graphs?  Are connections between atoms like `x-x-y-y-z-z` one 6-deep graph, three 2-deep graphs and one 3 deep graph, or both, or...?  More concretely, should `foo(a,b)`'s dependency graph, include a 2-deep arguments order graph, as well as `import {foo} from './bar'`, which includes 2 deep object property and directory structure graphs?

Those questions are low importance when considering the overall concept and demo, so I haven't settled on exact definitions.  However, I could see them being useful in discussing different architectural decisions.  They're also important for quantifying reusability.  Also for creating examples like in this article, thus inconsistency in some examples' depth numbers.

## Closing Thoughts.
If you've made it this far, thanks for reading!  Hope you find the concepts valuable!

If you get a chance to play with [the demo](https://github.com/a-laughlin/hyper-composable-ui-architecture-demo), feedback appreciated, especially on reusability and quantifying complexity.

## Related
- [Higher Order Components](https://facebook.github.io/react/docs/higher-order-components.html) (HOCs)
- [Single-prop HOCs](https://www.okgrow.com/posts/compose-react-sphoc).
- [lodash/fp](https://lodash.com/docs/) Workable if you're already familiar with lodash.  Lacking actual documentation for fp function versions.
- GraphQL via [apollo client](http://dev.apollodata.com/)
- [Redux](http://redux.js.org/)
- [Lessons learned](http://www.a-laughlin.com/high-value-javascript-1/) that inspired thinking deeply about the nature of coupling, decoupling, and value, and ultimately led to this architecture.
- [Recompose](https://github.com/acdlite/recompose/blob/master/README.md) and [recompose performance](https://github.com/acdlite/recompose/blob/master/docs/performance.md).
- Really great article on [component CSS styling](https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660).  It's what got me to try Styletron.



[1] While JSX is technically a spec, and its implementation is usually a wrapper around createElement, it is a wrapper that encourages inflexible element/handler/attribute couplings.
