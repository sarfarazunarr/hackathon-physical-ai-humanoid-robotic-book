<!-- Sync Impact Report:
Version change: 0.0.0 (initial) -> 0.1.0
Modified principles:
  - PRINCIPLE_1_NAME -> Embodied Intelligence
  - PRINCIPLE_2_NAME -> Stack Adherence
  - PRINCIPLE_3_NAME -> Docusaurus Formatting
  - PRINCIPLE_4_NAME -> Code Block Guidelines
  - PRINCIPLE_5_NAME -> Tone and Mathematical Notation
Added sections:
  - Format & Style Guidelines
Removed sections:
  - PRINCIPLE_6_NAME and PRINCIPLE__DESCRIPTION (as they were unused in the template)
Templates requiring updates:
  - .specify/templates/plan-template.md: ⚠ pending
  - .specify/templates/spec-template.md: ⚠ pending
  - .specify/templates/tasks-template.md: ⚠ pending
  - .specify/templates/commands/*.md: ⚠ pending
Follow-up TODOs: None
-->
# Physical AI & Humanoid Robotics Textbook Constitution

## Core Principles

### I. Embodied Intelligence
Always link the "Digital Twin" Workstation (RTX 4070+) and the "Physical Edge" (Jetson Orin), emphasizing the transition from digital AI to embodied intelligence. This principle ensures that all educational content and practical exercises reinforce the symbiotic relationship between simulated and physical robotics.

### II. Stack Adherence
Strictly adhere to the specified technology stack: Ubuntu 22.04, ROS 2 Humble/Iron, NVIDIA Isaac Sim, and Python/C++. All examples, code snippets, and deployment instructions must be compatible with this stack to ensure a consistent and reliable learning environment.

### III. Docusaurus Formatting
All content must be formatted as Docusaurus Markdown (`.md` or `.mdx`) files. Every file must start with valid YAML frontmatter (id, title, sidebar_label, sidebar_position). Use Docusaurus admonitions (:::note, :::tip, :::warning, :::danger) heavily. `:::danger` must be used for hardware safety warnings (e.g., LiPo battery handling, robot pinch points). `:::warning` must be used for "Sim-to-Real" latency traps and version incompatibilities.

### IV. Code Block Guidelines
All code must use triple backticks with language specification (e.g., ```python, ```bash). Differentiate clearly between commands run on the **Workstation** (Sim) vs. the **Edge Device** (Jetson) to avoid confusion during student implementation.

### V. Tone and Mathematical Notation
Maintain an academic yet practical tone. Content must be rigorous on theory and precise on implementation details. Use LaTeX ($) for physics equations (kinematics, dynamics) to ensure clarity and professional presentation, but use plain text for simple numbers and basic arithmetic.

## Format & Style Guidelines

This section outlines additional guidelines for content creation to ensure consistency and high quality across the textbook.

- **Output Format**: All content must be formatted as Docusaurus Markdown (`.md` or `.mdx`) files.
- **Frontmatter**: Every file must start with valid YAML frontmatter (id, title, sidebar_label, sidebar_position).
- **Admonitions**: Use Docusaurus admonitions (:::note, :::tip, :::warning, :::danger) heavily.
    - Use `:::danger` for hardware safety warnings (e.g., LiPo battery handling, robot pinch points).
    - Use `:::warning` for "Sim-to-Real" latency traps and version incompatibilities.
- **Code Blocks**: All code must use triple backticks with language specification. Differentiate clearly between commands run on the **Workstation** (Sim) vs. the **Edge Device** (Jetson).
- **Tone**: Academic yet practical. Rigorous on theory, precise on implementation.
- **Math**: Use LaTeX ($) for physics equations (kinematics, dynamics), but plain text for simple numbers.

## Governance

This constitution supersedes all other practices. Amendments require documentation, approval, and a clear migration plan for any affected content. All content created for the textbook must verify compliance with these principles.

**Version**: 0.1.0 | **Ratified**: 2025-12-04 | **Last Amended**: 2025-12-04