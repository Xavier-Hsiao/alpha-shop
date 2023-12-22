import styles from "../../style/cart.module.scss";

export default function Cart() {
  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      {/* Product section */}
      <section className={styles.productContainer}>
        {/* Product card area*/}
        <ul className={styles.productList}>
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
        </ul>
        <ul className={styles.productList}>
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
        </ul>
      </section>
      {/* Cart info section */}
      <section className={styles.cartInfoArea}>
        <div className={styles.cartInfo}>
          <div className={styles.deliveryLabel}>運費</div>
          <div className={styles.deliveryPrice}>免費</div>
        </div>
        <div className={styles.cartInfo}>
          <div className={styles.subAccountLabel}>小計</div>
          <div className={styles.subAccount}>$200</div>
        </div>
      </section>
    </section>
  );
}
