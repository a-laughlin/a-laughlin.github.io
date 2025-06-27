---
title: How to Quantify Engineering Efficiency Savings
comments: true
layout: post
tags: [Developer Productivity, DevProd, Developer Experience, DX, DevEx, Engineering Productivity, Engineering Optimization, Engineering Outcomes, Engineering Efficiency]
---

Estimating engineering efficiency savings can help direct actions.

This file contains one approach to estimate the cost of a current problem or an alternate solution. While the example focuses on reducing flaky test cost, the approach is general enough to evaluate the cost savings of many developer infrastructure aspects.

Note that it only calculates a minimum gain from hours saved. It excludes second+ order costs like attrition and rehiring due to platform pain points. Actual costs will be higher. Regardless, these calculations are usually sufficient to prioritize dev infrastructure improvements.

## Estimating Local Flaky Test Cost (CI estimated separately)

First we need to estimate the number of seconds spent on successful and flaky runs per day. Test times and frequencies usually vary across runs and devs' setups. To naively accommodate the variance (statistical tests are outside this post's scope), we sit with 3 devs, choose some representative tests (e.g. 2), and time 3 runs of each outcome (success, rerun, fix, manually test). Then we sum the average values across devs and runs. For example:

```txt
3 sample devs * 2 sample tests * 4 outcomes * 3 sample runs = 72 sample measurements.

seconds_lost_resolving_flakes_per_day =
    affected_devs_count * mean_sample_devs_rerun_count_per_day
      * (mean_rerun_seconds - mean_success_seconds)
  + affected_devs_count * mean_sample_devs_fix_count_per_day
      * (mean_fix_seconds - mean_success_seconds)
  + affected_devs_count * mean_sample_devs_manual_count_per_day
      * (mean_manual_seconds - mean_success_seconds)

hours_lost_1yr =
    seconds_lost_resolving_flakes_per_day
  * 220ish workdays per year
  / 60 for minutes
  / 8 for hours

hours_lost_1yr_solved =
  prototype the solution and repeat the calcs above
  if prototyping needs justification, estimate the hours here

maintenance_hours_1yr =
  estimated developer hours to maintain the current implementation per year

maintenance_hours_1yr_solved =
  estimated developer hours to maintain the solution per year

gross_hours_saved_1yr =
    (hours_lost_1yr - hours_lost_1yr_solved)
  + (maintenance_hours_1yr - maintenance_hours_1yr_solved)

implementation_hours =
  estimated developer hours to implement and deploy a flakiness solution

net_hours_saved_1yr =
  gross_hours_saved_1yr - implementation_hours

---

Leadership will find these calcs more useful for decision making
if you go further to get ROI and payback period for a solution.

cost_per_year_per_dev =
  avg salary + benefits

cost_per_dev_hour =
    cost_per_year_per_dev
  / 220 for working days
  / 8 for hours per day

gross_dollars_saved_1yr =
  gross_hours_saved_1yr * cost_per_dev_hour

gross_dollars_saved_5yr =
  gross_dollars_saved_1yr * 5

implementation_dollars =
  cost_per_dev_hour * implementation_hours

net_dollars_saved_1yr =
  gross_dollars_saved_1yr - implementation_dollars

net_dollars_saved_5yr =
  gross_dollars_saved_5yr - implementation_dollars

ROI_1yr =
  net_dollars_saved_1yr / implementation_dollars * 100

ROI_5yr =
  net_dollars_saved_5yr / implementation_dollars * 100

# payback period is the fraction of the year before savings exceed costs.
payback_period =
  cost_1yr  / net_dollars_saved_1yr

payback_period_in_days =
  payback_period * 365
```
