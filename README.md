# [Internet Innovation Initiative](https://internetequity.uchicago.edu)
([Github](https://github.com/internet-innovation/))

The [Internet Innovation Initiative](https://internetequity.uchicago.edu) at the University of Chicago develops tools and techniques for measuring Internet performance and connectivity. Our work focuses on device-based measurement using open-source software that runs on commodity hardware like Raspberry Pi devices.

Read more about the initiative [here](https://internetequity.uchicago.edu/about/the-initiative).

## Data

We collect and release Internet performance data from deployed measurement devices:
* [Household Internet Performance Data](https://github.com/internet-equity/netrics-data) - Quarterly releases from our deployments

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

## People

Led by Professors [Nick Feamster](https://people.cs.uchicago.edu/~feamster/) and [Nicole Marwell](https://crownschool.uchicago.edu/directory/nicole-p-marwell) at the University of Chicago. Full team [here](https://internetequity.uchicago.edu/about/team).

## Citation

If you use this code or data, please cite:

```
@inproceedings{feamster2022benchmarks,
   url = { https://tprcweb.com/ },
   pages = { 1--10 },
   address = { Washington, DC },
   month = { sep },
   year = { 2022 },
   booktitle = { Conference on Communications, Information, and Internet Policy (TPRC) },
   title = { Benchmarks or Equity? A New Approach to Measuring Internet Performance },
   author = { Nick Feamster and Nicole Marwell },
}
```

## Funding

We gratefully acknowledge support from the National Science Foundation (NSF) and data.org.

## License

Code is released under Apache 2.0 License. Data is released under Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) license.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Netrics Data</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://internetequity.uchicago.edu/" property="cc:attributionName" rel="cc:attributionURL">Internet Innovation Initiative</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.
