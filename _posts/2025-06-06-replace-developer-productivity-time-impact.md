---
title: Replace "Developer Productivity" with "Engineering Results" for Time and Impact
comments: true
layout: post
tags: [draft, Developer Productivity, DevProd, Developer Experience, DX, DevEx, Developer Tools, Engineering Productivity, Engineering Optimization, Engineering Outcomes, Engineering Results]
---

# Replace "Developer Productivity" for Time and Impact

Developer Productivity's definition matters. Discussing and optimizing an unclear measure wastes time. Two problems stood out to me when defining Developer Productivity ([among](https://link.springer.com/chapter/10.1007/978-1-4842-4221-6_2) [many](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity)). First, the metric is ineffective for improving stakeholder and business outcomes. Second, the term's ambiguity causes more problems than it solves for anyone learning about Developer Productivity, defining it, or discussing engineering optimization. Below we'll explore the problems and offer solutions for the easily solvable parts: current ¹ and traditional ² Developer Productivity definitions for learners, a more effective application of productivity metrics for teams, and a clearer term to replace Developer Productivity in discussions.

<!-- TOC -->

- [Developer Productivity (Metric) Effectiveness](#developer-productivity-metric-effectiveness)
- [Developer Productivity (Term) Accuracy](#developer-productivity-term-accuracy)
- [An Alternate Term](#an-alternate-term)
- [Criteria for Alternate Terms](#criteria-for-alternate-terms)

<!-- /TOC -->

## Developer Productivity (Metric) Effectiveness

A Traditional Developer Productivity ² metric is ineffective for improving what we care about.

As engineering leaders, we usually care maximizing business and stakeholder outcomes. We can [estimate outcomes](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-part-2) roughly down to team or feature precision. Further precision yields indirect effects on business and non-developer stakeholder outcomes, so we optimize outputs instead. This is where productivity metrics cause issues. Productivity is only meaningful for an activity where all stakeholders [share the same understanding](https://doi.org/10.48550/arXiv.2111.04302) of desired outputs and their production timescale. When that's true for each of a developer's activities, then we can measure each activity's productivity. Finally we roll those measures up to a single developer productivity metric... in theory. Try finding a single number that rolls up the diverse efficiencies of coding a feature, sharing domain knowledge with a coworker, meeting once a year to troubleshoot or prevent scalability issues, and writing a script that saves all teammates future time. What action do we take when that number changes? See the problems?

Productivity aggregated by developer or team isn't meaningful or actionable. It isn't effective to improve the stakeholder and business outcomes we care about. Productivity is most effective when measuring a common workflow.

## Developer Productivity (Term) Accuracy

The factors necessary to maximize business impact and stakeholder outcomes are diverse, broad, and evolving with [research](https://getdx.com/blog/best-research-papers-developer-productivity/). Traditional Developer Productivity ² is too narrow to describe them accurately.

Two common approaches compensate for that inaccuracy: expanding the term's meaning and switching terms. The SPACE paper ³, various tool providers, and other writers expand the meaning. For example, expanding the traditional definition to ["effectiveness and efficiency ... including:" Code Quality, Speed, Collaboration, Problem-Solving, Adherence to Best Practices](https://linearb.io/blog/developer-productivity). Platform and Measurement teams often switch to more accurate terms. Examples include DORA researchers using [Software Delivery and Operations (SDO)](https://dora.dev/research/2019/dora-report/2019-dora-accelerate-state-of-devops-report.pdf) and platform teams adopting names like [Enablement, Productivity and Happiness, Engineering Productivity/Solutions/Thrive, and Developer Experience/Infrastructure/Platform/Tools](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-bae).

The first approach, expanding Developer Productivity's meaning beyond a traditional definition, creates ambiguity corresponding to [SPACE](https://queue.acm.org/detail.cfm?id=3454124)'s breadth. SPACE covers limitless engineering optimization factors. Developer Productivity encompassing any of those factors implies that it may encompass them all. That creates ambiguity. Additional ambiguity emerges because Developer Productivity encompasses SPACE and SPACE's efficiency category encompasses a traditional definition of developer productivity, blurring both definitions. Lacking a distinct traditional definition ², Developer Productivity's definition references itself ¹. Limitlessness and self-reference create infinite ambiguity.

While an accurate definition is unhelpfully ambiguous, Developer Productivity is a popular alias for engineering optimization. Popularity's positives include searchability for engineering optimization articles and tools. Ambiguity's positives include helping expand "single-productivity-metric" mindsets. Popularity's negatives include the term's presence in most engineering optimization discussions, not just single-productivity-metric companies. Ambiguity's negatives include learning difficulty, definition difficulty, and discussions spent defining terms, clearing confusion, resolving misunderstandings, redirecting to more effective metrics, and discouraging abuses. It's no wonder that the platform teams above chose less ambiguous names.

Platform teams can save time and focus more impactful metrics by replacing "Developer Productivity" with terms that more accurately describe what they optimize. Writers and tool providers could benefit the industry by collectively adopting a more accurate term.

## An Alternate Term

"Engineering Results" (i.e. stakeholder and business outcomes) is one possible solution to Developer Productivity's inaccuracy and ambiguity.

Other possible terms include "Engineering Outcomes", "Engineering Impacts", and "Engineering Thrive". Thrive is a delightful choice at Microsoft despite the term's grammatical awkwardness. I love the idea of all engineering stakeholders and the business thriving.

If those terms are unsatisfying, the criteria behind them may help choose a different one.

## Criteria for Alternate Terms

A common software idiom is "Naming things is hard". Here are a few criteria to help avoid current term's issues:

- Stability: A term's words and implications should remain stable amidst engineering's evolving roles, metrics, outputs, strategies, and contributing factors. They shouldn't calcify a particular subset. One approach to stability is focusing on stakeholder and business outcomes instead of how they're achieved. "Engineering Results" is an example. Counterexamples include: "Developer Productivity" which combines a role, optimization metric, and implies improving an ineffective number. "Developer Experience" - combines a role, optimization strategy, and implies adopting that strategy. "Developer Tools" - combines a role, contributing factor, and implies optimizing only a subset of contributing factors.
- Memorability: Accurate and stable terms like DORA's "Software Delivery and Operations (SDO)" aren't simple enough to be memorable.
- Outcomes Focus: Improving outcomes focuses metrics on things that matter.
- Low Abusability: Output metrics like efficiency enable negative consequences like micromanagement, low-value optimizations, and system-gaming temptations. Terms that instead focus on outcomes improve those outcomes while reducing likelihood of negative consequences.
- Measurement Team Usefulness: Any term should facilitate great team interactions and messaging (e.g., quick understanding and alignment, vs needing to explain what developer productivity means and how it doesn't measure what it sounds like)
- SEO Friendliness: Any term needs to be unique enough for engineering stakeholders to find related articles and tools

## Wrapping Up

A "developer productivity" metric is ineffective and problematic for improving stakeholder and business outcomes. The "Developer Productivity" term has become so ambiguous that it causes more problems than it solves for for anyone learning about developer productivity, defining it, or discussing engineering optimization. Choosing alternate metrics and a different term like "Engineering Results" saves time and facilitates greater impact.

What challenges have you faced with the term Developer Productivity? How did you resolve them?

## Footnotes

1. Developer Productivity is any combination of factors in SPACE, including Developer Productivity. In discussions it is often used as an alias for Engineering Optimization. Its usage may imply Traditional Developer Productivity ², but may also imply zero to many developers, zero to many developer activities, and one to all factors in SPACE (including [DORA](https://dora.dev/research/), [DevEx](https://queue.acm.org/detail.cfm?id=3595878) and [Core 4](https://getdx.com/research/measuring-developer-productivity-with-the-dx-core-4/) ).

2. Traditional Developer Productivity is an efficiency metric that quantifies a developer's input-to-output conversion efficiency on an activity (note: time is an input too). When used without specifying an activity, it implies efficiency on all of a developer's activities.

3. [SPACE](https://queue.acm.org/detail.cfm?id=3454124)'s name "The SPACE of Developer Productivity" likely contributed to the expanding definition. In no way does that detract from the authors' awesome contribution to the field. It's a fantastic paper. Its factors are worth considering and mentioning. My only quibble is that its title and contents encourage an infinitely ambiguous "Developer Productivity" definition that creates confusion downstream. It does make a good point that definition expansion can help teams entrenched in a "single-productivity-metric" culture. However, it doesn't suggest an alternative term for companies and individuals outside that context. Hence this article's alternate term suggestions. In my opinion, future papers can serve the community more effectively by using unambiguous terms for the general case and offering definition expansion as a temporary strategy in cases where it helps.
