import styles from "../../../style/Product.module.scss";

export default function Product({ product, onQtyPlus, onQtyMinus }) {
  return (
    <li className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          src={product.img}
          alt="product-image"
          className={styles.productImage}
        />
      </div>
      <div className={styles.productInfo}>
        <div className={styles.productName}>{product.name}</div>
        <div className={styles.productPrice}>{product.price}</div>
        <div className={styles.actionBtnGroup}>
          <a href="#" className={`${styles.actionBtn} ${styles.minus}`} onClick={() => onQtyMinus(product.id)}>
            &#8722;
          </a>
          <p className={styles.productQty}>{product.quantity}</p>
          <a href="#" className={`${styles.actionBtn} ${styles.plus}`} onClick={() => onQtyPlus(product.id)}>
            &#43;
          </a>
        </div>
      </div>
    </li>
  );
}
