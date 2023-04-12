import React from "react";
import TemplateHeaderBar from "../TemplateHeaderBar";
import NavBreadcrumbs from "../NavBreadcrumbs";
import ButtonActive2 from "../ButtonActive2";
import ButtonActive from "../ButtonActive";
import "./TemplateInteractiveInfographic.css";

function TemplateInteractiveInfographic(props) {
  const {
    option1,
    sapienNonCursusMi,
    image,
    templateHeaderBarProps,
    navBreadcrumbsProps,
    buttonActive2Props,
    buttonActiveProps,
  } = props;

  return (
    <div className="template_interactive-infographic">
      <TemplateHeaderBar className={templateHeaderBarProps.className} />
      <div className="page-content-3">
        <div className="content">
          <NavBreadcrumbs example2={navBreadcrumbsProps.example2} example3={navBreadcrumbsProps.example3} />
          <div className="copy-3">
            <div className="option-1 valign-text-middle opensans-normal-black-19px">{option1}</div>
            <p className="sapien-non-cursus-mi valign-text-middle opensans-normal-black-14px">{sapienNonCursusMi}</p>
          </div>
          <div className="buttons-4">
            <ButtonActive2 className={buttonActive2Props.className}>{buttonActive2Props.children}</ButtonActive2>
            <ButtonActive className={buttonActiveProps.className}>{buttonActiveProps.children}</ButtonActive>
          </div>
        </div>
        <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
    </div>
  );
}

export default TemplateInteractiveInfographic;
