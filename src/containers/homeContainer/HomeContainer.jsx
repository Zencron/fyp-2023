import styles from "./HomeContainer.module.css";

import FilledCard from "/src/components/filledCard/FilledCard";

export default function HomeContainer() {
  return (
    <div className={styles.homeContainer}>
      <FilledCard>
        <div className={styles.mainCard}>
          <div className={styles.title}>Home</div>
          <div>dsd</div>
          <div>dsd</div>
        </div>
      </FilledCard>
    </div>
  );
}
