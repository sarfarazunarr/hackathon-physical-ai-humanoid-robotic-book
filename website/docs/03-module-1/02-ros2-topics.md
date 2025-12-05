---
id: ros2-topics
title: ROS 2 Topics - Asynchronous Communication
slug: /module-1/ros2-topics
---

# ROS 2 Topics - Asynchronous Communication

Continuing our journey in **Module 1: The Robotic Nervous System**, we now explore **ROS 2 Topics**. Topics are the primary mechanism for asynchronous, many-to-many communication within the ROS 2 ecosystem. They form the backbone of how different nodes in your robot's software architecture exchange real-time data.

## 1. What are ROS 2 Topics?

ROS 2 Topics implement a publish-subscribe communication model. This means:

*   **Publishers:** Nodes that send information to a named topic.
*   **Subscribers:** Nodes that receive information from a named topic.

Key characteristics of topics:

*   **Asynchronous:** Publishers send data without waiting for subscribers to acknowledge receipt. Subscribers process data as it arrives.
*   **Many-to-many:** Multiple publishers can send data to the same topic, and multiple subscribers can receive data from the same topic.
*   **Decoupled:** Publishers and subscribers do not need to know about each other's existence directly. They only need to agree on the topic name and the message type.
*   **Real-time data:** Topics are ideal for streaming continuous data, such as sensor readings (camera images, lidar scans, IMU data), joint states, and robot odometry.

## 2. Message Types

Every ROS 2 topic communicates data using a specific **message type**. Message types define the structure and data fields of the information being exchanged. ROS 2 provides a rich set of standard message types (e.g., `std_msgs`, `sensor_msgs`, `geometry_msgs`), and you can also define custom message types.

For example, `std_msgs/String` is used for simple text messages, `sensor_msgs/Image` for camera images, and `geometry_msgs/Twist` for velocity commands.

## 3. Creating a ROS 2 Subscriber Node (Python with `rclpy`)

Let's create a subscriber node that listens to the "chatter" topic published by our `simple_publisher` node from the previous section.

1.  **Create the Python file** (`~/ros2_ws/src/my_robot_pkg/my_robot_pkg/simple_subscriber.py`):
    ```python
    import rclpy
    from rclpy.node import Node
    from std_msgs.msg import String

    class SimpleSubscriber(Node):

        def __init__(self):
            super().__init__('simple_subscriber_node') # Node name
            self.subscription = self.create_subscription(
                String, # Message type
                'chatter', # Topic name
                self.listener_callback, # Callback function
                10 # Queue size
            )
            self.get_logger().info('Simple Subscriber Node has been started!')

        def listener_callback(self, msg):
            self.get_logger().info(f'I heard: "{msg.data}"')

    def main(args=None):
        rclpy.init(args=args)
        simple_subscriber = SimpleSubscriber()
        rclpy.spin(simple_subscriber)
        simple_subscriber.destroy_node()
        rclpy.shutdown()

    if __name__ == '__main__':
        main()
    ```

2.  **Update `setup.py`** in `~/ros2_ws/src/my_robot_pkg/setup.py` to add an entry point for the subscriber:
    ```python
    # ... (existing imports and metadata)
    entry_points={
        'console_scripts': [
            'simple_publisher = my_robot_pkg.simple_publisher:main',
            'simple_subscriber = my_robot_pkg.simple_subscriber:main', # Add this line
        ],
    },
    # ...
    ```

3.  **Rebuild the package:**
    ```bash
    cd ~/ros2_ws
    colcon build --packages-select my_robot_pkg
    source install/setup.bash
    ```

4.  **Run the nodes (in separate terminals):**
    *   Terminal 1 (Publisher):
        ```bash
        ros2 run my_robot_pkg simple_publisher
        ```
    *   Terminal 2 (Subscriber):
        ```bash
        ros2 run my_robot_pkg simple_subscriber
        ```

    You should see the subscriber receiving and printing the messages published by the `simple_publisher` node.

## 4. Introspection Tools for Topics

ROS 2 provides essential command-line tools to monitor and inspect topics:

*   **`ros2 topic list`:** Lists all active topics in the ROS 2 graph.
    *   `ros2 topic list -t` also shows the message type for each topic.
*   **`ros2 topic info <topic_name>`:** Displays information about a specific topic, including its message type and the nodes publishing/subscribing to it.
*   **`ros2 topic echo <topic_name>`:** Prints the messages being published on a topic to the console in real-time. This is incredibly useful for debugging.
    ```bash
    ros2 topic echo /chatter
    ```
*   **`ros2 interface show <message_type>`:** Shows the definition of a specific message type.
    ```bash
    ros2 interface show std_msgs/msg/String
    ```

Understanding ROS 2 topics is fundamental to building complex robotic behaviors. In the next section, we will delve into **ROS 2 Services**, another crucial communication mechanism for request-response interactions.
