import StepProgress from "./Form/StepProgress.jsx";
import Step1 from "./Form/Step1";
import Step2 from "./Form/Step2";
import Step3 from "./Form/Step3";
import ProgressControl from "./Form/ProgressControl.jsx";
import Cart from "./Cart/cart.jsx";
import styles from "../../style/MainContent.module.scss";

export default function MainContent() {
  return (
    <>
      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftMainContent}>
            <StepProgress />
            {/* <Step1 /> */}
            {/* <Step2 /> */}
            <Step3 />
            <ProgressControl />
          </div>
          <div className={styles.rightMainContent}>
            <Cart />
          </div>
        </div>
      </section>
    </>
  );
}
