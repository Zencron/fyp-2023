import styles from "./MainGrid.module.css";
import { useState } from "react";

import Header from "/src/containers/header/Header";
import NavigationBar from "/src/containers/navigationBar/NavigationBar";
import HomeContainer from "/src/containers/homeContainer/HomeContainer";
import LearnContainer from "/src/containers/learnContainer/LearnContainer";
import VideosContainer from "/src/containers/videosContainer/VideosContainer";
import QuizContainer from "/src/containers/quizContainer/QuizContainer";
import DIYContainer from "/src/containers/diyContainer/DIYContainer";

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
        {learnTabVisible && <LearnContainer />}
        {videosTabVisible && <VideosContainer />}
        {diyTabVisible && <DIYContainer />}
        {quizTabVisible && <QuizContainer />}
      </div>
    </div>
  );
}
