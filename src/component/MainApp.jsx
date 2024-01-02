import Header from "./Header";
import MainContent from "./MainContent/MainContent";
import Footer from "./Footer";
import { CartProvider } from "../Context/CartContext";
import styles from "../style/MainApp.module.scss";

export default function MainApp() {
  return (
    <div className={styles.mainApp}>
      <CartProvider>
        <Header />
        <MainContent />
        <Footer />
      </CartProvider>
    </div>
  );
}
