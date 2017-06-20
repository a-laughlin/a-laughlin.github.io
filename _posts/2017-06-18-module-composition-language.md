---
title: Module Composition Language
comments: true
layout: post
tags: [draft, javascript, software]
---

list < list-items
store < store_extenders
store < store reducers (you have to use redux, can't put anything in between without changing wiring)
event publishing fn > publishers
styles > styleSheetWriter
styles+react < moduleStyles
What do the following have in common?

4. Composing data across REST endpoints (each concept gets its own name, every view requesting data coupled to the endpoint structure/naming, endpoint cannot be changed without breaking view code, merging the same data from different endpoints is done manually, endpoints cannot be removed without breaking the view code)
4. Composing functions across modules (each module gets its own name, each view importing module coupled to the module structure/naming, module cannot be changed without breaking view code, merging the same function from different modules done manually, modules cannot be added/removed without breaking the view code)

The problem I had to solve: How do you make a UI where others can add their modules, or others' modules, without modifying your code?
  1. Composing data from REST API URLs
  1. Components in Nested Directories
  2. All our tables (available via <table> or URL/<name>)
  2. AllAll the columns data in all relational databases (available via <name>/<id>/<related>/<id>) (manual wiring solved with graphql)
  3. List all data for a concept (available via REST via unique <name>/<identifier>)
  5. Composing data with graphQL (one query)
  5. Composing data with ModuleCL (one query)
  3. List of all functions in a module (available via import <module>)
  3. All our function lists (available via npm and unique names)
  3. All the functions in all our modules (available via module.<name>)

Hint. They're all non-hierarchical things we force into hierarchies.

But there's another.
  
  3.  Structures Composing data from REST API URLs -> GraphQL (we compose groups, but not individual data)
  1. Composing modules from directories -> ModuleCL (we compose modules, but not functions)

They both force us to place groups of information


GraphQL
We've gone the step of making our modules into a graph.  Why not go the step of making our functions into a graph?

  - They require us to categorize information hierarchically when creating them
  - They require time-intensive name and concept analysis when information falls into more than one category
  - They require us to learn others' naming conventions and hierarchy concepts to use them
  - Both have endless discussions
  - Assuming that 1 million developers spend 10 hours each year on issues arising from each of them, they collectively cost devs 10 million hours per year
  - They increase coupling - changing the nesting hierarchy breaks code wherever it's referenced.

Why do we spend so much time dealing with this issue again and again?

To include new code, we have to manually wire it in.

We're human. We like hierarchies.  They help us organize information so we can mentally chunk it.  They help us prevent information overload.

These, like Mind Maps and Object-Oriented Inheriance hierarchies, are great when information is hierarchical.  They waste massive amounts of time when information isn't.  When all we have is a hammer, everything looks like a nail.

Which is fine when information is hierarchical.  When it isn't, the costs mount quickly.

## Solutions
For REST API endpoints, a recent solution is GraphQL.
It decouples the information from a hiererachical URL structure.
We create a schema.  We create a query describing the information we want.  We get it.  We don't worry about which server, database, etc it comes from.

What about for file-based modules?  Composable, component-based architectures?
We have to go in and manually connect the parts of the graph we want.  We can't just ask the graph to produce it.
They both require coupling.

We can't comprehend all the relationships in the graph to find stuff.  We just want to ask it for what we need.

Or how do I structure my classes?
What's the issue?
Naming.

The more I think a

Hook We're Human.  Recently, my awareness of how much time we spent I'm becoming increasingly 'The deeper I've gotten, the more I realize how much time we waste trying to force things into hierarchies.
Situations

Causes
Problem
What do these things have in common?  We're trying to force non-hierarchical information into hierarchies.
Solution

Placeholder - to store thoughts on packagecomposer.

API Route hierarchies - graphql
File Structures - keywords
Class heirarchies - objects
Component Heirarchies - graph
think "time wasters", or "religious wars".  We're fighting to simplify.  Files Structures.  API routes.  Class inheritance.

Blog post plus
I could get this working in a day!
Instead of making a UI, I can just use codepen as the UI.  It won't have autocomplete, but that's okay.
get the json files with :
https://unpkg.com/react@15.5.4/package.json
get the regular files from those
https://unpkg.com/pkgql-react@15.5.4/package.json
request the dependencies
combine them

https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346
https://medium.com/@marksoper/clearing-up-react-data-management-confusion-with-flux-redux-and-relay-aad504e63cae

Is the concept worth turning into a repo?
Do you want to see more documentation?

Problems packageComposer solves
How do I structure my folders? (no need to)

What other functions compose with mine?
How do these things compose?
What do these things look like composed?
How quickly can I change composition?
Problems that aren't really talked about yet

PackageQL
Global, evolutionary type system -
Static analysis
Types can compose other types
Tests compose
How diagram composition? (don't)
How do I find all react components on NPM that compose with mine?
How do I find all functions on NPM that take x input?
How do I find all functions on NPM that output x?
How do I find all functions on NPM that do x to x input or output?
How do I immediately see what the output looks like without installing?  (via unpackg)
How can I see what the output looks like in 5 seconds or less?
How do I know whether the code will work with mine?
How do I find all functions on NPM that take the inputs I want and/or output what I want?
How can I tell whether version x of this function will still work with my existing code?

Route hierarchies - graphql
File Structures - keywords
Class heirarchies - objects
Component Heirarchies - graph

Constraints?
Every property name is a type
All things with that type must pass all tests of that type
Any type that happens to be a function can compose other types
No package knows anything about the packages it composes with
// what's the problem?
composition boilerplate

confusing directory structure
time learning new APIs - thinking about different structures to input.
What makes functional programming powerful is that consistent data structures let you do a lot.
We've sort of standardized structures (components), but we haven't standardized the operations we can do on them.
"A design system (as it pertains to tech products) is more than a framework, UI toolkit or component library. It’s more than a style guide or set of code guidelines. It’s even more than the sum of those parts. A design system is an evolving ruleset governing the composition of a product." - [Colm Tuite - How to Construct a Design System](https://medium.com/@colmtuite/how-to-construct-a-design-system-864adbf2a117)

property keys are, in functional speak, types - types with explicit composition behaviors, output targets, and tests
to declare that each output component must be composed of a certain set of types
{style,content,ReactComponent,}
Reduces [coupling](blog link) - coupled only to a declarative composition strategy
// the trees can vary independently .. you don't need to know how createStore's arguments... we're coupling the arguments to a particular order, to the name "createStore", and to a specific data structure `module.createStore`.
By providing a keyed property that isn't tied to a module:
We don't need to know about the module's function name.
We don't need to know how to pass it arguments, or learn the structure of those arguments
We can substitute out a different package with zero code changes.
We can reduce a ton of boilerplate because we don't need to import much or call it.
Forces a single responsibility principle - a funciton with this name must take this input type and return this output type
