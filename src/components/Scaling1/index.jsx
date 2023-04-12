import React from "react";
import TemplateInteractiveInfographic from "../TemplateInteractiveInfographic";
import "./Scaling1.css";

function Scaling1(props) {
  const { templateInteractiveInfographicProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="scaling-1 screen">
        <TemplateInteractiveInfographic
          option1={templateInteractiveInfographicProps.option1}
          sapienNonCursusMi={templateInteractiveInfographicProps.sapienNonCursusMi}
          image={templateInteractiveInfographicProps.image}
          templateHeaderBarProps={templateInteractiveInfographicProps.templateHeaderBarProps}
          navBreadcrumbsProps={templateInteractiveInfographicProps.navBreadcrumbsProps}
          buttonActive2Props={templateInteractiveInfographicProps.buttonActive2Props}
          buttonActiveProps={templateInteractiveInfographicProps.buttonActiveProps}
        />
      </div>
    </div>
  );
}

export default Scaling1;
