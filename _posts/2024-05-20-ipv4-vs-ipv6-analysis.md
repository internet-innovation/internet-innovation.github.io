---
layout: post
title: "Case Study: IPv4 vs. IPv6 Internet Speed Analysis"
date: 2024-05-20
description: Examining how Internet speed differs between IPv4 and IPv6 protocols.
tags: ipv4 ipv6 measurement case-study
categories: case-study
thumbnail: assets/img/blog/ipv6-stats.png
---

*This blog post is by one of our project collaborators, Amanda Hsu, a researcher at Georgia Institute of Technology who is using our platform to conduct research.*

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/ipv6-stats.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Google recently reports over 47% of its users connect over IPv6, a number that has been steadily increasing in the past 20 years. Source: https://www.google.com/intl/en/ipv6/statistics.html
</div>

Every device connected to the Internet, whether it's your computer, phone, or refrigerator, has an IP address. IP addresses are the Internet's mailing system; they tell routers where to send their packets and allow machines to connect. However, as the Internet has evolved, IP addressing has become challenging.

At the Internet's conception, IPv4 was the only type of IP address. IPv4 addresses have 32 bits, which means that there are 2³² (over 4 billion) total addresses. While that may seem like a lot, the Internet ran out of these addresses in 2019 [3]. Fortunately, this was anticipated, and IPv6 addressing was created long beforehand. IPv6 addresses have 128 bits, which means there are 2¹²⁸ (over 340 trillion trillion trillion) unique addresses. Now, with IPv4 and IPv6 addresses, it is unlikely the Internet will ever run out.

Since the Internet started approaching IPv4 exhaustion, IPv6 deployment has increased exponentially over the past 20 years. This has allowed the Internet to continue expanding. However, it is now a hybrid of IPv4, IPv6, and dual-stack (both IPv4 and IPv6) networks. Household Internet connections are no different, with some residences using IPv4, IPv6, or both, depending on their service provider. Despite both being IP protocols, IPv4 and IPv6 cannot connect by default, often operate over different Internet paths, may be processed differently by router hardware, and, therefore, experience different levels of loss and latency.

Despite both being IP protocols, IPv4 and IPv6 cannot communicate directly with each other without the use of transition technologies to bridge the gap. Homes can have access to IPv4, IPv6, or both. In this project, we focus on residences with both IPv4 and IPv6.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/ipv4-ipv6-comparison.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Despite this, most prior work that measures residential Internet speed does not account for this important factor. Anecdotally, many Internet users have noticed a difference between their IPv4 and IPv6 speeds [1,2]. However, there has yet to be a large-scale study that empirically measures the differences in speed tests on IPv4 and IPv6.

In this project, we seek to understand how Internet speed varies between IPv4 and IPv6 and why. We perform speed tests over IPv4 and IPv6 using the Internet Innovation Initiative platform and compare the results over time. We perform these speed tests one after another to capture similar conditions. Then, we directly compare the results and correlate the speed test conditions to the results.

In this project, we specifically seek to answer the following research questions:

- How does using IPv4 or IPv6 affect a user's Internet speed?
- How do standard speed tests, such as Ookla and NDT7, change with using IPv4 and IPv6?
- Why do measured speeds vary over IPv4 and IPv6? Do the paths introduce bottlenecks? Or do routers process IPv4 and IPv6 packets at different speeds?

With the results of this project, we hope to encourage future research to use IPv4 and IPv6 as a factor in Internet speed analysis. Large-scale Internet speed measurements are often used to inform policies, such as those by the FCC [4] on broadband speed coverage. With an in-depth understanding of broadband coverage, researchers and policy-makers alike can identify communities with low availability and provide them with resources for better Internet access. By understanding the effect of IPv4 and IPv6, we hope broadband coverage analysis will be more accurate and impactful.

Early results of our measurements indicate that IPv4 and IPv6 degrade in speed under different conditions. For example, at times when IPv4 speed is slower, IPv6 speed is not necessarily also affected. Moreover, the conditions that these speeds degrade are correlated with the Internet Service Provider.

We look forward to understanding these circumstances in more depth throughout this project.

**References:**

[1] https://community.netgear.com/t5/Nighthawk-Wi-Fi-5-AC-Routers/Why-IPv6-can-be-slower-than-IPv4/td-p/2231369

[2] https://community.ui.com/questions/High-load-on-USG-after-enabling-IPv6/964b80ce-325a-4cfa-b25a-cbecd4afcfaf

[3] https://www.ripe.net/manage-ips-and-asns/ipv4/ipv4-run-out/

[4] https://www.fcc.gov/BroadbandData

---

*This research is part of the [Internet Innovation Initiative](https://internetequity.org) at the University of Chicago.*
