import Product from "./product";
import styles from "../../../style/cart.module.scss";

export default function Cart() {
  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      {/* Product section */}
      <section className={styles.productContainer}>
        {/* Product card area*/}
        <ul className={styles.productList}>
          <Product />
          <Product />
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
