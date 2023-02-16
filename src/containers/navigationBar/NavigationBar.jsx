import styles from "./NavigationBar.module.css";

export default function NavigationBar({ currentTab, setCurrentTab }) {
  return (
    <div className={styles.navigationBar}>
      <NavigationChip
        tab="home"
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      >
        Home
      </NavigationChip>
      <NavigationChip
        tab="learn"
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      >
        Learn
      </NavigationChip>
      <NavigationChip
        tab="videos"
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      >
        Videos
      </NavigationChip>
    </div>
  );
}

function NavigationChip({ children, currentTab, tab, setCurrentTab }) {
  const selected = currentTab === tab;
  const className = `${styles.navigationChip} ${
    selected ? styles.selected : ""
  }`;
  function handleClick() {
    setCurrentTab(tab);
  }
  return (
    <button className={className} onClick={handleClick}>
      {children}
    </button>
  );
}
