---
layout: post
title: "Internet Access and Broadband Analysis"
date: 2022-02-21
description: A scorecard of Internet access for the twenty largest metro regions in the United States.
tags: broadband policy analysis data
categories: data-story
thumbnail: assets/img/blog/iStock-1028077888-1440x580.jpg
---

*By James Saxon, University of Chicago*

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/iStock-1028077888-1440x580.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

With support from data.org, we are working to better measure the performance of Internet in American cities. Along with our technical work to develop measurement infrastructures, we want to highlight already-available public data, make them comprehensible, and help others to use them.

In this post, I present a "scorecard" of Internet access, for the twenty largest metro regions in the United States. By access, I mean the share of people have broadband Internet. This analysis uses data from US Census Bureau's American Community Survey and the National Telecommunication and Information Administration (NTIA) Internet performance supplement to the Current Population Survey. Still, this post is more about data than policy. I am providing code, to invite others into the discussion.

I rank metro regions by:

1. share of households that are connected
2. differences in connection rates by race, ethnicity, and gender
3. same as (2), but controlling for income and age levels.

Most of this will focus on the ACS data. At the end, I will delve into the consistency of the ACS with the CPS.

## Access

The first question is: in which cities are broadband subscription rates highest? With a single API call, you can get the populations and broadband subscription rates for every Census "place" or Metro area in the US, from the American Community Survey. That is super easy, and we can retrieve analogous estimates for any geography in the US: states, counties, Census tracts, congressional districts, etc. Using these calls, we see that for either cities or metro regions, Seattle tops out the list. The list for metro regions is above.

But we already have an important subtlety to address: how to define cities? Census places or "cities" are jurisdictions. Metro regions are a functional description of how we actually live. Our choice of geography to examine will affect the answers we get. The share of households without broadband is modestly higher in cities than metro regions: 14.9% of households in New York City don't have home broadband, but that number falls to 12.2% in the metro region. Because poverty is usually higher in cities, this effect appears in most regions. For instance, Philly dips from 15.8% to 11.0% and the numbers in Chicago fall from 16.4% to 12.3%.

Cities are boundaries by which a "we" both living and dead has agreed to divvy up, or segregate, America: what representation and tax burdens we accept or refuse to share. If we want to "blame" someone for poor performance, we can use "Census place" numbers to point fingers at the mayor's office. But doing this, while partially appropriate in a democracy, would understate the digital divide: it is often starker than the place-based numbers indicate. The people who can afford to live outside the city limits and choose to do so are more likely to be online.

In this post, I'll focus on estimates for metro regions. But the reason is as much technical and practical as conceptual (the notion of responsibility, above). The technical reason is that the Census does not release "microdata" (individual responses) for individual cities, but it does release them for metro areas. We have no choice about the geography.

## Who Gets Access?

### Absolute Differences Between Groups

Our next question is: who gets access, and who doesn't? Although the Census API does break down broadband estimates by age, income, and educational attainment (in very broad categories) it does not do this for race, ethnicity, or gender. These are the categories we'll examine here.

Doing so requires us to use Public Use Microdata Samples (PUMS) from the Census. PUMS are the individual responses from that people gave to the American Community Survey. They are also now accessible through an API, but while that API does include race as a queryable variable, and can tabulate results for us, it does not include any geography finer than state. (Example tabulation for Illinois.)

We can download the full data from Integrated Public Use Microdata Samples (IPUMS) service at the University of Minnesota. Accounts and data are free but the license requires you to download your own data extract. To make progress, we'll also have to write some code: this is wrapped up in this repo.

The second set of columns above thus show the difference in the shares of people with broadband access, in each Metro region, between three groups:

- Black and non-Black respondents
- Hispanic and non-Hispanic respondents, and
- Women and men

The numbers quoted are, simply, the differences in the (sample-weighted) probabilities that respondents of different groups do or don't have access. But again, we have a theoretical question. If we want the difference between Hispanic and non-Hispanic access, the numbers are correct. But this encompasses a number of differences. For instance, the Hispanic population is younger and lower income. Ages and income levels unsurpringly explain the vast majority of variation between neighborohoods' broadband subscription rates. So we could pose a different question: are a Black respondent and a White respondent of the same age and income equally likely to be online?

### Conditional Estimates

There are many ways of addressing this question, but what I'll do here is called a k-nearest neighbors regression. What this means is that for every respondent in group A (Black, Hispanic, or Female) in a metro area we'll find the k respondents that are most like them in group B (non-Black, non-Hispanic, or Male), in the same metro. We'll take the average across the k matched "neighbors," and compare the response that the respondent actually gave, regarding their Internet access. Again, this answers the question: "if I, a member of group A held constant certain characteristics about myself like age and income but were in group B, would I be more or less likely to have Internet access?"

## Consistency of the ACS and the CPS (Technical!)

In our work, we were careful to reproduce official estimates before proceeding to the ones that we've shared above.

The ACS API variable that we used was DP02_0153PE, which is the share of total households "with a broadband Internet subscription." Note first that this does not include "group quarters" like jails or dorms. But second, while working with the IPUMS data, I found that it was not the broadband variable CIHISPEED but CINETHH that reproduced the API estimates at the state level. CIHISPEED is based on the questionnaire text:

> Do you or any member of this household have access to the Internet using a broadband (high speed) Internet service such as cable, fiber optic, or DSL service installed in this household?

whereas CINETHH is supposed to be any Internet connection:

> Do you or any member of this household have access to the internet?
> - Yes, by paying a cell phone company or Internet service provider
> - Yes, without paying a cell phone company of Internet service provider
> - No access to the Internet at this house, apartment, or mobile home

At the state level, the correlation between the API and my reconstructed value was 0.998 with CINETHH but just 0.892 with CIHISPEED. To my mind, this appears to be a data error or a labelling error in the API.

### The Current Population Survey

The analysis above is based entirely on the ACS data, but the CPS provides similar reports. An analysis using those data is also included in the git repo.

Their corresponding survey question is HEINHOME:

> Does anyone in this household, including you, use the Internet at home? This includes accessing the Internet with a cell phone, computer, tablet, or other device.

They also have HEHOMTE1:

> I am going to read a list of ways that people access the Internet from their homes, other than a mobile data plan. At home, (do you/does anyone in this household) access the Internet using: High-speed Internet service installed at home, such as cable, DSL, or fiber optic service [...]

So HEINHOME seems to match CINETHH, and HEMOMTE matches CIHISPEED.

As above, before proceeding to my own estimates, I paintstakingly reproduced the ones that Rafi Goldberg made for the NTIA's state-level map.

Based on this, the values that we want to compare are HEINHOME in the CPS and the (apparently actually) CINETHH from the ACS's API. Of course, we must also be consistent between units of observations (households vs person-level), and in the decision of whether or not to include group quarters. Here, I am matching the ACS choices: focusing any access, in non-GQ households. The consistency between the ACS and the CPS was, on the whole, not great. For CBSA's the correlation between the two measures (ACS broadband via the API and the CPS's HEINHOME) was just 0.42. For states, the correlation from the ACS API value to HEHOMTE1 was 0.72 (with the Universe described) but just 0.54 for HEINHOME. Numerically, the ACS values are much higher than the CPS ones.

One last note: Despite its smaller sample size, the CPS does make it possible to identify the largest twenty cities (Census places) in the United States. This is because they do not also have the smaller "PUMA" geographies that the ACS reports in its microdata. Based on this, I reproduced the population for the twenty largest cities. I was very surprised, and frankly still incredulous, to find San Francisco near the bottom of the heap for pretty much any definition of Internet access. San Jose was at the top. But the differences were also not small!! The NTIA analysts suggest that it might simply be an unusual statistical noise, but that seems unlikely. For certain estimates, San Francisco was 3σ below the rest of California (about a 1 in 300 chance).

---

*This research is part of the [Internet Innovation Initiative](https://internetequity.org) at the University of Chicago.*
