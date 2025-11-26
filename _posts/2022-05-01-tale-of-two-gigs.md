---
layout: post
title: A Tale of Two Gigs
date: 2022-05-01
description: We compare the Internet performance of two households in different neighborhoods that subscribe to the same Internet service offering.
tags: measurement netrics chicago
categories: data-story
thumbnail: assets/img/blog/iStock-1372368387-1440x580.jpg
---

*By Marc Richardson*

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/iStock-1372368387-1440x580.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Overview

While much attention has been paid to mapping the disparities in availability and adoption of Internet services across communities in the United States, there has been less focus on measuring in Internet performance and user experience. With the development of new datasets containing continuous, granular, and holistic data on Internet performance at the household-level, such as the data collected through the Netrics platform developed here at the University of Chicago, we can begin to ask questions about whether communities that have equal access to the Internet might still experience vastly different performance when online.

## Inquiry

When two people purchase a product or service from the same supplier, they typically expect to receive the same product in terms of quality and experience regardless of where the product or service was purchased. For example, two people purchasing a new 2022 Toyota Camry expect to receive the same car whether they purchase that car in New York City or in Los Angeles. Similarly, two people living in different communities who purchase the same Internet service from the same Internet service provider (ISP) should be able to expect to receive the same performance and reliability from that service. But, do they, in fact, receive the same service?

In this data story, we explore whether two households in different neighborhoods in Chicago that subscribe to the same service plan from a given ISP experience comparable performance and reliability when using that service.

## Key Takeaways

- The use of existing datasets on Internet performance to compare the online experiences of different communities is hindered by biases in measurement and sampling. To study disparities in Internet performance across communities, we need continuous, robust measurement of Internet connectivity at the household level.

- The Internet Innovation Initiative developed a new toolkit and measurement platform, Netrics, that makes it possible to uncover and scrutinize differences in the online experience of households in different communities, opening new avenues for critical research and policy insights into the digital divide.

- We see different levels of Internet performance for subscribers to the same service in different neighborhoods. This observation motivates the need to study these disparities over time with larger, more carefully constructed samples.

### Question

Consider two households on the same plan from the same internet service provider: how much might their experiences differ in terms of performance and reliability?

## Analysis

Existing datasets on Internet performance are limited in their ability to reveal inequality in online experiences at the neighborhood level. The data that our Netrics platform collects allows us to start exploring this critical domain of analysis.

At the outset, it bears noting that existing datasets on Internet performance cannot easily be employed to study performance disparity across small geographic areas, such as neighborhoods. The sampling techniques of existing datasets do not capture Internet performance in some neighborhoods and cannot say anything about the online experience for those residents. Furthermore, the measurements collected by existing datasets are not continuous and do not represent the "lived experience" of being online within these communities. And, in most cases, the measurements do not capture the true Internet capacity delivered to these communities, due to the influence of other factors such as WiFi performance.

The data that our Netrics platform collects overcomes these limitations with continuous, comprehensive measurements of Internet performance at the Internet access point of a household. A comparison of two households subscribed to Xfinity's gigabit service in different Chicago neighborhoods—Hyde Park and South Shore—reveals a disparity in Internet performance. With Netrics data, we can highlight this disparity both at an aggregate level and overtime for these two households. Although a comparison of two households is clearly far too small to draw general conclusions, the characteristics of the Internet connectivity in these two households highlight the potential of performing such comparisons across neighborhoods.

## Limitations of Existing Datasets

Why are existing datasets on Internet performance insufficient for answering the question posed above? To illustrate the challenges with existing datasets, we will use Speedtest Intelligence® data from Ookla® as an example. Our intention here is not to point out the limitations of any particular method or dataset, but rather to illustrate that for any given dataset—specifically data collected with crowdsourcing or convenience samples—there are some limitations to the types of questions that can be answered.

Ookla collects performance data when a person runs Ookla's Speedtest on their computer or mobile device by going to speedtest.net or through Ookla's Speedtest CLI. As one of our researchers explains in this paper, Ookla's Speedtests are much more likely to be initiated by people living in wealthy neighborhoods, where Internet infrastructure is less likely to suffer from underinvestment. You can see the blind spots of this kind of "crowdsourced" sampling by looking at a map showing the geographic distribution of the number of Ookla Speedtests initiated in Chicago.

In this map, the lighter shaded squares indicate a lack of tests run in conventionally underserved communities in Chicago, such as South Shore. With no data for these neighborhoods, we cannot say anything about the state of internet performance there nor how it compares to other, more well-provisioned areas.

Another important limitation of using Ookla data to compare the online experiences of households in different neighborhoods stems from the fact that user-initiated tests are typically run when a household is experiencing a technical problem or undergoing network reconfiguration. The resulting measurements from such tests might not accurately reflect the household's Internet capacity. An analogy would be looking out a window once per day in the evening, seeing it was dark outside, and concluding that it must be dark 24 hours a day. Tests that are crowdsourced, such as Ookla's data are more likely to suffer from self-selection bias. It can thus be extremely difficult to use these results to draw generalizable conclusions about an ISP's performance in a particular area.

Furthermore, speed tests initiated from a laptop or a mobile device most likely reflect the performance of a household's WiFi connectivity, not the fixed service being delivered to the household by the ISP. Many people connect to the Internet wirelessly, over a WiFi network, in their home (as opposed to connecting their devices directly via a cable to the source of the Internet service in their home). Our own past research has demonstrated that as Internet access speeds increase, the user's home WiFi network is the performance bottleneck.

If a household's WiFi speed is lower than the speed of the fixed Internet connection servicing the house, then the speed test measurement will paint a distorted picture of a household's Internet performance.

In short, existing datasets like Ookla are limited by unrepresentative sampling, infrequent and non-continuous measurement of a household's Internet connection, and measurement of a household's WiFi connection, not the fixed Internet connection provisioned for the premise.

## Netrics: Continuous Internet Measurement at the Household Level

Unlike existing datasets, the Netrics platform continuously collects fine-grained Internet performance measurements at the household's access network, which makes it possible to compare the online experiences of two households in different communities across time.

Beginning in early 2021, the Internet Innovation Initiative team began deploying Netrics measurements devices, with a particular focus on deploying devices in historically under-represented neighborhoods such as South Shore.

To highlight the potential of the sort of data that Netrics collects, let's dig deeper into the data and compare the online experience of two specific households located in different neighborhoods, but which subscribe to the same ISP service.

### Two Households, Same Internet Service, Two Different Online Experiences

From July through August 2021, we deployed our Netrics devices to measure Internet performance in a house in Hyde Park, where the University of Chicago is located, and one in South Shore. Both households were paying for Gigabit Internet service from Xfinity (Comcast).

During those two months, we measured each household's Internet performance using standard network measurement tools. We found that the Hyde Park household experienced higher-quality Internet than the South Shore household.

There are many metrics that one can collect to evaluate the quality of an Internet connection. One metric that receives a lot of attention is the rate at which the connection can download and upload data from and to the Internet. This metric is often referred to as Internet bandwidth or Internet speed. Intuitively, the higher the speed of a connection, the faster it can receive and send information and thus the better it performs. From July 2021 through August 2021, the Hyde Park household consistently clocked Internet speeds approximately 100 Mbps higher than the South Shore household.

Being able to measure speed continuously is important because if we were to compare the speeds of each household at certain points in time in the chart above, we might conclude that the Hyde Park household experienced lower speeds than the South Shore household. Over time, however, we can see that the trend in speeds experienced by each household is persistently different.

Another important metric that is often overlooked is the latency of an Internet connection. Latency is the amount of time, typically measured in microseconds, that it takes to send data to a given website on the Internet (for example, www.google.com) and receive a response back from the website. Latency is critical for video-intensive applications, such as Zoom, and online gaming. Lower latency enables better application quality. If you have ever had a Zoom call where you experienced lag or frozen video, high latency is most likely the culprit.

Once again, we can see a significant, persistent disparity in latency between the Hyde Park and South Shore households from July 2021 through August 2021, with the Hyde Park household experiencing lower latency over time than the South Shore household. Working latency, or latency under load, measures latency under conditions in which you typically use your Internet connection when multiple applications and devices are competing for the available bandwidth of the connection. This measurement gives a more realistic picture of the latency you experience online relative to a traditional latency test, which measures latency within a vacuum where no other demand is placed on the network.

If we look at the aggregate measurements for each household over this two-month period, we see a disparity across a range of performance measurements.

### Why Does the Performance Differ?

Unfortunately, there isn't a simple answer to why we see these differences. The Internet is a vast infrastructure and, as such, there are many factors that can influence the performance experienced by a single household.

The quality of the equipment that the household uses to access the Internet, such as the router or the modem, can have a significant influence, with older routers and modems often incapable of supporting the high access speeds of modern networks. The type of technology that the ISP uses to connect the households to the Internet can also have a big effect; if fiber is what connects the household, as opposed to copper wires or coax cables, then performance will typically benefit. Thus, with only two households to compare, it is difficult to draw generalizable conclusions about the state of the Internet in Hyde Park relative to South Shore from this case study.

However, with tools like our Netrics platform and sufficient coverage of households, critical questions about performance equality across communities can benefit tremendously from continuous, fine-grained data on Internet performance. To achieve a state of digital equity where communities not only have equal availability of the Internet but also experience comparable quality online, we need to prioritize the use of tools like Netrics. They will no doubt prove to be a valuable source of insight for further understanding what contributes to the disparity in online experiences that we anecdotally know to be true.

### Conclusion

With continuous, fine-grained data that the Netrics platform collects, we can begin to scrutinize the disparity in online experience that hinders true digital equity in our societies. The tale of two gigs is a cautionary one; even if we can achieve equity in availability and adoption, we will still be left to ensure that the Internet is empowering communities with equal opportunity and connectivity for all.

## Methodology

### Netrics Internet Performance Measurement Devices

Netrics measurement devices are connected directly to a home's source of internet and run multiple tests per day of the Internet connection. Such continuous, granular data provides a holistic view of a household's internet performance, including metrics on everything from how fast the Internet connection is to how many devices are using the connection at any given time.

As of May 2022, Netrics devices are deployed through our Internet study. Enrolled participants install the devices on their home networks. Once the device is installed, it runs network measurements on a pre-determined schedule. Test schedules vary in frequency by measurement. For example, ping latency to various domains is measured approximately every five minutes whereas speed tests are run approximately once every hour. Tests are scheduled to ensure that test runs do not interfere with the results of another test.

In the analysis above, we display measurements from the devices for the following:

#### Speed Tests

A household's wired Internet upload and download bandwidth in megabits per second (Mbps). Internet bandwidth is a measure of how fast your Internet connection is. The more bandwidth that your Internet connection has, the more information it can handle at any given time and the faster it can send that information. We measure Internet bandwidth using three popular tools—Ookla, NDT7, and iPerf3.

#### Ping Latency

The latency to a set of popular websites and geographically distributed servers. Standard network latency is a measure of how long it takes (typically in milliseconds) to send information to a destination on the network and receive a response in return. The ping latency is a standard measurement of latency. We collect ping latency data for:

- www.google.com
- www.amazon.com
- www.youtube.com
- www.facebook.com
- www.wikipedia.com
- www.chicagotribune.com
- www.suntimes.com
- Other servers (University of Chicago, last mile, Measurement Lab test servers in Washington, DC, Atlanta, and Denver)

#### DNS Latency

The latency to resolve Domain Name Service (DNS) queries to a set of popular websites using Cloudflare's public DNS resolver, 8.8.8.8. When you visit a website on the Internet (for example, www.google.com), the domain name, "www.google.com", needs to be matched to an actual IP address before the network can know where to send your information over the Internet. You can think of a website's IP address as its mailing address, similar to the address of your house or apartment. The domain name "www.google.com" is a nice, human-readable moniker for the actual IP address where Google's servers are located. It takes time to look up and "resolve" a web domain name, which is what DNS latency measures—the amount of time in milliseconds that it takes to resolve a domain name into an IP address.

#### Latency Under Load

The average latency under load using both TCP and ICMP pings. Latency under load (or working latency) is another way to measure ping latency, but under network conditions that more accurately reflect the context in which you use the Internet. Typically, the average person does not use the Internet within a vacuum, which is the context in which latency is most commonly measured. Rather, there are usually multiple applications, devices, etc. generating network traffic and competing for available network bandwidth at any given moment you spend online. Latency under load measures latency under those kinds of network conditions, thus supplying a more realistic measure of latency than is given by traditional latency measures.

#### LAN Bandwidth

The local network area (LAN) bandwidth in megabits per second (Mbps). We measure LAN bandwidth by conducting a speed test (Measurement Lab's NDT7 test) between a participant's device (laptop) and the Netrics device installed in their residence. This measurement allows us the test the capacity (or performance) of a household's WiFi network, which can then be compared to the capacity of the same household's wired Internet connection to determine whether WiFi serves as a performance bottleneck. This kind of measurement can also be useful for understanding WiFi coverage throughout your home.

---

*This research is part of the [Internet Innovation Initiative](https://internetequity.org) at the University of Chicago.*
