---
title: Replace "Developer Productivity" with "Engineering Results" for Clarity and Impact
comments: true
layout: post
tags: [draft, Developer Productivity, Developer Experience, Developer Tools, Engineering Productivity, Engineering Optimization, DX, DevEx, DevProd]
---

Developer Productivity (DevProd)'s definition matters. Discussing and optimizing an unclear measure wastes time. When I defined Developer Productivity I learned a couple important lessons: First, the metric isn't useful to improve stakeholder outcomes or business impact. Second, the term has become so ambiguous that discussing it generates more confusion than clarity. Those are only two of Developer Productivity's [many](https://link.springer.com/chapter/10.1007/978-1-4842-4221-6_2) [drawbacks](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity). Replacing the term "Developer Productivity" with an alternative like "Engineering Results" clarifies discussions and focuses more impactful metrics.

<!-- TOC -->

- [Developer Productivity (Metric) Usefulness](#developer-productivity-metric-usefulness)
- [Developer Productivity (Term) Accuracy](#developer-productivity-term-accuracy)
- [An Alternate Term](#an-alternate-term)
- [Wrapping Up](#wrapping-up)

<!-- /TOC -->

## Developer Productivity (Metric) Usefulness

Developers' productivity (input to output conversion efficiency) isn't useful to improve what we care about.

As engineering leaders, we usually care about stewarding our engineering resources effectively - maximizing stakeholder outcomes and business impact. We can [estimate outcomes and impact](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-part-2) roughly down to team or feature precision. Further precision yields indirect effects, so we optimize outputs instead. This is where productivity metrics cause issues. Productivity is only meaningful for an activity where all stakeholders [share the same understanding](https://doi.org/10.48550/arXiv.2111.04302) of desired outputs and their production timescale. When that's true for each of a developer's activities, then we can measure each activity's productivity. Finally we roll those measures up to a single developer productivity metric... in theory, because what single number aggregates diverse efficiencies like coding a feature, sharing domain knowledge with a coworker, meeting once a year to troubleshoot or prevent scalability issues, and writing a script that saves all teammates future time? What action do we take when that number changes? See the problems?

Productivity aggregated by developer or team isn't meaningful or actionable. It isn't useful to improve the outcomes and business impact we care about. Productivity metrics apply most usefully to common workflows.

## Developer Productivity (Term) Accuracy

The factors necessary to maximize business impact and stakeholder outcomes are [diverse](https://dora.dev/research/), [broad](https://queue.acm.org/detail.cfm?id=3454124), and [evolving](https://queue.acm.org/detail.cfm?id=3595878) with [research](https://getdx.com/blog/best-research-papers-developer-productivity/). Productivity's standard definition (input to output conversion efficiency) is too narrow to describe them accurately.

Companies seem to compensate for that inaccuracy in two ways - expanding the meaning or switching terms. Measurement tool companies usually expand the meaning (probably for SEO). For example "input to output conversion efficiency" has expanded to ["effectiveness and efficiency ... including:" Code Quality, Speed, Collaboration, Problem-Solving, Adherence to Best Practices](https://linearb.io/blog/developer-productivity). Measurement teams switch terms. Examples include DORA researchers using [Software Delivery and Operations (SDO)](https://dora.dev/research/2019/dora-report/2019-dora-accelerate-state-of-devops-report.pdf), and platform teams adopting names like [Enablement, Productivity and Happiness, Engineering Productivity/Solutions/Thrive, and Developer Experience/Infrastructure/Platform/Tools](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-bae).

After reflection, I believe that expanding Developer Productivity's meaning creates more harm than good. [SPACE](https://queue.acm.org/detail.cfm?id=3454124) covers a limitless swath of engineering performance factors. Developer Productivity's expanded definition lumps all of SPACE's factors under its own narrow category of individual efficiency, recursively creating semantic interference and ambiguity. Discussions involving "Developer Productivity" may reference standard input-to-output conversion efficiency, other efficiency factors, or even all the factors in SPACE, [DORA](https://dora.dev/research/), and [DevEx](https://queue.acm.org/detail.cfm?id=3595878) combined. Developer Productivity has expanded to meaninglessness.

Platform teams can save time, confusion, and misunderstandings by replacing "Developer Productivity" with terms like "Engineering Results" that more accurately describe their optimizations (as many teams above already have). Replacement also focuses discussions on more impactful metrics.

## An Alternate Term

"Engineering Results" (i.e. engineering stakeholder outcomes and business impact) is one possible solution to Developer Productivity's ambiguity. It also solves a few problems present in other terms ¹.

"Engineering Outcomes" is another alternative if you consider business impact to be an outcome.

"Engineering Thrive" is stable, accurate, memorable, useful, SEO friendly, and minimally abusable 1. Unfortunately "How can I improve engineering thrive?" is grammatically awkward. That makes me sad. I love the idea of all engineering stakeholders and the business thriving. Maybe there's a better way to state it?


## Wrapping Up

A "developer productivity" metric isn't useful to improve stakeholder outcomes and business impact. The "Developer Productivity" term has become so ambiguous that it generates more confusion than clarity. Choosing an alternate metrics and a different term will save time and encourage greater impact for all of us in the engineering optimization space.

How have you addressed your challenges with the term Developer Productivity? Adopted another term? Some other approach?

## Footnotes

1. An ideal alternative term for Developer Productivity addresses:
  - Instability: Engineering optimization is evolving. Roles, metrics, strategies, desired outcomes, and contributing factors all change. The only stable factors are the things optimized - engineering stakeholder outcomes and business impact.
  - Inaccuracy: All popular engineering optimization terms today are equally inaccurate. None encompass the full breadth of the roles, metrics, and strategies that exist (and will exist). "Developer Productivity" combines a role, optimization metric, and implies improving a meaningless number. "Developer Experience" combines a role, optimization strategy, and implies adopting that strategy. "Developer Tools" combines a role, contributing factor, and implies optimizing only a subset of contributing factors
  - Memorability: Accurate and stable terms like "Software Delivery and Operations (SDO)" aren't memorable
  - Low abusability: Output metrics like efficiency result in many developers experiencing negative consequences like micromanagement, unrealistic expectations, and system-gaming temptations. Terms that focus on results (outcomes and impact) reduce negative consequences' likelihood and improve results.
  - Tool Company SEO: Any term needs to be unique enough for engineering stakeholders to find articles and tools about it
  - Measurement Team usefulness: Any term should facilitate great measurement team interactions and messaging (e.g., like clarifying results and metrics that matter, not explaining how developer productivity doesn't measure what it sounds like)

<!-- 1. Searching Google (non-personalized) on 2025-06-11 with the term "User Experience Team" yields 534k results. "Developer Experience Team" yields 84k results. "Developer Productivity Team" yields 20k results, despite the concept existing longer.
-->
