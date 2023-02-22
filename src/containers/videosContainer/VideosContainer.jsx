import styles from "./VideosContainer.module.css";

import FilledCard from "/src/components/filledCard/FilledCard";

export default function VideosContainer() {
  return (
    <div>
      <FilledCard>
        <div className={styles.mainCard}>videos</div>
      </FilledCard>
    </div>
  );
}
