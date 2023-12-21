import styles from "../../style/ProgressControl.module.scss"

export default function ProgressControl() {
  return (
    <div className={styles.progressControl}>
      <button className={styles.previousBtn}>上一步</button>
      <button className={styles.nextBtn}>下一步</button>
    </div>
  )
}
