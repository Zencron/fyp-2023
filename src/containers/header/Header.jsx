import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <div>fyp 2023</div>
      <div></div>
      <div className={styles.headerRight}>
        <span className={styles.clickable}>save</span>
        <span> | </span>
        <span className={styles.clickable}>reset</span>
      </div>
    </div>
  );
}
