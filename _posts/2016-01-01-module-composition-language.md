---
title: "Module Composition Language"
comments: true
layout: page
tags: [draft, project, javascript, software]
image: island.png
image_alt: test image alt
url: http://github.com/a-laughlin
---

Test project content

More...
Check other files for more on this topic, if I want to continue writing on it.
- outline blog posts:
  - module composition language:
      problems:
        - functions are a graph, but we create each relationship individually
        - what if there was a way to query the graph for what you want instead of manually specifying each relationship in each file?
        - still wrapping my mind around this
        - coupling:
          examples: every "import" adds coupling
          styles coupled to the input structure
          file structure (prevents previewing output)
          input structure (writing a transformer to convert graphql strings to objects, or remove that transformer)
          couples the calls to the output structure
          couples the properties passed to the component structure

        - specifying where every output should go (one React root, one redux store, many leaves)
        - file structures bikeshedding structural lock-in (css)
