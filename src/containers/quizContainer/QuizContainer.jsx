import styles from "./QuizContainer.module.css";

import FilledCard from "/src/components/filledCard/FilledCard";

export default function QuizContainer() {
  return (
    <div>
      <FilledCard>
        <div className={styles.mainCard}>quiz</div>
      </FilledCard>
    </div>
  );
}
