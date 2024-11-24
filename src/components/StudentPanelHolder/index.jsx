import React from "react";
import StudentPanelHeader from "./StudentPanelHeader/StudentPanelHeader";
import StudentPaneiSide from "./StudentPaneiSide/StudentPaneiSide";
import StudentPanelPage from "./StudentPanelPage/StudentPanelPage";
import { getQuery } from "../../core/services/api/reactQuery/getQuery";

const studentPanelHolder = ({ Outlet }) => {

  return (

    <div className="bg-blackPanel h-screen overflow-y-auto flex justify-between flex-nowrap p-6">
      <StudentPaneiSide />


      <div className=" w-[78%] space-y-3">
        <StudentPanelHeader />
        <StudentPanelPage Outlet={Outlet} />
      </div>
    </div>
  );
};

export default studentPanelHolder;
