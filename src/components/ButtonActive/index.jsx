import React, { useState } from "react";
import "./ButtonActive.css";

function ButtonActive(props) {
  const { children, className } = props;
  const [state, setState] = useState(false);
  const changeRoute = () => {
    if (children === "Default") {
      window.location.href = "hamburger-2";
    }
    if(children === "Start"){
      window.location.href = "hamburger-2";
    }
  };
  console.log(1)
  return (
    <button
      onClick={() => changeRoute()}
      onMouseOver={() => setState(true)}
      onMouseOut={() => setState(false)}
      className={`${!state ? "button-active-7" : "button-active"} ${
        className || ""
      }`}
    >
      <div
        className={`default valign-text-middle ${
          state
            ? "opensans-normal-white-14px"
            : "opensans-normal-eerie-black-14px"
        }`}
      >
        {children}
      </div>
    </button>
  );
}

export default ButtonActive;
