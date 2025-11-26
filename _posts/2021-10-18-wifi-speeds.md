---
layout: post
title: "Can My Wi-Fi Deliver the Internet Speeds I Pay For?"
date: 2021-10-18
description: Research reveals a significant gap between promised and delivered WiFi performance in home networks.
tags: wifi measurement research
categories: data-story
thumbnail: assets/img/blog/lan-vs-isp.png
---

*By James Saxon, University of Chicago*

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/lan-vs-isp.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

With support from data.org, we have assembled and deployed a suite of tests for home Internet performance.

One of my favorites is a test of home Wi-Fi bandwidths. In simple terms, our question is: if I buy some Internet speed from Comcast, can I actually get it from my router to my laptop? By sticking a speedtest server on the router and engaging participants to install a browser extension that regularly checks the speed, we can monitor the capacity of the local network. We then compare that capacity with the bandwidth measured from the router out to Ookla Speedtest, on the larger Internet. If your Wi-Fi bandwidth is lower than your bandwidth from the ISP, you can't get what you're paying for.

On my own home network, with a dinky 60 Mbps connection, this was true fully a quarter of the time over the last two months. My connection tier is the same one Comcast offers through its low-cost Internet Essentials program. Of course, my median Wi-Fi speed of 245 Mbps exceeds what Comcast delivers, and at its best I record over 500 Mbps. But when there are issues, it's the Wi-Fi.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/netrics-lan.svg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Wi-Fi bandwidth on my home network, as measured from my laptops to a raspberry pi wired to the router, as shown above.
</div>

Looking at participants' data from across Chicago, the median across households of the median across tests is just 185 Mbps. In other words, the "average" user got less than 200 Mbps, on average. Since many people subscribe to Internet contracts with hundreds of megabits per second in the downstream direction, nearly two-thirds of participants' ISPs deliver more to their home than their Wi-Fi can deliver to their devices. For a few tips on setting up your Wi-Fi, see my last post.

This has important implications, as Congress and the Biden Administration weigh investments in broadband infrastructures through the American Recovery Plan. Personally, I see enormous potential for investment in building-level Wi-Fi infrastructures, especially in city housing authorities. This is essentially what groups like Education Superhighway are already doing. Renting a modem/router combo from an ISP is quite expensive, although it is included in the Internet Essentials program. Installing it requires a real level of expertise. Why not build out the Wi-Fi professionally, and buy fiber "wholesale" for the entire building?

---

*This research is part of the [Internet Innovation Initiative](https://internetequity.org) at the University of Chicago.*
