---
date: 2019-09-09 12:26:40
layout: post
title: Interactive Calgary Weather Visualization
subtitle: Bar charts, scatter plots, data and buttons!
description: Take a look at Calgary's weather trend for the past 50 years!
image: 
optimized_image: "/assets/img/uploads/WeatherDataVisualization_everything.png"
category: Programming
tags:
  - Processing (Java based language)
  - Data Visualization
  - Data Handling
author: Bilal Dawood
---

## About the program and what it does:
The following program takes in infomation regarding the weather of Calgary for the last 50 years (1969-2019). The data is grouped, and the program displays the maximum and minimum weather from each month (read and collected from the excel sheet), and also checks whether or not there was snowfall in that month.

The interactive GUI lets you:
- Customize the way you want the data to be displayed (scatterplot/bar chart)
- What information you want see (only minimum, maximum, snowfall for all or even specific months)
- If you want see the weather (in Celcius), or just the snowfall (in cm)

## How it works:

The program is run from the Processing-Java-based IDE. The following GUI appears when the program successfully runs. 

<img src="/assets/img/weather/WeatherDataVisualization_everything.png" width="600" height="350">

The buttons on the top are interactive, and allows the user to choose what type of data they want to see, allows the user to narrow down the data visible, and also allows the use to choose which graph format they prefer. 

Below, the user selected "Barchart" > "Min"
<img src="/assets/img/weather/WeatherDataVisualization_barmin.png" width="600" height="350">

Below the user selected "Barchart" > Max"

<img src="/assets/img/weather/WeatherDataVisualization_barmax.png" width="600" height="350">

Below, the user selected "Scatterplot"

<img src="/assets/img/weather/WeatherDataVisualization_barmin.png" width="600" height="350">

Below, the user selected "Scatterplot" > "Min"

<img src="/assets/img/weather/WeatherDataVisualization_scatter_min.png" width="600" height="350">

Below the user selected "Scatterplot" > Max"

<img src="/assets/img/weather/WeatherDataVisualization_scatter_max.png" width="600" height="350">

If wanted, the user can also see how many centimeters of snowfall there was in a specific month, as shown below.

<img src="/assets/img/weather/WeatherDataVisualization_snowfall.png" width="600" height="350">








