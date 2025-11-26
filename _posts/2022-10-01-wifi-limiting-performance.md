---
layout: post
title: "Is Your WiFi Limiting Your Home Internet Performance?"
date: 2022-10-01
description: How WiFi bottlenecks affect your Internet experience and what you can do about it.
tags: wifi measurement performance
categories: data-story
thumbnail: assets/img/blog/iStock-1314037715-e1665782372806-1440x580.jpg
---

*Antonia Sanhueza and Marc Richardson contributed to the drafting and analysis of this data story. Special thanks to Tarun Mangla, Kyle MacMillan, Nicole Marwell, and Nick Feamster for their feedback. To download the data used in this analysis, visit our GitHub data repository (netrics-data).*

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/iStock-1314037715-e1665782372806-1440x580.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

If you're frustrated with the speed of your home Internet, what can you do to improve it? Perhaps, after experiencing lag during a video call with your family, you entertained switching service providers or upgrading your service to an Ultra-Fast Gigabit connection. Surely a connection that fast will save you from the headache of slow Internet for the rest of your online life, right? Maybe not. Before making the leap to a new provider or absorbing the often difficult-to-swallow costs of a high-speed service plan, you might want to consider another culprit of slow Internet: your WiFi connection.

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/wifi-connection-diagram7.svg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 1: WiFi Connection and Wired (Access) Connection in a Household
</div>

Typically, when someone connects to the Internet, they first connect to a WiFi router in their home via a wireless network, which then connects them through a wired network to the rest of the Internet, as shown in Figure 1. A household's WiFi connection might perform differently than the wired (or access) connection. WiFi connection performance is determined by factors independent of your access connection, while the access connection performance is (primarily) determined by the specific service contract you purchase from a service provider (ISP). WiFi bottlenecks occur when the speed of your WiFi connection (the WiFi speed) is worse than the speed of the access connection (the access speed).

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/wifi-data-story-household-bottlenecks1.svg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Figure 2: Comparing a Household with Bottlenecks to a Household Without Bottlenecks
</div>

To illustrate, consider Figure 2, which shows WiFi speeds (yellow line) and access speeds (red line) from November 2021 to April 2022 for two households in Chicago. The household on the left has WiFi speeds below access speeds. WiFi is a bottleneck 100 percent of the time for this household. Conversely, the household on the right has WiFi speed that almost always exceeds access speed and rarely bottlenecks Internet performance. Note that the household with WiFi bottlenecks is paying for Internet service with high access speeds (~700 Mbps) whereas the household with no bottlenecks is paying for low access speeds (~50 Mbps). As we show in the analysis below, the prevalence of WiFi bottlenecks is highly correlated with the access speed that a household purchases.

Why should you care about WiFi bottlenecks? Because they can significantly affect your online experience. Your access connection might support very high speeds, but if your WiFi connection is poor, you are not going to experience good Internet performance. WiFi bottlenecks also have important implications for policies aiming to improve Internet performance in a community. Such policies must include investments directed toward assessing and improving the WiFi equipment that households use to access the Internet.

In the analysis below, we explore how often WiFi bottlenecks occur and the relative difference between WiFi speeds and access speeds using data collected from households in Chicago.

## Background

In April 2021, a Pew Research Center survey found that "roughly half of [U.S.] broadband users report[ed] that they often (12%) or sometimes (37%) experienced problems with the speed, reliability or quality of their high-speed Internet connections at home" and that "29% of broadband users did something to improve the speed, reliability or quality of their [home Internet] since the beginning of the pandemic". The survey highlights that many people experience problems with their Internet performance and want to improve it. But, deciding how best to improve home Internet performance first requires answering an important question: Where do bottlenecks of home Internet performance arise?

To evaluate performance bottlenecks at the household level, we examine speed test data from our Netrics devices. We used Measurement Lab's Network Diagnostic Tool (NDT7) to measure the download speeds of both the WiFi and access connections of 47 households in Chicago from October 2021 to September 2022. We then compare each household's WiFi speed to its access speed over time and analyze the number of times and by how much WiFi speed fell below access speed.

## How Common Are WiFi Bottlenecks?

The first question we explore with the data is how common WiFi bottlenecks are across the households in our sample. To calculate the prevalence of bottlenecks for each household, we compare the household's access speed to its WiFi speed over time and count the number of times that WiFi speed falls below access speed. For example, if a household has 100 measurements of WiFi and access speeds and, in 40 of 100 measurements, WiFi speed is below access speed, then the bottleneck prevalence for this household is 0.4 (40/100).

In our data, 41 of 47 households, or 89 percent, experienced at least one WiFi bottleneck during the period of analysis—that is, a prevalence greater than 0. Thus, we find that WiFi bottlenecks are a common occurrence across households.

However, some households experience WiFi bottlenecks more often than others. Approximately half (22) of the households in our sample experience a WiFi bottleneck in 80 percent or more of their measurements and over a quarter (13) of the households experience a WiFi bottleneck in 100 percent of their measurements. Conversely, 16 households experience a WiFi bottleneck in 20 percent or less of their measurements.

What explains this difference? Access speed. Among households that experience frequent bottlenecks (80 percent or more), the median access speed is 686 Mbps, whereas it is only 57 Mbps for households that rarely experience bottlenecks (20 percent or less).

WiFi bottlenecks are increasingly more prevalent as access speeds increase. Indeed, at access speeds above 400 Mbps, there are very few measurements where WiFi speed exceeds access speed.

## How Large Are WiFi Bottlenecks?

We care not only about the prevalence of WiFi bottlenecks but also about the size of the bottlenecks. If the WiFi speed is performing at 90% of the access speed, it is not significantly impeding the performance of a home's Internet connection. However, if the WiFi speed is 50% of the access speed, then the household is underutilizing a large portion of the Internet service for which it pays when connecting through WiFi.

To evaluate the magnitude of a WiFi bottleneck, we compare the median WiFi speed, access speed, and "actual" speed of households across speed tiers. Here, we use "actual" speed to indicate the real speed at which a household accesses the Internet.

The actual speed is equal to the lower of either the median WiFi speed or the median access speed for a given household for a given measurement. For example, if in measurement A, the household's median access speed is 400 Mbps and its median WiFi speed is 800 Mbps, then the household's actual speed is 400 Mbps. Conversely, if, in measurement B, the household's WiFi speed is 200 Mbps and its access speed is 400 Mbps, then the household's actual speed equals the WiFi speed—that is, 200 Mbps.

If WiFi performance is similar to or better than access performance, then the median actual speed should approximately equal the median access speed for each speed tier. We can see that for the first three speed tiers, the actual speed is very close to the access speed. However, these two values begin to diverge in tiers above 200 Mbps. Access speeds continue to increase as we move up in the speed tier, but actual speeds begin to flatten out and approximate the median WiFi speed. That gap between the actual speed and the access speed is due to the presence of WiFi bottlenecks.

The size of the difference between the actual speed and the access speed for each tier gives us a sense of the magnitude of the WiFi bottlenecks. For example, households in the 200-400 Mbps tier have a median actual speed of 228 Mbps, while the median access speed is 343 Mbps. This gap indicates that, while paying for access speeds between 200 and 400 Mbps, the median household is typically experiencing actual speeds that are 115 Mbps lower. This gap only increases with higher speed tiers. For households in the 400-800 Mbps tier, the gap between access speed and actual speed grows to 340 Mbps, and for households in the 800 Mbps plus tier to 609 Mbps. That is a lot of purchased speed that is not being used because of WiFi bottlenecks.

## Takeaways

If your WiFi connection is the culprit of your slow Internet, your online experience might not improve merely by upgrading to a higher speed tier. As we have shown in the above analysis, WiFi can be a significant bottleneck at access speeds above 200 Mbps. If you are currently subscribed to a speed tier above 200 Mbps, then a more effective option (and cheaper in the long run) to increase speed performance might be to upgrade your router, purchase a WiFi extender, or relocate your router to a place that enables improved signal coverage.

Purchasing a service plan with access speeds of 200 Mbps or higher can make sense if you plan to connect most of your devices to the Internet through wired connections, such as by using an Ethernet cable to link your computer directly to your router or modem. If you plan to use a WiFi network primarily to connect your devices, ask your ISP or consult other resources to identify WiFi equipment that provides speed performance similar to your access speed. Note that the theoretical maximum performance of WiFi equipment might not manifest in real-world settings where household size, building material, and signal interference can result in suboptimal performance.

For state and local broadband offices, policies to improve online experience in a community must reckon with the prevalence of WiFi bottlenecks and their effect on lived Internet performance. Although investments in the last mile and middle mile infrastructure are important, they will not significantly improve a community's online experience if they are not also supplemented with policies to improve the equipment that people use to access the Internet within their homes, such as their WiFi equipment. The analysis above indicates that performance improvements in home WiFi networks are not keeping pace with the improvements in infrastructure. More attention should be given to improving WiFi networks in communities with poor Internet performance.

**Notes:**

1. Another option is to downgrade the access speed you purchase to match the WiFi speed supported by your wireless network. However, doing so might not decrease your Internet bill depending on your existing service contract with an ISP.

## Methodology

The analysis for this data story uses speed test measurements collected from our Internet performance measurement devices deployed in Chicago households from October 2021 through September 2022. Specifically, we use Measurement Lab's Network Diagnostic Tool (NDT7) to measure the download speeds of both the access link (the access speed) and the wireless network (the WiFi speed).

Measurements of the access speed for each household are taken approximately once per hour. Measurements of the WiFi speed are more sporadic. To ensure that we are comparing measurements that were taken around the same time, we resample the data for each household using a 6-hour time window and aggregate using the median access and WiFi speed within each window.

Due to the limited number of WiFi speed measurements available for some households in our study, we restrict our sample of households to those that had a significant number of WiFi measurements during the analysis period. After resampling the data for each household, we drop households from the analysis that have less than 30 measurements with both WiFi speed and access speed. After dropping such households, our sample consists of 43 households with an average of 226 WiFi and access speed observations per household.

For four households in our sample, there is a significant change in the access speed during the period of analysis (most likely due to the household changing their Internet service). To ensure that these changes in the access speed do not affect our analysis, we split the data for these households so that the access speed is constant during the analysis period and treat them as separate households. As a result, we "add" four households to our sample, bringing the total number of households to 47.

To create the speed tiers for our analysis, we bin the households in our sample based on the 95th percentile of a household's access speed. Using this method results in six distinct speed tiers that we use to group households.

For more information about the methodology and analysis supporting this data story, refer to the Jupyter Notebook.

---

*This research is part of the [Internet Innovation Initiative](https://internetequity.org) at the University of Chicago.*
