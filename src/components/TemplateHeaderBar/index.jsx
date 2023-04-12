import React from "react";
import IconCourseDevUi2 from "../IconCourseDevUi2";
import "./TemplateHeaderBar.css";
import icon1 from "../../static/img/-icon-menu-3@2x.png";
import icon2 from "../../static/img/-icon-menu-4@2x.png";
import icon3 from "../../static/img/-icon-menu-5@2x.png";
import icon4 from "../../static/img/-icon-menu-1.svg"
function TemplateHeaderBar(props) {
  const { className } = props;
  const iconNames = [icon1, icon2, icon3];
  return (
    <div className={`template-header-bar ${className || ""}`}>
      <div className="infographic-title-goes-here valign-text-middle opensans-semi-bold-white-14px">
        Infographic title goes here
      </div>
      <div className="ui-option">
        {/* <IconCourseDevUi2 />
        <IconCourseDevUi2 />
        <IconCourseDevUi2 /> */}
        {iconNames.map((icon) => {
          return <IconCourseDevUi2 iconName={icon} />;
        })}
      </div>
    </div>
  );
}

export default TemplateHeaderBar;
