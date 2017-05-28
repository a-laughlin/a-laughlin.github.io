# High Value JavaScript

Startup.  Three years in.  Funds running low.  Our JavaScript is sphaghetti.  One page cost $94k per year to maintain.  There are 140 pages.  Shit.  How did we get here?

## Costs.  A Story.
A company I worked at was founded by a couple of great guys who learned javascript (Angular 1) in order to get a prototype product off the ground.  They learned how to program as part of launching the business, so they had neither experience nor formal education.  Yet they were smart and focused and used Angular to produce features at an incredible rate over their first 1.5 years.  The knowledge and experience gaps cranked out technical debt at an equal rate - a normal outcome for new programmers.

As technical debt increased, mean cost per change increased alongside it.  Changes to one "page" (angular template + controller + route) took ~20 minutes.  The code was initially short.

They added developers as their customer base increased.  By the time I started with the company, one page's code had grown to 2500 lines.  Bugs abounded in that page and others.  Unexpected things broke.  We spent a lot of time fixing them.  Tests were flaky.  Error prevention processes expanded from a quick functionality tests, to code reviews, manual testing, more extensive change communication, whole-team pre-release team testing sessions, and dedicated QA staffing.

I got curious.  Querying Git showed 500 changes to that page in the last year.  Our current processes placed mean time per change ~3 hours of staff time (conservatively).  500 changes per year meant 1500 hours spent maintaining it.  Each year.  We had 140 other pages with similar issues.

One page.  1500 hours per year.  Most of those 1500 hours went to fixing and re-fixing bugs that crept in from introducing new features or fixing other bugs.

In terms of financial investment assume 80k per year per developer, add 50k for all the benefits, overhead, taxes, etc, for a total of 130k/yr.  There are about 2080 hours per work year in the US, so each hour costs roughly $62.5 USD.  Multiply 1500 hours by $62.5/hr, and that page required $94,000 per year to maintain.

[Outcomes](https://hbr.org/2012/11/its-not-just-semantics-managing-outcomes) extend further.  Good experiences produce delight and pleasant interactions among users, staff, their teams, and beyond.  Bad experiences create stress and sour interactions.  Unexpected behaviors produce confusion, frustration, and stress.  Delays produce frustration.  Low reliability adds to stress through uncertainty and perceived lack of control, while decreasing sales staff confidence and company reputation.  Ripple effects spread the impacts into other areas of life, like the impact of carrying increased stress home.

1500 hours, $94k, bad experiences.  Low-qualitiy JavaScript exacts many costs from you, your team, your company, your users, and many people each of you interact with.

## How did we get there?
Developer fault?  No.  All devs I've met generally do the best they can given their experience.  Producing high quality code is not easy.

Here's what happens when you start to learn JavaScript:
- If you come from an Object-oriented background, you follow OO examples and use OO libraries because they make sense to you.  You find workarounds for JavaScript's OO quirks.
- If you come from a functional background, you follow functional examples and use functional libraries because they make sense to you.  You find workarounds for JavaScript's functional quirks.
- If your background is not programming, no articles make sense yet.  You don't know that JavaScript has quirks.  You try to follow guidelines from all articles because they're written by more experienced developers.  The path to getting stuff done looks something like this:

Article 1: (jQuery) Submit your form with `$('.loginForm').submit()`;
Article 2: (jQuery) Separate concerns is good - separate your data and functions from others' data and functions by namespacing them in an object.
Article 3: (OO) Separate concerns is good - do it with modules, classes, and objects with data and functions
Article 4: (functional) Separate concerns is good - do it with modules, classes, and objects with data, and functions

A few days later Frankenstein's monster emerges into the web.

What happened?  Well, to start, modules, objects, and separate concerns probably meant different things in each of them.

The problems arise because new devs learn programming through variably-accurate articles and instruction created by variably-experienced developers, using ambiguous, often-misunderstood labels from often-misunderstood philosophies to describe often-misunderstood, sometimes-conflicting "good" principles.  Then new devs attempt to write high-quality code in a new language with its own special label interpretations and philosophy implementations, using frameworks that often add even more ambiguous labels and interpretations (e.g., angular 1's expressions & services).

The problem - ambiguity, misunderstandings, complexity, and and sheer information involved in learning, make it nearly impossible for new developers to create solid conceptual links between daily code decisions and value.  To combat that, a simple heuristic develops - "whatever code works".  The result, low quality code [accumulates imperceptibly](https://en.wikipedia.org/wiki/Boiling_frog#As_metaphor) with every change, increasing costs and decreasing the code's ability to produce value.  For companies with SaaS/PaaS business models, frequent changes quickly grow human and financial costs.  Given enough changes, the accumulated costs per change can exceed the value produced, and a downward spiral begins.  A spiral that no one wants to enter, with an entrance no one can clearly detect, and an exit no one can exit without significant investments of engineering time, energy, and/or finances.

Think of it like this, with "customer interest in product" where it says "customer responsiveness":
![technical debt impact on customer interest over time](/Users/adam/Dropbox/repos/a-laughlin.github.io/assets/technical_debt_slide.jpg)

## How do we get out?

The most cost effective practice is clearly defining the problem you're trying to solve.  Then developing a plan to solve it.  Then executing that plan with high quality code.  The first two parts merit mentioning, but this article is about high quality code, so we'll skip those for now.

We can't truly escape low quality because it grows and recedes in a cycle.  Deadlines always create pockets of low quality code.  Investing time, energy, and finances to replace the low quality code improve overall quality.  Then the cycle repeats once costs per change start to threaten value gained per change.

However, we're bad at estimating that point.  The cost of replacing low quality code grows exponentially with the amount of it.  There are many factors involved in creating that cost, so for simplicity, figure the cost of fixing low quality code is `(original time per change * 100 * number of changes) / experienced developers`.  500 low quality changes to fix gets costly fast.

The best we can do is slow down the accumulation to generate as much value per change as possible.  That ideally gives us revenue.  Revenue gives us options.  Hire other developers?  Spend time ourselves?  Whatever we choose, we won't have the choice unless we produce as much value per change as possible from the start.  But how?  Given all the ambiguity, complexity, and information involved in learning?

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
Quality Code: (Code that produces value per change well above its costs per change.)

## Quality > Value?
(make these more concrete)
What is Value?  Value is people's desires satisfied.
What is Quality?  Quality is how well code can satisfies peoples' desires (i.e., its value produceability).
[racing baton slide]

There are [many](https://www.infoq.com/articles/atam-quality-attributes) [system](https://msdn.microsoft.com/en-us/library/ee658094.aspx) [software](https://ewh.ieee.org/r2/southern_nj/BarbacciOct03.pdf) (pdf) [quality](http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.101.5016&rep=rep1&type=pdf) [attributes](https://en.wikipedia.org/wiki/List_of_system_quality_attributes).  Different quality attributes satisfy different desires.  For example, we desire our planes to stay in the air, so reliability is critically important quality attribute in airplane software.  To stay competitive, businesses often desire to adapt quickly to changing conditions, so changeability is a critically important quality attribute in many businesses.

**Ambiguity Alert**  You'll chase your tail if you try to meet them all.  There are tradeoffs.  Definitions also overlap.  For example, optimizing a search algorithm for the "efficiency" attribute often decreases its "understandability" attribute.  However, optimizing for changeability also increases understandability (developers can change code faster if they understand it faster).  You won't find changeability in those lists.  It comes from "modifiability" in the first list, but two fewer syllables make "changeable" easier to say and remember.

A good place to start is picking 1-3 attributes whose definitions seem most critical to your organization, and focus on those.  Let's go with changeability to start.  Most of us work for businesses.  Most businesses with programmers want to adapt to changing conditions.  Most businesses will be okay if their wings fall off.

  - **Changeability** - How fast can you or others make error-free code changes that produce the desired value?


Great.  We'll increase value by increasing quality.  We'll increase quality by increasing the changeability attribute.  We'll increase changeability by.... reading the next few posts when they come out!

[Code]() The basics, for examples in the following posts. (introduces language structures, purposes, patterns, cohesion)
[Philosophies, Principles, and Practices]() Simple ways to think about them in JavaScript, for Context (includes composition, inheritance)
[Principles Part 1]() Zero Repetition
[Principles Part 2]() Zero Couples
[Summary]()
