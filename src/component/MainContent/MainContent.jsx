import StepProgress from "./Form/StepProgress.jsx";
import Step1 from "./Form/Step1";
import Step2 from "./Form/Step2";
import Step3 from "./Form/Step3";
import { useState } from "react";
import ProgressControl from "./Form/ProgressControl.jsx";
import Cart from "./Cart/cart.jsx";
import { CardProvider } from "../../Context/CardInfoContext.jsx";
import styles from "../../style/MainContent.module.scss";

export default function MainContent() {
  // Define state
  const [step, setStep] = useState(2);

  // Define event handlers
  function handleNext() {
    if (step < 3) {
      setStep((step) => step + 1);
    }
  }

  function handlePrevious() {
    if (step > 1) {
      setStep((step) => step - 1);
    }
  }

  return (
    <>
      <section className={styles.mainContent}>
        <div className={styles.contentWrapper}>
          <CardProvider>
            <div className={styles.leftMainContent}>
              <StepProgress step={step} />
              {/* Conditional rendering of step forms */}
              {step === 1 && <Step1 />}
              {step === 2 && <Step2 />}
              {step === 3 && <Step3 />}
              <ProgressControl
                onNext={handleNext}
                onPrevious={handlePrevious}
                step={step}
              />
            </div>
            <div className={styles.rightMainContent}>
              <Cart />
            </div>
          </CardProvider>
        </div>
      </section>
    </>
  );
}
