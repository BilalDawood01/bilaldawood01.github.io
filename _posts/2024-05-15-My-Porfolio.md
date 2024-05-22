---
layout: post
date: 2024-05-09 12:26:40
title: Bilal Dawood's Portfolio
subtitle: 'An overview of my projects and academic progress (Website currently in progress)'
description: >-
  I'm Bilal Dawood, an Electrical Engineering student at the University of Calgary. Passionate about innovation, I'm eager to carve a career path in embedded systems and AI/ML. 
  Beyond academics, I find enjoy partaking in sports like football, basketball, and swimming, fueling my energy  and teamwork skills. With diverse project experience, I'm equipped to make meaningful contributions in electronics and technolog.
  
image: "/assets/img/uploads/portfolio_bkg_opt.jpg"
optimized_image: "/assets/img/uploads/portfolio_bkg_opt.jpg"
category:
tags:
  - welcome
author: Bilal
paginate: true
hero: true
---


You can head back to the home page or take a look at my personal favourite projects below! 

bundle exec jekyll serve


## Resume:
BILAL DAWOOD
 Calgary, AB • bilaldawood099@outlook.com • 587-429-7635 • LinkedIn • GitHub
EDUCATION 
Schulich School of Engineering, University of Calgary
Calgary, AB
 
Bachelor of Science Electrical Engineering, Minor in Digital Engineering  | GPA: 3.64/4
      September 2019 – June 2024 
 

Relevant Coursework: Introduction to Communication Systems and Networks, Industrial IoT Systems and Data Analytics, Application Specific Processors and Accelerators

### TECHNICAL SKILLS
•	Software: C/C++, Python, VHDL, MATLAB, Simulink, Gerrit, Jira, JavaScript, MS Office Suite, Assembly, PuTTY, Linux
•	Designing: Allegro Cadence, MODELSIM, NI Multisim, Intel Quartus Prime, PS:SE, Xilinx Vivado
•	Hardware:  Oscilloscope, Spectrum Analyzer, Multimeter, Soldering, Power Supplies, STM MCU, Pynq Z2 FPGA, PIC MCU

### Professional EXPERIENCE
#### Ericsson Canada Inc	Ottawa, ON
##### Digital Hardware Engineer	2022-2023
•	Conducted Power Rail Analysis using Power Tree for reference and Multimeter to measure voltage on high voltage radio. Measured continuity across capacitors to ensure no shorts were created. 
•	Developed an automation tool in Python that achieved a 70% reduction in thermal verification time.
o	Used component datasheets to ensure comparison of metrics to maintain accuracy of results generated. Furthermore, created test cases to ensure reliability and function of automation tool.
o	Created documentation and presented the automation tool to the entire company, showcasing proficient research, report writing, and presentation skills.
•	Collected, assessed, and debugged Read and Write timing parameters for Flash SPI interfaces using Oscilloscope.
•	Assisted with PCB design and verification using Allegro Cadence after referring to prior radio board schematics.
•	Led research on high frequency testing equipment, targeting optimal performance and value by comparing price with datasheet specifications and testing requirements. 
##### Android SDK/NDK Full-Stack Developer	2022-2023
•	Enhanced backend data management for application by creating classes and off-loading data into separate files.  
•	Increased UI functionality by incorporating filters.
•	Optimized app performance by replacing batch loading with infinite scrolling and removing redundant functions.
•	Improved methods of data visualization on UI using pi and bar charts.
•	Performed technical tests to collect metrics in 5G lab. 

### LEADERSHIP EXPERIENCE
#### IEEE UofC Student Branch Executive Council | Microsoft Excel, Microsoft PowerPoint, Microsoft Word
##### Treasurer
•	Managed and maintained branch accounts for professional associations.
•	Prepared and submitted Annual Budget reports and Financials.
•	Developed financial strategies, ensured suitable funding for events, and advised on activity cost allocation.
•	Presented data in a methodical format in front of other executive council members, demonstrating analytical thinking and proactive communication skills.
#### Team Zeus: Electric Motorsport
##### Electrical Team Member and Documentation Lead
•	Developed comprehensive and easily comprehendible documents using Agile software for modifications on an electric motorcycle.
•	Performed multiple drafting tasks and ensured synchronous data-keeping for all electrical sub-teams.
•	Gained an understanding of principles of bike operation and learned about workshop safety practices.
Integrated Learning Stream Program | Microsoft Office Suite, Circuit Designing, Agile 
Student Member
•	Designed and assembled circuits around Op-Amps and PIC microcontrollers to practice embedded designing.
•	Created and implemented circuit schematics using diodes, thermistors, and transistors.
•	Conducted research on Discrete Time Systems, creating remotely accessible recorded lectures, notes, and exercise problems.
•	These experiences highlight a combination of technical proficiency, leadership, and a commitment to applying engineering principles in real-world scenarios.

### PROJECTS
#### Automated Enforcement of Bus-Only Lanes and Crossings 
•	Led the design and implementation of an automated enforcement prototype for Calgary Transit, improving transit efficiency. 
•	This project involved developing a hardware proof-of-concept with Raspberry Pi and sensors (LiDAR, GPS, camera) to trigger recordings and optimize power consumption (36% reduction in idle state). Software using Python, Pysftp, Flask, and machine learning models (YOLOv8 at 93% accuracy) achieved high object and license plate recognition accuracy (95%), addressed right-turn filtering, and ensured reliable license plate capture in low-light conditions. A user interface facilitated violation review.
•	Hardware Design and Sensor Integration: Selected and integrated Raspberry Pi (Linux) with LiDAR (bus-only crossings), GPS (bus-only lanes), and camera to capture video footage and trigger recordings based on sensor data (e.g., LiDAR detecting vehicles). Optimized power consumption by 36% through sensor-based triggering.
•	Machine Learning and Image Processing: Implemented YOLOv8 (93% accuracy) for vehicle detection within video footage, differentiating from other objects. Utilized PaddleOCR for text detection in license plates and leveraged a cloud based LPR API (95% accuracy) for license plate recognition, minimizing manual intervention.
•	User Interface Design: Created a user interface using React and Electron.js for viewing violation records and video clips, enabling easy review by relevant authorities.
•	Database Management: Utilized SQLite to store violation information (date, time, location, license plate, type) for easy access and retrieval of incident related information.
#### Optimized Real-time Audio Filtering | C, Python, STM MCU, ARM Cortex-M4, Assembly, Buffers, DSP, FIR Filtering, Embedded Systems
•	Implemented and compared various FIR filtering techniques (Circular Buffer, Block Processing) on the STM32F411 using C.
•	Compared performance (speed, memory usage, program size) and verified integrity of filter after implementation.
•	Implemented Loop Unrolling and utilized architecture-specific SIMD instructions to meet audio timing requirements.
•	Created Python notebook to verify integrity of signal after filtering. 
#### 2D Image Filtering and Convolution on MCU | C, Python, STM MCU, ARM Cortex-M4, Assembly, DSP, FIR Filtering, Embedded Systems
•	Implemented various 2D Image filtering techniques using 3x3 kernels on STM32F411 using C.
•	Loaded images to STM Microcontroller as binary file. Utilized convolution techniques to filter images. 
•	Paid close attention to data access and boundary handling for image convolution. 
•	Implemented and observed the affect of various 3x3 kernels (edge filter, gaussian blur, sharpening).
•	Created Python notebook to view images by decrypting binary file. 
#### Altera DE10-Lite FPGA Distance Sensor | Verilog, Design and Verification, Hardware design, FPGA
•	Implemented voltage-to-distance conversion in VHDL using Intel Quartus Prime
•	Created testbenches to conduct tests and simulate digital signals and switch gates to be verified using MODELSIM.
•	Configured DE10 display for distance/voltage based on switch state.
•	Demonstrated proficiency in FPGA programming, sensor integration, and VHDL, highlighting skills in hardware design and testing.
#### C++ Flight Management Program | C++, Object-Oriented Programming, 
•	Developed and implemented a Flight Management Program in C++, incorporating classes for Flight, Passenger, and Seat.
•	Utilized file handling to read and process flight information from a text file, showcasing proficiency in data input/output operations.
•	Implemented functionalities such as displaying seat maps, managing passenger information, adding/removing passengers, and saving data to enhance the program's usability.
•	Applied the Selection Sort algorithm for efficient organization of passenger data based on seat locations, demonstrating algorithmic problem-solving skills.
#### UnderPressure Posture Corrector | C++, Circuit Designing, Agile Scrums, Arduino
•	Developed an Arduino-based posture corrector using an Arduino Nano, resistive strips, and a speaker.
•	Applied voltage dividers and utilized C++ and Arduino IDE for embedded programming.
•	Implemented Agile project management methodologies (sprint and scrum) for efficient development.
•	Received awards for "Most Innovative Product," "Best Marketing," and "Best Use of Humor."
#### Calgary Weather Data Visualization – ENGG 233 Project
•	Implemented a GUI and user-interactive program using Java-based Language Processing.
•	Displayed daily average minimum and maximum temperature data for the last 30 years in Calgary.
•	Enabled user flexibility in selecting data for specific months and displaying maximum or minimum temperatures.
#### Point Based Graphical Zoom – MATLAB
•	Used MATLAB to create a graphical point-based zoom function.
•	The function generated a bounding box and produced a new figure based on any two points on a MATLAB-produced graph.
#### Impact of Green Line LRT Research Project 
•	Researched and wrote a report on the impact of the Green Line LRT and its stations on stakeholders.
•	Analyzed stakeholders, including the public, residents near the station, taxpayers, and Calgary Transit employees.
•	Considered financial restrictions and proposed solutions to potential problems.
•	Gave a professional and technical presentation summarizing findings.
#### Deep learning Finger Digit Classifier GUI | Python, Hardware-Software Co-design, Linux, Object Tracking 
•	Trained a finger digits classifier using a Convolutional Neural Network (CNN) with the fastai library, demonstrating proficiency in deep learning techniques.
•	Employed data augmentation techniques to improve model generalization and performance.
•	Analyzed model performance by calculating accuracy and generating a confusion matrix.
•	Managed and manipulated image data, including copying, renaming, and organizing datasets.
•	Successfully enhanced the finger digits classifier using a controlled environment showcasing adaptability and problem-solving skills.
•	Developed a GUI application for real-time finger count prediction, highlighting practical application and user interface design skills.
•	Achieved a notable improvement in test accuracy (from 60% to 88%) through the selected approach, showcasing effective problem-solving and model optimization.
•	Python: Proficiently used Python, including libraries like fastai, OpenCV, and tkinter.
•	Version Control: Utilized Git for version control, maintaining a clean and organized codebase.
•	Data Visualization: Employed Seaborn and Matplotlib for data visualization, enhancing the presentation of results.


### AWARDS
Jason Lang Scholarship (2020,2021)
University of Calgary Dean’s List (2020,2022)

## Inline HTML elements

HTML defines a long list of available inline tags, a complete list of which can be found on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).


--page-break--

* **To bold text**, use `<strong>`.
* *To italicize text*, use `<em>`.
* Abbreviations, like <abbr title="HyperText Markup Langage">HTML</abbr> should use `<abbr>`, with an optional `title` attribute for the full phrase.
* Citations, like <cite>&mdash; Thomas A. Anderson</cite>, should use `<cite>`.
* <del>Deleted</del> text should use `<del>` and <ins>inserted</ins> text should use `<ins>`.
* Superscript <sup>text</sup> uses `<sup>` and subscript <sub>text</sub> uses `<sub>`.
* for hyperlink use `<a href="#">hyperlink</a>`
* Quoting `>` 


Most of these elements are styled by browsers with few modifications on our part.


## Code

Cum sociis natoque penatibus et magnis dis `code element` montes, nascetur ridiculus mus.

```js
// Example can be run directly in your JavaScript console

// Create a function that takes two arguments and returns the sum of those arguments
var adder = new Function("a", "b", "return a + b");

// Call the function
adder(2, 6);
// > 8
```
## Lists

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean lacinia bibendum nulla sed consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.

* Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
* Donec id elit non mi porta gravida at eget metus.
* Nulla vitae elit libero, a pharetra augue.

Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit libero, a pharetra augue.

1. Vestibulum id ligula porta felis euismod semper.
2. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
3. Maecenas sed diam eget risus varius blandit sit amet non magna.

Cras mattis consectetur purus sit amet fermentum. Sed posuere consectetur est at lobortis.

Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu leo.

## Images

Quisque consequat sapien eget quam rhoncus, sit amet laoreet diam tempus. Aliquam aliquam metus erat, a pulvinar turpis suscipit at.

![placeholder](https://placehold.it/800x400 "Large example image") ![placeholder](https://placehold.it/400x200 "Medium example image") ![placeholder](https://placehold.it/200x200 "Small example image")

## Tables

Aenean lacinia bibendum nulla sed consectetur. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Upvotes</th>
      <th>Downvotes</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Totals</td>
      <td>21</td>
      <td>23</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>10</td>
      <td>11</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>4</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Charlie</td>
      <td>7</td>
      <td>9</td>
    </tr>
  </tbody>
</table>

Nullam id dolor id nibh ultricies vehicula ut id elit. Sed posuere consectetur est at lobortis. Nullam quis risus eget urna mollis ornare vel eu leo.
