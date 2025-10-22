---
title: Implementing DevEx
comments: true
layout: post
tags: [draft, Developer Productivity, DevProd, Developer Experience, DX, DevEx, Developer Tools, Engineering Productivity, Engineering Optimization, Engineering Outcomes]
---

  The most effective combination of leading indicator application is applying flow indicators to workflows, sociotechnical indicators to organizational structures, then provide teams with ROI, outcome, and indicator data, examples of how teams might use them, and the autonomy to self-organize to maximize ROI and outcomes.

Current strategies indicate leverage points
Current challenges indicate balancing (hindering) loops
Current workflows?


Develop Model

With teams
Develop Connected Model

Leverage Points
Strategies
How do personas interact? Persona flows are nodes.



How to Implement a Developer Experience Program - A Concise and Opinionated Guide
  What is it?
    [devex definition link]
  Why do it?
    [devex definition link]

  When do it?
    The ideal time to start The Devex Cycle is when similar product teams begin creating redundant tools, inefficiencient practices, inconsistent quality, or rework. Many organizations introduce DevEx as part of a major technology shift. It's past time for The Devex Cycle when the build or release processes are slow, teams struggle with technical debt, or tooling/infrastructure tickets accumulate. ([some](https://newsletter.getdx.com/p/when-to-establish-developer-productivity-team) [additional](https://www.swarmia.com/blog/when-to-start-a-platform-team/) [references](https://gigamonkeys.com/flowers/))

  How to Start the Cycle?
    Create (or Reevaluate) DevEx Charter
      Values
        Multiple values are necessary for an effective DevEx Cycle.

        As stakeholders in the software development process, we want to feel respected, that our concerns are heard and understood, that resolutions are thoughtfully considered, and that our concerns are increasingly resolved over time. ICs and leaders are similar.

        Trustworthiness
          > Trust is choosing to make something important to you vulnerable to the actions of someone else. - Brene Brown
          The DevEx cycle requires good stewardship of others' trust. ICs and Leaders need to trust those responsible for DevEx to have their best interests at heart. Trust values are broken down by DevEx cycle phase. They synthesize DORA-highlighted cultural attributes ([high-trust, low-blame](https://dora.dev/capabilities/generative-organizational-culture/), [high-learning](https://dora.dev/capabilities/learning-culture/), experimentational), [types of trust](https://positivepsychology.com/build-trust/#6-different-types-of-trust), and various other sources relevant to that step.
          In listening (transparent, empathetic, respectful, non-judgemental, prompt)
            Maximize feeling heard, maximize useful feedback, maximize buy-in
          In prioritizing and planning (transparent, collaborative, respectful, objective)
            Encourage collaboration, empower devs who want to decrease their pain.
          In implementing (transparent, collaborative, incremental)
          In measuring and reporting (transparent, accurate, safe, relevant, actionable)
        Experimentation
          Fosters innovation, data-driven decision-making, and reduces the risk of large-scale failures by testing new ideas in a controlled environment.
        Developer Workflow Focus
          Aligning platform efforts on holistic developer workflows instead of individual tools/technologies helps maintain a big-picture view, prevents conflicting team goals, prevents silos that resist change, and prevents optimizing a tool at the expense of larger workflow gains.

      Mission
        Stripe: ["Make software engineering easier."](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-bae)
        Slack: ["Make the development experience seamless for all engineers."](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-bae)
        Google: ["Make it fast and easy for developers to deliver great products."](https://newsletter.pragmaticengineer.com/p/measuring-developer-productivity-bae)

        My Suggestion: Maximize outcomes by optimizing developer experiences.

      Top-Level Goals, Signals, and Metrics
        Goals differ with priorities and culture.

        For example's sake, let's start with simply worded mission: "improve revenue per engineer by 10% per year".
        Convert that to a (in theory) measurable goal: "improve developer productivity by 10% per year"

        Define "developer productivity".
        Developer productivity has too many interdependent facets to measure with a single number. Instead it's a balance of factors, as reflected by years of frequent evolution in engineering metrics (hundreds) and related frameworks (e.g., DORA, SPACE, DevEx). Building on those frameworks and experience, the team at DX recently evolved the Core 4. It includes 4 aspects: Efficiency, Effectiveness, Quality, and Business Impact, along with their related metrics.
        Let's redefine our developer productivity goal using those aspects.
        "improve developer efficiency, effectiveness, quality, and impact by 10% each"
        While that goal is simple, it stops being meaningful at 90%, and high 90%s may be unrealistic in some contexts. Let's express it more robustly by restating it in terms of the gap between our current and desired state.
        "close the gap to our desired efficiency, effectiveness, quality, and impact by 10% per year". Note that DX can help discover realistic desired states with their in-app benchmarks.
        year_goal(current,target,improvement) = (target-current) * improvement
        10% gap improvement = (.95 - .6) * .1 = 3.5% absolute improvement

        METRICS
        efficiency: Diffs/Eng (lagging)
          Caution: granular throughput metrics can create fear and gamification
          Organizations can effectively utilize diffs per FTE successfully under three preconditions: first, by counterbalancing with oppositional metrics like the Developer Experience Index. Second, by not setting targets or rewards tied to them. Last, by properly communicating and rolling out metrics in such a way that does not result in abuse.
        effectiveness: DXI (lagging)
        quality: Change Success Rate (lagging)
        impact: % of time on new capabilities (lagging)
        https://abseil.io/resources/swe-book/html/ch07.html
        Conceptually, we can think of efficiency, effectiveness, quality like cleanliness. We can't
        Efficiency, Effectiveness, and Quality are 0-100 p
        "improve developer efficiency, effectiveness, quality, and impact by 10%"
        In an ideal world, we could directly measure those.

        Difference between product and platform goals, signals, metrics
        DevEx Metrics on how served teams are doing
        DevEx Metrics on how own team is doing
        Can always add more metrics, but having these as a baseline helps.
        More granular metrics
        Review Frequency and Structure
        Review Structure

      Expectations for each section: (Note to self - don't)

        Listening Phase (when, where, how,in-scope, out-of-scope)
        Feedback Reporting Phase (when, where, how,in-scope, out-of-scope)
        Prioritizing Phase (when, where, how,in-scope, out-of-scope)
        Planning Phase (when, where, how,in-scope, out-of-scope)
        Implementing Phase (when, where, how,in-scope, out-of-scope)
        Measuring Phase (when, where, how,in-scope, out-of-scope)
        Results Reporting Phase (when, where, how,in-scope, out-of-scope)

    Create (or Reevaluate) Personas
      workflows to personas.

  How to Run The Cycle:
    Listening Phase
      Hear Leadership
        Ask
      Hear Devs
        1st Cycle: Establish the pain points list
        Establish when, where, and how you're listening
          If you're at the champions stage (no platform with DevEx approach yet ), ask
          If you have 1 or more platform team already,
          Assuming at least 1 platform team, start Survey (DX snapshots recommended)
          Start a thread in the slack/teams channel most relevant to the Persona's devs
          In the Persona Thread, post the relevant raw survey results
          For top pain points that intersect with platform teams' areas, message those teams a heads up.
          In the Persona Thread, analysis
            including the top persona pain points
            diagnostic metrics trends
            Individually
            if any of those trends are decreasing for a subset of teams
              add a section with recommended improvement metrics for that diagnostic metric (e.g., if efficiency is trending down, suggest metrics like time to review PRs and instructions on how to implement it)
              Keep it general. Assume leads want to improve their team's performance. Don't call out teams.

            Here are the from the survey. Each will get its own thread to ensure we all share the same understanding. Any impactful problems missing from this list?
            Posting in the persona channel maximizes the number of devs heard.
          Email the survey results and analysis, linking to the post so folks have an opportunity to respond.
          In the appropriate persona channel, post a thread to validate and clarify the problem so developers feel heard.
          Once the problem is clear, move on to collaborative solutions discussion. If the relative
        Clear hearing path.
    Feedback Reporting Phase
      Listen to devs
      report to group leaders
        segment by everyone, division, team
        send analysis highlights 1-pager to leader
          e.g., review times,
        include FYI with flows analysis insights that are going to flow leaders
      report to flow (persona) leaders
        flow analysis
        upcoming
      report to
      listen to leaders
    Prioritizing Phase
      Reconcile leadership and dev feedback
    Planning Phase
    Implementing Phase
      First Cyclical improvement:
        Start survey-based cycle (bianually to start)
        Get results fast.
        Build trust.
        Send an analysis highlights 1-pager to leadership.
      Reevaluate existing teams/roles/responsibilities/goals/signals/metrics.
      Consistent resolution cycle builds trust.

        If only champions:
          Start survey, but ask.
        Communicating hearing (empathize, validate, confirm understanding)
    Measuring Phase
    Results Reporting Phase
    The DevEx Cycle:
      Improve.
        Me: prioritize around back of napkin calculations for different solutions. Like core web vitals improvements improve impact but not effectiveness efficiency or quality.
        For getting from problems to solutions, partnering with ICS to come up with solutions and quantify the value.
        Get proactive:
          Establish Personas (cluster by workflow)
          DevEx: Create a spreadsheet for each persona's workflow.
          Establish a Champion for each Persona
          DevEx + Persona Champion: Adding workflow steps to the sheet, adding tools used, measuring the time that each step takes.
          Biannually:
            Persona Champion: produces an analysis document of top actionable pain points based on the raw data: categorizing the free-text feedback, evaluating satisfaction scores, evaluating telemetry data. Also interviewing developers to clarify pain points, and answering stakeholder questions about the analysis.
            DevEx: Immediately shares analysis document with relevant stakeholders, including slack/teams channels relevant to persona members for transparency and showing action. When sharing with platform teams whose tools may be involved, calls out top pain points as a "heads up".
            DevEx: gathers solution ideas in relevant slack/teams channels
            DevEx: works with Persona Champion to measure pain point efficiency and business impact effects, and estimate solutions' gains
            DevEx, Persona Champion, Platform team: estimate solutions' implementation time and calendar time.
            DevEx calculates the ROI and payback period of solutions.
            DevEx & Platform Team: Devex meets with whoever prioritizes the solutions to choose one (e.g., platform engineering manager and/or platform product manager).
            DevEx publishes chosen solutions and rationale for transparency and showing action.
            Platform Team: implements solution
            DevEx: works with Persona Champion to measure solution gains
            DevEx: reports solution gains (including estimate vs actual) for transparency and showing action.
        Review preexisting metrics.
        to establish baselines and discover initial pain points
        https://getdx.com/blog/how-dx-solves-challenges-with-metrics/
        https://getdx.com/blog/dxsnapshots-just-a-survey/
          "Try DX Snapshots at no cost"
        Make the responses public (and publicized).
        Aggregate similar issues (linking back to their responses)
        Publish aggregated issues as a spreadsheet. Enable commenting on it to ensure accurate aggregation,maximize feeling heard, and minimize misunderstandings.
        Ask developers what they think the most costly problems are.
        Ask devs to estimate the number of engineers experiencing this. Keep track of this discussion since it'll be useful for establishing personas later.
        Sit down with devs to understand and measure the costly problems.
        Estimate the organizational cost by the number of devs reporting it.
        Dive deep on those to understand the problem and estimate the cost of the current approach.
        Estimate the ROI of potential solutions.
        Prioritize the points based on ROI & payback period. I would say painfulness, but it's subjective.
        Fix them.
        Measure the results.
        Report the efficiency, quality, and impact results.
        On the next survey, report effectiveness results.
        Report results in developer experience and satisfaction
        How improve each of the goals:
      Communicating progress.
      Communicating results.


    Analyze data:
      What statistical test should I use? https://statsandr.com/blog/what-statistical-test-should-i-do/

    Continuous Cyclical improvement:


    Establish Telemetry
    Survey Design:

      Best Practices for Developing and Validating Scales for Health, Social, and Behavioral Research: A Primer https://doi.org/10.3389/fpubh.2018.00149 (i.e., survey design)
      Applied Best Practices ^ at Google (Software Development Is a Team Sport: https://ieeexplore.ieee.org/document/10953349/references#references)
      https://www.michaelagreiler.com/design-developer-experience-survey/
    Survey Data Analysis
      How DORA Analyzes their results: https://www.youtube.com/watch?v=FcvyrZDja_4&t=146s
      eliminate ambiguity and bias, bias (social desirability, recall, question order)
      construct validity: Does a measure reflect its desired concept?
      internal validity: Do confounding factors exist?
      external validity: Do the measures generalize to broader population?
    Persona Champion: supports related platform team(s) in understanding the pain points
    Analyze paths
      https://userpilot.com/blog/user-path-analysis/
      https://userpilot.com/blog/friction-points/

    1 product team:
      talk with folks.
    >=2 product teams with similar workflows
      Integrating DevEx principles from the start will get you the greatest return on your platform efforts.
      2 or more product teams with similar workflows exist
      Those leads choose a DevEx champion.
      Team leads meet monthly to discuss DevEx issues.
      DevEx champions create values document to ensure trustworthy measurement, impartiality, transparency.
      DevEx champions spend .25 time (1 week a month) implement DevEx measurement,conduct analysis,providing insights to their leads, and fixing pain points.
      DevEx champions collectively publish an org-level analysis.

      If there are concerns around champions' adhering to values, or DevEx metrics indicate that redundancies, inefficiencies, and low satisfaction are increasing beyond what champions can handle, it's time for a platform team.
      // workflow team (enable product teams) - goals/metrics are based on workflow teams' DevEx
      // workflow teams (enable product teams) - goals/metrics are based on workflow teams' DevEx
      // workflow subset teams (enable workflow teams) - goals/metrics are based on workflow teams' DevEx
      // once multiple workflow teams have a shared stage, and the goals for that stage are the same, then that team can split to a workflow-stage team
    Platform Team
      Platform team goals must be tied to workflow metrics somehow, either directly if devex and platform are combined, or indirectly if devex must coordinate teams.
      Distributed Champions
        Danger is getting focused on specific tools
        Danger is losing change efficacy (compensate with: all platform teams have goals for responsiveness, or transparency provides sufficient pushback, or also have a workflow-aligned person who )
      Consolidated Champions
        Danger is losing touch with workflows (compensate with goals based on workflow perf)
        Danger is
      Workflow-aligned teams.

        Team of Champions vs distributed champions.
        It can be easy to get focused on tools and forget the whole stream.
      Need someone responsible for analyzing the workflow. (champions within workflows, or devex folks dedicated)
      Need someone responsible for making the improvements.
      Whether that's specific devex folks, or champions who actually use it day to day.
      Champion Responsibilities narrow: analyze devex data, interview engineers to clarify data, and provide insights to their teams.
      DevEx Person responsibilities: supporting champions, maintaining personas, trustworthy measurement, impartiality, transparency, fast feedback for affected stakeholders (product, platform, and leadership).
    Multiple Platform Teams

      DevEx team (people responsible for workflows, support, teach, coordinate champions)
      Tooling-aligned teams support workflow-aligned teams.
      Once 2 platform teams form, DevEx splits to its own team.

      fast feedback for affected stakeholders (product, platform, and leadership).

  How do it?


  Key responsibilities

  Define and start measuring productivity
    speed: Diffs/Eng (lagging)
      Caution: granular throughput metrics can create fear and gamification
      Organizations can effectively utilize diffs per FTE successfully under three preconditions: first, by counterbalancing with oppositional metrics like the Developer Experience Index. Second, by not setting targets or rewards tied to them. Last, by properly communicating and rolling out metrics in such a way that does not result in abuse.
    experience: DXI (lagging)
    quality: Change Success Rate (lagging)
    impact: % of time on new capabilities (lagging)
  Start Surveys
    Why?
      establishes baseline
    how?

  Develop personas
    definition? TODO
    why? TODO
      to cluster workflows and contexts
      to provide a common language and memory aid for communication
      to target training
      to facilitate empathy
      to measure workflow changes more granularly
    how? TODO

  Instrument system metrics
    System metrics are
    Prevent or track overlapping experiments
  Instrument experience sampling (gets ROI)
    why? TODO
    how?
      Determine the actions that define the start of tasks/activities
      Instrument start->start between activities
      log to a graph database (or any existing analytics tool that allows slicing and dicing path data. Bonus if it supports api-based A/B tests.)
      Prevent or track overlapping experiments

How roll out AI?
  Before starting
    Establish DevEx Team
    Ensure baselines in place (any existing ones?)
    Develop policies
      What tools do we allow?
      What guardrails are in place to mitigate risks?
      How do we check for generated code compliance with styles, guidelines, apis, security, etc?
      How prevent overlapping experiments?


    Determine the actions that define the start of tasks/activities
    Instrument start->start between activities
    (this gets ROI) to a graph database (or any existing analytics tool that allows slicing and dicing path data)
    Enable sampling experience of previous step on start of next activity
    Determine resources we're committing: people, time, tools.
    What's our roll-out strategy?
      Communication plan.
      See "How increase AI adoption?"


  Challenges to effectiveness?
    role conflicts
    roles aligned to tools or processes instead of personas can lead to local optima




How increase AI adoption?
  in-ide nudges/popups (AirBnB - impact unknown)
  Targeted training - Dropbox increased AI tool adoption on high-value use cases from 10% to over 80% in a single quarter
  Challenges to adoption?
    framing as "increase productivity" vs "reduce toil and ..."
    too much change
    unfamiliarity
    insufficient accuracy (misunderstands intent or context)
    inconvenience (e.g., bolted on, vs an intuitive part of the process)

How increase AI results?
  resolve role conflicts (AirBnB)
  align roles to personas instead of tools or processes (to avoid local optima)


What metrics to use?
  - Core4 (lagging)
  - GitHub Copilot acceptance rates (Telemetry: Netflix)
  - Number of AI-generated lines of code that make it to production (Telemetry: Netflix)
  - incident-per-commit rates to ensure they aren’t sacrificing reliability for raw speed (Telemetry: Pinterest)
  Challenges to measurement?
    insufficient statistical power to measure results
    implementation time
    implementatin difficulty

Where to put effort?
  Measure tasks to find opportunities and baselines.
  Experiment with solutions (Partner with other teams, Hackathons)
  Go granular to see effects


How much improvement can we expect?
  highly-task dependent
  2% (2024 DORA)
  Benchmarks in a tool like DX provide more specific data per-metric
  Pinterest reported saving approximately 1,000 engineering hours weekly through their AI tooling initiatives, with potential for significant additional gains.


Buzzwords to look up:
  IAC Infrastucture as Code
  ci/cd
  devops
  SRE

Developing Teams, Roles, and Responsibilities
  Evolution:
    Product teams
      Start with the teams that work in the company's primary value stream. For companies that build products, they're often the called product teams.
    Platform workgroups:
      Once 2 similar product teams exist, differences in their approaches eventually yield redundancies, inconsistencies, and rework, but not enough to merit a dedicated team. Workgroups form as-needed to standardize and optimize a specific one of those concerns or related cluster of them. They dissolve after completion to prevent premature optimization and unnecessary calcification. They include 1+ members from each stakeholding team to ensure representative solutions and prevent rework.

      How to know when a workgroup is necessary?
      Time Allocation?
        Product delivery pressures often prevent standardization and optimization efforts.
        Initially budgeting 10% of product teams' time for members' workgroup participation is a [best practice](TODO link).
        The ideal first workgroup foci are DevEx responsibilities, including initiating surveys to establish a baseline, instrumenting metrics for any unmeasured signals, reporting survey results, and establishing ways to estimate and measure the value of prospective workgroup efforts. Additional workgroup creation and time allocation can be prioritized based on those estimates. Efficiency gains are an easy and trust-building initial focus for measurement and estimation since they lend themselves to [ROI estimation](TODO link to gist).

    Platform Teams:
      Team goals should be in terms of percents of top level engineering goals.
      Platform Teams or Infrastructure Teams. Once a concern workgroups exceed the
      Once redundancies, inconsistencies, and rework exceed workgroups capacity to resolve them, form a workflow team.
      Let's say we have 2 Workflow teams (Web, IOS)
      and a Workflow Slice Team (Code Review Slice)

      Let's say workflow 1 is 40% of the PRs, and workflow 2 is 60% of the PRs.
      Surveys and discussion with devs indicate a possibility of speeding up workflow 1 by 2% and workflow 2 by 4%.
      2%*40% + 4%*60% = 3.2% top level efficiency goal for the workflow slice team.

      Phrasing their goals in terms of top level gains enables comparing effort allocation across slices.
      If that's a workflow slice working group, they can choose another project.
      Prefer Project Groups to Champions to Teams to maximize adaptability and engagement.
      It's counterproductive for such teams to declare a 20% improvement when the business value is only 6%. In introduces multiple cognitive biases (anchoring)

  Roles Evolution:
    Roles will vary organically based on organization, strengths.
    Within teams, roles and responsibilities will adapt based on organization, titles, and even individuals strengths.

  Responsibilities:
    DevEx
      https://getdx.com/blog/developer-experience-team-scope/
      https://getdx.com/blog/devops-transformation/
      Establish Personas
      DRIs for each Persona.
      For devex leaders:
        From [Getting Airbnb’s Platform team to drive more impact: Reorganizing, defining strategy, and selecting metrics](https://newsletter.getdx.com/p/getting-airbnbs-platform-team-to)
        Strong communication
        Stakeholder engagement
        Storytelling
        Deep developer empathy
        Experience building both end-user and internal tools
        Product mindset focused on real pain points

    Engineering Leaders (CTO, VP Engineering, etc.):
      Accountable for persona teams' diagnostic metrics
      Accountable and Responsible for creating a culture where they will improve, setting clear expectations and holding teams accountable to use the metrics.
      Responsible for the aggregate diagnostic metrics of all teams.
      Levers:
        Set clear expectations for teams to use their metrics to improve
        Systematize accountability for that improvement
        Create the space for experimentation to achieve the improvement. Otherwise delivery pressure will halt continuous improvement before it starts.
        Mention the metrics constantly in every possible area to keep them top-of-mind: retrospectives, planning meetings, all-hands meetings, 1:1s, everywhere.
      https://getdx.com/uploads/operationalizing-developer-productivity-metrics.pdf

    Platform teams:
      Leaders are responsible for improving their own team's diagnostic metrics
      AND
      Responsible for improving their product teams' aggregate diagnostic metrics
      Gets the right information to the right leads at the right time in the right way to improve those diagnostic metrics.
      Responsible for trust and buy-in of their persona teams.

    Product teams:
      Leaders are accountable for their diagnostic metrics
      Responsible are accountable for their persona teams' diagnostic metrics
      Levers:
        Helping platform teams understand the problems and evaluate solutions.
        Transforming diagnostic metrics into contributing improvement metrics.
        Running experiments to nudge the improvement metrics and eventually the diagnostic metrics.
