---
layout: page
title: News
permalink: /news/
description: Data stories and research updates from the Internet Innovation Initiative
nav: true
nav_order: 7
---

<div class="post">

{% if page.pagination.enabled %}
  {% assign postlist = paginator.posts %}
{% else %}
  {% assign postlist = site.posts %}
{% endif %}

<ul class="post-list">
{% for post in postlist %}
  <li>
    <h3>
      <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
    </h3>
    <p class="post-meta">{{ post.date | date: '%B %d, %Y' }}</p>
    <p class="post-description">{{ post.description }}</p>
  </li>
{% endfor %}
</ul>

{% if page.pagination.enabled %}
  {% include pagination.liquid %}
{% endif %}

</div>
