---
id: ros2-nodes
title: ROS 2 Nodes - The Building Blocks
slug: /module-1/ros2-nodes
---

# ROS 2 Nodes - The Building Blocks

Welcome to **Module 1: The Robotic Nervous System**! In this section, we dive into the fundamental concept of **ROS 2 Nodes**, which are the atomic executable processes within the ROS 2 computational graph. Understanding nodes is crucial for building any robotic application with ROS 2, as they represent the modular components of your robot's software architecture.

:::info
This module covers ROS 2 fundamentals that are compatible with both **ROS 2 Humble Hawksbill (LTS)** and **Iron Irwini** distributions. Ensure your environment is set up with one of these versions as per the Lab Setup guides.
:::

## 1. What is a ROS 2 Node?

A ROS 2 node is essentially an executable program that performs a specific task. In a robotic system, different functionalities are typically encapsulated into separate nodes. For example:

*   A node to read data from a camera sensor.
*   A node to control robot motor actuators.
*   A node to perform path planning.
*   A node to process sensor data (e.g., object detection).

This modular approach allows for:

*   **Reusability:** Nodes can be easily reused in different robotic projects.
*   **Fault Isolation:** If one node crashes, it ideally doesn't bring down the entire robot system.
*   **Distributed Computing:** Nodes can run on different machines (e.g., your workstation, an edge device like Jetson) and communicate seamlessly.

## 2. Creating a ROS 2 Node (Python with `rclpy`)

We will use `rclpy`, the Python client library for ROS 2, to create our nodes. All nodes inherit from the `Node` class provided by `rclpy`.

First, ensure you have a ROS 2 workspace set up. If not, follow the official ROS 2 documentation for creating one.

### Example: A Simple "Hello World" Publisher Node

Let's create a node that publishes a "Hello World" message periodically.

1.  **Create a ROS 2 package:**
    ```bash
    cd ~/ros2_ws/src
    ros2 pkg create --build-type ament_python my_robot_pkg --dependencies rclpy std_msgs
    ```

2.  **Create the Python file** (`~/ros2_ws/src/my_robot_pkg/my_robot_pkg/simple_publisher.py`):
    ```python
    import rclpy
    from rclpy.node import Node
    from std_msgs.msg import String

    class SimplePublisher(Node):

        def __init__(self):
            super().__init__('simple_publisher_node') # Node name
            self.publisher_ = self.create_publisher(String, 'chatter', 10) # Topic name: chatter, Queue size: 10
            self.timer = self.create_timer(0.5, self.timer_callback) # Timer every 0.5 seconds
            self.i = 0
            self.get_logger().info('Simple Publisher Node has been started!')

        def timer_callback(self):
            msg = String()
            msg.data = f'Hello ROS 2! Count: {self.i}'
            self.publisher_.publish(msg)
            self.get_logger().info(f'Publishing: "{msg.data}"')
            self.i += 1

    def main(args=None):
        rclpy.init(args=args)
        simple_publisher = SimplePublisher()
        rclpy.spin(simple_publisher) # Keep node alive
        simple_publisher.destroy_node()
        rclpy.shutdown()

    if __name__ == '__main__':
        main()
    ```

3.  **Update `setup.py`** in `~/ros2_ws/src/my_robot_pkg/setup.py` to add an entry point:
    ```python
    # ... (existing imports and metadata)
    entry_points={
        'console_scripts': [
            'simple_publisher = my_robot_pkg.simple_publisher:main',
        ],
    },
    # ...
    ```

4.  **Build the package:**
    ```bash
    cd ~/ros2_ws
    colcon build --packages-select my_robot_pkg
    source install/setup.bash
    ```

5.  **Run the node:**
    ```bash
    ros2 run my_robot_pkg simple_publisher
    ```

## 3. Node Naming and Remapping

*   **Unique Names:** Each node within the same ROS 2 graph should ideally have a unique name. If two nodes have the same name, one might override the other depending on the execution context.
*   **Remapping:** You can change a node's name or the topics it uses at runtime through remapping arguments:
    ```bash
    ros2 run my_robot_pkg simple_publisher --ros-args -r __node:=my_new_publisher_node
    ```

## 4. Introspection Tools

ROS 2 provides powerful command-line tools to inspect the computational graph:

*   **`ros2 node list`:** Lists all active nodes.
*   **`ros2 node info <node_name>`:** Shows information about a specific node (subscriptions, publications, services, actions).

In the next section, we will explore how these nodes communicate using **ROS 2 Topics**.
