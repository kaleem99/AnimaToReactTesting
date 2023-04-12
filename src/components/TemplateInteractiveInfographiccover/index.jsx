import React from "react";
// import { Link } from "react-router-dom";
import TemplateHeaderBar from "../TemplateHeaderBar";
import ButtonActive from "../ButtonActive";
import GRAPHIC from "../GRAPHIC";
import "./TemplateInteractiveInfographiccover.css";

function TemplateInteractiveInfographiccover(props) {
  const { title, subheadCopyHere, buttonActiveProps } = props;

  return (
    <div className="template_interactive">
      <TemplateHeaderBar />
      <div className="page-content">
        <div className="copy">
          <h1 className="title opensans-normal-eerie-black-26px">{title}</h1>
          <div className="subhead-copy-here opensans-normal-eerie-black-19px">{subheadCopyHere}</div>
          {/* <Link to="/block-popup"> */}
            <div className="buttons-1">
              <ButtonActive className={buttonActiveProps.className}>{buttonActiveProps.children}</ButtonActive>
            </div>
          {/* </Link> */}
        </div>
        <GRAPHIC />
      </div>
    </div>
  );
}

export default TemplateInteractiveInfographiccover;
