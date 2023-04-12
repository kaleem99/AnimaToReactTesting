import React from "react";
import TemplateHeaderBar2 from "../TemplateHeaderBar2";
import NavBreadcrumbs from "../NavBreadcrumbs";
import ButtonActive2 from "../ButtonActive2";
import ButtonActive from "../ButtonActive";
import "./TemplateInteractiveInfographic2.css";

function TemplateInteractiveInfographic2(props) {
  const {
    option1,
    sapienNonCursusMi,
    image,
    templateHeaderBar2Props,
    navBreadcrumbsProps,
    buttonActive2Props,
    buttonActiveProps,
  } = props;

  return (
    <div className="template_interactive-infographic-1">
      <TemplateHeaderBar2 infographicTitleGoesHere={templateHeaderBar2Props.infographicTitleGoesHere} />
      <div className="page-content-4">
        <div className="content-1">
          <NavBreadcrumbs
            example3={navBreadcrumbsProps.example3}
            example2={navBreadcrumbsProps.example2}
            className={navBreadcrumbsProps.className}
          />
          <div className="content-item">
            <div className="option-1-1 valign-text-middle opensans-normal-black-19px">{option1}</div>
            <p className="sapien-non-cursus-mi-1 valign-text-middle opensans-normal-black-14px">{sapienNonCursusMi}</p>
          </div>
          <div className="content-item">
            <ButtonActive2 className={buttonActive2Props.className}>{buttonActive2Props.children}</ButtonActive2>
            <ButtonActive className={buttonActiveProps.className}>{buttonActiveProps.children}</ButtonActive>
          </div>
        </div>
        <div className="image-1" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
    </div>
  );
}

export default TemplateInteractiveInfographic2;
