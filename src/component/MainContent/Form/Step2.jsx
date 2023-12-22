import styles from "../../../style/Step2.module.scss";

export default function Step2() {
  return (
    <div className={styles.stepContent}>
      <form
        className={`${styles.col} ${styles.col12} ${styles.row1}`}
        data-phase="shipping"
      >
        <h3 className={styles.formTitle}>運送方式</h3>
        <section className={`${styles.formBody} ${styles.col} ${styles.col12}`}>
          <label
            className={`${styles.col} ${styles.col12} ${styles.radioGroup}`}
            data-price={0}
          >
            <input
              id="shipping-standard"
              type="radio"
              name="shipping"
              className={styles.deliveryInput}
              defaultChecked
            />
            <div className={styles.radioInfo}>
              <div className={`${styles.col} ${styles.col12}`}>
                <div className={styles.text}>標準運送</div>
                <div className={styles.price}></div>
              </div>
              <div className={`${styles.col} ${styles.col12} ${styles.period}`}>
                約 3~7 個工作天
              </div>
            </div>
            <div className={styles.radioBoxBorder} />
          </label>
          <label
            className={`${styles.col} ${styles.col12} ${styles.radioGroup}`}
            data-price={500}
          >
            <input
              id="shipping-dhl"
              type="radio"
              name="shipping"
              className={styles.deliveryInput}
            />
            <div className={styles.radioInfo}>
              <div className={`${styles.col} ${styles.col12}`}>
                <div className={styles.text}>DHL 貨運</div>
                <div className={styles.price} />
              </div>
              <div className={`${styles.col} ${styles.col12} ${styles.period}`}>
                48 小時內送達
              </div>
            </div>
            <div className={styles.radioBoxBorder} />
          </label>
        </section>
      </form>
    </div>
  );
}
