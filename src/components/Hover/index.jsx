import React from "react";
import TemplateInteractiveInfographiccover2 from "../TemplateInteractiveInfographiccover2";
import "./Hover.css";

function Hover(props) {
  const { templateInteractiveInfographiccover2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="hover screen">
        <TemplateInteractiveInfographiccover2
          cOPYProps={templateInteractiveInfographiccover2Props.cOPYProps}
          gRAPHICProps={templateInteractiveInfographiccover2Props.gRAPHICProps}
        />
      </div>
    </div>
  );
}

export default Hover;
