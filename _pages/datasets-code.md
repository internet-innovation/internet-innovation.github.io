---
layout: page
title: Data & Code
permalink: /datasets-code/
description: Open datasets and code from the Internet Innovation Initiative
nav: true
nav_order: 3
---

## Data

We collect and release Internet performance data from deployed measurement devices:

- **[Household Internet Performance Data](https://github.com/internet-equity/netrics-data)** - Quarterly releases from our deployments

## Software

Our GitHub [organization](https://github.com/internet-equity/) maintains **Netrics**, an open-source system for measuring Internet performance from deployed devices.

> Try our Docker demo: [Quick Start Guide](https://github.com/internet-equity/netrics-docker#quick-start)

### Measurement Software

**Repositories**:
- **[nm-exp-active-netrics](https://github.com/internet-equity/nm-exp-active-netrics)** - Production version
- **[Netrics (beta)](https://github.com/internet-equity/netrics)** - Redesigned for easier collaboration
- **[Netrics Docker](https://github.com/internet-equity/netrics-docker)** - Containerized deployment

Bundles network diagnostic tools with configurable scheduling. Built-in tests include speed tests (Ookla, NDT, iperf), DNS latency, ping latency, and responsiveness. Extensible framework for adding custom measurements.

### Dashboard

**Repository**: [netrics-dash](https://github.com/internet-equity/netrics-dash)

Web interface for visualizing device measurements: bandwidth, latency, connected devices, WiFi performance.

### Backend

**Data Pipeline**: AWS S3 storage with InfluxDB/Grafana visualization.

**Fleet Management**: Salt Stack for device updates and monitoring.

*Backend code available upon request.*

---

## License

Code is released under Apache 2.0 License. Data is released under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) license.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a>
