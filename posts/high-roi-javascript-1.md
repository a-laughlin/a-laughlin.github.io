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
One company I worked at was founded by a couple of great guys who learned javascript (Angular 1) in order to get a prototype product off the ground.  They learned how to program as part of launching the business, so they had neither experience nor formal education.  Yet they were smart and focused and used Angular to produce features at an incredible rate over their first 1.5 years.  The knowledge and experience gaps cranked out technical debt at an equal rate - a normal outcome for new programmers.  As technical debt increased, mean cost per change increased alongside it.  Paying it down makes leadership nervous so cost metrics are important.

Assume 80k per year per developer, add 50k for all the benefits, overhead, taxes, etc, for a total of 130k/yr.  There are about 2080 hours per work year in the US, so each hour costs roughly $62.5 USD.

The code was initially short.  Changes to one "page" (angular template + controller + route) took ~20 minutes.  Rough cost per change ~$20.

Eventually the page code grew to be 2500 lines.  I started with the company.  Bugs abounded in that and our other pages.  Unexpected things broke.  Myself and others spent significant time fixing them.  Tests were flaky.  Error prevention processes expanded from a quick functionality test to code reviews, manual testing, better change communication, pre-release team testing sessions, and dedicated QA staffing.

I got curious.  Querying Git showed 500 changes to that page in the last year.  Estimating 3 hours per change.  A couple changes per workday.  Cost per change $187.50.  Multiply by 500 changes per year, and that one page cost 94k/yr to maintain.  That excludes the cost of unhappy customers reporting those bugs.  And QA staff.  And the other 140 pages with similar issues.  Metrics are your friend.

One page.  1500 hours / $94,000 per year to maintain.  Coupling will waste your life.

It also has psychological costs.  Many of its forms increase non-deterministic system behaviors, which increase uncertainty (a universal human stressor).  Those are more difficult to quantify, but equally important.  Coupling adds stress for you, your team, and your users.

## What actually caused the problem?
Many things.
A ~1500 line controller function
A ~1300 line logic-filled template.
Duplication
Coupling
Lack of unit tests


## How did we get there?
Developer fault?  No.  All devs I've met generally do the best they can given their experience.

Here's what happens when you start to learn JavaScript:
- If you come from an Object-oriented background, you follow OO examples and use OO libraries because they make sense to you.
- If you come from a functional background, you follow functional examples and use functional libraries because they make sense to you.
- If your background is not programming, no articles make sense yet.  You try to follow guidelines from all articles because they're written by more experienced developers.  Unfortunately, articles often have conflicting paradigm goals and ambiguous terminology. It likely progresses something like this:

Article 1: (jQuery) Submit your form with `$('.loginForm').submit()`;
Article 2: (OO) Separate concerns is good - do it with modules, classes, and objects with data and functions
Article 3: (functional) Separate concerns is good - do it with modules, and objects with data, and functions
Article 4: (jQuery) Separate concerns is good - separate your data and functions from others' data and functions by namespacing them in an object.

A few days later Frankenstein's monster emerges into the web.

What happened?  Well, different meanings of "Concerns" and "object" to start.

Inexperienced devs are trying to learn "good" code practices in a quirky language that supports different paradigms with ambiguous labels and conflicting strategies, using decades of variable-accuracy articles written by variable-experience developers.

Is it possible to define clear, paradigm-agnostic JS practices with highest ROI/ROE?  This article is my attempt.  The answers aren't new, but they're specific, and as much as possible include specific JS examples.

We're going to need some clear quality goals.

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

Zero Repetition and One Purpose are achievable, though increasingly difficult as teams grow. "Zero Couples" is an unrealistic but useful ideal.  Its purpose is to establish a precise definition of coupling in JavaScript, in order to combat JavaScript's implicit, and usually abundant, coupling.

## Summary
The next 3 articles will break down One Purpose, Zero Repetition, and Zero Couples
