import styles from "./FilledCard.module.css";

export default function FilledCard({ children, colour = "surfaceVariant" }) {
  if (colour === "secondaryContainer") {
    return (
      <div className={styles.secondaryContainerFilledCard}>{children}</div>
    );
  }
  if (colour === "tertiaryContainer") {
    return <div className={styles.tertiaryContainerFilledCard}>{children}</div>;
  }
  if (colour === "primaryContainer") {
    return <div className={styles.primaryContainerFilledCard}>{children}</div>;
  }
  return <div className={styles.filledCard}>{children}</div>;
}
