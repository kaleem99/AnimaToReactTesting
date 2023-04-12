import React from "react";
import ButtonActive from "../ButtonActive";
import ButtonActive2 from "../ButtonActive2";
import IconCourseDevUi from "../IconCourseDevUi";
import "./BlockPopup.css";

function BlockPopup(props) {
  const { popupBox, paragraphDefaultIp, buttonActiveProps, buttonActive2Props } = props;

  return (
    <div className="block-popup screen">
      <div className="block_popup">
        <div className="text">
          <div className="popup-box">{popupBox}</div>
          <p className="paragraph-default-ip">{paragraphDefaultIp}</p>
        </div>
        <div className="buttons">
          <ButtonActive>{buttonActiveProps.children}</ButtonActive>
          {/* <ButtonActive2>{buttonActive2Props.children}</ButtonActive2> */}
        </div>
        <IconCourseDevUi />
      </div>
    </div>
  );
}

export default BlockPopup;
