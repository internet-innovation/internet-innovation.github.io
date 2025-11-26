---
layout: post
title: How Much Internet Does Video Conferencing Need?
date: 2021-05-27
description: We tested popular video conferencing applications to see how much home internet bandwidth is needed for remote work and school.
tags: measurement video-conferencing covid
categories: data-story
thumbnail: assets/img/blog/iStock-1216390582-1440x580.jpg
---

*By Kyle MacMillan, Tarun Mangla, James Saxon, and Nick Feamster*

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/iStock-1216390582-1440x580.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Overview

The COVID-19 pandemic has dramatically increased the number of people doing work and school from home, using applications such as Zoom, Google Meet, and Microsoft Teams. Our partners at the City of Chicago asked us to determine how much home Internet bandwidth is required to run these applications, as a benchmark for finding and helping households without sufficient Internet connectivity. The results indicate that most households who purchase Internet can run video conferences with high performance, but many common home occurrences can disrupt the quality of the experience.

## Inquiry

With more people working and attending school from home due to the pandemic or other factors, how much home Internet bandwidth is necessary for a satisfactory experience when using the most popular video conferencing applications?

## Key Takeaways

- Most of today's residential Internet plans have enough data capacity to run the three most popular video conferencing applications: Zoom, Google Meet, and Microsoft Teams.

- However, when multiple video conferences are running on the same network at once, it may reach upload limits (3 Mbps) on lower-speed plans. Application performance can also suffer from competition between simultaneous video calls, meeting size and viewing mode, and interruptions to service.

- The study can inform future benchmarks on the Internet data capacity needed for a household to perform multiple online work, school, and entertainment tasks simultaneously.

### Question

With more people working and attending school from home, how much Internet bandwidth is necessary for a satisfactory experience when using the most popular video conferencing applications?

## Analysis

We performed laboratory experiments to test how much Internet bandwidth video conferencing applications use under different circumstances.

Our first experiments were simple 2-way calls using the three most popular video conferencing applications: Zoom, Google Meet, and Microsoft Teams. Like most online apps, these programs both pull data from the Internet (download) and send data to the Internet (upload). Maintaining an unrestricted flow of these data downloads and uploads produces a high-quality experience for the user.

On average, these applications used about 1-2 megabits per second (Mbps) of download bandwidth and 0.75-1.4 Mbps of upload bandwidth for a single video call, with Microsoft Teams on the higher end of both measures. Most residential Internet plans provide plenty of capacity to handle this data; the FCC defines broadband as a 25 Mbps download and 3 Mbps upload, both much higher than the average used in a video call.

## Competition

But imagine a house where parents are working remotely and participating in video meetings while their children attend remote school through their own video conferencing apps, or use a video streaming service for entertainment. How would the data needs of these applications stack up and affect each other?

While most available Internet plans provide download speeds that can handle more than one video call at a time, the upload limits can come into play with only 2 simultaneous Teams meetings or 3-4 concurrent Zoom or Meet sessions. If the applications are receiving only a portion of their normal upload speed, it could mean sending choppy video to other participants on the call.

What's more, these applications sometimes do not play fair with each other, competing for that limited bandwidth. In our experiments with Zoom and Teams, the first call receives precedence over a second call, capping the upload speed available to the latter application and lowering the quality of the call for the second user. For homes without Internet plans that exceed the minimum FCC broadband standard of 3 Mbps upload capacity, this effect can easily produce headaches during simultaneous meetings.

## Meeting Size

In remote work or school environments, video meetings are rarely one-on-one. Our experiments found that, in certain situations, the number of users in a meeting and how they are watching your video can affect the amount of bandwidth used. For example, a teacher lecturing from home to a virtual classroom is likely watched by her students in "speaker mode," where the video is enlarged on each screen. We found that Microsoft Teams meetings used more upload data on the teacher's network when more participants were watching and using speaker mode, testing the 3Mbps limits of a minimum broadband connection.

## Interruptions & Recovery

Any of the above situations, as well as interruptions to service caused by a drop in WiFi signal or a brief network outage, can cause one of the most annoying video call glitches: frozen video. Our researchers simulated these disruptions by reducing available bandwidth for 30 seconds and seeing how long it takes video conferencing apps to recover. Depending on the magnitude of the bandwidth drop, the apps could take 25 to 50 seconds to return to their pre-interruption performance — a significant and inconvenient gap in anyone's meeting or online class.

Because these were laboratory experiments, we could induce artificial and controlled interruptions to service. But in your home, these disruptions could be longer or more frequent, and the maximum bandwidth available may be lower in areas with poor WiFi coverage. Therefore, these experiments may actually underestimate the amount of Internet needed for smooth performance and the effect of service interruptions on the users' quality of experience.

## Policy Implications

These results help establish a more realistic, household-level benchmark for the amount of Internet bandwidth required for remote work and school. Rather than classifying households by whether they meet the FCC definition of broadband access, a city government might create a new standard around these modern technologies. For instance, does a residence have enough upload and download bandwidth for three kids to do remote school simultaneously with sufficient quality?

Policymakers could use this benchmark in future times when remote schooling is required, guiding the distribution of higher-capacity broadband access and devices to ensure that it is meeting realistic bandwidth requirements. In addition, consumers could use this information to purchase an Internet plan to meet their needs, whether that means multiple people video-conferencing at the same time or just a single person streaming videos. The information can also help us assess our resident-level data on the true Internet speeds that people receive in their homes and whether they are sufficient for frequently-used web applications.

### Conclusion

Video conferencing applications do not use a significant amount of bandwidth to operate efficiently. However, factors such as the number of video calls occurring simultaneously, the number of participants on a call, and the frequencies of Internet disruptions during a call can lead to a low-quality experience when using such applications. Policymakers should consider these factors when setting bandwidth requirements for service providers.

## Methodology

This study tested the performance of the three video conferencing applications (Zoom, Google Meet, and Microsoft Teams) in a laboratory setting. Identical laptops were used to establish a video call, and a pre-recorded video was broadcast over the connection. Researchers controlled the amount of upload and download bandwidth available at the router. To test the effect of competition between two calls, the second call was started 30 seconds after the first. Service disruptions were simulated by reducing the amount of bandwidth during a call for 30 seconds, then monitoring the recovery of the performance.

---

*This research is part of the [Internet Innovation Initiative](https://internetequity.org) at the University of Chicago.*
