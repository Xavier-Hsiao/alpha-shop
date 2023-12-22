import StepProgress from "./StepProgress.jsx";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ProgressControl from "./ProgressControl";
import Cart from "./cart.jsx";
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
