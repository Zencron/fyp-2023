import styles from "./MainGrid.module.css";

import Header from "/src/containers/header/Header";
import HomeContainer from "/src/containers/homeContainer/HomeContainer";

export default function MainGrid() {
  return (
    <div className={styles.mainGrid}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <HomeContainer />
      </div>
    </div>
  );
}
