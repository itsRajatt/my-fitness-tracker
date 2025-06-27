import React from "react";
import styles from "./ExerciseCard.module.css";

const ExerciseCard = ({ exercise }) => {
  return (
    <div className={styles.card}>
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        className={styles.image}
      />
      <div className={styles.content}>
        <h2 className={styles.title}>{exercise.name}</h2>
        <p className={styles.description}>{exercise.description}</p>

        <div className={styles.tags}>
          <span className={styles.tag}>Target: {exercise.target}</span>
          <span className={styles.tag}>Secondary: {exercise.secondaryMuscles.join(", ")}</span>
          <span className={styles.tag}>Equipment: {exercise.equipment}</span>
          <span className={styles.tag}>Body Part: {exercise.bodyPart}</span>
          <span className={styles.tag}>Difficulty: {exercise.difficulty}</span>
          <span className={styles.tag}>Category: {exercise.category}</span>
        </div>

        <div className={styles.instructions}>
          <h3>Instructions:</h3>
          <ul>
            {exercise.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
