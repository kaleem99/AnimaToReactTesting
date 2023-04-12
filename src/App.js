import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlockPopup from "./components/BlockPopup";
import PopUp from "./components/PopUp";
import Component1 from "./components/Component1";
import Hover from "./components/Hover";
import FieldInputs from "./components/FieldInputs";
import Hamburger from "./components/Hamburger";
import AnimationPulse from "./components/AnimationPulse";
import Scaling1 from "./components/Scaling1";
import Hamburger2 from "./components/Hamburger2";
import Scaling2 from "./components/Scaling2";
import DropDownMenus from "./components/DropDownMenus";

function App() {
  return (
    //   <PopUp
    //   templateInteractiveInfographiccoverProps={
    //     popUpData.templateInteractiveInfographiccoverProps
    //   }
    // />
    <BrowserRouter>
      <Routes>
        <Route
          path="/block-popup"
          element={
            <BlockPopup
              popupBox="Popup box"
              paragraphDefaultIp="Paragraph default ipsum dolor sit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis."
              buttonActiveProps={blockPopupData.buttonActiveProps}
              buttonActive2Props={blockPopupData.buttonActive2Props}
            />
          }
        />

        <Route
          path="/pop-up"
          element={
            <PopUp
              templateInteractiveInfographiccoverProps={
                popUpData.templateInteractiveInfographiccoverProps
              }
            />
          }
        />

        <Route
          path="/component-1"
          element={<Component1 surname1="Page 1" surname2="Page 2" />}
        />

        <Route
          path="/hover"
          element={
            <Hover
              templateInteractiveInfographiccover2Props={
                hoverData.templateInteractiveInfographiccover2Props
              }
            />
          }
        />

        <Route
          path="/field-inputs"
          element={<FieldInputs {...fieldInputsData} />}
        />

        <Route path="/hamburger-2" element={<Hamburger surname="Page 1" />} />

        <Route
          path="/animation-pulse"
          element={
            <AnimationPulse
              templateInteractiveInfographiccover3Props={
                animationPulseData.templateInteractiveInfographiccover3Props
              }
            />
          }
        />

        <Route
          path="/scaling-1"
          element={
            <Scaling1
              templateInteractiveInfographicProps={
                scaling1Data.templateInteractiveInfographicProps
              }
            />
          }
        />

        <Route path="/hamburger" element={<Hamburger2 surname="Page 2" />} />
        <Route
          path="/scaling-2"
          element={
            <Scaling2
              templateInteractiveInfographic2Props={
                scaling2Data.templateInteractiveInfographic2Props
              }
            />
          }
        />

        <Route
          path="/"
          element={
            <PopUp
              templateInteractiveInfographiccoverProps={
                popUpData.templateInteractiveInfographiccoverProps
              }
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
const buttonActive1Data = {
  children: "Default",
};

const buttonActive21Data = {
  children: "Default",
};

const blockPopupData = {
  buttonActiveProps: buttonActive1Data,
  buttonActive2Props: buttonActive21Data,
};

const buttonActive3Data = {
  children: "Start",
  className: "button-active-1",
};

const templateInteractiveInfographiccoverData = {
  title: "H1 title here",
  subheadCopyHere: "Subhead copy here",
  buttonActiveProps: buttonActive3Data,
};

const popUpData = {
  templateInteractiveInfographiccoverProps:
    templateInteractiveInfographiccoverData,
};

const buttonActive4Data = {
  children: "Start",
  className: "button-active-2",
};

const buttonActive22Data = {
  children: "Start",
  className: "button-active-8",
};

const cOPY1Data = {
  buttonActiveProps: buttonActive4Data,
  buttonActive2Props: buttonActive22Data,
};

const gRAPHIC2Data = {
  className: "graphic-1",
};

const templateInteractiveInfographiccover2Data = {
  cOPYProps: cOPY1Data,
  gRAPHICProps: gRAPHIC2Data,
};

const hoverData = {
  templateInteractiveInfographiccover2Props:
    templateInteractiveInfographiccover2Data,
};

const buttonActive5Data = {
  children: "Send",
  className: "button-active-3",
};

const fieldInputsData = {
  title1: "Please fill in the form",
  name: "Name*",
  inputType1: "text",
  inputPlaceholder1: " John/Jane",
  title2: "Title*",
  inputType2: "text",
  inputPlaceholder2: " Mr/Mrs",
  email: "Email*",
  inputType3: "email",
  inputPlaceholder3: "john@gmail.com",
  phone: "Phone*",
  inputType4: "number",
  inputPlaceholder4: "098 777 383",
  message: "Message",
  inputType5: "text",
  inputPlaceholder5: "I’m trying out Anima",
  buttonActiveProps: buttonActive5Data,
};

const buttonActive6Data = {
  children: "Start",
  className: "button-active-4",
};

const buttonActive23Data = {
  children: "Start",
  className: "button-active-9",
};

const cOPY2Data = {
  buttonActiveProps: buttonActive6Data,
  buttonActive2Props: buttonActive23Data,
};

const templateInteractiveInfographiccover3Data = {
  cOPYProps: cOPY2Data,
};

const animationPulseData = {
  templateInteractiveInfographiccover3Props:
    templateInteractiveInfographiccover3Data,
};

const templateHeaderBar6Data = {
  className: "template-header-bar-5",
};

const navBreadcrumbs1Data = {
  example2: "Child",
  example3: "Current Page",
};

const buttonActive24Data = {
  children: "Back",
  className: "button-active-10",
};

const buttonActive7Data = {
  children: "Next",
  className: "button-active-5",
};

const templateInteractiveInfographicData = {
  option1: "Option 1",
  sapienNonCursusMi: (
    <React.Fragment>
      Sapien non cursus mi et neque tortor orci amet. Est mauris aenean neque
      lacus volutpat placerat risus. Sed non proin tincidunt massa vel duis
      neque. Purus blandit pellentesque arcu ipsum. Metus volutpat turpis
      pellentesque ipsum leo neque pellentesque. In ultricies purus fames sem
      nunc nascetur. Auctor sagittis tincidunt interdum blandit ultricies
      aliquet ut. Nunc sed pulvinar fames libero. Cursus quis nibh fringilla
      pellentesque convallis sed morbi phasellus. Tellus rhoncus montes sagittis
      id. Aliquam congue diam posuere egestas sagittis vitae nulla sit libero.
      <br />
      <br />
      Leo velit nunc quam ac malesuada. Magna nulla amet facilisis ullamcorper
      ac vivamus. Ultricies massa quis tortor orci aliquam nisi mattis. Lobortis
      non aenean enim turpis quis tortor.
    </React.Fragment>
  ),
  image: "/img/image.png",
  templateHeaderBarProps: templateHeaderBar6Data,
  navBreadcrumbsProps: navBreadcrumbs1Data,
  buttonActive2Props: buttonActive24Data,
  buttonActiveProps: buttonActive7Data,
};

const scaling1Data = {
  templateInteractiveInfographicProps: templateInteractiveInfographicData,
};

const templateHeaderBar22Data = {
  infographicTitleGoesHere: "Infographic title goes here",
};

const navBreadcrumbs2Data = {
  example3: "/img/-.svg",
  example2: "Current Page",
  className: "nav_breadcrumbs-1",
};

const buttonActive25Data = {
  children: "Back",
  className: "button-active-11",
};

const buttonActive8Data = {
  children: "Next",
  className: "button-active-6",
};

const templateInteractiveInfographic2Data = {
  option1: "Option 1",
  sapienNonCursusMi: (
    <React.Fragment>
      Sapien non cursus mi et neque tortor orci amet. Est mauris aenean neque
      lacus volutpat placerat risus. Sed non proin tincidunt massa vel duis
      neque. Purus blandit pellentesque arcu ipsum. Metus volutpat turpis
      pellentesque ipsum leo neque pellentesque. In ultricies purus fames sem
      nunc nascetur. Auctor sagittis tincidunt interdum blandit ultricies
      aliquet ut. Nunc sed pulvinar fames libero. Cursus quis nibh fringilla
      pellentesque convallis sed morbi phasellus. Tellus rhoncus montes sagittis
      id. Aliquam congue diam posuere egestas sagittis vitae nulla sit libero.
      <br />
      <br />
      Leo velit nunc quam ac malesuada. Pellentesque pulvinar id sapien
      senectus. Sed fermentum morbi viverra fringilla mauris mattis id lectus
      enim. Aliquam enim ut orci euismod venenatis. Magna nulla amet facilisis
      ullamcorper ac vivamus. Ultricies massa quis tortor orci aliquam nisi
      mattis. Lobortis non aenean enim turpis quis tortor.
    </React.Fragment>
  ),
  image: "/img/image-1@2x.png",
  templateHeaderBar2Props: templateHeaderBar22Data,
  navBreadcrumbsProps: navBreadcrumbs2Data,
  buttonActive2Props: buttonActive25Data,
  buttonActiveProps: buttonActive8Data,
};

const scaling2Data = {
  templateInteractiveInfographic2Props: templateInteractiveInfographic2Data,
};

const dropDownMenusData = {
  lecture: "Lecture",
  lectureInteractive: "Lecture + Interactive",
  videoSeries: "Video Series",
  oysters: "Oysters",
  interactiveType: "Interactive Type...",
  howMsw_23_1_3_1_Rem:
    "HOW-MSW_23_1_3_1_REMOTE_LECTURE_SLIDES_CONDITIONS_IN_URBANAREAS_FOR_BLACK_AMERICANS",
  howMsw_23_1_3_3_Rem:
    "HOW-MSW_23_1_3_3_REMOTE_LECTURE_SLIDES_CONDITIONS_IN_RURALAREAS_FOR_BLACK_AMERICANS",
  howMsw_23_1_3_4_Rem:
    "HOW-MSW_23_1_3_4_REMOTE_LECTURE_SLIDES_SOCIAL_WORK_RESPONSE",
  howMsw_23_1_3_5_Rem:
    "HOW-MSW_23_1_3_5_REMOTE_LECTURE_SLIDES_HOWARD_UNIVERSITY_SCHOOL_OF_SOCIAL_WORK",
  howMsw_23_1_4_2_Rem:
    "HOW-MSW_23_1_4_2_REMOTE_LECTURE_SLIDES_SOCIALLY_JUST_POLICY_PRACTICE_DEFINED",
  howmsw_23_1_5_2_Remo:
    "HOWMSW_23_1_5_2_REMOTE_LECTURE_SLIDES_WHAT_IS_THE_BLACK_PERSPECTIVE_AND_HOW_DOES_IT_FIT_WITHIN_SOCIALLY_JUST_POLICY_PRACTICE",
  howmsw_23_1_6_1_Remo:
    "HOWMSW_23_1_6_1_REMOTE_LECTURE_SLIDES_SEVEN_AREAS_OF_APPLYING_SOCIALLY_JUST_POLICY_PRACTICE",
  howMsw_23_2_3_2_Rem:
    "HOW-MSW_23_2_3_2_REMOTE_LECTURE_SLIDES_ARE_SYSTEMS_AND_ORGANIZATIONS_SOCIALLY_JUST",
  howMsw_23_2_5_1_Rem:
    "HOW-MSW_23_2_5_1_REMOTE_LECTURE_SLIDES_MEET_A_PRACTITIONER",
  howMsw_23_2_6_2_Rem:
    "HOW-MSW_23_2_6_2_REMOTE_LECTURE_SLIDES_DISTRIBUTIVE_JUSTICE",
  howMsw_23_6_4_1_Rem: "HOW-MSW_23_6_4_1_REMOTE_LECTURE_SLIDES_BENEFITS",
  howMsw_23_7_2_1_Rem:
    "HOW-MSW_23_7_2_1_REMOTE_LECTURE_SLIDES_SOCIALLY_JUST_POLICY_PRACTICE",
  howMsw_23_7_2_2_Rem:
    "HOW-MSW_23_7_2_2_REMOTE_LECTURE_SLIDES_REVISITING_THE_BUDGET",
  howMsw_23_7_2_3_Rem:
    "HOW-MSW_23_7_2_3_REMOTE_LECTURE_SLIDES_HEALTH_AND_SOCIALLY_JUST_POLICY",
  selectVideo: "Select Video...",
};
