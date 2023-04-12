import React from "react";
import TemplateInteractiveInfographic2 from "../TemplateInteractiveInfographic2";
import "./Scaling2.css";

function Scaling2(props) {
  const { templateInteractiveInfographic2Props } = props;

  return (
    <div className="container-center-horizontal">
      <div className="scaling-2 screen">
        <TemplateInteractiveInfographic2
          option1={templateInteractiveInfographic2Props.option1}
          sapienNonCursusMi={templateInteractiveInfographic2Props.sapienNonCursusMi}
          image={templateInteractiveInfographic2Props.image}
          templateHeaderBar2Props={templateInteractiveInfographic2Props.templateHeaderBar2Props}
          navBreadcrumbsProps={templateInteractiveInfographic2Props.navBreadcrumbsProps}
          buttonActive2Props={templateInteractiveInfographic2Props.buttonActive2Props}
          buttonActiveProps={templateInteractiveInfographic2Props.buttonActiveProps}
        />
      </div>
    </div>
  );
}

export default Scaling2;
