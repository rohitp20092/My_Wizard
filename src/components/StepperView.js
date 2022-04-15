import React from "react";
import { useLocation } from "react-router-dom";
function StepperView() {
  const location = useLocation();
  return (
    <div className="step">
      <div className="step-view-container">
        <div
          className={
            "step-view " + (location.pathname == "/" ? "active-view" : "")
          }
        >
          <h3 className={location.pathname == "/" ? "active" : ""}>1</h3>
        </div>
        <span className="step-title">Genre</span>
      </div>
      <div className="step-hr" />
      <div className="step-view-container">
        <div
          className={
            "step-view " +
            (location.pathname == "/sub-genre" ? "active-view" : "")
          }
        >
          <h3 className={location.pathname == "/sub-genre" ? "active" : ""}>
            2
          </h3>
        </div>
        <span className="step-title">Subgenre</span>
      </div>
      <div className="step-hr" />
      <div className="step-view-container">
        <div className="step-view">
          <h3>...</h3>
        </div>
      </div>
    </div>
  );
}

export default StepperView;
