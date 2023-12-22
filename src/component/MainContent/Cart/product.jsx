import styles from "../../../style/Product.module.scss";

export default function Product() {
  return (
    <li className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          src="https://picsum.photos/300/300?text=1"
          alt="product-image"
          className={styles.productImage}
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productName}>貓貓罐罐</div>
        <div className={styles.productPrice}>$100</div>
        <div className={styles.actionBtnGroup}>
          <a href="#" className={`${styles.actionBtn} ${styles.minus}`}>
            &#8722;
          </a>
          <p className={styles.productQty}>2</p>
          <a href="#" className={`${styles.actionBtn} ${styles.plus}`}>
            &#43;
          </a>
        </div>
      </div>
    </li>
  );
}
