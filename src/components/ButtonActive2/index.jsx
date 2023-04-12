import React from "react";
import "./ButtonActive2.css";

function ButtonActive2(props) {
  const { children, className } = props;

  return (
    <article className={`button-active-7 ${className || ""}`}>
      <div className="default-7 valign-text-middle opensans-normal-eerie-black-14px">{children}</div>
    </article>
  );
}

export default ButtonActive2;
