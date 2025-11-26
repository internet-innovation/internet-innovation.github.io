---
layout: page
title: Blog
permalink: /blog/
description: Data stories and research updates from the Internet Innovation Initiative
nav: true
nav_order: 6
---

<div class="post">

{% assign blog_name_size = site.blog_name | size %}
{% assign blog_description_size = site.blog_description | size %}

{% if blog_name_size > 0 or blog_description_size > 0 %}
  <div class="header-bar">
    <h1>{{ site.blog_name }}</h1>
    <h2>{{ site.blog_description }}</h2>
  </div>
{% endif %}

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
