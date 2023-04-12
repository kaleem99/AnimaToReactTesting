import React from "react";
import TemplateHeaderBar from "../TemplateHeaderBar";
import ButtonActive from "../ButtonActive";
import "./FieldInputs.css";

function FieldInputs(props) {
  const {
    title1,
    name,
    inputType1,
    inputPlaceholder1,
    title2,
    inputType2,
    inputPlaceholder2,
    email,
    inputType3,
    inputPlaceholder3,
    phone,
    inputType4,
    inputPlaceholder4,
    message,
    inputType5,
    inputPlaceholder5,
    buttonActiveProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="field-inputs screen">
        <TemplateHeaderBar />
        <h1 className="title-3 valign-text-middle">{title1}</h1>
        <div className="flex-row">
          <div className="name valign-text-middle opensans-normal-black-16px">{name}</div>
          <div className="overlap-group1-3">
            <div className="rectangle-15"></div>
            <input
              className="john-jane opensans-normal-black-16px"
              name="johnjane"
              placeholder={inputPlaceholder1}
              type={inputType1}
              required
            />
          </div>
        </div>
        <div className="flex-row-1">
          <div className="title-4 valign-text-middle opensans-normal-black-16px">{title2}</div>
          <div className="overlap-group-2">
            <input
              className="mr-mrs opensans-normal-black-16px"
              name="mrmrs"
              placeholder={inputPlaceholder2}
              type={inputType2}
              required
            />
          </div>
        </div>
        <div className="flex-row-2">
          <div className="email valign-text-middle opensans-normal-black-16px">{email}</div>
          <div className="overlap-group-2">
            <input
              className="johngmailcom opensans-normal-black-16px"
              name="johngmailcom"
              placeholder={inputPlaceholder3}
              type={inputType3}
              required
            />
          </div>
        </div>
        <div className="flex-row-3">
          <div className="phone valign-text-middle opensans-normal-black-16px">{phone}</div>
          <div className="overlap-group4-3">
            <div className="rectangle-18"></div>
            <input
              className="x098-777-383 opensans-normal-black-16px"
              name="098777383"
              placeholder={inputPlaceholder4}
              type={inputType4}
              required
            />
          </div>
        </div>
        <div className="flex-row-4">
          <div className="message valign-text-middle opensans-normal-black-16px">{message}</div>
          <div className="overlap-group3-2">
            <div className="rectangle-19"></div>
            <textarea
              className="im-trying-out-anima opensans-normal-black-16px"
              name="imtryingoutanima"
              placeholder={inputPlaceholder5}
              type={inputType5}
            ></textarea>
          </div>
        </div>
        <ButtonActive className={buttonActiveProps.className}>{buttonActiveProps.children}</ButtonActive>
      </div>
    </div>
  );
}

export default FieldInputs;
