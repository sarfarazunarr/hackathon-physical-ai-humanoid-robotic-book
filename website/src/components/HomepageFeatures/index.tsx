import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Module 1: The Robotic Nervous System',
    icon: '⚡️',
    description: (
      <>
        Master ROS 2 (Humble/Iron), URDF modeling, and foundational communication with <code>rclpy</code>.
      </>
    ),
  },
  {
    title: 'Module 2: The Digital Twin',
    icon: '🌐',
    description: (
      <>
        Explore virtual environments with Gazebo and Unity, focusing on physics simulation and high-fidelity rendering.
      </>
    ),
  },
  {
    title: 'Module 3: The AI-Robot Brain',
    icon: '🧠',
    description: (
      <>
        Develop autonomous capabilities with NVIDIA Isaac Sim, Isaac ROS, Nav2, and Visual SLAM (VSLAM).
      </>
    ),
  },
  {
    title: 'Module 4: Vision-Language-Action (VLA)',
    icon: '💬',
    description: (
      <>
        Build conversational autonomy by integrating OpenAI Whisper and LLMs to translate language into complex robot actions.
      </>
    ),
  },
];

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <span className={styles.featureIcon}>{icon}</span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={clsx(styles.features, 'modules-container')}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
