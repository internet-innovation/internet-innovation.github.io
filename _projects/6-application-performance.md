---
layout: page
title: Application Performance
description: Measuring quality of experience for real-world applications
img: assets/img/vca-research-thumb.svg
importance: 6
category: Research
---

![Application Performance](/assets/img/vca-research-thumb.svg){:class="img-fluid rounded z-depth-1" style="max-width: 500px;"}

## Overview

While speed tests measure raw network capacity, real-world application performance depends on many additional factors. Our research develops methods to measure and predict Quality of Experience (QoE) for applications that matter most to users—particularly video conferencing, which became essential during the pandemic.

## Research Areas

### Video Conferencing Performance

We measured the performance and network utilization of popular video conferencing applications (Zoom, Google Meet, Microsoft Teams, Webex) to understand their bandwidth requirements and how network conditions affect call quality.

### QoE Estimation

We developed techniques to estimate video Quality of Experience metrics from network traffic without requiring access to application headers—enabling passive monitoring of application performance.

### Web Performance

Building on earlier BISmark research, we studied web performance bottlenecks in broadband access networks and developed methods to identify and mitigate them.

## Key Findings

- Video conferencing applications have varying bandwidth requirements and resilience to network impairment
- Network-level metrics can predict application QoE with reasonable accuracy
- Home network conditions (WiFi, device capability) often limit application performance more than ISP service

## Publications

**Measuring the Performance and Network Utilization of Popular Video Conferencing Applications**
*Kyle MacMillan, Tarun Mangla, James Saxon, Nick Feamster*
ACM SIGCOMM Internet Measurement Conference (IMC), 2021

**Estimating WebRTC Video QoE Metrics Without Using Application Headers**
*Taveesh Sharma, Tarun Mangla, Arpit Gupta, Junchen Jiang, Nick Feamster*
ACM SIGCOMM Internet Measurement Conference (IMC), 2023

**Measuring and Mitigating Web Performance Bottlenecks in Broadband Access Networks**
*Srikanth Sundaresan, Nick Feamster, Renata Teixeira, Nazanin Magharei*
ACM IMC, 2013

## Applications

This research helps users, ISPs, and policymakers understand whether Internet connections are sufficient for modern applications and identify when application quality issues stem from network versus device/software problems.
