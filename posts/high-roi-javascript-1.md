# High ROI JavaScript Practices that Save your Life and Money

# TOC
* Costs, a story
* Cost breakdown - what's behind them?
* Three rules
  * All Concerns Separate
  * Zero Repetition
  * Zero Couples
* Summary

## Costs
One company I worked at was founded by a couple of great guys who learned javascript (Angular 1) in order to get a prototype product off the ground.  They learned how to program as part of launching the business, so they had neither experience nor formal education.  Yet they were smart and focused and used Angular to produce features at an incredible rate over their first 1.5 years.  The knowledge and experience gaps cranked out technical debt at an equal rate - a normal outcome for new programmers.  They started adding developers.

Assume 80k per year per developer, add 50k for all the benefits, overhead, taxes, etc, for a total of 130k/yr.  There are about 2080 hours per work year in the US, so each hour costs roughly $62.5 USD.

As technical debt increased, mean cost per change increased alongside it.  The code was initially short.  Changes to one "page" (angular template + controller + route) took ~20 minutes.  Rough cost per change ~$20.

By the time I started with the company, the page code had grown to 2500 lines. Bugs abounded in that page and others.  Unexpected things broke.  We spent a lot of time fixing them.  Tests were flaky.  Error prevention processes expanded from a quick functionality test to code reviews, manual testing, better change communication, pre-release team testing sessions, and dedicated QA staffing.

I got curious.  Querying Git showed 500 changes to that page in the last year.  Our current processes placed men time per change ~3 hours of staff time (conservatively).   Cost per change now $187.50.  500 changes per year... That one page cost us 94k/yr to maintain.  That excludes the cost of unhappy customers reporting those bugs, and other staff time, and we had 140 other pages with similar issues.

One page.  1500 hours / $94,000 per year to maintain.  Low-ROI JavaScript practices will your money and your life.

It also has psychological costs.  For example, coupling to changeable (mutable) objects often increases unexpected behaviors (non-determinism).  Unexpected behaviors increase uncertainty, a universal human stressor.  JavaScript technical debt often adds stress for you, your team, and your users.

## How did we get there?
Developer fault?  No.  All devs I've met generally do the best they can given their experience.

Here's what happens when you start to learn JavaScript:
- If you come from an Object-oriented background, you follow OO examples and use OO libraries because they make sense to you.  You find workarounds for JavaScript's OO quirks.
- If you come from a functional background, you follow functional examples and use functional libraries because they make sense to you.  You find workarounds for JavaScript's functional quirks.
- If your background is not programming, no articles make sense yet.  You try to follow guidelines from all articles because they're written by more experienced developers.  You don't know that JavaScript has quirks.  The path to getting stuff done looks something like this:

Article 1: (jQuery) Submit your form with `$('.loginForm').submit()`;
Article 2: (jQuery) Separate concerns is good - separate your data and functions from others' data and functions by namespacing them in an object.  Hmm.  Yes.  Separate concerns.  That sounds worth reading more about.
Article 3: (OO) Separate concerns is good - do it with modules, classes, and objects with data and functions
Article 4: (functional) Separate concerns is good - do it with modules, and objects with data, and functions

A few days later Frankenstein's monster emerges into the web.

What happened?  Well, to start, modules, classes, objects, and concerns worth separating probably meant different things in each of them.

Inexperienced devs learn coding concepts through decades of variable-accuracy articles written by variable-experience developers who come from different paradigms that use ambiguous labels to describe often-conflicting "good" practices, in order to produce quality software in a language that provides its own interpretation of those labels in an effort to support all those paradigms.

Language is messy.


Okay.  Not developer fault.  What is the problem?

To start, I'm struggling to even define the problem without using ambiguous labels.

Let's start at the outcome we want, trying to use the simplest language possible.
Providing People (customers and company staff)
High Return (desires satisfied)
With Low Investment (Time, Energy, Money)

What is necessary for software to provide high return with low investment?

To describe the problem, we need a clear language. One that pulls the highest-roi concepts from the various paradigms, without depending on the paradigm's constructs themselves.

AFTERWARD ... REVISIT THE PROBLEM WITH OUR DEFINITIONS

Return:
People Goals (Customer And Company Staff)
Met with high-quality sofware (usable, reliable)
Produced within constraints (Time, Cost, Scope)

Let's focus on that last part.  I don't have metrics to know what a change can cost, but 50k/file/year seems high.
Through System Quality Attributes(Reliable, Changeable)
Achieved through Principles (No Repetition, No Couples)
Achieved through separating and combining:
Values (instances of a data type)
and
Patterns (two or more values and/or patterns colocated\** for a single purpose).
**(in objects, functions, statements, expressions)

Many things.
A ~1500 line controller function
A ~1300 line logic-filled template
Duplication
Coupling
Zero unit tests.
Low cohesion.
Low modularity.
Tight coupling.
Lots of coupling.

The problem again, is that many of those mean similar things.
Thinking in pages vs components (creating massive duplication as whole pages were copy pasted)
PHP controllers that often had data specifically formatted for each "page".  When the data came back, it would often overwrite preexisting user data, sometimes with differently formatted data.
Migrating our data schema and back-end code to ruby, despite a back-end schema with schema Maintining An effort to move our functional tests to Ruby from JavaScript, which dismantled our that was never really completed.

## Quality
The classic project tension is between time, cost, and quality.  Time and cost are relatively straightforward.  It's important to define what quality means, otherwise it's easy to waste time and cost optimizing for not-yet-necessary quality attributes.  Here are some [common](https://www.infoq.com/articles/atam-quality-attributes) [software](https://msdn.microsoft.com/en-us/library/ee658094.aspx) [quality](https://ewh.ieee.org/r2/southern_nj/BarbacciOct03.pdf) (pdf) [attributes](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.101.5016&rep=rep1&type=pdf) (huge pdf).   What quality attributes are the highest ROI to focus on?

Deployability is important to keep change costs down (think CI/CD), but is only minimally related to JS code design (assuming you're already designing for testability).  The first link groups many into a category called "modifiability", which makes sense to me.  I'm going to use "changeability" to go with a word that's easier to read and say.  Changeability enables you to deliver new features and bug fixes quickly.  Adapting changeable code to provide other attributes is easier than the opposite, so it's a good starting point.  Reliability keeps your users happy with existing features.  Ensuring those two would have solved most of the problems behind the 100k page.

- **Changeability** How fast can error-free system changes be applied?  This includes new features and bug fixes in any part of the system.  A system that is highly maintainable is also composable, reusable, flexible, testable, and understandable.  [Technical Debt](https://en.wikipedia.org/wiki/Technical_debt) and low changeability are equivalent.
- **Reliability** What % of time will all a system's features work as intended?  Metrics like "99.9% uptime" are about Reliability.  Buttons that always do what you expect are reliable.  A reliable system minimizes non-determinism.

Okay.  Changeability.  Reliability.  Optimizing those three will get us code that costs a lot less than $100k/file/year to maintain.  But how?

## Principles

What principles can we use to write the most reliable, maintainable, reusable code with the least time and cost?
We have many [many](https://en.wikipedia.org/wiki/List_of_software_development_philosophies) [programming](https://en.wikipedia.org/wiki/Index_of_object-oriented_programming_articles) [principles](https://en.wikipedia.org/wiki/Category:Programming_principles) to choose from.

Here are my top 3 for JavaScript, in order of priority.
- One Purpose
- Zero Repetition
- Zero Couples
Is the purpose, or any part of the purpose, repeated anywhere else in the system?
Is the structure, or any part of the purpose, repeated anywhere else in the system?
Zero Repetition and One Purpose are achievable, though increasingly difficult as teams grow. "Zero Couples" is an unrealistic but useful ideal.  Its purpose is to establish a precise definition of coupling in JavaScript, in order to combat JavaScript's implicit, and usually abundant, coupling.

## Summary
The next 3 articles will break down One Purpose, Zero Repetition, and Zero Couples
