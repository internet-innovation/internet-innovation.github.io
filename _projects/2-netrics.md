---
layout: page
title: Netrics
description: Open-source Internet performance measurement system
img: assets/img/netrics-install.jpg
importance: 2
category: Measurement Infrastructure
github: https://github.com/internet-innovation/netrics
---

![Netrics Installation](/assets/img/netrics-install.jpg){:class="img-fluid rounded z-depth-1" style="max-width: 500px;"}

## Overview

Netrics is an open-source system for measuring Internet performance from deployed devices. Originally developed under the BISmark project, Netrics has evolved into a comprehensive measurement platform that runs on commodity hardware like Raspberry Pi devices.

## Features

- **Configurable Scheduling**: Run measurements at custom intervals
- **Built-in Tests**: Speed tests (Ookla, NDT, iperf), DNS latency, ping latency, and responsiveness
- **Extensible Framework**: Easy to add custom measurements
- **Low Resource Usage**: Designed to run on resource-constrained devices

## Repositories

- **[Netrics v1](https://github.com/internet-innovation/nm-exp-active-netrics)** - Initial version of Netrics
- **[Netrics v2](https://github.com/internet-innovation/netrics)** - Current version of Netrics redesigned for modular extension
- **[Netrics Docker](https://github.com/internet-innovation/netrics-docker)** - Containerized deployment for easy testing

## Quick Start

Try our Docker demo:

```bash
git clone https://github.com/internet-innovation/netrics-docker
cd netrics-docker
docker-compose up
```

See the [Quick Start Guide](https://github.com/internet-innovation/netrics-docker#quick-start) for more details.

## Publications

**Benchmarks or Equity? A New Approach to Measuring Internet Performance**
*Nick Feamster, Nicole Marwell*
Conference on Communications, Information, and Internet Policy (TPRC), 2022

## Resources

- [GitHub Organization](https://github.com/internet-innovation/)
- [Performance Data Releases](https://github.com/internet-innovation/netrics-data)
