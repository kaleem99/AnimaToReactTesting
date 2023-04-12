import React from "react";
import "./NavBreadcrumbs.css";

function NavBreadcrumbs(props) {
  const { example2, example3, className } = props;

  return (
    <div className={`nav_breadcrumbs ${className || ""}`}>
      <div className="nav_breadcrumbs-item valign-text-middle opensans-semi-bold-bombay-14px">Parent</div>
      <img className="nav_breadcrumbs-item-1" src="/img/-.svg" alt="/" />
      <div className="nav_breadcrumbs-item valign-text-middle opensans-semi-bold-bombay-14px">Child</div>
      <img className="nav_breadcrumbs-item-1" src="/img/--1.svg" alt="/" />
      <div className="nav_breadcrumbs-item valign-text-middle opensans-semi-bold-bombay-14px">{example2}</div>
      <img className="nav_breadcrumbs-item-1" src="/img/--2.svg" alt="/" />
      <div className="nav_breadcrumbs-item valign-text-middle opensans-semi-bold-cape-cod-14px">{example3}</div>
    </div>
  );
}

export default NavBreadcrumbs;
