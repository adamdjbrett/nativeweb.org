---
layout: blog.njk 
title: Blog
description: Update from our blog
pagination:
  data: collections.posts
  size: 6
  reverse: true
testdata:
  - item1
  - item2
  - item3
  - item4
permalink: /blog/{% if pagination.pageNumber > 0 %}{{ pagination.pageNumber + 1
  }}/{% endif %}index.html
show_toc: false
show_post_list: false
show_podcast: false
show_about: false
show_web_status: 
  show: false
  show_archive: false
---
