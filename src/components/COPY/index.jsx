import React from "react";
import ButtonActive from "../ButtonActive";
import ButtonActive2 from "../ButtonActive2";
import "./COPY.css";

function COPY(props) {
  const { buttonActiveProps, buttonActive2Props } = props;

  return (
    <div className="copy-1">
      <h1 className="title-1 opensans-normal-eerie-black-26px">H1 title here</h1>
      <div className="subhead-copy-here-1 opensans-normal-eerie-black-19px">Subhead copy here</div>
      <div className="buttons-2">
        <ButtonActive className={buttonActiveProps.className}>{buttonActiveProps.children}</ButtonActive>
        {/* <ButtonActive2 className={buttonActive2Props.className}>{buttonActive2Props.children}</ButtonActive2> */}
      </div>
    </div>
  );
}

export default COPY;
