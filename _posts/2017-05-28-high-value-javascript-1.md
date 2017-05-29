---
layout: post
title: High Value JavaScript (Part 1)
---

Startup SaaS Company.  Two years in.  Funds running low.  Our JavaScript is a ball of mud.  One page costs $94k per year to maintain.  140 pages.  Shit.  How did we get here?

## Backstory
A couple of great guys learned javascript (Angular 1) to launch a SaaS business.  They had neither coding experience nor formal education.  Still, they were smart and focused and used Angular to produce features at an incredible rate.

Code quality was low.  It wasn't a problem.  The code was short.  Changes to one "page" (angular template + controller + route) took ~20 minutes.  They added customers.  They added developers.

When I started 1.5 years in, our most troublesome page's code had grown to 2500 lines.  New technical leadership prioritized a back-end rewrite first.  Bugs abounded in that page and others.  I stabilized things as much as I could.  Months of whack-a-mole bug squashing while the back-end code changed.  Mud can only get so clean.  Global variables littered the code.  Unexpected things often broke.  Customers complained.  Tests were flaky or non-existent.  Error prevention processes expanded from a quick functionality checks, to multi-person code reviews, multi-person manual tests, extensive change communication, whole-team pre-release testing sessions, and dedicated QA staffing.

Estimated time per change grew to around 3 hours.  I got curious.  Most changes went to fixing and re-fixing bugs that crept in from introducing new features or fixing other bugs.  Git showed 500 changes to that page in the last year.  1500 hours spent maintaining one page.  We had 140 other pages with similar issues.  Not good.

## Costs
Financially speaking, assume 80k per year per developer, add 50k for benefits, overhead, taxes, etc.  Total 130k/yr.  There are about 2080 hours per work year in the US, so each hour costs roughly $62.5 USD.  Multiply 1500 hours by $62.5/hr, and that page required $94,000 per year to maintain.

[Outcomes](https://hbr.org/2012/11/its-not-just-semantics-managing-outcomes) extended further.  Good experiences produce delight and pleasant interactions among users, staff, their teams, and beyond.  Bad experiences create stress and sour interactions.  Unexpected behaviors produce confusion, frustration, and stress.  Delays produce frustration.  Low reliability adds to stress through uncertainty and perceived lack of control, while decreasing sales staff confidence and company reputation.  Ripple effects spread the impacts into other areas of life, like the impact of carrying increased stress home.

1500 hours, $94k, bad experiences.  Low-qualitiy JavaScript exacts many costs from you, your team, your company, your users, and many people each of you interact with.

## Developer fault?
No.  All devs I've met generally do the best they can given their experience.  Producing high quality code is not easy.

When you start to learn JavaScript, and your programming background is:
  - Classical Object-oriented, you follow OO examples and use OO libraries because they make sense to you. You work around JavaScript's OO quirks.
  - Functional, you follow functional examples and use functional libraries because they make sense to you.  You work around JavaScript's functional quirks.
  - None, no articles make sense yet.  You follow guidelines from all articles because they're written by more experienced developers.  You don't know that programming languages have quirks.

The path to getting stuff done looks something like this:

 - Article 1: (jQuery) Submit your form with `$('.loginForm').submit()`;
 - Article 2: (jQuery) Separate concerns is good - separate your data and functions from others' data and functions by namespacing them in an object.
 - Article 3: (OO) Separate concerns is good - do it with modules, classes, and objects with data and functions
 - Article 4: (functional) Separate concerns is good - do it with modules, classes, and objects with data, and functions

A few days later Frankenstein's monster emerges into the web.

What happened?  Well, to start, modules, objects, and separate concerns probably meant different things in each of them.

New devs learn programming through variably-accurate articles and instruction created by variably-experienced developers, using ambiguous, often-misunderstood labels from often-misunderstood philosophies to describe often-misunderstood, sometimes-conflicting "good" coding principles.  Then they attempt to write high-quality code in a language with its own label interpretations and philosophy implementations, using frameworks that often add even more ambiguous labels and interpretations (e.g., angular 1's expressions & services).

The problem - ambiguity, misunderstandings, complexity, and information overload make it nearly impossible for new developers to create solid conceptual links between daily code decisions and value.  To combat that, a simple heuristic develops - "whatever code works".  The result, low quality code [accumulates imperceptibly](https://en.wikipedia.org/wiki/Boiling_frog#As_metaphor) with every change, increasing costs and decreasing the code's ability to produce value.  For companies with SaaS/PaaS business models, frequent changes quickly grow human and financial costs.  Given enough changes, the accumulated costs per change can exceed the value produced, and a downward spiral begins.  A spiral that no one wants to enter, with an entrance no one can clearly detect, and an exit no one can leave without significant investments of engineering time, energy, and/or finances.

Think of it like this, but replace "customer responsiveness" with "customer interest in product":

![technical debt impact on customer interest over time](/Users/adam/Dropbox/repos/a-laughlin.github.io/assets/technical_debt_slide.jpg)

## How do we get out?
We can never achieve all high quality code.  Deposits of low quality code continually form due to deadlines and inexperience.  Eventually costs per change threaten value produced per change, and investments of time, energy, and finances go into removing them and increasing overall code quality.  Then the cycle repeats.

Deadlines plus inexperience grow low quality code volume quickly.  The cost of replacing low quality code grows exponentially with the amount of it.  There are many factors involved in creating that cost, so for simplicity, figure the cost of fixing low quality code is `(original time per change * 100 * number of changes) / experienced developers`.  500 low quality changes to fix gets costly fast.

The best we can do is slow down the accumulation to generate as much value per change as possible before we have to invest in decreasing it.  That ideally gives us revenue.  Revenue gives us options.  Hire other developers?  Spend time ourselves?  Whatever we choose, we won't have the choice unless we produce as much value per change as possible from the start.  But how?  Given all the ambiguity, complexity, and information involved in learning?

This article's purpose is to help you, as a new JavaScript developer, produce significantly higher-quality code early on, in less time, with greater understanding, for the sake of you, your team, your organization, your customers, and everyone else involved.

## Connecting Code to Quality

Let's start by removing some ambiguity.  Here are the basic connections between "Whatever Works" code and Value.
Code > **ambiguity** > Quality (low)

Here are the connections with ambiguity replaced:

Code > Practices + Principles + Philosophies  > Quality (high)

Terms:
Accumulations of low-quality JavaScript are called [Technical Debt](https://en.wikipedia.org/wiki/Technical_debt).
Replacing some low quality code with higher-quality code is called refactoring
Replacing all low quality code with higher-quality code is called rewriting/rearchitecting.
Value: People's desires satisfied.
Quality:  How well code can satisfies peoples' desires (i.e., its value produceability).
High Quality Code: Code that can produce value per change well above its costs per change.
Low Quality Code: Code that can costs more to change than the value it can produce.

## Quality?
You might have heard terms like "flexibility", "reliability", and "usability" before.  These are system quality attributes.  There are [many](https://www.infoq.com/articles/atam-quality-attributes) [software](https://msdn.microsoft.com/en-us/library/ee658094.aspx) [system](https://ewh.ieee.org/r2/southern_nj/BarbacciOct03.pdf) [quality](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.101.5016&rep=rep1&type=pdf) [attributes](https://en.wikipedia.org/wiki/List_of_system_quality_attributes).

Different quality attributes satisfy different desires.  For example, we desire our planes to stay in the air, so reliability is critically important quality attribute in airplane software.  To stay competitive, businesses often desire to adapt quickly, so changeability is a critically important quality attribute in many businesses.

Things to be aware of:
- Some quality attributes have overlapping meanings
- Different articles use different words for the same or similar quality attributes
- There are tradeoffs.  For example, optimizing an algorithm for "efficiency" often decreases "understandability"

Quality is a good thing, but you'll chase your tail if you try to satisfy all attributes.  A good place to start is picking 1-3 attributes whose definitions seem most critical to your organization, and focus on those.  For the purpose of this article, we'll focus on changeability.  Most of us work for businesses.  Most businesses with programmers want to adapt to changing conditions.  Most businesses will be okay if their wings occasionally break.  Changeability's error-free aspect also gives us decent reliability.

**Changeability** - How fast you or others can make error-free code changes to produce the desired behaviors

To recap, quality (changeability) increases value.  What increases changeability?  Great question!

To be Continued!

[Code]() The basics, for examples in the following posts. (introduces language structures, purposes, patterns, cohesion)
[Philosophies, Principles, and Practices]() Simple ways to think about them in JavaScript, for Context (includes composition, inheritance)
[Principles Part 1]() Zero Repetition
[Principles Part 2]() Zero Couples
[Summary]()
