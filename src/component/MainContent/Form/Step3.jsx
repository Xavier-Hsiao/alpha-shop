import { useContext } from "react";
import { CardInfoContext } from "../../../Context/CardInfoContext";
import styles from "../../../style/Step3.module.scss";

export default function Step3() {
  const { handleChange, cardInfo } = useContext(CardInfoContext);

  return (
    <div className={styles.stepContent}>
      <form
        className={`${styles.col} ${styles.col12}`}
        data-phase="credit-card"
      >
        <h3 className={styles.formTitle}>付款資訊</h3>
        <section className={`${styles.formBody} ${styles.col} ${styles.col12}`}>
          <div className={`${styles.col} ${styles.row} ${styles.row1}`}>
            <div className={`${styles.inputGroup}`}>
              <div className={styles.inputLabel}>持卡人姓名</div>
              <input
                type="text"
                placeholder="John Doe"
                value={cardInfo.cardHolderName}
                onChange={() => handleChange(event, "cardHolderName")}
              />
            </div>
          </div>
          <div className={`${styles.col} ${styles.row} ${styles.row2}`}>
            <div className={`${styles.inputGroup}`}>
              <div className={styles.inputLabel}>卡號</div>
              <input
                type="text"
                placeholder="1111 2222 3333 4444"
                value={cardInfo.cardNumber}
                onChange={() => handleChange(event, "cardNumber")}
              />
            </div>
          </div>
          <div className={`${styles.col} ${styles.row} ${styles.row3}`}>
            <div className={`${styles.inputGroup}`}>
              <div className={styles.inputLabel}>有效期限</div>
              <input
                type="text"
                placeholder="MM/YY"
                value={cardInfo.expirationDate}
                onChange={() => handleChange(event, "expirationDate")}
              />
            </div>
            <div className={`${styles.inputGroup}`}>
              <div className={styles.inputLabel}>CVC / CCV</div>
              <input
                type="text"
                placeholder={123}
                value={cardInfo.CVC}
                onChange={() => handleChange(event, "CVC")}
              />
            </div>
          </div>
        </section>
      </form>
    </div>
  );
}
