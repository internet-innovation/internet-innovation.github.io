---
layout: page
title: BISmark
description: Broadband Internet Service Benchmark (2011-2013)
img: assets/img/bismark-thumb.svg
importance: 3
category: Measurement Infrastructure
github: https://github.com/projectbismark
---

![BISmark](/assets/img/bismark-thumb.svg){:class="img-fluid rounded z-depth-1" style="max-width: 400px;"}

## Overview

BISmark (Broadband Internet Service Benchmark) was a pioneering project for conducting active network measurements from residential routers. Launched in 2011, BISmark provided one of the first comprehensive views of broadband Internet performance from the home gateway perspective.

BISmark served as the foundation for Netrics and influenced the design of modern Internet measurement platforms.

## Features

- **Gateway-Based Measurement**: Measurements taken directly from home routers for accurate performance data
- **Active & Passive Monitoring**: Both active probing and passive traffic analysis
- **OpenWRT Integration**: Custom firmware packages for commodity routers
- **Centralized Management**: Remote administration and data collection infrastructure

## Repositories

The original BISmark code is preserved at [github.com/projectbismark](https://github.com/projectbismark):

- **[bismark](https://github.com/projectbismark/bismark)** - Core measurement software
- **[bismark-active](https://github.com/projectbismark/bismark-active)** - Active measurement components
- **[bismark-passive](https://github.com/projectbismark/bismark-passive)** - Passive traffic monitoring
- **[bismark-packages](https://github.com/projectbismark/bismark-packages)** - OpenWRT packages
- **[networkdashboard](https://github.com/projectbismark/networkdashboard)** - Visualization dashboard

## Publications

**Broadband Internet Performance: A View From the Gateway**
*Srikanth Sundaresan, Walter de Donato, Nick Feamster, Renata Teixeira, Sam Crawford, Antonio Pescapè*
ACM SIGCOMM, 2011

**Measuring and Mitigating Web Performance Bottlenecks in Broadband Access Networks**
*Srikanth Sundaresan, Nick Feamster, Renata Teixeira, Nazanin Magharei*
ACM IMC, 2013

**Peeking Behind the NAT: An Empirical Study of Home Networks**
*Sarthak Grover, Mi Seon Park, Srikanth Sundaresan, Sam Burnett, Hyojoon Kim, Nick Feamster*
ACM IMC, 2013

**Measuring Broadband Performance in South Africa**
*Marshini Chetty, Srikanth Sundaresan, Sachit Muckaden, Nick Feamster, Enrico Calandro*
ACM DEV, 2013

## Legacy

BISmark's approach to gateway-based measurement directly influenced the design of Netrics, which continues this work with modern hardware (Raspberry Pi) and containerized deployment options.
