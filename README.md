# [Internet Innovation Initiative](https://internetequity.uchicago.edu) 
([Github](https://github.com/internet-equity/))

> ### 📥 Submitting Feedback on Netrics
>
> Please visit our feedback page to learn how you can submit feedback on our software and data.
>
> Click [here](./feedback/submitting-feedback.html) to go to the feedback page.

> ## 💎 Netrics Beta Release
>
> The Internet Innovation Initiative is seeking volunteers to test and review our software and data tools. If you are interested in collaborating with us to make our tools better, please fill our online [interest form](https://docs.google.com/forms/d/e/1FAIpQLSfH3GQpagadoXyZ3040Pty8BpTr4-OKA-XHNKihlCQ62U1lkQ/viewform?usp=sf_link). Explore our Docker demo of Netrics with this repository [here](https://github.com/internet-equity/netrics-docker/tree/main).

## About

The [Internet Innovation Initiative](https://internetequity.uchicago.edu) at the
University of Chicago aims to realize equitable, resilient, and sustainable
Internet solutions that benefit all communities. As society increasingly relies
on the Internet for work, education, health care, recreation, and many other
aspects of daily life, the prevalent and persistent inequity in people’s
ability to access, adopt, and use the Internet is more evident than ever.
Stakeholders who are making decisions about where and how to direct these
investments need better information along the following three dimensions:

1. Measurement techniques and datasets that directly address unknown questions
   and evaluate the effectiveness of different interventions;
2. Data-driven collaborations with communities that are underserved by current
   Internet infrastructure to develop and test different options for
   infrastructure investments, the effectiveness of which can depend critically
   on the specific characteristics and needs found in different communities;
3. Better data and analysis about how Internet connectivity relates to the social
   and individual conditions that contribute to whether and how the Internet
   actually improves people’s lived experience.

Read more [here](https://internetequity.uchicago.edu/about/the-initiative).

## Mission Statement

Our mission at the Internet Innovation Initiative is to create equitable,
resilient, and sustainable Internet solutions that benefit all communities. We
believe that everyone should have equal access to the Internet, and we work to
close the "digital divide" by taking a data-oriented approach and developing
partnerships with underserved communities. Our goal is to develop new and
innovative approaches to Internet measurement, gathering data at multiple
levels and granularities, to better understand the challenges and
opportunities in different contexts. We also aim to collaborate with
communities to identify their specific needs and preferences, co-create
solutions, and evaluate the effectiveness of different interventions. Through
these partnerships, we strive to ensure that our work is responsive,
inclusive, and relevant to the diverse populations we serve.

## Netrics Data

The initiative collects data from a variety of sources. We currently release data from our Netrics deployments quarterly:
   * [Household Internet Performance Data](https://github.com/internet-equity/netrics-data)

## Netrics Software

One of the aims of the project is to make it easy for stakeholders to gather
samples of Internet connectivity across a geographic area (e.g., a city,
region, state) using our approach of device-based measurement. Our GitHub 
organization contains several open-source libraries and datasets that are 
available for public use.

### About the Code 

This [organization](https://github.com/internet-equity/) maintains code for
the **Netrics** system, which is a set of tools for collecting and analyzing
Internet connectivity using deployed vantage points. We have developed the 
system to run on single-board computers, such as a Raspberry Pi, but it
can run on any endpoint. It consists of three major components.


#### Measurement Software

> Try out our Netrics demo with Docker by following our guide [here](https://github.com/internet-equity/netrics-docker#quick-start).

**Repositories**:
- **[nm-exp-active-netrics](https://github.com/internet-equity/nm-exp-active-netrics)**
- **[Netrics (beta)](https://github.com/internet-equity/netrics)**
- **[Netrics Docker](https://github.com/internet-equity/netrics-docker)**

The Netrics measurement software bundles multiple popular network diagnostic tools into one tool and enables users to run measurements continuously based on a user-defined schedule. The measurement software will run the network test, parse the results, and save the data in a file to be uploaded elsewhere. Data files are tagged with additional metadata, including the time of the measurement, the device ID on which the measurement ran, and other contextual information. The measurement framework comes pre-packaged with a number of built-in tests, including:

   * Three different Internet speed tests (Ookla, NDT, iperf)
   * DNS lookup latency
   * Ping latency
   * Latency under load / operational latency / "responsiveness"
In addition to the built-in measurements, we have also designed the framework to incorporate new measurements that are not already included in the software. With this extensibility, we encourage other researchers and developers to help us improve and iterate on the best methods to measure the internet.

We currently have two measurement libraries available. The first is a version that we have deployed on over 150 devices distributed around Chicago. The second is a redesigned version (still in beta) that we have created to simplify the usability of the software and make it easier for collaborators to contribute to the library's development. You can find links to both repositories below. Both libraries essentially do the same thing (run network measurements and generate data), but we hope our redesign will be easier to use and we will be deprecating the original library in the near future.

#### Netrics Performance Dashboard

**Repositories**:
- **[netrics-dash](https://github.com/internet-equity/netrics-dash)**

The Netrics performance dashboard is separate software application that is designed to operate in tandem with the Netrics measurement software (either version). The dashboard displays internet performance measurements on a user's web browser, including upload and download bandwidth, latecy, number of connected devices, and WiFi performance. The dashboard shows data collected only from one device and is only accessible by the user hosting the device on their network. When a user installs the Netrics dashboard web extension, they will also be able to run continuous measurements of their WiFi download speed, which enables identifying connectivity bottlenecks by comparing WiFi speeds to fixed access speeds. Read the documentation in the code repository to learn more.

#### Netrics Backend

The Netrics measurement libray and dashboard application are designed to run as standalone software that anyone can install on their computer and/or IoT device. In addition to the measurement and dashboard libarires, the IEI team has also developed code for transferring data from local devices to a central storage area and for managing a fleet of devices that are running the measurement software. These components are critical for operating a large network of Netrics-installed devices and collecting the data from those devices for research and other applications. Both repositories of code are not public due to the senstive nature of the code, but the libraries are available upon request and we have shared the code with other institutions that express interest. Furthermore, users of the measurement software can bring their own backend to orchestrate distributed device-based measurement and avoid using our backend libraries entirely.

##### Data Pipeline

We use a custom software application to transfer data from a device running the Netrics measurement software to our AWS S3 storage. The collect application periodically checks the directory where we save data files generated by Netrics measurements and uploads pending files to S3 using a secure transfer protocol.

The data stored on AWS is then further processed and written to an InfluxDB to make it easier to query and visualize with a front-end Grafana dashboard. We are currently working on porting our data to TimescaleDB as well to enable SQL queries on the data and to connect the data to other useful analytical and visualization platforms.

**All code is available to others upon request.**

##### Fleet Management System

To manage the fleet of devices that we deploy with Netrics software, we use the configuration management system, Salt Stack, to deploy new software updates on devices, track device state and connectivity, and keep tabs on device operations once in the field. We are currently exploring migrating to a new fleet management system called OpenBalena.

**All code is available to other upon request.**

## People

The initiative is led by Professors [Nick
Feamster](https://people.cs.uchicago.edu/~feamster/) and [Nicole
Marwell](https://crownschool.uchicago.edu/directory/nicole-p-marwell) at the
University of Chicago. Alexis Schrubbe is the executive director. The full
team is listed [here](https://internetequity.uchicago.edu/about/team).

## Citation

If you use this code or data, please cite the following paper, the Netrics
code, and the Internet Innovation Initiative website:

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

We gratefully acknowledge support from the National Science Foundation (NSF)
and data.org.

## License

All code is released under an Apache 2.0 License. Data is released under
Creative Commons Attribution 4.0 International (CC BY-SA 4.0) license, as below.

<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/"><img
alt="Creative Commons License" style="border-width:0"
src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" /></a><br /><span
xmlns:dct="http://purl.org/dc/terms/" property="dct:title">Netrics Data</span>
by <a xmlns:cc="http://creativecommons.org/ns#"
href="https://internetequity.uchicago.edu/" property="cc:attributionName"
rel="cc:attributionURL">Internet Innovation Initiative</a> is licensed under a <a
rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative
Commons Attribution-ShareAlike 4.0 International License</a>.


