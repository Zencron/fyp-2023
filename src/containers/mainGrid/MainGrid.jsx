import styles from "./MainGrid.module.css";
import { useState } from "react";

import Header from "/src/containers/header/Header";
import NavigationBar from "/src/containers/navigationBar/NavigationBar";
import HomeContainer from "/src/containers/homeContainer/HomeContainer";

export default function MainGrid() {
  const [currentTab, setCurrentTab] = useState("home");
  return (
    <div className={styles.mainGrid}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        <HomeContainer />
      </div>
    </div>
  );
}
