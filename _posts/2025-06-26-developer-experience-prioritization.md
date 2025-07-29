---
title: Developer Experience Prioritization
comments: true
layout: post
tags: [Developer Productivity, DevProd, Developer Experience, DX, DevEx, Engineering Productivity, Engineering Optimization, Engineering Outcomes, Engineering Efficiency]
---
The purpose of this article is to provide a straightforward way for engineering teams to quantify their impact, and to help developer experience teams build stakeholder trust through transparent and predictable prioritization.

Its inputs are estimates that can be plugged into a prioritization framework like [RICE](https://www.intercom.com/blog/rice-simple-prioritization-for-product-managers/). It is most useful for mature efforts with many quantified problems to solve and stakeholders who are comfortable making decisions with data. For teams getting started, low hanging fruit is usually present in common workflows. Prioritize by your DevEx Survey's biggest reported pain points, and focus instead on [quantifying workflow efficiency gains](https://www.a-laughlin.com/how-quantify-engineering-efficiency-savings/) to measure results.

note: All numbers involved are estimates for prioritization.

Each org (e.g. sales, marketing, engineering) has its own way of calculating expected revenue, costs, and savings. This calculation combines them into a number to help teams quantify their impact, and to aid product/engineering prioritization.

To estimate engineering numbers, see https://www.a-laughlin.com/how-quantify-engineering-efficiency-savings/. For others, talk with relevant stakeholders.

marketing_implementation_costs = 123
sales_implementation_costs = 123
engineering_implementation_costs = 123

marketing_maintenance_costs_1yr =  123
sales_maintenance_costs_1yr = 123
engineering_maintenance_costs_1yr = 123

sales_gross_revenue_1yr = 123
marketing_gross_revenue_1yr = 123
__other__gross_revenue_1yr = 123
engineering_cost_saved_1yr = 123

implementation_costs =
    marketing_implementation_costs
  + sales_implementation_costs
  + engineering_implementation_costs

maintenance_costs_1yr =
    marketing_maintenance_costs_1yr
  + sales_maintenance_costs_1yr
  + engineering_maintenance_costs_1yr

costs_1yr =
    implementation_costs
  + maintenance_costs_1yr

gross_revenue_1yr =
    sales_gross_revenue_1yr
  + marketing_gross_revenue_1yr
  + __other__gross_revenue_1yr
  + engineering_cost_saved_1yr

net_revenue_1yr =
  	gross_revenue_1yr
  - costs_1yr

ROI_1yr =
  	net_revenue_1yr
  / costs_1yr
  * 100

payback_period_in_days =
  	costs_1yr
  / net_revenue_1yr
  * 365
