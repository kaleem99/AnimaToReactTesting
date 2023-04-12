import React from "react";
import { Link } from "react-router-dom";
import "./Component1.css";

function Component1(props) {
  const { surname1, surname2, surname3 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="component-1 screen">
        <div className="component-1-1">
          <Link to="/hamburger-2">
            <div className="surname valign-text-middle opensans-semi-bold-black-14px">
              {surname1}
            </div>
          </Link>
          <Link to="/hamburger">
            <div className="surname valign-text-middle opensans-semi-bold-black-14px">
              {surname2}
            </div>
          </Link>
          <Link to="/field-inputs">
            <div className="surname valign-text-middle opensans-semi-bold-black-14px">
              {surname3}
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Component1;
