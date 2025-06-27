import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2>About My Fitness Tracker</h2>
      <p>
        <strong>My Fitness Tracker</strong> is your all-in-one platform to help you achieve your health and fitness goals. Whether you're a beginner or a seasoned athlete, our app empowers you to:
      </p>
      <ul>
        <li>Discover a wide variety of exercises and workouts</li>
        <li>Track your daily progress and workout history</li>
        <li>Set and monitor personalized fitness goals</li>
        <li>Stay motivated with a clean, modern interface</li>
      </ul>
      <p>
        Built with the latest web technologies, My Fitness Tracker is designed for speed, reliability, and a seamless user experience. We believe fitness should be accessible, enjoyable, and rewarding for everyone.
      </p>
      <p>
        <strong>Start your journey today and become the best version of yourself!</strong>
      </p>
    </div>
  );
};

export default About;
