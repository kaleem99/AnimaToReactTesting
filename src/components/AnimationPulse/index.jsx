import React from "react";
import TemplateInteractiveInfographiccover3 from "../TemplateInteractiveInfographiccover3";
import "./AnimationPulse.css";

function AnimationPulse(props) {
  const { templateInteractiveInfographiccover3Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="animation-pulse screen">
        <TemplateInteractiveInfographiccover3 cOPYProps={templateInteractiveInfographiccover3Props.cOPYProps} />
      </div>
    </div>
  );
}

export default AnimationPulse;
