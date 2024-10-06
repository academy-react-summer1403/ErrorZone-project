import React from "react";
import StudentPanelHeader from "./StudentPanelHeader/StudentPanelHeader";
import StudentPaneiSide from "./StudentPaneiSide/StudentPaneiSide";
import StudentPanelPage from "./StudentPanelPage/StudentPanelPage";

const studentPanelHolder = ({Outlet}) => {
  return (
    <div className="bg-blackPanel h-screen flex justify-between flex-nowrap px-6 pb-6 pt-3">

<StudentPaneiSide />

      <div className=" w-[78%]">
        <StudentPanelHeader />
        <StudentPanelPage Outlet={Outlet} />
      </div>
    </div>
  );
};

export default studentPanelHolder;
