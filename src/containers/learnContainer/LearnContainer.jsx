import styles from "./LearnContainer.module.css";

import FilledCard from "/src/components/filledCard/FilledCard";
import AssistChip from "/src/components/assistChip/AssistChip";

export default function LearnContainer() {
  return (
    <div className={styles.learnContainer}>
      <FilledCard colour="primaryContainer">
        <div className={styles.mainCard}>learn</div>
      </FilledCard>
    </div>
  );
}
