---
layout: post
title: "Understanding Chicago's Digital Divide: What Does Census Data Tell Us?"
date: 2022-05-05
description: We evaluate which neighborhoods in Chicago are the least connected in the context of socioeconomic factors.
tags: digital-divide chicago census policy
categories: data-story
thumbnail: assets/img/blog/iStock-1028077888-1440x580.jpg
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/iStock-1028077888-1440x580.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

## Overview

While disparities in broadband access have received increasing national attention for years, pandemic-induced remote work/school and massive federal broadband investment make questions of internet access particularly salient today. Within Chicago, the city government has recently engaged this issue through programs such as Chicago Connected and Broadband Innovation Zones, as well as launching a Digital Connectivity Council. Understanding the digital divide is the first step toward its mitigation, enabling the government and policymakers to effectively target the limited resources to the least connected areas.

## Inquiry

To improve understanding of this issue, a Data Science Clinic team and the Data Science Institute partnered with the City of Chicago to quantify the digital divide in the city. Based on input from the City, the team used data from the U.S. Census Bureau to address the following two questions i) What is Internet access (i.e., being able to get online through either a cellular connection or a fixed Internet connection) at a household level across Chicago community areas?, and ii) How does Internet access relate to socioeconomic and population demographics of the community area?

## Key Takeaways

- While roughly 80 percent of Chicago households are connected to the Internet, deep disparities in availability and adoption exist at the neighborhood level.

- Most disconnected households in Chicago are on the city's South and West Sides, with up to 40 percent of households lacking Internet in the least connected communities.

- Low connectivity rates also correlate with factors such as income, race, and unemployment.

### Question

Which neighborhoods in Chicago experience the greatest Internet disparity and how do social and economic factors, such as income, race, and unemployment, correlate with Internet availability and adoption?

## Analysis

We gathered data from the U.S Census and sorted it into the 77 Chicago community areas (see Methodology for details). Across the entire city, about 21% of households have no internet connection. But when looking deeper within the city at community areas, we observed large disparities in internet access. The areas with the lowest percentage of internet access (percentage of connected households) are located in the South and West sides of Chicago. These include Englewood (57%), West Englewood (57%), Fuller Park (59%), and North Lawndale (60%). By comparison, the areas with the highest access, Lakeview and Near South Side, report access for 91% of households.

## Correlation between Access and Population Characteristics

We then correlated Internet access with the population characteristics of these community areas. We specifically considered the Community Hardship Index, a score calculated by combining six key socioeconomic indicators namely crowded housing, poverty level, unemployment, education, dependency, and per capita income. We found that the community areas with the highest Hardship Scores were more likely to report low Internet access.

We further considered associations between internet connectivity and individual factors such as income and race. Community areas with higher median incomes have a positive correlation with greater internet access.

Additionally, community areas with a higher percentage of Black or African American populations possess a lower percentage of households with internet access.

## Which Factor Is Most Correlated with Internet Access?

But of all these factors, which are most closely associated with Internet connectivity? We used individual data from the American Community Survey (ACS), also collected by the US Census Bureau, to tease apart the weight of different demographics without the spatial bias of the tract-level data.

Our study found that Internet access is most strongly correlated with household income and education. Additionally, households with at least one elderly person are associated with lower Internet access compared to a household with no elderly person. In terms of race, the Black and Hispanic populations are associated with lower Internet access when compared to White and Asian populations.

## Policy Implications

Our analysis reveals significant disparities in Internet access across community areas in Chicago. Areas with lower Internet access are concentrated on the South and West Sides. These areas have higher poverty and larger minority populations. Policymakers, including the city government, need to take a holistic approach and prioritize their efforts in these most underserved areas.

Income is most strongly associated with Internet access, indicating that Internet disparity in Chicago is potentially an affordability issue. Thus, more programs such as Chicago Connected are needed to provide Internet at lower costs. In the longer term, policymakers can also consider facilitating community networks in underserved neighborhoods, bringing down Internet costs as well as providing employment and digital skills to the residents.

Finally, we found that Internet access is also associated with education and age, indicating that Internet access might also be limited due to its perceived utility or lack of user-friendliness for certain population demographics. This suggests initiatives are needed to provide educational resources to the community — especially older populations — about Internet use.

### Conclusion

Our analysis reveals significant disparities in Internet access across community areas in Chicago. Policymakers should aim investments toward providing affordable Internet services in underserved neighborhoods on the South and West sides of Chicago alongside programs to boost awareness and understanding of Internet usage and adoption.

## Methodology

We use the American Community Survey (ACS) data from the Census Bureau. The ACS data provides annual (and multi-year) estimates of selected social, economic, and housing characteristics of the population for many geographic areas and subpopulations. Each year, the Census surveys around 1 in 38 US households, and the responses are made available to the public.

For our analysis, we use the data available at two different granularities. The first kind is the individual survey responses (ACS individual) with coarser geography, i.e., the Public Use Microdata Area (PUMA) code. The second is statistics from survey responses between 2014 and 2019 and aggregated at a Census Tract level. We specifically use the survey question that asks whether the household has access to the Internet. For descriptive analysis of the population characteristics, we also use other variables including race, income, age, etc.

We use the ACS tract-level data to quantify access at a community area level. Each community area typically contains multiple tracts. We use a publicly available crosswalk that assigns a tract to one of the 77 community areas. For tracts overlapping multiple areas, the crosswalk assigns the tract to the community area with majority overlap. The tract-level statistics are then aggregated to obtain community area statistics. For descriptive analysis, we use different methods including calculating the Pearson Correlation coefficient and Logistics Regression.

We also provide the codebooks for data download and analysis. This can enable us to extend the analysis to other areas in Chicago.

---

*This research is part of the [Internet Innovation Initiative](https://internetequity.org) at the University of Chicago.*
