---
id: jetson-edge
title: NVIDIA Jetson Orin Nano Edge Device Setup
slug: /setup/jetson-edge
---

# NVIDIA Jetson Orin Nano Edge Device Setup

Welcome to **Track A: Local RTX Lab Setup - Edge Device Integration**! This section details the setup process for your NVIDIA Jetson Orin Nano or NX as an edge compute device, crucial for deploying and running AI models and robotic applications directly on your robot. This guide forms a part of your "High CapEx" (Local Lab) setup.

## 1. Minimum Hardware Specifications for Edge Kit

To effectively utilize the Jetson as an edge device, ensure you have the following components:

*   **Edge Compute Module:** NVIDIA Jetson Orin Nano or Jetson Orin NX.
*   **Depth Camera:** Intel RealSense D435i (or similar compatible depth camera).
*   **Microphone Array:** ReSpeaker Mic Array (or any ROS 2 compatible USB microphone array).

:::info
While this guide focuses on the Jetson Orin series, the principles can be adapted to other NVIDIA Jetson platforms (e.g., Xavier, Nano) with appropriate adjustments to software versions and installation commands.
:::

## 2. JetPack SDK Installation

JetPack SDK is NVIDIA's comprehensive software stack for Jetson, including OS, CUDA, cuDNN, TensorRT, and more.

*   **Flashing the Jetson:** Use the NVIDIA SDK Manager on your host PC (Ubuntu recommended) to flash the latest JetPack OS onto your Jetson device. Follow the official NVIDIA documentation for detailed flashing instructions.
    *   **Verify Installation:** After flashing and initial boot, run `sudo apt update && sudo apt upgrade`.

## 3. Peripheral Setup

### Intel RealSense D435i Camera

The RealSense camera provides RGB-D (color and depth) data, essential for computer vision and navigation tasks.

*   **Physical Connection:** Connect the Intel RealSense D435i camera to a USB 3.0 port on your Jetson device.
*   **Software Installation:**
    1.  Install `librealsense`:
        ```bash
        sudo apt-key adv --keyserver keys.gnupg.net --recv-key F6EAE72D1E58EB0C
        sudo add-apt-repository "deb https://librealsense.intel.com/Debian/apt-repo $(lsb_release -cs) main"
        sudo apt-get update
        sudo apt-get install librealsense2-utils librealsense2-dkms
        ```
    2.  Install ROS 2 RealSense package (if using ROS 2, covered in Module 1):
        ```bash
        # After ROS 2 installation
        sudo apt install ros-{ROS_DISTRO}-realsense2-camera
        ```
    *   **Verification:** Run `realsense-viewer` on your Jetson to verify camera functionality.

### ReSpeaker Mic Array

The ReSpeaker provides microphone input for speech recognition and audio processing.

*   **Physical Connection:** Connect the ReSpeaker Mic Array to a USB port on your Jetson device.
*   **Driver & Configuration:** Typically, USB microphone arrays are plug-and-play on Linux. You may need to select it as the default input device:
    ```bash
    # List audio input devices
    arecord -l

    # Test recording
    arecord -D plughw:<card_number>,<device_number> -f S16_LE -d 5 test.wav
    ```

## 4. Environment Verification

Ensure all components are recognized and functional:

*   **Jetson System Info:** `jtop` (install via `pip3 install jtop`) provides a comprehensive overview of system status.
*   **USB Devices:** `lsusb` to list connected USB devices and confirm RealSense and ReSpeaker are detected.

Your Jetson edge device is now prepared to run the core robotic software and AI models developed in subsequent modules.
