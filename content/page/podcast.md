---
layout: podcast.njk 
title: Podcast
description: Update from our podcast
pagination:
  data: collections.podcasts
  size: 6
  reverse: true
testdata:
  - item1
  - item2
  - item3
  - item4
permalink: /podcast/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1
  }}/{% endif %}index.html
show_toc: false
---
