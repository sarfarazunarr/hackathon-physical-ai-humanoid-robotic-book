---
id: ros2-services
title: ROS 2 Services - Synchronous Request/Reply
slug: /module-1/ros2-services
---

# ROS 2 Services - Synchronous Request/Reply

Building upon our understanding of ROS 2 Nodes and Topics, this section of **Module 1: The Robotic Nervous System** introduces **ROS 2 Services**. While topics provide asynchronous, many-to-many data streams, services offer a synchronous, one-to-one request/reply communication pattern. This is ideal for functionalities where a node needs to explicitly request a computation or an action from another node and wait for a response.

## 1. What are ROS 2 Services?

A service in ROS 2 is defined by a pair of messages: a **request** and a **response**. When a client node calls a service, it sends a request message to a service server node and blocks, waiting for the server to process the request and send back a response message. This interaction is analogous to a function call in traditional programming.

Key characteristics of services:

*   **Synchronous:** The client waits for the server's response before continuing its execution.
*   **One-to-one:** A single client makes a request to a single service server.
*   **Request/Reply:** The communication involves a distinct request message and a distinct response message.
*   **Command and Control:** Services are well-suited for discrete commands, configuration changes, or querying specific information, such as:
    *   `reset_odometry` (request: empty, response: success/failure)
    *   `get_map` (request: empty, response: map data)
    *   `set_robot_speed` (request: speed value, response: confirmation)

## 2. Service Types

Similar to topics, services also use specific **service types**, which define the structure of the request and response messages. These are typically defined in `.srv` files.

For example, a service to add two integers might have a request message with `int64 a` and `int64 b`, and a response message with `int64 sum`.

## 3. Creating a ROS 2 Service Server and Client (Python with `rclpy`)

Let's create a service that takes two integers as a request and returns their sum as a response.

### Define the Service Type

1.  **Create a `srv` directory** in your package (`~/ros2_ws/src/my_robot_pkg/srv`).

2.  **Create the service file** (`~/ros2_ws/src/my_robot_pkg/srv/AddTwoInts.srv`):
    ```
    int64 a
    int64 b
    ---
    int64 sum
    ```
    The `---` separates the request fields from the response fields.

3.  **Update `CMakeLists.txt`** in `~/ros2_ws/src/my_robot_pkg/CMakeLists.txt` (add message generation):
    ```cmake
    # ... (find_package for rclpy, std_msgs, etc.)
    find_package(rosidl_default_generators REQUIRED)

    rosidl_generate_interfaces(
      my_robot_pkg
      "srv/AddTwoInts.srv"
    )
    # ...
    ```

4.  **Update `package.xml`** in `~/ros2_ws/src/my_robot_pkg/package.xml` (add build and run dependencies):
    ```xml
    <!-- ... -->
    <build_depend>rosidl_default_generators</build_depend>
    <exec_depend>rosidl_default_runtime</exec_depend>
    <member_of_group>rosidl_interface_packages</member_of_group>
    <!-- ... -->
    ```

### Create the Service Server Node

1.  **Create the Python file** (`~/ros2_ws/src/my_robot_pkg/my_robot_pkg/add_two_ints_server.py`):
    ```python
    import rclpy
    from rclpy.node import Node
    from my_robot_pkg.srv import AddTwoInts # Our custom service type

    class AddTwoIntsService(Node):

        def __init__(self):
            super().__init__('add_two_ints_server')
            self.srv = self.create_service(AddTwoInts, 'add_two_ints', self.add_two_ints_callback)
            self.get_logger().info('Add Two Ints Service Server has been started!')

        def add_two_ints_callback(self, request, response):
            response.sum = request.a + request.b
            self.get_logger().info(f'Incoming request: a={request.a}, b={request.b}')
            self.get_logger().info(f'Sending response: sum={response.sum}')
            return response

    def main(args=None):
        rclpy.init(args=args)
        add_two_ints_service = AddTwoIntsService()
        rclpy.spin(add_two_ints_service)
        add_two_ints_service.destroy_node()
        rclpy.shutdown()

    if __name__ == '__main__':
        main()
    ```

### Create the Service Client Node

1.  **Create the Python file** (`~/ros2_ws/src/my_robot_pkg/my_robot_pkg/add_two_ints_client.py`):
    ```python
    import rclpy
    from rclpy.node import Node
    from my_robot_pkg.srv import AddTwoInts # Our custom service type
    import sys

    class AddTwoIntsClient(Node):

        def __init__(self):
            super().__init__('add_two_ints_client')
            self.client = self.create_client(AddTwoInts, 'add_two_ints')
            while not self.client.wait_for_service(timeout_sec=1.0):
                self.get_logger().info('service not available, waiting again...')
            self.request = AddTwoInts.Request()

        def send_request(self, a, b):
            self.request.a = a
            self.request.b = b
            self.future = self.client.call_async(self.request)
            self.get_logger().info(f'Requesting {a} + {b}')

    def main(args=None):
        rclpy.init(args=args)

        if len(sys.argv) != 3:
            print('Usage: ros2 run my_robot_pkg add_two_ints_client <int_a> <int_b>')
            sys.exit(1)

        add_two_ints_client = AddTwoIntsClient()
        add_two_ints_client.send_request(int(sys.argv[1]), int(sys.argv[2]))

        while rclpy.ok():
            rclpy.spin_once(add_two_ints_client)
            if add_two_ints_client.future.done():
                try:
                    response = add_two_ints_client.future.result()
                except Exception as e:
                    add_two_ints_client.get_logger().error(f'Service call failed %r' % (e,))
                else:
                    add_two_ints_client.get_logger().info(
                        f'Result of add_two_ints: for {add_two_ints_client.request.a} + {add_two_ints_client.request.b} = {response.sum}')
                break
        add_two_ints_client.destroy_node()
        rclpy.shutdown()

    if __name__ == '__main__':
        main()
    ```

### Update `setup.py` and Build

1.  **Update `setup.py`** in `~/ros2_ws/src/my_robot_pkg/setup.py` to add entry points for both server and client, and `data_files` for the service definition:
    ```python
    from setuptools import setup
    import os
    from glob import glob

    package_name = 'my_robot_pkg'

    setup(
        # ...
        data_files=[
            ('share/ament_index/resource_index/packages', ['resource/' + package_name]),
            ('share/' + package_name, ['package.xml']),
            (os.path.join('share', package_name, 'srv'), glob('srv/*.srv')), # Add this line for services
        ],
        install_requires=['rclpy', 'std_msgs'],
        zip_safe=True,
        maintainer='your_name',
        maintainer_email='your_email@example.com',
        description='ROS 2 package for robotics textbook',
        license='Apache License 2.0',
        tests_require=['pytest'],
        entry_points={
            'console_scripts': [
                'simple_publisher = my_robot_pkg.simple_publisher:main',
                'simple_subscriber = my_robot_pkg.simple_subscriber:main',
                'add_two_ints_server = my_robot_pkg.add_two_ints_server:main',
                'add_two_ints_client = my_robot_pkg.add_two_ints_client:main',
            ],
        },
    )
    ```

2.  **Rebuild the package:**
    ```bash
    cd ~/ros2_ws
    colcon build --packages-select my_robot_pkg
    source install/setup.bash
    ```

### Run the Service Server and Client

*   Terminal 1 (Service Server):
    ```bash
    ros2 run my_robot_pkg add_two_ints_server
    ```
*   Terminal 2 (Service Client):
    ```bash
    ros2 run my_robot_pkg add_two_ints_client 5 7
    ```
    You should see the server processing the request and the client receiving the sum.

## 4. Introspection Tools for Services

*   **`ros2 service list`:** Lists all active services.
*   **`ros2 service type <service_name>`:** Shows the service type of a specific service.
*   **`ros2 service find <service_type>`:** Finds services that use a specific service type.
*   **`ros2 service call <service_name> <service_type> <arguments>`:** Calls a service from the command line. This is incredibly useful for testing.
    ```bash
    ros2 service call /add_two_ints my_robot_pkg/srv/AddTwoInts '{a: 10, b: 20}'
    ```

In the next section, we will explore **URDF** for defining robot models.
