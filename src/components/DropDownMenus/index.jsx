import React from "react";
import "./DropDownMenus.css";

function DropDownMenus(props) {
  const {
    lecture,
    lectureInteractive,
    videoSeries,
    oysters,
    interactiveType,
    howMsw_23_1_3_1_Rem,
    howMsw_23_1_3_3_Rem,
    howMsw_23_1_3_4_Rem,
    howMsw_23_1_3_5_Rem,
    howMsw_23_1_4_2_Rem,
    howmsw_23_1_5_2_Remo,
    howmsw_23_1_6_1_Remo,
    howMsw_23_2_3_2_Rem,
    howMsw_23_2_5_1_Rem,
    howMsw_23_2_6_2_Rem,
    howMsw_23_6_4_1_Rem,
    howMsw_23_7_2_1_Rem,
    howMsw_23_7_2_2_Rem,
    howMsw_23_7_2_3_Rem,
    selectVideo,
  } = props;

  return (
    <div className="drop-down-menus screen">
      <div className="interactive-type-selection">
        <div className="interactive-type-selection-1">
          <div className="overlap-group-4">
            <div className="background">
              <div className="rectangle-1"></div>
              <div className="interactive-list"></div>
            </div>
            <div className="list roboto-regular-normal-abbey-16px">
              <div className="lecture valign-text-middle">{lecture}</div>
              <div className="list-item valign-text-middle">{lectureInteractive}</div>
              <div className="list-item valign-text-middle">{videoSeries}</div>
              <div className="list-item valign-text-middle">{oysters}</div>
            </div>
            <div className="select-interactive">
              <div className="interactive-type valign-text-middle roboto-regular-normal-black-16px">
                {interactiveType}
              </div>
              <img className="dropdown-arrow" src="/img/dropdown-arrow.svg" alt="Dropdown arrow" />
            </div>
          </div>
        </div>
      </div>
      <div className="video-selection-bar">
        <div className="video-selection-bar-1">
          <div className="overlap-group-5">
            <div className="background">
              <div className="rectangle-1-1"></div>
              <div className="video-list"></div>
            </div>
            <div className="scroll-bar">
              <div className="scroll-bar-1"></div>
              <div className="scroll-bar-frame"></div>
              <img className="arrow-bar" src="/img/arrow-bar.svg" alt="arrow bar" />
            </div>
            <div className="video-list-1 roboto-regular-normal-abbey-14px">
              <div className="how-msw_23_1_3_1_rem">{howMsw_23_1_3_1_Rem}</div>
              <div className="msw_23 valign-text-middle">{howMsw_23_1_3_3_Rem}</div>
              <div className="msw_23 valign-text-middle">{howMsw_23_1_3_4_Rem}</div>
              <div className="msw_23 valign-text-middle">{howMsw_23_1_3_5_Rem}</div>
              <div className="msw_23">{howMsw_23_1_4_2_Rem}</div>
              <div className="msw_23 valign-text-middle">{howmsw_23_1_5_2_Remo}</div>
              <div className="msw_23 valign-text-middle">{howmsw_23_1_6_1_Remo}</div>
              <div className="msw_23 valign-text-middle">{howMsw_23_2_3_2_Rem}</div>
              <div className="msw_23">{howMsw_23_2_5_1_Rem}</div>
              <div className="msw_23 valign-text-middle">{howMsw_23_2_6_2_Rem}</div>
              <div className="msw_23 valign-text-middle">{howMsw_23_6_4_1_Rem}</div>
              <div className="msw_23 valign-text-middle">{howMsw_23_7_2_1_Rem}</div>
              <div className="msw_23">{howMsw_23_7_2_2_Rem}</div>
              <div className="msw_23 valign-text-middle">{howMsw_23_7_2_3_Rem}</div>
            </div>
            <div className="select-video">
              <div className="select-video-1 valign-text-middle roboto-regular-normal-black-16px">{selectVideo}</div>
              <img className="dropdown-arrow-1" src="/img/dropdown-arrow-1.svg" alt="Dropdown arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownMenus;
