import React from "react";
import styles from "./HomeComponent.module.css";
const HomeComponent = ({onStartClick}) => {
  return (
    <div className={styles.container}>
      Start your fitness journey with us!
      <br />
      Track your progress, set goals, and stay motivated.
      <br />
      <button className={styles.button} onClick={onStartClick}>Get Started</button>
    </div>
  );
};

export default HomeComponent;
