import React from "react";
import TemplateInteractiveInfographiccover from "../TemplateInteractiveInfographiccover";
import "./PopUp.css";

function PopUp(props) {
  const { templateInteractiveInfographiccoverProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="pop-up screen">
        <TemplateInteractiveInfographiccover
          title={templateInteractiveInfographiccoverProps.title}
          subheadCopyHere={templateInteractiveInfographiccoverProps.subheadCopyHere}
          buttonActiveProps={templateInteractiveInfographiccoverProps.buttonActiveProps}
        />
      </div>
    </div>
  );
}

export default PopUp;
