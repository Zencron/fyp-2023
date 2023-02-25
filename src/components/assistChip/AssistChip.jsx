import styles from "./AssistChip.module.css";

export default function AssistChip({ children, onClick, disabled }) {
  const className = `${styles.assistChip} ${disabled ? styles.disabled : ""}`;
  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  );
}
