import Product from "./Product";
import styles from "../../../style/cart.module.scss";
import { useState } from "react";

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
  // Default state is the data array
  const [cartItems, setCartItems] = useState(data);
  // Generate cart items dynamically. Only display when qty is greater than 0
  const cartList = cartItems.map((cartItem) =>
    cartItem.quantity > 0 ? (
      <Product
        key={cartItem.id}
        product={cartItem}
        onQtyPlus={handleQtyPlus}
        onQtyMinus={handleQtyMinus}
      />
    ) : null
  );
  // Derived state
  let subtotal = cartItems.reduce(
    (result, item) => result + item.price * item.quantity,
    0
  );
  console.log(subtotal);
  // Define event handler
  function handleQtyPlus(id) {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }

  function handleQtyMinus(id) {
    setCartItems((prevCartItems) =>
      prevCartItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

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
