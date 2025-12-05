---
id: realsense-imu-wiring
title: RealSense Camera and IMU Wiring Guide
slug: /setup/realsense-imu-wiring
---

# RealSense Camera and IMU Wiring Guide

This guide provides detailed instructions for correctly wiring your Intel RealSense D435i depth camera, with a focus on its integrated Inertial Measurement Unit (IMU), for seamless integration with your NVIDIA Jetson-based robotics platform. Proper wiring ensures reliable data streams crucial for Visual SLAM (VSLAM) and advanced navigation tasks.

:::caution
Always ensure your Jetson is powered off before connecting or disconnecting any hardware components to prevent damage to your devices.
:::

## 1. Intel RealSense D435i Overview

The Intel RealSense D435i is a powerful stereo depth camera that also integrates an IMU (accelerometer and gyroscope). The IMU provides motion data that, when combined with visual data, significantly enhances the accuracy and robustness of localization and mapping algorithms.

## 2. Connecting the RealSense D435i to NVIDIA Jetson

### USB Connection

*   **Cable:** Use the provided USB 3.0 Type-C to Type-A cable (or an equivalent high-quality USB 3.0 cable).
*   **Jetson Port:** Connect the USB Type-A end of the cable to an available USB 3.0 port on your NVIDIA Jetson Orin Nano/NX. These ports are typically blue on most systems, indicating USB 3.0 (SuperSpeed) capabilities.
*   **RealSense Port:** Connect the USB Type-C end to the corresponding port on the RealSense D435i camera.

:::tip
Ensure you use a USB 3.0 port. While the RealSense camera might function on a USB 2.0 port, it will operate at reduced bandwidth, potentially limiting frame rates and data quality, especially for depth streams.
:::

### Power Supply (Optional for some setups)

*   The RealSense D435i is typically powered directly via its USB 3.0 connection. No external power supply is usually required when connected to a capable USB 3.0 port on the Jetson.
*   **Exception:** If you are using a long USB cable, a low-power USB hub, or encountering power-related issues, an external powered USB hub or a dedicated power supply for the camera might be necessary. Refer to the RealSense datasheet for exact power requirements.

## 3. IMU Data Integration

The IMU data from the RealSense D435i is typically accessed through the `librealsense` SDK and the `ros2_realsense` package (if using ROS 2). No separate physical wiring is required for the IMU as it's integrated into the camera and communicates over the same USB connection.

### Accessing IMU Data in ROS 2

Once the `ros2_realsense` package is installed and the camera node is launched (as covered in Module 1 and 3), the IMU data will be published on specific ROS 2 topics, typically:

*   `/camera/imu` (or similar, check with `ros2 topic list`)
*   Contains `sensor_msgs/Imu` messages, providing angular velocity and linear acceleration.

## 4. Mounting Considerations

*   **Stability:** Securely mount your RealSense camera to your robot platform. Vibrations and loose connections can significantly degrade the quality of both visual and IMU data.
*   **Field of View:** Position the camera to ensure an unobstructed field of view relevant to your robot's tasks (e.g., forward-facing for navigation, downward-facing for manipulation).
*   **Calibration:** For advanced applications, extrinsic calibration between the camera and the robot's base frame might be necessary to accurately fuse camera data with robot kinematics.

By following these wiring and integration steps, your Intel RealSense D435i will be correctly connected to your NVIDIA Jetson, providing essential sensory input for your Physical AI projects.
