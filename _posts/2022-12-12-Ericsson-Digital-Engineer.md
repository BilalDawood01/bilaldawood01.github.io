---
date: 2023-08-30 12:26:40
layout: post
title: Digital Hardware Engineer
subtitle: A quick summary of my internship role at Ericsson Canada Inc
description: Hardware verification, automation development and presentations? Sounds funky
image: 
optimized_image: "/assets/img/uploads/digital_hw.jpg"
category: Work Experience
tags:
  - Python
  - PuTTy
  - Gerrit
  - Cadence Allegro Schematic Design
  - Circuit Schematic Design and Verification
  - Electrical Verification
  - Documentation
  - Report Writing
  - Presentation
  - Organization
  - Planning
  - Analytical Thinking
  - Problem Solving
author: Bilal Dawood
paginate: true
---

## Hardware Testing:

### Power Rail Analysis on High Voltage Radio Boards
In order to ensure proper voltage and current was being provided to all the components on the Ericsson Radio boards, I conducted **Power Rail Analysis**. I utilized the power tree to calculate the expected current and voltage at each rail. I also used the circuit schematics to locate the reference points and components I could use to measure the current and the voltage. I used a Multimeter to measure voltage on the high voltage radio board and measured continuity across capacitors to ensure no shorts were created. 

By the end of this task, I had displayed: 
- proficiency in reading and understanding circuit schematics 
- fundamental understanding of electrical characteristics and ratings
- the ability to locate and perform hardware tests on physical components
- an understanding of internal documentation
- the ability to adhere to internal documentation requirements
- organization skill through the meticulous recording and comparing of metrics

### Verification of Flash SPI Interface:
- Collected, assessed, and debugged Read and Write timing parameters for Flash SPI interfaces using Oscilloscope.
- Assisted with PCB design and verification using Allegro Cadence after referring to prior radio board schematics.
- Led research on high frequency testing equipment, targeting optimal performance and value by comparing price with datasheet specifications and testing requirements. 

### Thermal Testing of Cheetah Networks Router:
* Used thermal chamber to conduct testing of Cheetah Networks router to ensure reliability of performance withing a range of temperatures. 
* To conduct the testing, we hooked various components of the router to a thermocouple to measure the differential between components and ensure a certain threshold was not exceeded. 
* A representative from Cheetah Networks was present to ensure the router was working and to measure and test functionality at different temperature ranges. 
* By successfully conducting and completing this task I displayed:
  * the ability to work well with members of different companies. 
  * an understanding of how to setup, use and take measurements from a thermocouple
  * an awareness of lab safety practices by ensuring no laboratory equipment was left unattended and all precautions were taken. 


## Automation Tool Development:
### Ericsson Thermal Derating Tool: 
If anyone were to ask me what the highlight of my co-op was, I would start to explain this automation tool to them. using Python and existing internal documentation, myself and another co-op were able to develop an automation tool that achieved a **70% reduction in thermal verification time**. For this task:
* The **goal** was to automate the thermal derating process. A largely manual hardware verification process. Traditionally, this verification process involves the production of a heatmap of an Ericsson radio board. The tester would then locate components on the radio board, go to the Bill of Materials, find that components and determine whether the operating temperature shown in that area of heatmap is within the limits of the component. 
- Developed an automation tool in Python that achieved a 70% reduction in thermal verification time.
-Used component datasheets to ensure comparison of metrics to maintain accuracy of results generated. Furthermore, created test cases to ensure reliability and function of automation tool.
- Created documentation and presented the automation tool to the entire company, showcasing proficient research, report writing, and presentation skills.