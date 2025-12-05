---
id: cheatsheets
title: Cheatsheets
slug: /appendices/cheatsheets
---

# Cheatsheets

A collection of useful cheatsheets for quick reference on ROS 2, Python, and other tools used in this textbook.

## ROS 2 Fundamentals

### Core Concepts
- **Nodes**: Executable processes performing computation.
- **Topics**: Named buses for nodes to exchange messages. Publisher-subscriber model.
- **Services**: Request-response communication for nodes.
- **Actions**: Long-running, goal-oriented tasks with feedback.

### Common `rclpy` Commands
- `ros2 run <package_name> <executable_name>`: Run a ROS 2 node.
- `ros2 topic list`: List active topics.
- `ros2 topic echo <topic_name>`: Display messages published on a topic.
- `ros2 service list`: List active services.
- `ros2 service call <service_name> <service_type> <arguments>`: Call a service.

## URDF (Unified Robot Description Format)

### Key Elements
- **`<robot>`**: Root element for the entire robot description.
- **`<link>`**: Defines a rigid body with visual and collision properties.
- **`<joint>`**: Connects two links, defining their kinematic relationship.
- **`<transmission>`**: Links actuators to joints.
- **`<gazebo>`**: Gazebo-specific extensions for simulation properties.

### Important Attributes
- `name`: Unique identifier for links and joints.
- `type`: Joint type (e.g., `revolute`, `continuous`, `prismatic`, `fixed`).
- `parent`, `child`: Specifies the links connected by a joint.

## NVIDIA Isaac Sim & Isaac ROS

### Isaac Sim
- **OmniGraph**: Visual scripting tool for building simulation workflows.
- **USD (Universal Scene Description)**: Foundation for scene description and interchange.
- **Isaac SDK**: Provides robotics algorithms, Gym environments, and ROS 2 bridges.

### Isaac ROS
- **GEMs**: GPU-accelerated packages for robotics applications (e.g., `isaac_ros_argus`, `isaac_ros_nitros`).
- **NITROS**: ROS 2 message type adaptation for high-performance data transfer.

## Nav2 (Navigation 2)

### Core Components
- **`amcl`**: Adaptive Monte Carlo Localization.
- **`bt_navigator`**: Behavior Tree-based navigator.
- **`global_planner`**: Plans paths over the entire map.
- **`local_planner`**: Plans paths locally, avoiding obstacles.
- **`costmap_2d`**: Represents the environment for navigation.

### Configuration Files
- `params.yaml`: Global navigation parameters.
- `planner_server.yaml`, `controller_server.yaml`, `recovery_server.yaml`: Specific server configurations.

## VSLAM (Visual Simultaneous Localization and Mapping)

### Key Concepts
- **Localization**: Estimating the robot's position and orientation.
- **Mapping**: Building a representation of the environment.
- **Feature Extraction**: Identifying salient points in images.
- **Bundle Adjustment**: Optimizing camera poses and 3D point locations.

## Vision-Language-Action (VLA)

### OpenAI Whisper
- **Speech-to-Text**: Transcribes audio input into text.
- **Model Size**: `tiny`, `base`, `small`, `medium`, `large`.

### LLM Integration
- **Prompt Engineering**: Crafting effective prompts for desired robot actions.
- **Action Translation**: Converting LLM text output into robot commands (e.g., joint movements, navigation goals).

