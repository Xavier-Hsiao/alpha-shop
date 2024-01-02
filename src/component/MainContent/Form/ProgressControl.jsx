import { useContext } from "react";
import { CardInfoContext } from "../../../Context/CardInfoContext";
import { CartContext } from "../../../Context/CartContext";
import styles from "../../../style/ProgressControl.module.scss";

export default function ProgressControl({ onNext, onPrevious, step }) {
  const { handleSubmit } = useContext(CardInfoContext);
  // We have to pass subtotal as parameter to handleSubmit
  const { subtotal } = useContext(CartContext);

  return (
    <div className={styles.progressControl}>
      <button className={styles.previousBtn} onClick={onPrevious}>
        上一步
      </button>
      {step === 3 ? (
        <button
          className={styles.nextBtn}
          onClick={() => handleSubmit(subtotal)}
        >
          送出表單
        </button>
      ) : (
        <button className={styles.nextBtn} onClick={onNext}>
          下一步
        </button>
      )}
    </div>
  );
}
