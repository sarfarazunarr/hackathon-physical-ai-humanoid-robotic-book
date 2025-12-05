---
id: urdf-basics
title: URDF Basics - Robot Description Format
slug: /module-1/urdf-basics
---

# URDF Basics - Robot Description Format

In this section of **Module 1: The Robotic Nervous System**, we delve into the **Unified Robot Description Format (URDF)**. URDF is an XML-based file format used in ROS 2 to describe the kinematic and dynamic properties of a robot, including its physical structure, visual appearance, collision properties, and joint movements. A well-defined URDF is foundational for simulation, visualization, motion planning, and control.

:::info
This module primarily uses **Unitree G1 (Humanoid)** examples for URDF. However, a **generic biped fallback** is also provided for accessibility, allowing students without specific Unitree G1 files to follow along with the core concepts.
:::

## 1. What is URDF?

URDF models your robot as a collection of **links** (rigid bodies) connected by **joints** (allowing relative motion between links). It defines:

*   **Links:** Represent physical parts of the robot (e.g., torso, thigh, arm). Each link has properties like mass, inertia, and visual/collision geometries.
*   **Joints:** Define the kinematic relationship between two links. Joints can be of various types (revolute, prismatic, fixed, continuous) and specify their axis of rotation/translation, limits, and dynamics.
*   **Sensors:** Although not directly part of the core kinematic/dynamic definition, URDF can include references to sensors attached to links.

## 2. Basic URDF Structure

A URDF file starts with a `<robot>` tag, containing multiple `<link>` and `<joint>` definitions. Here's a simplified structure:

```xml
<robot name="my_robot">

  <link name="base_link">
    <!-- Properties for base_link -->
  </link>

  <link name="link_1">
    <!-- Properties for link_1 -->
  </link>

  <joint name="joint_1" type="revolute">
    <parent link="base_link"/>
    <child link="link_1"/>
    <!-- Joint properties -->
  </joint>

  <!-- More links and joints -->

</robot>
```

## 3. Defining Links

Each `<link>` tag can contain:

*   **`<visual>`:** Defines the visual appearance of the link, often by referencing a 3D mesh file (e.g., `.stl`, `.dae`) and specifying color. This is what you see in simulators like RViz or Gazebo.
*   **`<collision>`:** Defines the collision geometry of the link. This is used by physics engines for collision detection. It's often a simplified version of the visual mesh to reduce computational load.
*   **`<inertial>`:** Defines the mass, center of mass (origin), and inertia tensor of the link. Crucial for realistic physics simulation.

### Example: Unitree G1 (Humanoid) - Torso Link

(Note: A full Unitree G1 URDF is extensive; this is a conceptual snippet)

```xml
<link name="body">
  <visual>
    <geometry>
      <mesh filename="package://unitree_g1_description/meshes/body.stl" />
    </geometry>
    <material name="grey"/>
  </visual>
  <collision>
    <geometry>
      <mesh filename="package://unitree_g1_description/meshes/body_collision.stl" />
    </geometry>
  </collision>
  <inertial>
    <origin xyz="0 0 0" rpy="0 0 0"/>
    <mass value="5.0"/>
    <inertia ixx="0.05" ixy="0" ixz="0" iyy="0.05" iyz="0" izz="0.05"/>
  </inertial>
</link>
```

### Generic Biped Fallback - Torso Link Example

```xml
<link name="torso">
  <visual>
    <geometry>
      <box size="0.2 0.1 0.3"/> <!-- A simple box for visualization -->
    </geometry>
    <material name="blue">
      <color rgba="0 0 1 1"/>
    </material>
  </visual>
  <collision>
    <geometry>
      <box size="0.2 0.1 0.3"/>
    </geometry>
  </collision>
  <inertial>
    <origin xyz="0 0 0.15" rpy="0 0 0"/>
    <mass value="2.0"/>
    <inertia ixx="0.01" ixy="0" ixz="0" iyy="0.01" iyz="0" izz="0.01"/>
  </inertial>
</link>
```

## 4. Defining Joints

Each `<joint>` tag connects two links: a `parent` and a `child`. Key attributes include:

*   **`name`:** Unique identifier for the joint.
*   **`type`:** `revolute` (revolving joint with limits), `continuous` (revolving without limits), `prismatic` (sliding joint), `fixed` (no movement), `planar`, `floating`.
*   **`<origin>`:** Defines the joint's position and orientation relative to its parent link.
*   **`<axis>`:** Specifies the axis of rotation for revolute/continuous joints or translation for prismatic joints.
*   **`<limit>`:** For `revolute` and `prismatic` joints, defines the upper and lower bounds, velocity, and effort limits.
*   **`<dynamics>`:** (Optional) Defines friction and damping properties.

### Example: Unitree G1 (Humanoid) - Hip Yaw Joint

```xml
<joint name="hip_yaw_joint_left" type="revolute">
  <parent link="body"/>
  <child link="left_hip"/>
  <origin xyz="0 0.05 0" rpy="0 0 0"/>
  <axis xyz="0 0 1"/>
  <limit lower="-1.57" upper="1.57" effort="100" velocity="10"/>
</joint>
```

### Generic Biped Fallback - Hip Joint Example

```xml
<joint name="left_hip_joint" type="revolute">
  <parent link="torso"/>
  <child link="left_thigh"/>
  <origin xyz="0 -0.05 -0.1" rpy="0 0 0"/>
  <axis xyz="1 0 0"/>
  <limit lower="-0.5" upper="0.5" effort="10" velocity="1"/>
</joint>
```

## 5. Visualizing URDF with RViz

RViz is the primary 3D visualizer for ROS 2. To visualize your URDF:

1.  **Launch `robot_state_publisher`:** This node reads your URDF and publishes the robot's state as transformations (TF).
    ```bash
    # Assuming your URDF is in my_robot_pkg/urdf/my_robot.urdf
    ros2 launch urdf_tutorial display.launch.py model:=$(ros2 pkg prefix my_robot_pkg)/share/my_robot_pkg/urdf/my_robot.urdf
    ```
    (Note: `urdf_tutorial` is a standard ROS 2 package; you might need to adapt the path or create your own launch file).

2.  **Launch RViz:** Add a `RobotModel` display and point it to the `/robot_description` topic.

## 6. Xacro - Enhanced URDF

While URDF is powerful, it lacks advanced features like macros, conditionals, and arithmetic. **Xacro** (XML Macros) is a preprocessor that extends URDF, allowing you to write more concise and modular robot descriptions. It's highly recommended for complex robots.

In the next section, we will explore `rclpy` further for Python-based control and interaction with our defined robot models.
