import styles from "./MainGrid.module.css";
import { useState } from "react";

import Header from "/src/containers/header/Header";
import NavigationBar from "/src/containers/navigationBar/NavigationBar";
import HomeContainer from "/src/containers/homeContainer/HomeContainer";

export default function MainGrid() {
  const [currentTab, setCurrentTab] = useState("home");
  const homeTabVisible = currentTab === "home";
  const learnTabVisible = currentTab === "learn";
  const videosTabVisible = currentTab === "videos";
  const diyTabVisible = currentTab === "diy";
  const quizTabVisible = currentTab === "quiz";
  return (
    <div className={styles.mainGrid}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.content}>
        <NavigationBar currentTab={currentTab} setCurrentTab={setCurrentTab} />
        {homeTabVisible && <HomeContainer />}
        {learnTabVisible && <div>learn</div>}
        {videosTabVisible && <div>videos</div>}
        {diyTabVisible && <div>diy</div>}
        {quizTabVisible && <div>quiz</div>}
      </div>
    </div>
  );
}
