import styles from "../style/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logoContainer}>
          <img
            src="https://raw.githubusercontent.com/ALPHACamp/alpha-shop/c66f00cf6be37bc83cf2aa4412224cef51282380/public/icons/logo.svg"
            alt="alpha-shop-logo"
            className={styles.logoImage}
          />
        </div>
        <aside className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>關於我們</h3>
          <div className={styles.contentContainer}>
            <a href="#" className={styles.footerLink}>
              品牌故事
            </a>
            <a href="#" className={styles.footerLink}>
              媒體聯繫
            </a>
            <a href="#" className={styles.footerLink}>
              Press kit
            </a>
          </div>
        </aside>
        <aside className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>資訊</h3>
          <div className={styles.contentContainer}>
            <a href="#" className={styles.footerLink}>
              隱私權政策
            </a>
            <a href="#" className={styles.footerLink}>
              Cookie
            </a>
            <a href="#" className={styles.footerLink}>
              GDPR
            </a>
          </div>
        </aside>
        <aside className={styles.footerColumn}>
          <h3 className={styles.footerColumnTitle}>追蹤 ALPHA Shop</h3>
          <div className={styles.contentContainer}>
            <div className={styles.telInfo}>+886 02123-45678</div>
            <div className={styles.socialIconGroup}>
              <img
                src="https://raw.githubusercontent.com/ALPHACamp/alpha-shop/main/public/icons/facebook.svg"
                alt="facebook-icon"
              />
              <img
                src="https://raw.githubusercontent.com/ALPHACamp/alpha-shop/main/public/icons/instagram.svg"
                alt="instagram-icon"
              />
              <img
                src="https://raw.githubusercontent.com/ALPHACamp/alpha-shop/main/public/icons/whatsapp.svg"
                alt="whatsapp-icon"
              />
            </div>
          </div>
        </aside>
      </div>
    </footer>
  );
}
