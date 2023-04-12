import React from "react";
import TOP from "../TOP";
import WINDOWS from "../WINDOWS";
import SIGN from "../SIGN";
import "./GRAPHIC.css";

function GRAPHIC(props) {
  const { className } = props;

  return (
    <div className={`graphic ${className || ""}`}>
      <div className="building">
        <div className="overlap-group5">
          <div className="overlap-group2">
            <div className="bottom">
              <div className="overlap-group">
                <div className="main"></div>
                <img className="line-5" src="/img/line-5.svg" alt="Line 5" />
              </div>
              <img className="line-3" src="/img/line-3.svg" alt="Line 3" />
              <img className="line-2" src="/img/line-2.svg" alt="Line 2" />
            </div>
            <TOP />
          </div>
          <WINDOWS />
          <div className="overlap-group3">
            <div className="panels">
              <div className="panel"></div>
              <div className="panel-1"></div>
            </div>
            <img className="line-4" src="/img/line-4.svg" alt="Line 4" />
          </div>
          <SIGN />
        </div>
      </div>
    </div>
  );
}

export default GRAPHIC;
