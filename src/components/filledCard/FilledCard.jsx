import styles from "./FilledCard.module.css";

export default function FilledCard({}) {
  if (colour === "secondaryContainer") {
    return (
      <div className={styles.secondaryContainerFilledCard}>{children}</div>
    );
  }
  if (colour === "tertiaryContainer") {
    return <div className={styles.tertiaryContainerFilledCard}>{children}</div>;
  }
  return <div className={styles.filledCard}>{children}</div>;
}
