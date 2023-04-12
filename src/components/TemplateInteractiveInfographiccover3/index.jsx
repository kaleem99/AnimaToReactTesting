import React from "react";
import TemplateHeaderBar from "../TemplateHeaderBar";
import COPY from "../COPY";
import TOP from "../TOP";
import WINDOWS from "../WINDOWS";
import SIGN from "../SIGN";
import "./TemplateInteractiveInfographiccover3.css";

function TemplateInteractiveInfographiccover3(props) {
  const { cOPYProps } = props;

  return (
    <div className="template_interactive-2">
      <TemplateHeaderBar />
      <div className="page-content-2">
        <COPY buttonActiveProps={cOPYProps.buttonActiveProps} buttonActive2Props={cOPYProps.buttonActive2Props} />
        <div className="graphic-2">
          <div className="building-2">
            <div className="overlap-group5-2">
              <div className="overlap-group2-2">
                <div className="bottom-2">
                  <div className="line-container">
                    <img className="line" src="/img/line-2-2.svg" alt="Line 2" />
                    <img className="line" src="/img/line-3-2.svg" alt="Line 3" />
                  </div>
                  <div className="overlap-group-3">
                    <div className="main-2"></div>
                    <img className="line-5-2" src="/img/line-5-2.svg" alt="Line 5" />
                  </div>
                </div>
                <TOP />
              </div>
              <WINDOWS />
              <div className="overlap-group3-3">
                <div className="panels-2">
                  <div className="panel-4"></div>
                  <div className="panel-5"></div>
                </div>
                <img className="line-4-2" src="/img/line-4-2.svg" alt="Line 4" />
              </div>
              <SIGN />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateInteractiveInfographiccover3;
