---
id: gazebo-physics-sim
title: Gazebo for Physics and Sensor Simulation
slug: /module-2/gazebo-physics-sim
---

# Gazebo for Physics and Sensor Simulation

Continuing our exploration of **Module 2: The Digital Twin**, this section focuses on **Gazebo**, a powerful open-source 3D robotics simulator. Gazebo is widely used in the ROS 2 community for its robust physics engine, extensive sensor modeling capabilities, and strong integration with ROS 2, making it an ideal platform for developing and testing complex robotic systems, including humanoid platforms like the Unitree G1 and quadruped proxies like the Unitree Go2.

## 1. What is Gazebo?

Gazebo allows you to accurately simulate a robot in a complex indoor or outdoor environment. It provides a rich set of features:

*   **Physics Engine:** Integrates with physics engines like ODE (Open Dynamics Engine) to simulate realistic dynamics, collisions, and joint mechanics.
*   **High-Quality Graphics:** Renders 3D environments and robot models visually, aiding in development and debugging.
*   **Sensor Simulation:** Offers realistic models for common robot sensors, including:
    *   **Cameras:** RGB, depth, and stereo cameras.
    *   **Lidar:** 2D and 3D laser scanners.
    *   **IMU:** Inertial Measurement Units (accelerometers, gyroscopes).
    *   **Contact Sensors:** Detect physical contact with the environment.
*   **ROS 2 Integration:** Seamlessly integrates with ROS 2, allowing you to use your existing ROS 2 nodes to control simulated robots and process simulated sensor data.

## 2. Gazebo Architecture

Gazebo operates with a client-server architecture:

*   **Gazebo Server (`gzserver`):** The core physics engine and world simulation. It runs in the background and handles all the computations related to physics, sensor data generation, and robot dynamics.
*   **Gazebo Client (`gzclient`):** The graphical user interface (GUI) that allows you to visualize the simulation, interact with the environment, and debug robot behavior.
*   **Worlds:** XML files (often `.world` files) that define the simulated environment, including terrain, static objects, lighting, and initial robot poses.
*   **Models:** URDF (or SDF - Simulation Description Format) files that describe individual robots or objects within the world, including their links, joints, visuals, collisions, and inertial properties.

## 3. Launching a Gazebo Simulation with ROS 2

To integrate Gazebo with your ROS 2 projects, you typically use ROS 2 launch files.

### Example: Launching a Generic Biped Robot in an Empty World

Let's assume you have a `my_robot_description` package with your generic biped URDF (as discussed in Module 1) and a simple Gazebo world file.

1.  **Create a Gazebo world file** (`~/ros2_ws/src/my_robot_description/worlds/empty_world.world`):
    ```xml
    <?xml version="1.0" ?>
    <sdf version="1.6">
      <world name="empty_world">
        <light name="sun" type="directional">
          <cast_shadows>1</cast_shadows>
          <pose>0 0 10 0 -0 0</pose>
          <diffuse>0.8 0.8 0.8 1</diffuse>
          <specular>0.2 0.2 0.2 1</specular>
          <attenuation>1 0.1 0.0</attenuation>
          <direction>-0.5 -0.5 -1</direction>
        </light>
        <model name="ground_plane">
          <static>true</static>
          <link name="link">
            <collision name="collision">
              <geometry>
                <plane>
                  <normal>0 0 1</normal>
                  <size>100 100</size>
                </plane>
              </geometry>
              <surface>
                <friction>
                  <ode>
                    <mu>1.0</mu>
                    <mu2>1.0</mu2>
                  </ode>
                </friction>
              </surface>
            </collision>
            <visual name="visual">
              <geometry>
                <plane>
                  <normal>0 0 1</normal>
                  <size>100 100</size>
                </plane>
              </geometry>
              <material>
                <ambient>0.8 0.8 0.8 1</ambient>
                <diffuse>0.8 0.8 0.8 1</diffuse>
                <specular>0.8 0.8 0.8 1</specular>
              </material>
            </visual>
          </link>
        </model>
      </world>
    </sdf>
    ```

2.  **Create a ROS 2 launch file** (`~/ros2_ws/src/my_robot_description/launch/spawn_robot.launch.py`):
    ```python
    import os
    from ament_index_python.packages import get_package_share_directory
    from launch import LaunchDescription
    from launch.actions import IncludeLaunchDescription
    from launch.launch_description_sources import PythonLaunchDescriptionSource
    from launch_ros.actions import Node

    def generate_launch_description():
        pkg_name = 'my_robot_description' # Your robot description package
        pkg_share_dir = get_package_share_directory(pkg_name)

        # Path to your URDF file
        urdf_file = os.path.join(pkg_share_dir, 'urdf', 'generic_biped.urdf')

        # Path to your Gazebo world file
        world_file = os.path.join(pkg_share_dir, 'worlds', 'empty_world.world')

        # Launch Gazebo server and client
        gazebo_launch = IncludeLaunchDescription(
            PythonLaunchDescriptionSource([
                os.path.join(get_package_share_directory('gazebo_ros'), 'launch', 'gazebo.launch.py')
            ]),
            launch_arguments={'world': world_file}.items()
        )

        # Node to publish the robot description to the /robot_description topic
        robot_state_publisher_node = Node(
            package='robot_state_publisher',
            executable='robot_state_publisher',
            name='robot_state_publisher',
            output='screen',
            parameters=[{'robot_description': open(urdf_file).read()}],
        )

        # Node to spawn the robot in Gazebo
        spawn_entity_node = Node(
            package='gazebo_ros',
            executable='spawn_entity.py',
            arguments=['-entity', 'generic_biped', '-topic', 'robot_description'],
            output='screen',
        )

        return LaunchDescription([
            gazebo_launch,
            robot_state_publisher_node,
            spawn_entity_node,
        ])
    ```

3.  **Run the launch file:**
    ```bash
    cd ~/ros2_ws
    colcon build --packages-select my_robot_description # Build your package
    source install/setup.bash
    ros2 launch my_robot_description spawn_robot.launch.py
    ```

This will launch Gazebo with your specified world and spawn your robot model within it. You can then use ROS 2 topics and services (as discussed in Module 1) to interact with and control your simulated robot.

## 4. Sensor Simulation in Gazebo

Gazebo's true power for Physical AI lies in its ability to simulate realistic sensor data. You can attach various virtual sensors to your robot's links (defined in URDF or SDF), and Gazebo will publish their data to ROS 2 topics.

### Example: Adding a Depth Camera to URDF for Gazebo

To add an Intel RealSense D435i-like depth camera to your robot model for Gazebo simulation, you would extend your URDF with Gazebo-specific tags (often using Xacro for modularity).

```xml
<link name="camera_link">
  <visual>
    <geometry>
      <box size="0.01 0.1 0.02"/>
    </geometry>
    <material name="black"/>
  </visual>
</link>

<joint name="camera_joint" type="fixed">
  <parent link="body"/> <!-- Attach to the robot's body link -->
  <child link="camera_link"/>
  <origin xyz="0.1 0 0.1" rpy="0 0 0"/>
</joint>

<!-- Gazebo plugin for the depth camera -->
<gazebo reference="camera_link">
  <sensor type="depth" name="depth_camera_sensor">
    <always_on>true</always_on>
    <update_rate>30.0</update_rate>
    <camera name="depth_camera">
      <horizontal_fov>1.047</horizontal_fov> <!-- 60 degrees -->
      <image>
        <width>640</width>
        <height>480</height>
        <format>R8G8B8</format>
      </image>
      <clip>
        <near>0.05</near>
        <far>3.0</far>
      </clip>
    </camera>
    <plugin name="camera_controller" filename="libgazebo_ros_depth_camera.so">
      <ros> # ROS 2 specific configuration
        <namespace>camera</namespace>
        <argument>--ros-args -r __ns:=/camer-ns</argument>
        <remapping>image_raw:=image_raw_depth</remapping>
        <remapping>camer-info:=camer-info_depth</remapping>
        <remapping>depth/image_raw:=depth/image_raw</remapping>
        <remapping>depth/camer-info:=depth/camer-info</remapping>
      </ros>
      <cameraName>depth_camera</cameraName>
      <frameName>camera_depth_frame</frameName>
      <hackGap>0.001</hackGap>
      <minDepth>0.1</minDepth>
      <maxDepth>3.0</maxDepth>
    </plugin>
  </sensor>
</gazebo>
```

This XML snippet, when included in your robot's URDF (or a Xacro file that generates the URDF), tells Gazebo to simulate a depth camera on the `camera_link` and publish its data to ROS 2 topics. You can then subscribe to these topics (e.g., `/camer-ns/depth/image_raw`, `/camer-ns/image_raw_depth`) using an `rclpy` node to process the simulated sensor data, just as you would with a physical RealSense camera.

In the next section, we will explore **Unity** as another powerful platform for creating high-fidelity digital twins, particularly for advanced rendering and visualization.
