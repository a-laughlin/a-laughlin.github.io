---
title: Replace "Developer Productivity" with "Engineering Results" for Clarity and Impact
comments: true
layout: post
tags: [draft, Developer Productivity, DevProd, Developer Experience, DX, DevEx, Developer Tools, Engineering Productivity, Engineering Optimization, Engineering Outcomes, Engineering Results]
---

Developer Productivity's definition matters. Discussing and optimizing an unclear measure wastes time. When I defined Developer Productivity I learned a couple important lessons: First, the metric isn't useful to improve stakeholder outcomes or business impact. Second, the term's ambiguity potentially causes more problems than it solves. Those are only two of Developer Productivity's [many](https://link.springer.com/chapter/10.1007/978-1-4842-4221-6_2) [drawbacks](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity). Replacing the term "Developer Productivity" with an alternative like "Engineering Results" clarifies discussions and focuses more impactful metrics.

<!-- TOC -->

- [Developer Productivity (Metric) Usefulness](#developer-productivity-metric-usefulness)
- [Developer Productivity (Term) Accuracy](#developer-productivity-term-accuracy)
- [An Alternate Term](#an-alternate-term)
- [Criteria for Alternate Terms](#criteria-for-alternate-terms)
- [Wrapping Up](#wrapping-up)

<!-- /TOC -->

## Developer Productivity (Metric) Usefulness

Developers' productivity (input to output conversion efficiency) isn't useful to improve what we care about.

As engineering leaders, we usually care about stewarding our engineering resources effectively - maximizing stakeholder and business outcomes. We can [estimate outcomes](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-part-2) roughly down to team or feature precision. Further precision yields indirect effects, so we optimize outputs instead. This is where productivity metrics cause issues. Productivity is only meaningful for an activity where all stakeholders [share the same understanding](https://doi.org/10.48550/arXiv.2111.04302) of desired outputs and their production timescale. When that's true for each of a developer's activities, then we can measure each activity's productivity. Finally we roll those measures up to a single developer productivity metric... in theory. Try finding a single number that rolls up diverse efficiencies like coding a feature, sharing domain knowledge with a coworker, meeting once a year to troubleshoot or prevent scalability issues, and writing a script that saves all teammates future time. What action do we take when that number changes? See the problems?

Productivity aggregated by developer or team isn't meaningful or actionable. It isn't useful to improve the outcomes and business impact we care about. Productivity is most useful when measuring a common workflow.

## Developer Productivity (Term) Accuracy

My original intent with this article was to accurately define Developer Productivity. Goal met ¹. While defining it however, I came to believe that the current definition may cause more problems than it solves for the software engineering industry.

The factors necessary to maximize business impact and stakeholder outcomes are diverse, broad, and evolving with [research](https://getdx.com/blog/best-research-papers-developer-productivity/). Productivity's standard definition (input to output conversion efficiency) is too narrow to describe them accurately.

Two common approaches compensate for that inaccuracy: expanding the term's meaning and switching terms. Two tool provider definitions I found expand the meaning (possibly for SEO and aligning it to SPACE ²). For example standard "input to output conversion efficiency" expanded to ["effectiveness and efficiency ... including:" Code Quality, Speed, Collaboration, Problem-Solving, Adherence to Best Practices](https://linearb.io/blog/developer-productivity). Platform teams often switch to more accurate terms. Examples include DORA researchers using [Software Delivery and Operations (SDO)](https://dora.dev/research/2019/dora-report/2019-dora-accelerate-state-of-devops-report.pdf) and platform teams adopting names like [Enablement, Productivity and Happiness, Engineering Productivity/Solutions/Thrive, and Developer Experience/Infrastructure/Platform/Tools](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-bae).

The first approach, expanding Developer Productivity's meaning beyond a traditional definition, creates ambiguity corresponding to SPACE's breadth. [SPACE](https://queue.acm.org/detail.cfm?id=3454124) covers limitless engineering optimization factors. Developer Productivity encompassing any of those factors implies that it may encompass them all. That creates ambiguity. Additonal ambiguity emerges because Developer Productivity encompasses SPACE and SPACE's categories encompass a traditional definition of developer productivity, blurring both definitions. Lacking a distinct traditional definition, Developer Productivity's definition references itself ¹. Both limitless factors and a recursive definition create infinite ambiguity.

While an accurate definition ¹ is unhelpfully ambiguous, popular usage appears to be an alias for engineering optimization. Positive results of the term's popularity include its efficacy as a search keyword for engineering optimization articles and tools. Negative results of the term's ambiguity occur frequently when discussing engineering optimization: time spent defining terms, clearing confusion, resolving misunderstandings, redirecting to more effective metrics, and discouraging abuses. It's no wonder that the platform teams above chose less ambiguous names.

Platform teams can save time and focus more impactful metrics by replacing "Developer Productivity" with terms that more accurately describe what they optimize. Writers and tool providers could benefit the industry by collectively adopting a more accurate term.

## An Alternate Term

"Engineering Results" (i.e. stakeholder and business outcomes) is one possible solution to Developer Productivity's inaccuracy and ambiguity.

Other possible terms include "Engineering Outcomes" and "Engineering Thrive". Thrive is a delightful choice at Microsoft despite the term's grammatical awkwardness. I love the idea of all engineering stakeholders and the business thriving.

If those terms are unsatisfying, the criteria behind them may help choose a different one.

## Criteria for Alternate Terms

A common software idiom is "Naming things is hard". Here are a few criteria to help avoid current term's issues:

- Evolution: A term's words and implications should support engineering's evolving roles, metrics, outputs, strategies, and contributing factors. They shouldn't calcify a particular subset. One way to support evolution is by focusing on stakeholder and business outcomes instead of how they're achieved. Counterexamples include: "Developer Productivity" which combines a role, optimization metric, and implies improving a meaningless number. "Developer Experience" - combines a role, optimization strategy, and implies adopting that strategy. "Developer Tools" - combines a role, contributing factor, and implies optimizing only a subset of contributing factors.
- Outcomes Focus: Improving outcomes focuses metrics on things that matter.
- Memorability: Accurate and stable terms like DORA's "Software Delivery and Operations (SDO)" aren't simple enough to be memorable.
- Low Abusability: Output metrics like efficiency enable negative consequences like micromanagement, low-value optimizations, and system-gaming temptations. Terms that instead focus on outcomes improve those outcomes while reducing likelihood of negative consequences.
- Measurement Team Usefulness: Any term should facilitate great measurement team interactions and messaging (e.g., quick understanding and alignment, vs needing to explain what developer productivity means and how it doesn't measure what it sounds like)
- SEO Friendliness: Any term needs to be unique enough for engineering stakeholders to find related articles and tools

## Wrapping Up

A "developer productivity" metric isn't useful to improve stakeholder outcomes and business impact. The "Developer Productivity" term has become so ambiguous that it generates more confusion than clarity. Choosing alternate metrics and a different term like "Engineering Results" will save time and facilitate greater impact.

What challenges have you faced with the term Developer Productivity? How did you resolve them?

## Footnotes

1. Definition: Developer Productivity is any combination of factors in SPACE, including developer productivity. In conversations it may imply a developer's efficiency across all of their activities, but may also imply zero to many developers, one or many activities, and may reference standard productivity (input to output conversion efficiency), other efficiency factors, or any combination of SPACE's factors (including those in [DORA](https://dora.dev/research/), [DevEx](https://queue.acm.org/detail.cfm?id=3595878) and [Core 4](https://getdx.com/research/measuring-developer-productivity-with-the-dx-core-4/) ).

2. The paper's name "The SPACE of Developer Productivity" likely contributed to the expanding definition. In no way does that detract from the authors' awesome contribution to the field. It's a fantastic paper. Its factors are worth considering and mentioning. My only quibble is that its title and contents encourage an infinitely ambiguous "Developer Productivity" definition that creates confusion downstream. It does make a good point that shifting the meaning can help teams entrenched in a traditional "developer productivity" culture. However, it doesn't suggest an alternative term for companies who outgrow that culture. Hence this article's alternate term suggestions.
