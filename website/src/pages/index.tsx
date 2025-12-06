import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Bridging Digital Brains to Physical Bodies.
        </Heading>
        <p className="hero__subtitle">
          A 13-Week Capstone Course on Sim-to-Real Transfer, Vision-Language-Action (VLA), and Autonomous Humanoid Development.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro/embodied-intelligence">
            Start Learning Now
          </Link>
        </div>
      </div>
    </header>
  );
}

function TechHardwareFocus() {
  return (
    <div className={clsx(styles.section, 'tech-focus-container')}>
      <div className="container text--center">
        <Heading as="h2">Technology & Hardware Focus</Heading>
        <p>
          "From the RTX 4070 Ti Workstation to the Unitree G1 Humanoid—Train Your AI in the Cloud and Deploy at the Edge."
        </p>
        <div className={styles.techLogos}>
          <span>NVIDIA Isaac Sim</span>
          <span>ROS 2</span>
          <span>Unitree G1</span>
          <span>RTX 4070 Ti</span>
          <span>Jetson Orin Nano</span>
          <span>Intel RealSense</span>
          <span>OpenAI Whisper</span>
        </div>
      </div>
    </div>
  );
}

function CourseOverviewVideo() {
  return (
    <div className={styles.section}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2">Course Overview Video</Heading>
            <div className="video-container">
              <iframe
                width="100%"
                height="500"
                src="https://www.youtube.com/embed/jSLTn58Awik?si=_vxFFi4TL3kk6G_Q"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LearningOutcomes() {
    return (
      <div className={styles.section}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
                <Heading as="h2">Key Learning Outcomes</Heading>
                <ul>
                    <li>Master Sim-to-Real transfer methodologies.</li>
                    <li>Implement full Vision-Language-Action (VLA) models.</li>
                    <li>Develop a conversational autonomous humanoid.</li>
                    <li>Achieve fluency in ROS 2 node-based architecture.</li>
                </ul>
            </div>
            <div className="col col--6">
                <Heading as="h2">Choose Your Lab Setup</Heading>
                <p>
                We support two distinct learning tracks: <strong>Track A: Local RTX Lab (High CapEx)</strong> and <strong>Track B: Cloud/AWS Lab (High OpEx)</strong>. Learn how to mitigate the <strong>Latency Trap</strong> regardless of your environment.
                </p>
                <div className={styles.buttons}>
                    <Link
                        className="button button--secondary"
                        to="/docs/setup/workstation-rtx">
                        View Setup Guides
                    </Link>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="Physical AI & Humanoid Robotics Textbook. A 13-Week Capstone Course on Sim-to-Real Transfer, Vision-Language-Action (VLA), and Autonomous Humanoid Development.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <TechHardwareFocus />
        <LearningOutcomes />
        <CourseOverviewVideo />
      </main>
    </Layout>
  );
}
