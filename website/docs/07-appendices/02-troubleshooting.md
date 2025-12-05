---
id: troubleshooting
title: Troubleshooting Guide
slug: /appendices/troubleshooting
---

# Troubleshooting Guide

Common issues and their solutions for setting up your environment and working through the textbook modules.

## Hardware and Environment Setup

### Minimum Hardware Specifications Not Met

**Issue**: Your workstation or edge kit does not meet the minimum hardware specifications outlined in the textbook (e.g., NVIDIA RTX 4070 Ti, Core i7, 64GB RAM for workstation; NVIDIA Jetson Orin Nano/NX for edge kit).

**Impact**: Reduced performance, inability to run certain simulations (especially NVIDIA Isaac Sim), longer processing times, or complete software incompatibility.

**Solution**:
1.  **Review Requirements**: Re-verify the minimum hardware specifications detailed in the "Hardware Setup" chapter (Track A: Local RTX Lab / Track B: Cloud/AWS Lab).
2.  **Upgrade Hardware**: If possible, upgrade components to meet the minimum specifications. Focus on GPU VRAM, CPU, and RAM for workstation, and the specific Jetson model for edge kits.
3.  **Cloud Alternatives**: For compute-intensive tasks, consider using cloud-based solutions (e.g., AWS EC2 instances with NVIDIA GPUs) if your local hardware is insufficient. Refer to "Track B: Cloud/AWS Lab" setup guide.
4.  **Workaround (Reduced Scope)**: For some modules, you might be able to proceed with simpler simulations or theoretical exercises, but full practical implementation (e.g., high-fidelity Isaac Sim environments) may be limited.

### Lack of Access to Specific Robot Hardware (Unitree Go2/G1)

**Issue**: You do not have access to the primary robot platforms referenced (Unitree Go2/G1) or other specific hardware.

**Impact**: Inability to perform direct sim-to-real transfer exercises or test code on the exact physical robots mentioned.

**Solution**:
1.  **Generic Biped Fallback**: For URDF and basic control exercises, use the provided generic biped fallback models. These models are designed to illustrate concepts without requiring specific hardware.
2.  **Alternative Simulations**: Focus on extensive simulation within Gazebo, Unity, or Isaac Sim. The principles of robot control and AI integration are largely transferable from simulation.
3.  **Community & Open-Source Robots**: Explore open-source robot platforms (e.g., affordable wheeled robots, small manipulators) that might be more accessible. Adapt the textbook's principles to these platforms where feasible.
4.  **Virtualization**: For some aspects, cloud-based virtual robot labs (if available) might offer temporary access to simulated environments without local hardware investment.

## Cloud Robotics and Latency

### The "Latency Trap" in Cloud Robotics

**Issue**: When deploying robot control or AI processing to cloud/AWS labs ("High OpEx" setup), significant network latency between the robot (edge kit) and the cloud compute can severely degrade real-time performance, leading to jerky movements, delayed responses, or unstable control loops.

**Impact**: Poor real-time control, unreliable autonomous navigation, reduced safety, and difficulty in achieving smooth human-robot interaction.

**Solution**:
1.  **Edge Compute Prioritization**: Emphasize processing on the edge kit (NVIDIA Jetson Orin Nano/NX) for latency-critical tasks (e.g., low-level motor control, immediate sensor processing, VSLAM loop closure).
2.  **Asynchronous Communication**: Design ROS 2 communication patterns to be asynchronous, allowing the robot to continue operating while waiting for cloud responses on less time-critical tasks.
3.  **Data Filtering & Compression**: Reduce the volume of data sent to the cloud by filtering irrelevant sensor data or compressing large data streams (e.g., raw camera feeds).
4.  **Hybrid Architectures**: Implement a hybrid approach where high-frequency control loops run locally, and higher-level planning, complex AI model inference, or data logging occurs in the cloud.
5.  **Quality of Service (QoS)**: Utilize ROS 2 QoS settings (e.g., `reliable`, `best_effort`, `history`, `depth`) to prioritize critical messages and manage network congestion.
6.  **Edge-Cloud Synchronization**: Implement robust synchronization mechanisms for model updates, map data, and state information between edge and cloud.

## Docusaurus Platform Specifics

### Handling Embedded Simulations and Large Media Files

**Issue**: Docusaurus, as a static site generator, might face challenges in efficiently displaying embedded interactive simulations, 3D models (URDF visualizations), or large video files of robot behaviors without impacting performance or build times.

**Impact**: Slow page load times, poor user experience, broken interactive elements, or overly large repository sizes.

**Solution**:
1.  **External Hosting for Media**: Host large video files (e.g., robot behavior demonstrations) on external platforms (YouTube, Vimeo) and embed them using standard iframe or Docusaurus's own embedding components. This offloads bandwidth and serving.
2.  **Optimized Images**: Compress and optimize all static images used in the textbook. Use modern image formats (WebP) and responsive image techniques.
3.  **Lazy Loading**: Implement lazy loading for images and iframes (e.g., embedded simulation demos) so that content only loads when it enters the viewport.
4.  **Static 3D Model Viewers**: For URDF or other 3D model visualizations, consider static web-based viewers (e.g., using `three.js`, `model-viewer`) that can load optimized 3D assets. Provide interactive elements where possible, but ensure they are lightweight.
5.  **Interactive Components (React)**: Leverage Docusaurus's React component capabilities to create custom, lightweight interactive elements for conceptual demonstrations, rather than full-blown embedded simulations if performance is an issue. Examples include sliders to change parameters, simple 2D visualizations.
6.  **Code Sandboxes**: For interactive code examples (e.g., ROS 2 `rclpy` snippets), consider embedding code sandboxes (e.g., CodeSandbox, replit) where users can run and modify code directly, without heavy client-side simulation.
7.  **Build Process Optimization**: Optimize the Docusaurus build process to minimize output size and maximize build speed. Utilize Docusaurus's inherent optimizations and external tools for asset minification.