import styles from "../../../style/ProgressControl.module.scss";

export default function ProgressControl({ onNext, onPrevious }) {
  return (
    <div className={styles.progressControl}>
      <button className={styles.previousBtn} onClick={onPrevious}>
        上一步
      </button>
      <button className={styles.nextBtn} onClick={onNext}>
        下一步
      </button>
    </div>
  );
}
