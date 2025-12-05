**PROJECT TITLE:** Physical AI & Humanoid Robotics Textbook - Docusaurus Homepage

**TARGET AUDIENCE:** University students, robotics capstone participants, professional AI/Robotics developers.

**TONE & STYLE:** Modern, technical, professional, high-energy, and visually focused on the bridge between AI (code) and physical movement (robotics).

---

### 1. Hero Section (Above the Fold)

* **Primary Headline:** The Cognitive Core: Bridging Digital Brains to Physical Bodies.
* **Sub-Headline:** A 13-Week Capstone Course on Sim-to-Real Transfer, Vision-Language-Action (VLA), and Autonomous Humanoid Development.
* **Call-to-Action (Primary Button):** Start the 13-Week Course (Links to `docs/03-module-1/01-ros2-nodes`).
* **Visual Concept:** A split image or high-quality illustration: one side showing lines of code/nodes/graphs (Digital Brain), and the other side showing the Unitree G1 Humanoid robot in action (Physical Body). Use the Unitree G1 as the core visual motif.

### 2. Core Value Proposition / Modules Section

Create a visually distinct section using a 4-column layout, one for each core module. Use clear icons and concise descriptions.

| Title | Icon Suggestion | Description |
| :--- | :--- | :--- |
| **Module 1: The Robotic Nervous System** | ⚡️ (Lightning bolt or circuit) | Master ROS 2 (Humble/Iron), URDF modeling, and foundational communication with `rclpy`. |
| **Module 2: The Digital Twin** | 🌐 (Globe/Grid overlay) | Explore virtual environments with Gazebo and Unity, focusing on physics simulation and high-fidelity rendering. |
| **Module 3: The AI-Robot Brain** | 🧠 (Brain or Chip) | Develop autonomous capabilities with NVIDIA Isaac Sim, Isaac ROS, Nav2, and Visual SLAM (VSLAM). |
| **Module 4: Vision-Language-Action (VLA)** | 💬 (Speech bubble/Robot eye) | Build conversational autonomy by integrating OpenAI Whisper and LLMs to translate language into complex robot actions. |

### 3. Technology & Hardware Focus Section

A prominent horizontal bar or grid showcasing the **Crucial Context** hardware and software. This is critical for the target audience.

* **Logos/Keywords to Feature:** NVIDIA Isaac Sim, ROS 2, Unitree G1 (Humanoid), RTX 4070 Ti, Jetson Orin Nano, Intel RealSense, OpenAI Whisper.
* **Highlight Quote:** "From the RTX 4070 Ti Workstation to the Unitree G1 Humanoid—Train Your AI in the Cloud and Deploy at the Edge."

### 4. Learning Outcomes Section

A clear, concise bulleted list reiterating the **Key Learning Outcomes** from the specification.

* Master Sim-to-Real transfer methodologies.
* Implement full Vision-Language-Action (VLA) models.
* Develop a conversational autonomous humanoid.
* Achieve fluency in ROS 2 node-based architecture.

### 5. Setup Track Callout (Addressing FR-001)

A small, high-impact section that addresses the two distinct setup tracks immediately.

* **Title:** Choose Your Lab Setup
* **Content:** We support two distinct learning tracks: **Track A: Local RTX Lab (High CapEx)** and **Track B: Cloud/AWS Lab (High OpEx)**. Learn how to mitigate the **Latency Trap** regardless of your environment.
* **Call-to-Action (Secondary Button):** View Setup Guides (Links to `docs/02-setup/01-workstation-rtx`).

---

### Design Constraints

1.  **Docusaurus-Ready:** Must be implemented in a standard Docusaurus `index.js` or MDX file structure.
2.  **Mobile Responsive:** Layout must adapt cleanly to mobile devices.
3.  **Performance:** Must be lightweight and fast-loading (SC-005: <3 seconds load time).