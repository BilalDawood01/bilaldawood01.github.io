---
date: 2024-04-15 12:50:59
layout: post
title: Audio Filtering on STM32F411 Microcontroller
subtitle: Implement and compare Circular buffer, block processing and ARM assembly commands
description: Implementation of various FIR filters on the ARM Cortex M4 processor through the use of ARM Assembly and C Code to clean a signal. 
image:
optimized_image: "/assets/img/uploads/audio_filtering.png"
category: Embedded Designing
tags:
  - Team Project
  - Software Design 
  - Micrcontroller
  - Python
  - Embedded designing
  - Optimization
  - Report Writing
  - ARM Assembly 
  - C code
  - Assembly Analysis
author: Bilal Dawood
paginate: true
---

# ENCM 515 Project: Optimizing Circular Buffer Implementation

## Introduction

In this project for ENCM 515, I embarked on optimizing a circular buffer to enhance real-time signal processing in an embedded system. The primary goal was to refine the performance of the buffer, reducing memory usage while speeding up processing time—critical factors for applications such as audio signal processing.

<!-- ![System Architecture Diagram](path_to_image/system_architecture.png) -->
<div style="display: flex; align-items: center; justify-content: space-between;">
  <div style="flex: 1; padding: 10px;">
    <img src="/assets/img/img_conv/STM32F411E-DISCO.png" alt="STM32F411-DISCO" style="width: 100%;">
    <figcaption style="text-align: center;">Our Microcontroller</figcaption>
  </div>
  <div style="flex: 1; padding: 10px;">
    <img src="/assets/img/img_conv/M4-Corenew.avif" alt="Processor" style="width: 100%;">
    <figcaption style="text-align: center;">Processor on the STM32F411-Disco</figcaption>
  </div>
</div>

## Initial Implementation

The journey began with a basic function, `ProcessSample()`, designed to handle individual samples using a circular buffer. This function improved upon a naive linear buffer implementation by avoiding unnecessary data shuffling and using a `headIndex` to track the buffer's head position. This approach efficiently processed samples and consistently met timing constraints at various compiler optimization levels.

<!-- ![ProcessSample Flowchart](path_to_image/process_sample_flowchart.png) -->
<div style="display: flex; align-items: center; justify-content: space-between;">
  <div style="flex: 1; padding: 10px;">
    <img src="/assets/img/img_conv/block_processing.png" alt="Block Processing illustration" style="width: 100%;">
    <figcaption style="text-align: center;">Illustration of Block Processing</figcaption>
  </div>
  <div style="flex: 1; padding: 10px;">
    <img src="/assets/img/img_conv/circular_buffer.gif" alt="Image Convolution Illustration" style="width: 100%;">
    <figcaption style="text-align: center;">Circular Buffer Implementation</figcaption>
  </div>
</div>

## Exploring Block Processing

The next step involved processing multiple samples simultaneously using the `ProcessBlock()` function. This method aimed to boost overall performance by handling blocks of samples. While this approach enhanced processing efficiency, it struggled with larger block sizes, often failing to meet timing constraints. However, the filtered results remained accurate, producing clean sinusoidal waves with minimal noise.

<div style="display: flex; align-items: center; justify-content: space-between;">
  <div style="flex: 1; padding: 10px;">
    <img src="/assets/img/img_conv/noisy.png" alt="Noisy Waveform" style="width: 100%;">
    <figcaption style="text-align: center;">Values before applying Filter</figcaption>
  </div>
  <div style="flex: 1; padding: 10px;">
    <img src="/assets/img/img_conv/circular_buffer_results.png" alt="Filtered Audio File Using Cicrular Buffer" style="width: 100%;">
    <figcaption style="text-align: center;">Waveform after applying Circular Buffer filter</figcaption>
  </div>
</div>

## Optimization Through Loop Unrolling

To further optimize, I implemented loop unrolling in the `ProcessBlockU()` function. This technique performed multiple calculations per iteration, reducing loop overhead and significantly improving performance for smaller block sizes. This method allowed the system to meet timing constraints at higher optimization levels, although the benefits diminished with larger blocks, and performance gains plateaued.

<div style="flex: 1; padding: 10px;">
  <img src="/assets/img/img_conv/processblock3.png" alt="Filtered Audio File Using Block Processing Buffer" style="width: 100%;">
  <figcaption style="text-align: center;">Waveform after applying Block Processing with Buffer size = 3</figcaption>
</div>

## Special Assembly Instructions

The final approach utilized special assembly instructions in the `AsemProcessBlockU()` function. This method aimed for maximum performance by leveraging low-level optimizations, reducing memory and arithmetic instructions. Despite an increase in branching instructions, this method maintained accurate filtering with clean sinusoidal outputs, highlighting the potential of assembly-level optimizations for real-time systems.

## Observations

The **ProcessSample()** function showed efficient sample processing with minimal instructions. It used only 8 memory instructions, 10 arithmetic instructions, and 2 branch instructions, achieving a time per sample of 0.0327ms at the highest optimization level (Ofast) and consistently met timing constraints.

The **ProcessBlock()** function improved performance for smaller blocks. For a block size of 3, it used 13 memory instructions, 22 arithmetic instructions, and 6 branch instructions, achieving a time per sample of 0.09519ms and meeting timing constraints. However, with a block size of 16, it required 15 memory instructions, 25 arithmetic instructions, and 8 branch instructions, leading to a time per sample of 0.50548ms and failing to meet timing constraints.

The **ProcessBlockU()** function demonstrated that loop unrolling could enhance performance for small block sizes. For a block size of 3, it used 32 memory instructions, 25 arithmetic instructions, and 8 branch instructions, achieving a time per sample of 0.08003ms and meeting timing constraints. However, for a block size of 16, it maintained the same number of instructions but resulted in a time per sample of 4.4354ms, failing to meet timing constraints.

The **AsemProcessBlockU()** function leveraged special assembly instructions to reduce overhead. For a block size of 3, it used 30 memory instructions, 18 arithmetic instructions, and 14 branch instructions, achieving a time per sample of 0.07991ms and meeting timing constraints. For a block size of 16, it required 38 memory instructions, 22 arithmetic instructions, and 18 branch instructions, resulting in a time per sample of 0.42311ms and failing to meet timing constraints.

### Summary of Differences

**ProcessSample()** efficiently handled individual samples with minimal instructions and consistently met timing constraints. **ProcessBlock()** improved performance for small blocks but failed with larger sizes. **ProcessBlockU()** showed that loop unrolling enhanced performance for small blocks but did not scale well. **AsemProcessBlockU()** leveraged assembly-level optimizations effectively for small blocks but struggled with larger sizes due to increased branching instructions.

## Conclusion

This project successfully demonstrated the optimization of a circular buffer for real-time signal processing on an embedded system. By exploring various techniques and analyzing their impact, I gained valuable insights into low-level programming, assembly language, and performance tuning. This project underscores my capability to optimize embedded systems for high-performance applications, making me a strong candidate for roles requiring expertise in embedded systems and real-time signal processing.

## Future Improvements

To further enhance performance, I plan to explore more sophisticated loop unrolling techniques tailored to the specific nature of signal processing tasks. Additionally, optimizing branching instructions to minimize performance bottlenecks and leveraging dedicated DSP (Digital Signal Processing) hardware to offload intensive computations will be key areas of focus.
