import React from "react";
import IconCourseDevUi2 from "../IconCourseDevUi2";
import "./TemplateHeaderBar2.css";

function TemplateHeaderBar2(props) {
  const { infographicTitleGoesHere } = props;

  return (
    <div className="template-header-bar-2">
      <div className="title-5">
        <div className="infographic-title-goes-here-7 valign-text-middle opensans-semi-bold-white-14px">
          {infographicTitleGoesHere}
        </div>
      </div>
      <div className="ui-option-7">
        <IconCourseDevUi2 />
        <IconCourseDevUi2 />
        <IconCourseDevUi2 />
      </div>
    </div>
  );
}

export default TemplateHeaderBar2;
