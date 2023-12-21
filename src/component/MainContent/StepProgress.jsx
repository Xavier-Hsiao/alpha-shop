import styles from "../../style/StepProgress.module.scss";

export default function StepProgress() {
  return (
    <div className={styles.stepProgressWrapper}>
      <h3>結帳</h3>
      <div className={styles.stepGroup}>
        <div className={styles.stepItems}>
          <div className={styles.stepIcon}>1</div>
          <p>寄送地址</p>
        </div>
        <div className={styles.stepGroupLine}></div>
        <div className={styles.stepItems}>
          <div className={styles.stepIcon}>2</div>
          <p>運送方式</p>
        </div>
        <div className={styles.stepGroupLine}></div>
        <div className={styles.stepItems}>
          <div className={styles.stepIcon}>3</div>
          <p>付款資訊</p>
        </div>
      </div>
    </div>
  );
}
