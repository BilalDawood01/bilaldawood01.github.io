---
date: 2024-05-05 12:26:40
layout: post
title: Automated Enforcement of Bus-Only-Lanes and Crossing
subtitle: Engineering Capstone Project with Calgary Transit
description: A lot of work, but rpi, sensors, some ML and a server??? We did all that in 8 months??
image: "/assets/img/uploads/cap_team_cut.jpg"
optimized_image: "/assets/img/uploads/aebolc_bol_opt.jpg"
category: Multilevel Projects
tags:
  - Team Project
  - Hardware Design
  - Software Design 
  - Python
  - Raspberry Pi
  - Embedded designing
  - Optimization
  - Presentation
  - Report Writing
  - Documentation
  - CAD Design
author: Bilal Dawood
paginate: true
---
<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/jDH6g9AS1LM?si=9ZntyRWyeXWFK7Dz&amp;start=30" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> -->

<iframe width="560" height="315" src="https://www.youtube.com/embed/WUyqIg1Y4xQ?si=MiVI6sxhs6xhodJ-&amp;start=7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Project Overview
In this project, we worked with Calgary Transit to develop a hardware and software solution to help Calgary Transit combat the unauthorized use of Bus-Only-Lanes and Bus-Only-Crossing. The aim was to enhance efficiency of transit operations. Utilizing Raspberry Pi 4, we designed a low-maintenance, cost-effective solution that leverages existing onboard cameras for bus-only lanes and new camera setups for bus-only crossings. 

Our system integrates advanced machine learning models using OpenCV to detect unauthorized vehicles and pedestrians, while a Python-based software suite handles data processing, secure transmission via SFTP, and storage. The user interface, built with React and Electron.js, provides authorities with easy access to incident information. This innovative approach ensures smoother transit operations by effectively deterring illegal use of bus-only infrastructure.

The hardware utilizes various sensors and code to ensure the proof of concept maintains power efficient and only retains incident related information.

## Project Deliverables 
Throughout the duration of this project, we had many course related deliverables and project deliverables. The deliverables below outline the deliverables that were requested by Calgary Transit, and how we proceeded to fullfil the requirements. 

- Literature Review: 
  - Comprehensive review of existing automated enforcement technologies and Calgary Transit’s current systems, with recommendations for future implementation.
- Hardware Proof-of-Concept (HPOC):
  - Developed using Raspberry Pi 4.
  - Integrated camera units, GPS receivers for bus-only lanes, and LiDAR sensors for bus-only crossings.
  - Ensured optimized power consumption and efficient data processing.
- Operations Software:
  - Managed inputs/outputs and coordinated with hardware.
  - Developed in Python.
- Identification Software:
  - Employed machine learning models with OpenCV for vehicle and pedestrian detection.
  - Included license plate extraction using pytesseract.
- Video Transmission and Storage Software:
  - Secure data transmission via SFTP.
  - Server software for receiving and storing data, implemented in Python.
- User Interface Software:
  - Built with React framework and Electron.js.
  - Provided a comprehensive interface for accessing incident data and statistics.
Incident Data Management:
  - Captured, processed, and transmitted incident footage and relevant information.
  - Enabled efficient violation tracking and reporting for authorities.

Asides from the deliverable outlined above, we were able to fullfill extra requirements such as the implementation of a GUI, design and printing of a multi-purpose hardware enclosure and exhaustive testing to ensure reliability and function of our solution. 

The results of our testing and project methodology were meticulously recorded in our meeting minutes, beyond which we prepared a written report to Calggary Transit. We shared a User Manual for not only on how to use the hardware and software, but also how they can improve on our current implementation and the changes they could make. 

Needless to say, our sponsors and advisors enjoyed the project enough to invite us to share our solution with the rest of Calgary Transit during the Master's Project Showcasing.

<div style="flex: 1; padding: 10px;">
  <img src="/assets/img/uploads/aeobolc_presentation.jpeg" alt="Bilal Presentation" style="width: 100%;">
  <figcaption style="text-align: center;">Presenting our solution and progress to Calgary Transit</figcaption>
</div>
## Skills and Technologies:
  - Programming Languages: Python, JavaScript
  - Frameworks and Libraries: React, Electron.js, OpenCV, pytesseract
  - Hardware: Raspberry Pi 4, camera modules, GPS receivers, LiDAR sensors
  - Protocols and Tools: SFTP, WiFi, Flask, MySQL
  - Software Development: Embedded systems, machine learning models, data processing
  - Version Control: Git, GitHub

## Project Challenges and Solutions:
- Challenge: Ensuring low power consumption for continuous monitoring.
  - Solution: Implemented a power-saving mode for the Raspberry Pi and used GPS and LiDAR sensors to activate recording only when necessary.
- Challenge: Efficient data processing and storage.
  - Solution: Developed software to process data on-device and transmit only relevant incident information, reducing the need for large data transfers.
- Challenge: Implementing right turn filter
  - Solution: Utilized kml coordinates from google earth and adjusted code base to account for upcoming traffic lights and intersections where vehicles may be allowed to enter bus only lanes (and turn). We ensure violations were recorded when the car continued to use the bus only lane instead of turning. 

## Impact and Benefits:

This project significantly enhances the efficiency and safety of Calgary's transit operations by:
- Reducing illegal use of bus-only lanes and crossings.
- Minimizing transit delays caused by unauthorized vehicles.
- Providing a low-cost, low-maintenance solution for automated enforcement.
- Ensuring reliable and consistent monitoring without the need for extensive infrastructure changes.

## Team Collaboration:
In this project, I played a pivotal role in both the software and hardware development processes. Collaboration with my team was key, as we worked closely to integrate various components, test our solutions, and ensure seamless operation of the enforcement system. My responsibilites started from researching the project scope and solution design. I developed the initial draft of our hardware flow diagram and continued to research components necessary for this project. I was later responsible for the development of the trigger for the bus-only-crossing implementation while ensuring a power efficient model was developed. I also took part in designing our hardware enclosure to safeguard the electrical components. After completing my hardware responsibilites, I continued to assist the software team with the development of the software solution. I played a pivotal role in planning, preparing and conducting all of our tests by creating test cases and a pass/fail criteria. 

## Future Enhancements:
- Integration with existing Calgary Transit management systems for real-time monitoring.
- Expanding the system to cater to extreme weather conditions.
- Exploring additional applications of the automated enforcement system beyond bus-only lanes and crossings, such as pedestrian zones and restricted access areas.






