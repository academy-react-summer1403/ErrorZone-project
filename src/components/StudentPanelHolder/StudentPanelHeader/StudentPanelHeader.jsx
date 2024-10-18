import React from "react";
import NotificationBtn from "../../Header/ThemeAndNotifBtns/NotificationBtn";
import ThemeToggle from "../../Header/ThemeAndNotifBtns/ThemeToggle";
import { usequeryy } from "../../../core/services/api/reactQuery/useQuery";

const StudentPanelHeader = () => {
  const data = usequeryy('userInfo');
  console.log(data);
  return (
    <div className="h-12 flex justify-between items-center ">
      <div className=" flex gap-2 items-center">
        <img src={data?.currentPictureAddress} alt="" className="size-12 rounded-full" />
        <div className="text-white">
          <div>{data?.fName}{" "}{data?.lName}</div>
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
