import React from "react";
import Logo from "../../common/Logo";
import NotificationBtn from "../../Header/ThemeAndNotifBtns/NotificationBtn";
import ThemeToggle from "../../Header/ThemeAndNotifBtns/ThemeToggle";

const StudentPanelHeader = () => {
  return (
    <div className="h-12 flex justify-between items-center ">
      <div className=" ">
        <img src="" alt="" />
        <div className="text-white">
          <div>پارسا آقایی</div>
          <div className="text-sm"> دانشجو</div>
        </div>
      </div>
      <div className="flex  items-center gap-16 text-white ">
        <div className=""> صفحه اصلی </div>

        <div className=""> گزارش </div>

        <div className=""> ارتباط با ما </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <NotificationBtn />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default StudentPanelHeader;
