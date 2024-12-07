import React from "react";
import StudentPanelHeader from "./StudentPanelHeader/StudentPanelHeader";
import StudentPaneiSide from "./StudentPaneiSide/StudentPaneiSide";
import StudentPanelPage from "./StudentPanelPage/StudentPanelPage";
import { getQuery } from "../../core/services/api/reactQuery/getQuery";
import HamDashboardMenu from "./StudentPanelPage/Dashboard/HamDashboardMenu";
import { CookiesProvider, useCookies } from "react-cookie";
import Joyride from "react-joyride";
import VoiceAssistance from "../common/VoiceAssistance/VoiceAssistance";
import { getTokenFromLocalStorage } from "../../core/utils/MultiAccount/getToken";

const studentPanelHolder = ({ Outlet }) => {
  const [cookies, setCookie] = useCookies(["user"]);
  setCookie("user", JSON.parse(localStorage.getItem("users")), { path: "/" });
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

  return (
    <>
      <CookiesProvider>
        <>
          {cookies.user ? (
            <Joyride
              steps={state.steps}
              continuous
              styles={{
                options: {
                  primaryColor: "rgb(55, 114, 255 )",
                },
              }}
              user={cookies.user}
            />
          ) : null}
        </>
      </CookiesProvider>

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
