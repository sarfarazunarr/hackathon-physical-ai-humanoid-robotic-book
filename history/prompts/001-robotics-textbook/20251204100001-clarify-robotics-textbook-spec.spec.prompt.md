---
id: 20251204100001
title: Clarifications for Robotics Textbook Spec
stage: spec
date: 2025-12-04
surface: agent
model: claude-sonnet-4-5-20250929
feature: 001-robotics-textbook
branch: 001-robotics-textbook
user: user
command: /sp.clarify Based on the specification, please resolve the following architectural decisions for the textbook:

1.  **ROS 2 Version:** The source mentions "Humble/Iron." Since Ubuntu 22.04 is the OS requirement, should we strictly standardize on **ROS 2 Humble Hawksbill** (LTS) for maximum stability with NVIDIA Isaac, or allow Iron? *Assumption: Default to Humble.*
2.  **Directory Structure:** specific Docusaurus sidebar structure is required. Should we organize by "Module" (Module 1, 2, 3) or by "Week" (Week 1-13)? *Assumption: Group by Module, then sublevel by Week.*
3.  **Code Examples:** Should code examples focus on the **Unitree G1** (Humanoid) URDF, or provide a generic humanoid backup for students who don't have the specific robot files? *Assumption: Use Unitree G1 as the primary example, but provide generic biped fallback.*
4.  **Cloud vs. Local:** How should we structure the "Hardware Setup" chapter? *Assumption: Create two distinct setup tracks: "Track A: Local RTX Lab" and "Track B: Cloud/AWS Lab".*
labels: ["clarification", "specification", "robotics", "textbook"]
links:
  spec: specs/001-robotics-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/001-robotics-textbook/spec.md
tests: []
---

## Prompt

```text
Based on the specification, please resolve the following architectural decisions for the textbook:

1.  **ROS 2 Version:** The source mentions "Humble/Iron." Since Ubuntu 22.04 is the OS requirement, should we strictly standardize on **ROS 2 Humble Hawksbill** (LTS) for maximum stability with NVIDIA Isaac, or allow Iron? *Assumption: Default to Humble.*
2.  **Directory Structure:** specific Docusaurus sidebar structure is required. Should we organize by "Module" (Module 1, 2, 3) or by "Week" (Week 1-13)? *Assumption: Group by Module, then sublevel by Week.*
3.  **Code Examples:** Should code examples focus on the **Unitree G1** (Humanoid) URDF, or provide a generic humanoid backup for students who don't have the specific robot files? *Assumption: Use Unitree G1 as the primary example, but provide generic biped fallback.*
4.  **Cloud vs. Local:** How should we structure the "Hardware Setup" chapter? *Assumption: Create two distinct setup tracks: "Track A: Local RTX Lab" and "Track B: Cloud/AWS Lab".*
```

## Response snapshot

Successfully clarified 4 architectural decisions for the 'Physical AI & Humanoid Robotics Textbook' specification. The specification is now updated and ready for planning.

## Outcome

- ✅ Impact: The feature specification has been clarified and updated, resolving key architectural decisions.
- 🧪 Tests: All clarification questions were addressed and integrated into the spec.
- 📁 Files: Updated `specs/001-robotics-textbook/spec.md`.
- 🔁 Next prompts: The specification is ready for planning. Use `/sp.plan` to continue.
- 🧠 Reflection: Successfully guided the user through four clarification questions and updated the specification accordingly.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): PASS
- Prompt variant (if applicable): null
- Next experiment (smallest change to try): null