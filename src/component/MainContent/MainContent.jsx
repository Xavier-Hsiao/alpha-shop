import StepProgress from "./StepProgress.jsx";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ProgressControl from "./ProgressControl";
import "../../style/MainContent.scss";

export default function MainContent() {
  return (
    <>
      <section id="main-content">
        <div className="content-wrapper">
          <div id="left-main-content">
            <StepProgress />
            {/* <Step1 /> */}
            {/* <Step2 /> */}
            <Step3 />
            <ProgressControl />
          </div>
          <div id="right-main-content">
            
          </div>
        </div>
      </section>
    </>
  );
}
