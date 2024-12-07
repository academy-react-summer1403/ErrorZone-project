import React from "react";
import StudentPanelHeader from "./StudentPanelHeader/StudentPanelHeader";
import StudentPaneiSide from "./StudentPaneiSide/StudentPaneiSide";
import StudentPanelPage from "./StudentPanelPage/StudentPanelPage";
import { getQuery } from "../../core/services/api/reactQuery/getQuery";
import HamDashboardMenu from "./StudentPanelPage/Dashboard/HamDashboardMenu";
import Joyride from "react-joyride";
import VoiceAssistance from "../common/VoiceAssistance/VoiceAssistance";
import { getTokenFromLocalStorage } from "../../core/utils/MultiAccount/getToken";
import Cookies from "universal-cookie";

const studentPanelHolder = ({ Outlet }) => {
  const state = {
    steps: [
      {
        target: ".my-first-step",
        content: " اینجا رو کلیک کنی میره صفحه اصلی ",
      },
      {
        target: ".my-second-step",
        content: "اینم دروه هات حاجی",
      },
      {
        target: ".my-last-step",
        content: " حال نداشتی، بهش بگی هم میبرتت",
      },
    ],
  };
  const cookies = new Cookies(null, { path: "/" });

  const handleCallback = (value) => {
    console.log(cookies.get("toured"));
    if (value.type === "tour:end") cookies.set("toured", "true");
  };

  return (
    <>
      <>
        {!cookies.get("toured") && (
        <Joyride
          steps={state.steps}
          continuous
          callback={handleCallback}
          styles={{
            options: {
              primaryColor: "rgb(55, 114, 255 )",
            },
          }}
        />
        ) }
        
      </>

      {/* <Joyride
        steps={state.steps}
        continuous
        styles={{
          options: {
            primaryColor: "rgb(55, 114, 255 )",
          },
        }}
      /> */}
      <div className="bg-blackPanel h-screen overflow-y-auto flex justify-between flex-nowrap p-6">
        <StudentPaneiSide />

        <div className=" tablet:w-[78%]  w-full space-y-3">
          <StudentPanelHeader />
          <StudentPanelPage Outlet={Outlet} />
        </div>
      </div>
      <VoiceAssistance />
    </>
  );
};

export default studentPanelHolder;
