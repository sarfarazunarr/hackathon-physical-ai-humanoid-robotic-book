---
id: workstation-rtx
title: Local RTX Lab Workstation Setup
slug: /setup/workstation-rtx
---

# Local RTX Lab Workstation Setup

Welcome to **Track A: Local RTX Lab Setup**! This comprehensive guide will walk you through configuring your high-performance workstation, equipped with NVIDIA RTX GPUs, to serve as the foundation for your Physical AI and Humanoid Robotics development. This setup is optimized for running resource-intensive simulations like NVIDIA Isaac Sim and complex AI models locally, representing a "High CapEx" (Capital Expenditure) approach.

## 1. Minimum Hardware Specifications

To ensure a smooth and efficient development experience, your workstation must meet or exceed the following minimum specifications:

*   **Graphics Card (GPU):** NVIDIA RTX 4070 Ti with at least 12GB VRAM. (Higher-end RTX GPUs are recommended for improved performance in Isaac Sim and AI model training.)
*   **Processor (CPU):** Intel Core i7 (10th generation or newer) or equivalent AMD Ryzen processor.
*   **System Memory (RAM):** 64GB DDR4 (or better).
*   **Storage:** 1TB NVMe SSD for fast access to operating system, development tools, and project files.

:::warning
Attempting to run resource-intensive applications like NVIDIA Isaac Sim on hardware that does not meet these minimum specifications may result in severe performance degradation, crashes, or an inability to utilize key features.
:::

## 2. Operating System and Drivers

We recommend a Linux-based operating system for optimal compatibility and performance with robotics and AI development tools.

*   **Recommended OS:** Ubuntu 22.04 LTS (Jammy Jellyfish).
*   **NVIDIA Drivers:** Ensure you have the latest stable NVIDIA proprietary drivers installed for your RTX GPU. Refer to the official NVIDIA documentation for installation instructions specific to your Linux distribution.
    *   **Verification:** After installation, run `nvidia-smi` in your terminal to confirm that your GPU and driver versions are correctly recognized.

## 3. Software Prerequisites

Before diving into specific robotics frameworks, set up these essential software components:

*   **Docker:** Install Docker Engine for containerizing your development environment. This is crucial for isolating dependencies and ensuring reproducibility.
    *   **Post-installation steps:** Follow the official Docker documentation to manage Docker as a non-root user.
*   **NVIDIA Container Toolkit (nvidia-docker2):** This toolkit allows Docker containers to access your NVIDIA GPU. It is a critical component for running GPU-accelerated applications like Isaac Sim within Docker.
    *   **Installation:** Follow the official NVIDIA Container Toolkit installation guide for your system.
*   **Git:** Install Git for version control.
*   **Python 3.8+:** Ensure you have Python 3.8 or newer installed, along with `pip` for package management.

## 4. Environment Verification

After installing all prerequisites, perform a quick check to ensure everything is ready:

```bash
# Verify NVIDIA driver and CUDA version
nvidia-smi

# Verify Docker installation
docker run hello-world

# Verify NVIDIA Container Toolkit (should show GPU info)
docker run --gpus all nvidia/cuda:12.1.0-base-ubuntu22.04 nvidia-smi
```

With your workstation successfully configured, you are now ready to proceed with installing specific robotics frameworks and development environments covered in subsequent modules.
