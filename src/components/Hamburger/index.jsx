import React, { useState } from "react";
import { Link } from "react-router-dom";
import TemplateHeaderBar from "../TemplateHeaderBar";
import "./Hamburger.css";
import Component1 from "../Component1";
import image2 from "../../static/img/menu.png";
function Hamburger(props) {
  const { surname } = props;
  const [popup, setPopup] = useState(false);
  return (
    <div className="container-center-horizontal">
      <div className="hamburger-2 screen">
        <TemplateHeaderBar />
        {/* <Link to="/component-1"> */}

        <img
          onClick={() => (popup ? setPopup(false) : setPopup(true))}
          className="vector-1"
          src={image2}
          alt="Vector 1"
        />
        {/* </Link> */}
        <h1 className="surname-1 valign-text-middle opensans-semi-bold-black-40px">
          {surname}
        </h1>
        <br></br>
        {popup && (
          <Component1
            surname1="Page 1"
            surname2="Page 2"
            surname3="Input Fields"
          />
        )}
      </div>
    </div>
  );
}

export default Hamburger;
