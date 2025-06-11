---
title: "Developer Productivity - Metric Meaning and Evolution"
comments: true
layout: post
tags: [draft, Developer Productivity, Developer Experience, Developer Tools, Engineering Productivity, Engineering Optimization, DX, DevEx, DevProd]
---

I recently tried to define developer productivity (DevProd) in the context of optimizing it. Reading more articles decreased my ability to concisely define it.

**Developer Productivity** is an efficiency metric (input to output conversion efficiency) that has evolved to inaccurately describe collections of company-specified engineering metrics. The evolution also seems unfinished. Developer Productivity is a less frequent team name than User Experience (UX) and Developer Experience (DX, DevEx), despite its longer existence ¹. That tells me it isn't and likely won't become a field of expertise like the others - at least not with that name. Two reasons seem likely ([among](https://link.springer.com/chapter/10.1007/978-1-4842-4221-6_2) [others](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity)): usefulness and accuracy.

## Developer Productivity's Usefulness

Developers' productivity (input to output conversion efficiency) isn't useful to improve business impact or stakeholder outcomes.

As engineering leaders, we usually care about stewarding our engineering resources effectively - optimizing stakeholder outcomes and business impact. We can [estimate outcomes and impact](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-part-2) roughly down to team or feature precision. Further precision yields indirect effects, so we optimize outputs instead. This is where productivity metrics cause issues. Productivity is only meaningful for an activity where all stakeholders [share the same understanding](https://doi.org/10.48550/arXiv.2111.04302) of desired outputs and their production timescale. When that's true for each of a developer's activities, then we can measure each's productivity. Finally we roll them up into a single developer productivity metric. In theory. What single rollup number aggregates diverse efficiencies like coding a feature, sharing domain knowledge with a coworker, meeting once a year to troubleshoot or prevent scalability issues, and writing a script that saves all teammates future time? What action do we take when that number changes? See the problems?

Productivity aggregated by developer or team isn't meaningful or actionable. It isn't useful to improve the outcomes and business impact we care about ².

## Developer Productivity's Accuracy
The factors necessary to maximize engineering impact and stakeholder outcomes are [diverse](https://dora.dev/research/), [broad](https://queue.acm.org/detail.cfm?id=3454124), and [evolving](https://queue.acm.org/detail.cfm?id=3595878) with [research](https://getdx.com/blog/best-research-papers-developer-productivity/). Productivity's standard definition (input to output conversion efficiency) is too narrow to describe them accurately.

Companies seem to compensate for that inaccuracy in two ways - changing the meaning or changing the term. Which change depends on business case. Measurement tool companies usually change the meaning (probably because of SEO). For example "input to output conversion efficiency" has expanded to ["effectiveness and efficiency ... including:" Code Quality, Speed, Collaboration, Problem-Solving, Adherence to Best Practices.](https://linearb.io/blog/developer-productivity). By contrast, measurement teams change the term. Examples include DORA researchers using [Software Delivery and Operations (SDO)](https://dora.dev/research/2019/dora-report/2019-dora-accelerate-state-of-devops-report.pdf), and platform teams adopting names like [Enablement, Productivity and Happiness, Engineering Productivity/Solutions/Thrive, and Developer Experience/Infrastructure/Platform/Tools](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-bae).

Those expanded definitions and team names include metrics, outputs, strategies, and stakeholder outcomes. Most align more closely with [SPACE](https://queue.acm.org/detail.cfm?id=3454124) than traditional productivity.

## What's a More Accurate Term?

There isn't. Yet. Terms are still evolving as evidenced by team name diversity.

All terms are equally \[in\]accurate. None encompass the full breadth of the roles, metrics, and strategies that exist and will exist to improve engineering stakeholder outcomes and business impact. "Developer Productivity" combines a changeable role, optimization metric, and implies improving a meaningless number. "Developer Experience" combines a changeable role, optimization strategy, and implies adopting a non-universal strategy. "Developer Tools" combines a changeable role,  optimization strategy, and implies optimizing only a subset of important factors.

All terms' inaccuracies lead me to think we'll continue evolving towards a more holistic optimization term that excludes roles, metrics, and strategies du jour. A stable term is likely to arise from engineering optimization's single stable aspect - things optimized (i.e. engineering stakeholder outcomes and business impact). It's also likely to be simpler than Software Delivery and Operations for stickiness.

Perhaps Developer Productivity's successor will be Engineering Thrive or Engineering Results. My (close) favorite is Engineering Results. Regardless, a more accurate term would simplify life for those of us who define terms before optimizing.

## Footnotes

1. Searching Google (non-personalized) on 2025-06-11 with the term "User Experience Team" yields 534k results. "Developer Experience Team" yields 84k results. "Developer Productivity Team" yields 20k results, despite the concept existing longer.

2. While not useful for most engineering optimizations, Developer Productivity can be useful in factory-like teams with a single sequential workflow, where it becomes synonymous with workflow productivity. In that case using it still misleads and will cause more problems than workflow efficiency or workflow productivity. Developer Productivity also sounds like it would be useful for individual headcount decisions, but isn't. Engineering optimizations aside, the term is useful for blog writers and companies selling engineering optimization tools, likely due to current popularity effects on findability and SEO.
