import styles from "../../../style/cart.module.scss";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartContext";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const { cartList } = useContext(CartContext);
  const { subtotal } = useContext(CartContext);
  
  // Return Cart component
  return (
    <section className={styles.cartContainer}>
      <h3 className={styles.cartTitle}>購物籃</h3>
      {/* Product section */}
      <section className={styles.productContainer}>
        {/* Product card area*/}
        <ul className={styles.productList}>{cartList}</ul>
      </section>
      {/* Cart info section */}
      <section className={styles.cartInfoArea}>
        <div className={styles.cartInfo}>
          <div className={styles.deliveryLabel}>運費</div>
          <div className={styles.deliveryPrice}>免費</div>
        </div>
        <div className={styles.cartInfo}>
          <div className={styles.subAccountLabel}>小計</div>
          <div className={styles.subAccount}>
            {cartItems.length > 0 ? `${subtotal}` : "購物籃空空如也 😵"}
          </div>
        </div>
      </section>
    </section>
  );
}
