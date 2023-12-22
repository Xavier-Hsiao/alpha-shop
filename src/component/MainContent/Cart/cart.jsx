import Product from "./Product";
import styles from "../../../style/cart.module.scss";

const data = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

export default function Cart() {
  // Generate product dynamically
  const productList = data.map((product) => (
    <Product key={product.id} product={product} />
  ));
  // Return Cart component
  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      {/* Product section */}
      <section className={styles.productContainer}>
        {/* Product card area*/}
        <ul className={styles.productList}>{productList}</ul>
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
