import { createContext, useState } from "react";
import Product from "../component/MainContent/Cart/Product";

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

const CartContext = createContext(null);

function CartProvider({ children }) {
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

  return (
    <CartContext.Provider value={{ cartItems, cartList, subtotal }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
