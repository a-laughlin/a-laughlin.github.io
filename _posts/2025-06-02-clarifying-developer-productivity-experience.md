---
title: "Clarifying Developer Experience, Developer Productivity, and How they Relate"
comments: true
layout: post
tags: [Developer Experience, Developer Productivity, Engineering Optimization, DX, DevEx, DevProd]
---

# Clarifying Developer Experience, Developer Productivity, and How they Relate

While User Experience (UX) has separate definitions for the concept of "a user experience" and "the field of User Experience", no such distinction exists in definitions of Developer Experience (DX, DevEx) or Developer Productivity (DevProd). Existing DX definitions lean toward concept, field, or blend the two. Existing DevProd definitions resist susinctness at best.

In this post we'll start with a TL;DR of the clarified definitions, then dive into existing Developer Experience and Developer Productivity definitions, synthesize clear definitions for each concept and its field, and wrap up with how they relate.


## TL;DR - Clarified Definitions
**Developer Productivity** is a historical attempt at software engineering optimization that applied a traditional but highly context dependent metric (input to output conversion efficiency) across impractically diverse contexts. Today companies rely on collections of metrics, few of which measure developers or productivity. Engineering Optimization is a more accurate term.

**Engineering Optimization (Developer Productivity) metrics** are company-contextualized [collections of engineering metrics](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-bae) commonly derived from [research](https://getdx.com/blog/best-research-papers-developer-productivity/) like [DORA](https://dora.dev/research/), [SPACE](https://queue.acm.org/detail.cfm?id=3454124), and [DevEx](https://queue.acm.org/detail.cfm?id=3595878).

**The field of Engineering Optimization (Developer Productivity)** is a professional practice focused on continuously improving business impact and engineering stakeholder outcomes, by improving Engineering Optimization metrics, by optimizing their contributing factors (e.g., tools, platforms, portals, processes, workflows, activities, experiences, documents, systems, cultures, physical environments).

**A developer experience (DX, DevEx)** is the holistic relationship — encompassing perceptions, emotions, and interactions — between a software developer and a part of their work context (e.g., a tool, platform, portal, process, workflow, activity, document, system, culture, physical environment).

**The field of Developer Experience** (DX, DevEx) is a professional practice focused on continuously improving business impact and engineering stakeholder outcomes, by improving developers' experiences, by optimizing developers' context aspects (e.g., tools, platforms, portals, processes, workflows, activities, documents, systems, cultures, physical environments).

**Developer Experience's relation to Engineering Optimization (Developer Productivity)**: Developer Experience is a flavor of Engineering Optimization that leverages additonal qualitative data to discover and prioritize optimizations more effectively and efficiently than purely quantitative approaches, while yielding equivalent or greater [business impact](https://getdx.com/research/the-one-number-you-need-to-increase-roi-per-engineer/), [developer outcomes, and other stakeholder outcomes](https://azure.microsoft.com/en-us/blog/quantifying-the-impact-of-developer-experience/).

## What is Developer Productivity (Engineering Optimization)?

Existing "Productivity" definitions:
- In the simplest terms, productivity is a measure of output relative to input. [McKinsey](https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-productivity)
- Productivity is a measure of economic performance that compares the amount of goods and services produced (output) with the amount of inputs used to produce those goods and services. [U.S. Bureau of Labor Statistics](https://www.bls.gov/k12/productivity-101/content/what-is-productivity/)
- Productivity is a measure of efficiency that quantifies how efficiently resources (inputs) are used in the production of outputs. - Gemini

Existing "Developer Productivity" Definitions
- Developer productivity measures the efficiency and effectiveness with which software developers can complete their tasks. - [DX](https://getdx.com/blog/developer-productivity/)
- Developer Productivity refers to the effectiveness and efficiency with which software developers produce high-quality code and complete projects. - [LinearB](https://linearb.io/blog/developer-productivity)

I looked for other sources, but didn't see any other reasonably concise definitions. Likely because most companies avoid using those definitions for various reasons. For example:
- Productivity (the original efficiency concept) is [highly context dependent](https://doi.org/10.1007/978-1-4842-4221-6_2). It is only meaningful in the context of a workflow with consistent input qualities, output qualities, a time window to produce the outputs, and [stakeholders with similar understandings](https://doi.org/10.48550/arXiv.2111.04302).
- A single productivity definition scales poorly. Productivity's context-dependence make it a decent metric for analyzing one workflows's efficiency, but a less effective metric for cross-workflow comparisons or aggregate insights.
- As developers automate processes, measuring developers' own efficiency becomes irrelevant while workflow efficiency metrics stay useful.
- Measuring output metrics like efficiency leads to gaming the system, low value optimizations, and wasted time, especially when those metrics start appearing in performance reviews. Instead, [teams can estimate](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-part-2) and optimize business impact, like feature revenue, or [cost saved by a process improvement](https://gist.github.com/a-laughlin/5ddfcc3d1e9baa7e59920521a584a4a1).
- Measuring "Developer Productivity" frames workflow inefficiencies as a developer problem, not a context problem, when the most effective efficiency gains are contextual (e.g., tools, processes, culture). Such framing can also decrease morale.


**Developer Productivity** is a historical attempt at software engineering optimization that applied a traditional but highly context dependent metric (input to output conversion efficiency) across impractically diverse contexts. Today companies rely on collections of metrics, few of which measure developers or productivity. Engineering Optimization is a more accurate term.


**Engineering Optimization metrics** are [company-contextualized collections of engineering metrics](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-bae) commonly derived from [research](https://getdx.com/blog/best-research-papers-developer-productivity/) like [DORA](https://dora.dev/research/), [SPACE](https://queue.acm.org/detail.cfm?id=3454124), and [DevEx (framework)](https://queue.acm.org/detail.cfm?id=3595878).


**The field of Engineering Optimization (Developer Productivity)** is a professional practice focused on continuously improving business impact and engineering stakeholder outcomes, by improving Engineering Optimization metrics, by optimizing their contributing factors (e.g., tools, platforms, portals, processes, workflows, activities, experiences, documents, systems, cultures, physical environments).


## What is Developer Experience (DX, DevEx)?

For context, Neilsen/Norman Group's 2024 UX definition: "A user experience (UX) is the holistic relationship — encompassing perceptions, emotions, and interactions — between a person and a product, service, or company." - [Neilsen Norman Group](https://www.nngroup.com/articles/what-is-user-experience)

Related Developer Experience definitions:
- Developer experience is how developers feel about the tools and processes they use to create software... - [Atlassian](https://www.atlassian.com/developer-experience)
- Developer experience (DevEx, DX) is the overall experience of a developer when they are building software in a team. - [Swarmia](https://www.swarmia.com/blog/developer-experience-what-why-how/)
- [Developer Experience is] How developers feel, think and value their work... - [Research Paper](https://doi.org/10.48550/arXiv.2205.06352)
- Developer experience (DevEx) refers to how developers perceive and interact with their work environment (stakeholder)... - [DX](https://getdx.com/blog/developer-experience/)


**A developer experience** is the holistic relationship — encompassing perceptions, emotions, and interactions — between a software developer and a part of their work context (e.g., a tool, platform, portal, process, workflow, activity, document, system, culture, physical environment).

Similar to the UX and related definitions abouve, this definition focuses on developers' personal factors like thoughts, emotions, and behaviors/interactions. The field, by contrast, focuses on stakeholder outcomes and business impact.

## What is the field of Developer Experience (DX, DevEx)?

For context, Neilsen/Norman Group's 2024 UX Field definition: "The field of user experience (UX) is a professional practice focused on designing and enhancing the interactions and overall experience for all users of a product, service, or brand." - [Neilsen Norman Group](https://www.nngroup.com/articles/what-is-user-experience)

Four related Developer Experience definitions:
- Developer experience (DevEx) refers to how developers perceive and interact with their work environment across four key dimensions: speed, effectiveness, quality, and business impact - [DX](https://getdx.com/blog/developer-experience/)
- DevEx refers to the systems, technology, process, and culture that influence the effectiveness of software development. - [Github](https://github.blog/enterprise-software/collaboration/developer-experience-what-is-it-and-why-should-you-care/)
- We define the developer experience as the skills, tools, frameworks, and methodologies aimed at creating, maintaining, and enhancing code throughout the entire software delivery lifecycle (from creation through production) and improving developer productivity, both individually and collectively. - Forrester
- Developer experience refers to the overall satisfaction and productivity of software developers when using tools, frameworks and platforms to build applications. - [Gartner](https://www.gartner.com/en/software-engineering/topics/developer-experience)

Suprisingly, unlike the UX Field definition, all Developer Experience definitions omit improving developer experiences. Most even omit developer-specific outcomes like satisfaction. My guess is that such definitions evolved through DevEx pitches failing to gain traction with leaders. To be fair, each definition is taken out of its context. The origin articles usually mention improving some developer-specific outcomes. Regardless, it makes sense for a DX Field definition to include improving developer experiences since they're both an outcome and leading indicators for other outcomes, as is increasingly [supported](https://azure.microsoft.com/en-us/blog/quantifying-the-impact-of-developer-experience/) by [research](https://getdx.com/research/the-one-number-you-need-to-increase-roi-per-engineer/).

**The field of Developer Experience (DX, DevEx)** is a professional practice focused on continuously improving business impact and engineering stakeholder outcomes, by improving developers' experiences, by optimizing developers' context aspects (e.g., tools, platforms, portals, processes, workflows, activities, documents, systems, cultures, physical environments).

**Definition Notes**

Positive developer experiences are both developer-specific outcomes and leading indicators for other engineering stakeholder outcomes. They appear in the definition as a leading indicator in order to convey the multi-outcome impact and optimize the definition framing for engineering leaders.

The Developer Experience Field definition explicitly optimizes developer context aspects, not developer experiences (perceptions, emotions, interactions). Directly manipulating experiences without understanding and consent is [unethical](https://doi.org/10.1145/3563657.3596013). Further, persuading developers to change their own experiences is often ineffective without accompanying context changes. Consider improving a team's PR response time to 24 hours. Asking developers to respond faster (an interaction) will work briefly but eventually regress above 24 hours. Context changes like intelligently distributed personal-vs-target status and PR review reminders will more effectively reach and maintain the 24hr target. Developer Experience optimizes context aspects for greater efficacy and ethicality than directly optimizing experiences (perceptions, emotions, and interactions).


## How do the Fields of Developer Experience and Developer Productivity Relate?
- Developer Experience is a subset of Engineering Optimization.
- Both fields focus on maximizing engineering stakeholder outcomes and business impact.
- Improving developers' experiences [improves Engineering optimization metrics](https://azure.microsoft.com/en-us/blog/quantifying-the-impact-of-developer-experience/). The converse is not necessarily true.
- Both fields use similar metrics, though Developer Experience gathers more qualitative data to discover and prioritize context improvements more effectively and efficiently than purely quantitative approaches.
- Both fields optimize similar factors (e.g., tools, processes), though Developer Experience's UX influence encourages more effective and ethical optimizations
