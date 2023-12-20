import "../../style/StepProgress.scss";

export default function StepProgress() {
  return (
    <div id="step-progress-wrapper">
      <h3>結帳</h3>
      <div className="step-group">
        <div className="step-items">
          <div className="step-icon">1</div>
          <p>寄送地址</p>
        </div>
        <div className="step-group-line"></div>
        <div className="step-items">
          <div className="step-icon">2</div>
          <p>運送方式</p>
        </div>
        <div className="step-group-line"></div>
        <div className="step-items">
          <div className="step-icon">3</div>
          <p>付款資訊</p>
        </div>
      </div>
    </div>
  );
}
