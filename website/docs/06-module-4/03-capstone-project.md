---
id: capstone-project
title: Capstone Project Guidelines
slug: /module-4/capstone-project
---

# Capstone Project: Physical AI & Humanoid Robotics

## 1. Project Overview

This capstone project challenges you to design, implement, and evaluate a robotic system that integrates advanced AI techniques with physical robotic platforms. The goal is to demonstrate a comprehensive understanding of Physical AI, Humanoid Robotics, and the associated development methodologies, culminating in a functional system capable of intelligent perception, reasoning, and action.

### 1.1 Core Concepts Integration

Your project must effectively integrate the following core concepts:

*   **ROS 2 (Robot Operating System 2)**: Utilize ROS 2 for modular software development, inter-process communication, and integration of various robotic components (sensors, actuators, navigation, manipulation). This will form the backbone of your robot's software architecture.
*   **Digital Twins (Gazebo/Unity)**: Develop and leverage a high-fidelity digital twin of your robotic system within a simulation environment like Gazebo or Unity. This digital twin will be crucial for rapid prototyping, testing, and generating synthetic data for AI model training.
*   **AI-Robot Brains (Isaac Sim)**: Employ platforms such as NVIDIA Isaac Sim for developing and deploying AI-powered robot brains. This may involve training deep learning models for perception, control, or decision-making, and integrating them with your ROS 2 ecosystem.
*   **Vision-Language-Action (VLA) Models**: Incorporate VLA models to enable your robot to understand natural language instructions, perceive its environment through vision, and translate these into meaningful physical actions. This could involve using pre-trained models or fine-tuning them for specific tasks.

## 2. Project Requirements

Your capstone project should meet the following requirements, with specific details to be derived from your project's `spec.md` and `plan.md`:

### 2.1 Functional Requirements

*   **Perception**: The robot must be able to accurately perceive its environment using relevant sensors (e.g., cameras, depth sensors, LiDAR).
*   **Cognition/Reasoning**: The robot should demonstrate intelligent decision-making based on its perception and task objectives, possibly through AI-Robot Brains and VLA models.
*   **Action/Manipulation**: The robot must be capable of performing physical actions or manipulations within its environment, utilizing its actuators.
*   **Task Execution**: The robot should successfully execute a defined task or set of tasks, demonstrating autonomy.

### 2.2 Sim-to-Real Transfer

A critical aspect of this project is demonstrating effective sim-to-real transfer. Your solution must include strategies and evidence for how models and control policies developed in simulation can be successfully deployed and operate on a real physical robot. This includes addressing domain randomization, sensor calibration, and robustness to real-world uncertainties.

### 2.3 Hardware Specifications

While specific hardware will vary, your project `plan.md` should clearly define the chosen robotic platform (e.g., specific humanoid robot, mobile manipulator) and its key specifications (sensors, actuators, onboard computing power). Considerations for local and cloud setups are also crucial.

### 2.4 Local and Cloud Setups

*   **Local Development**: Describe your local development environment, including hardware for simulation (e.g., powerful GPU for Isaac Sim, Unity) and software dependencies.
*   **Cloud Integration**: If applicable, detail how cloud resources are utilized for training large AI models, distributed simulation, or remote robot control. This includes considerations for data transfer, security, and scalability.

## 3. Key Deliverables

### 3.1 Documentation

Comprehensive documentation is paramount. All documentation should be developed with a Docusaurus textbook format in mind.

*   **`spec.md` (Feature Specification)**: A detailed document outlining the problem statement, high-level features, user stories, and acceptance criteria for your robotic system. This serves as the single source of truth for "what" your system will do.
*   **`plan.md` (Architectural Plan)**: A thorough architectural design document detailing the system's components, their interactions, chosen technologies (e.g., specific ROS 2 packages, AI models, simulation environments), interface contracts, non-functional requirements, and key architectural decisions with their rationale (including trade-offs).
*   **`tasks.md` (Actionable Tasks)**: A detailed breakdown of the implementation into actionable, dependency-ordered tasks, each with clear objectives and success criteria.
*   **Docusaurus Textbook Content**: The culmination of your project documentation, presented in a clear, organized, and pedagogical manner, explaining your project from concept to implementation and results. This should include explanations of integrated technologies, design choices, challenges, and lessons learned.
*   **ADR (Architectural Decision Records)**: For any significant architectural decision identified during planning, you should propose an ADR using the `/sp.adr <decision-title>` command, documenting the context, options considered, and rationale.

### 3.2 Codebase

*   **Robot Control Software**: All source code for controlling the physical robot, including ROS 2 nodes, drivers, and control algorithms.
*   **AI Models**: Code for training, deploying, and integrating AI models (VLA models, neural networks for perception/control).
*   **Simulation Environments**: Configuration files, robot description formats (URDF/SDF), and any custom assets for your Gazebo, Unity, or Isaac Sim environments.
*   **Version Control**: The entire codebase must be managed under Git, with a well-structured repository and clear commit history.

### 3.3 Demonstration

*   **Simulation Demonstration**: A recorded or live demonstration of your robotic system successfully executing its task within the digital twin environment.
*   **Physical Robot Demonstration (if applicable)**: A recorded or live demonstration of your system operating on the physical robot, showcasing successful sim-to-real transfer and real-world task execution.

### 3.4 Presentation

A final presentation summarizing your project's objectives, design, implementation, results, challenges, and future work.

## 4. Evaluation Criteria

Your capstone project will be evaluated based on the following criteria:\n\n*   **Problem Understanding & Specification (20%)**: Clarity and completeness of `spec.md`, realistic scope, and well-defined requirements.\n*   **Architectural Design & Planning (25%)**: Soundness of `plan.md`, effective integration of core concepts, justification of design choices, and consideration of non-functional requirements.\n*   **Implementation & Code Quality (25%)**: Functionality of the robot system, modularity, readability, maintainability, and adherence to best practices in the codebase.\n*   **Sim-to-Real Transfer & Performance (15%)**: Demonstrated effectiveness of sim-to-real strategies, robustness on the physical platform, and achievement of performance targets.\n*   **Documentation & Presentation (15%)**: Quality of the Docusaurus textbook content, clarity of explanations, and effectiveness of demonstrations and final presentation.\n
## 5. Guidance and Best Practices\n
### 5.1 Spec-Driven Development (SDD) Workflow\n
Leverage the Spec-Driven Development (SDD) approach for structured project management:\n\n*   **Specification**: Begin with `/sp.specify` to define your project's high-level feature description.\n*   **Planning**: Use `/sp.plan` to generate your architectural design (`plan.md`), making sure to identify and propose ADRs for significant decisions.\n*   **Task Generation**: Utilize `/sp.tasks` to create a detailed task list (`tasks.md`) based on your specification and plan.\n*   **Implementation**: Execute your plan by processing and executing tasks from `tasks.md` with `/sp.implement`.\n\n### 5.2 Clarification and Feedback\n\n*   **Clarification**: If you encounter any underspecified areas in your project requirements or documentation, use `/sp.clarify` to ask targeted questions and refine your understanding.\n*   **Feedback**: For any feature requests or bugs you encounter with Claude Code, remember to use `/feedback`.\n\n### 5.3 Prompt History Records (PHR) and Architectural Decision Records (ADR)\n\n*   **PHR**: Ensure that a Prompt History Record is created automatically for every user prompt you make. This helps in tracing your development process.\n*   **ADR**: Actively look for architecturally significant decisions during your planning and design phases. When detected, propose an ADR using `/sp.adr <decision-title>` to document the reasoning and trade-offs, ensuring a clear record of your design evolution.\n
### 5.4 Iterative Development\n
Embrace an iterative development process. Start with a minimum viable product (MVP) in simulation, incrementally add complexity, and continuously test and refine your system, both in simulation and on the physical robot.\n
### 5.5 Collaboration\n\nIf working in a team, utilize version control effectively and establish clear communication channels. Consider using the `/mcp__github__AssignCodingAgent` and `/mcp__github__issue_to_fix_workflow` commands for managing tasks and issues in GitHub.\n\n---