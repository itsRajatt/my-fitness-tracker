import React from "react";
import { Link } from "react-router-dom";
import styles from "./AppHeader.module.css";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <div className="main-container">
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <img
              src="/app-icon.svg"
              alt="App Icon"
              onClick={() => window.scrollTo(0, 0)}
              className={styles.logoImage}
            />
            <h1 className={styles.logo}>My Fitness Tracker</h1>
          </div>
          <ul className={styles.navLinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/exercises">Exercises</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </nav>
        <div className={styles.subHeader}>
          <p>
            Discover workouts, track progress, and crush your fitness goals. 💪
          </p>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
