import styles from "./DIYContainer.module.css";

import FilledCard from "/src/components/filledCard/FilledCard";

export default function DIYContainer() {
  return (
    <div>
      <FilledCard>
        <div className={styles.mainCard}>DIY</div>
      </FilledCard>
    </div>
  );
}
