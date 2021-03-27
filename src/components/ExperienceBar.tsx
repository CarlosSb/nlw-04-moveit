import { useContext } from "react";
import { ChallengesContext } from "../context/ChallengesContext";
import styles from "../styles/components/ExperienceBar.module.css";

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } = useContext(
    ChallengesContext
  );

  let parcenteToNextLevel = 0;
  parcenteToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel;

  parcenteToNextLevel = parcenteToNextLevel ? parcenteToNextLevel : 0;

  return (
    <header className={styles.experienceBar}>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${parcenteToNextLevel}%` }} />
        <span
          className={styles.currentExperience}
          style={{ left: `${parcenteToNextLevel}%` }}
        >
          {`${currentExperience}xp`}
        </span>
      </div>
      <span>{`${experienceToNextLevel} xp`}</span>
    </header>
  );
}
