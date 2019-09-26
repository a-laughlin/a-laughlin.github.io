---
title: "Cost Per Change"
comments: true
layout: page
tags: [project, javascript]
image: /images/cost-per-change.png
image_alt: cost-per-change tree and bar charts
index_loc: https://github.com/a-laughlin/cost-per-change
---

Which files have the highest return on refactoring?  How much does it cost to make a code change to a given file currently?  This project attempts to answer those questions for any arbitrary JavaScript repo (and versions within the same repo) through loading the code from github's API and statically analyzing it for a number of factors.

The implementation pairs a redux store with XStream to establish a dataflow graph separate from the HTML tree, then maps that graph directly to the components where needed.  I also implemented it with Mobx at one point, but didn't like how Mobx played (or not) with other observables.  Want to reimplement this one with hooks.

Tech: React, GraphQL (Apollo & Github), Redux, Xstream (Observables), Mobx.
