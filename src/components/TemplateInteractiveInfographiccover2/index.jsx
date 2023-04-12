import React from "react";
import TemplateHeaderBar from "../TemplateHeaderBar";
import COPY from "../COPY";
import GRAPHIC from "../GRAPHIC";
import "./TemplateInteractiveInfographiccover2.css";

function TemplateInteractiveInfographiccover2(props) {
  const { cOPYProps, gRAPHICProps } = props;

  return (
    <div className="template_interactive-1">
      <TemplateHeaderBar />
      <div className="page-content-1">
        <COPY buttonActiveProps={cOPYProps.buttonActiveProps} buttonActive2Props={cOPYProps.buttonActive2Props} />
        <GRAPHIC className={gRAPHICProps.className} />
      </div>
    </div>
  );
}

export default TemplateInteractiveInfographiccover2;
