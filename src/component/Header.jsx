import styles from "../style/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      {/* <img
        src="https://raw.githubusercontent.com/ALPHACamp/alpha-shop/c66f00cf6be37bc83cf2aa4412224cef51282380/public/icons/toggle.svg"
        alt="alpha-shop-icon"
      /> */}
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            男款
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            女款
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            最新消息
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            客製商品
          </a>
        </li>
        <li className={styles.navItem}>
          <a href="#" className={styles.navLink}>
            聯絡我們
          </a>
        </li>
      </ul>
      <img
        src="https://raw.githubusercontent.com/ALPHACamp/alpha-shop/c66f00cf6be37bc83cf2aa4412224cef51282380/public/icons/logo.svg"
        alt="alpha-shop-logo"
        className={styles.logoImage}
      />
      <ul className={`${styles.navList} ${styles.actionBtnGroup}`}>
        <li className={styles.actionBtn}>
          <img
            src="https://raw.githubusercontent.com/ALPHACamp/alpha-shop/main/public/icons/search.svg"
            alt="search-icon"
          />
        </li>
        <li className={styles.actionBtn}>
          <img
            src="https://raw.githubusercontent.com/ALPHACamp/alpha-shop/main/public/icons/cart.svg"
            alt="cart-icon"
          />
        </li>
        <li className={styles.actionBtn}>
          <img
            src="https://raw.githubusercontent.com/ALPHACamp/alpha-shop/main/public/icons/moon.svg"
            alt="dark-mode-icon"
          />
        </li>
      </ul>
    </header>
  );
}
