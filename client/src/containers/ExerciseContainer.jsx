import React, { useEffect, useState } from "react";
import ExerciseCard from "../components/ExerciseCard";
import { fetchExercises } from "../api/exerciseApi";
import styles from "./ExerciseContainer.module.css";
import FallbackLoader from "../components/FallbackLoader";

export default function ExerciseContainer() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchExercises()
      .then((exercises) => {
        setData(exercises);
      })
      .catch((error) => {
        console.error("Error fetching exercises:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <FallbackLoader />
      ) : (
        data.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))
      )}
    </div>
  );
}
