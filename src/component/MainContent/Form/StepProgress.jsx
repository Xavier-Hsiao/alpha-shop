import styles from "../../../style/StepProgress.module.scss";

export default function StepProgress({ step }) {
  return (
    <div className={styles.stepProgressWrapper}>
      <h3>結帳</h3>
      <div className={styles.stepGroup}>
        <div className={styles.stepItems}>
          <div
            className={
              step >= 1
                ? `${styles.stepIcon} ${styles.checked}`
                : `${styles.stepIcon}`
            }
          >
            {step === 1 ? "1" : "\u2713"}
          </div>
          <p>寄送地址</p>
        </div>
        <div className={styles.stepGroupLine}></div>
        <div className={styles.stepItems}>
          <div
            className={
              step >= 2
                ? `${styles.stepIcon} ${styles.checked}`
                : `${styles.stepIcon}`
            }
          >
            {step === 2 ? "2" : "\u2713"}
          </div>
          <p>運送方式</p>
        </div>
        <div className={styles.stepGroupLine}></div>
        <div className={styles.stepItems}>
          <div
            className={
              step >= 3
                ? `${styles.stepIcon} ${styles.checked}`
                : `${styles.stepIcon}`
            }
          >
            {step === 3 ? "3" : "\u2713"}
          </div>
          <p>付款資訊</p>
        </div>
      </div>
    </div>
  );
}
