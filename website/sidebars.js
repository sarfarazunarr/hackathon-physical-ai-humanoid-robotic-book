/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      link: {
        type: 'generated-index',
        title: 'Introduction to Physical AI',
        slug: '/intro',
      },
      items: [
        '01-intro/01-embodied-intelligence',
        '01-intro/02-physical-ai-philosophy',
      ],
    },
    {
      type: 'category',
      label: 'Lab Setup',
      link: {
        type: 'generated-index',
        title: 'Lab Setup Guides',
        slug: '/setup',
      },
      items: [
        '02-setup/01-workstation-rtx',
        '02-setup/02-jetson-edge',
        '02-setup/03-realsense-imu-wiring',
      ],
    },
    {
      type: 'category',
      label: 'Module 1: The Nervous System',
      link: {
        type: 'generated-index',
        title: 'Module 1: ROS 2 Fundamentals',
        slug: '/module-1',
      },
      items: [
        '03-module-1/01-ros2-nodes',
        '03-module-1/02-ros2-topics',
        '03-module-1/03-ros2-services',
        '03-module-1/04-urdf-basics',
        '03-module-1/05-rclpy-bridge',
      ],
    },
  ],
    },
    {
      type: 'category',
      label: 'Module 2: The Digital Twin',
      link: {
        type: 'generated-index',
        title: 'Module 2: Simulation and Digital Twins',
        slug: '/module-2',
      },
      items: [
        '04-module-2/01-simulation-overview',
        '04-module-2/02-gazebo-physics-sim',
        '04-module-2/03-unity-rendering',
      ],
    },
    {
      type: 'category',
      label: 'Module 3: The AI-Robot Brain',
      link: {
        type: 'generated-index',
        title: 'Module 3: AI-Robot Brain and Sim-to-Real',
        slug: '/module-3',
      },
      items: [
        '05-module-3/01-isaac-sim-intro',
        '05-module-3/02-sim-to-real-transfer',
      ],
    },
      ],
    },
    {
      type: 'category',
      label: 'Module 4: VLA & Capstone',
      link: {
        type: 'generated-index',
        title: 'Module 4: VLA & Capstone Project',
        slug: '/module-4',
      },
      items: [
        '06-module-4/01-openai-whisper',
        '06-module-4/02-llm-to-action',
        '06-module-4/03-capstone-project',
      ],
    },
    {
      type: 'category',
      label: 'Appendices',
      link: {
        type: 'generated-index',
        title: 'Appendices',
        slug: '/appendices',
      },
      items: [
        '07-appendices/01-cheatsheets',
        '07-appendices/02-troubleshooting',
      ],
    },
  ],
};

module.exports = sidebars;
