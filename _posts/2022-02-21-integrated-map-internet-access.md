---
layout: post
title: "An Integrated Map of Internet Access"
date: 2022-02-21
description: Read how we built the national map featured on the portal.
tags: broadband mapping data visualization
categories: data-story
thumbnail: assets/img/blog/integrated-map.png
---

*By James Saxon, University of Chicago*

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/integrated-map.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

A little over a year ago, I created an interactive map of indicators of Internet access, in the twenty largest American cities. In the time since, a number of additional maps have come out, supplementing the FCCs' maps. Although many are nice, I felt that I could make a modestly cleaner one.

**FCC 477:** is limited to the 477 data itself (of course!), and is not so easy to navigate. The FCC also has an LTE map that is pretty nice.

**Illinois Broadband:** is limited to Illinois!

**NTIA Broadband Map:** has a limited number of variables. Cartographically, it is very hard to read, since all layers can be overlaid, and all are the same color.

The other big thing missing from these maps is that the data are not approachable. The raw FCC data are around 10 GB, which is a lot for most people, and filtering them usefully is a pain. The other maps didn't have a simple, tract-level download, to get people started. I wanted to provide that. You can also find the code that generates those data in this GitHub repo.

The map should also still include what I view as the three most-important available data sources on broadband:

1. The Census's indicators of both broadband and computer access, and other demographics.
2. The FCC's 477 reports, aggregated in useful ways: fiber availability, number of ISPs, etc.
3. Ookla's Speedtest performance data. These need to be reaggregated from quad tiles to Census tracts.

Here is my map:

Naturally, it is made using Mapbox, because that is where I will work by the time you read this post. Therefore, it has beautiful vector layers and it is responsive. If you click to go full screen, hovering will also show you the values of observations.

The data include a lot of useful broadband variables, all packed up and aligned. In just 4.2 MB, you get every Census tract in the US. From the Census:

- `population`, `households`: tract population and number of households.
- `geoid`: Census tract GEOID.
- `f_broadband`: fraction of households with broadband access.
- `f_computer`: fraction of households with a computer.
- `f_ba`: fraction of the adult population that holds a bachelor's degree.
- `f_black`: fraction of the population that is Black.
- `f_hispanic`: fraction of the population that is Hispanic.
- `mhi`, `log_mhi`: tract median household income, and its logarithm.

From the FCC:

- `n_isp`: the number of Consumer ISPs.
- `n_dn10`, `n_dn100`, `n_dn250`: the number of ISPs at 10, 100, and 250 Mbps.
- `n_fiber_100u`: the number of fiber ISPs with at least 100 Mbps in the upstream direction.
- `fiber_100u_exists`: the fraction of blocks in the tract where the FCC believes fiber is available.
- `max_dn`, `max_up`: the maximum download and upload speeds, reported to the FCC.

From Ookla:

- `d_mbps`, `u_mbps`: average download and upload speeds observed by Ookla on fixed-line connections (reaggregated from quad tiles).
- `lat_ms`: average latency observed on Ookla Speedtests.
- `tests`, `devices`: number of Ookla Speedtest measurements, and number of unique devices.
- `tests_per_cap`, `devices_per_cap`: the number of tests or devices, divided by the tract population.

Happy analyzing!

---

*This research is part of the [Internet Innovation Initiative](https://internetequity.org) at the University of Chicago.*
