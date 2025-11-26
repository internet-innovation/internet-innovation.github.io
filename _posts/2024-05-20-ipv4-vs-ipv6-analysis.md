---
layout: post
title: "Case Study: IPv4 vs. IPv6 Internet Speed Analysis"
date: 2024-05-20
description: Examining how Internet speed differs between IPv4 and IPv6 protocols using the Internet Innovation Initiative research platform.
tags: ipv4 ipv6 measurement case-study
categories: case-study
thumbnail: assets/img/blog/ipv6-stats.png
---

*By Amanda Hsu, Georgia Institute of Technology*

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/ipv6-stats.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    IPv6 adoption statistics showing growth over time.
</div>

## Overview

This case study examines how Internet speed differs between IPv4 and IPv6 protocols using the Internet Innovation Initiative research platform. The researcher investigates whether connection speeds vary depending on which protocol users employ.

## Background on IP Addressing

IPv4 addresses, limited to 32 bits (approximately 4 billion addresses), became exhausted in 2019. IPv6, with 128 bits, provides vastly more addresses—over 340 trillion trillion trillion unique addresses.

## Current Adoption

Google reports that over 47% of its users connect via IPv6, reflecting steady growth over two decades.

## Research Questions

The investigation seeks to answer:
- Does IPv4 or IPv6 affect user speeds?
- How do standard speed tests like Ookla and NDT7 differ between protocols?
- Do speed variations stem from different network paths or router processing differences?

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/ipv4-ipv6-comparison.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Comparison of IPv4 and IPv6 performance measurements.
</div>

## Preliminary Findings

Early measurements suggest the two protocols degrade in speed under different conditions, with IPv4 slowdowns not necessarily affecting IPv6 speeds simultaneously. Performance variations correlate with Internet Service Provider operations.

## Broader Impact

Understanding IPv4/IPv6 performance differences could improve broadband coverage analysis used for FCC policy decisions regarding underserved communities.

---

*This research is part of the [Internet Innovation Initiative](https://internetequity.org) at the University of Chicago.*
