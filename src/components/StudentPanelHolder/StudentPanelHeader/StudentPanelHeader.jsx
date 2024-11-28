import React from "react";
import NotificationBtn from "../../Header/ThemeAndNotifBtns/NotificationBtn";
import ThemeToggle from "../../Header/ThemeAndNotifBtns/ThemeToggle";

import { usequery } from "../../../core/services/api/reactQuery/useQuery";
import HamDashboardMenu from "../StudentPanelPage/Dashboard/HamDashboardMenu";

import { useSelector } from "react-redux";


const StudentPanelHeader = () => {

  const data = usequery('userInfo');

  const data = usequery("userInfo");
  console.log(data);

	const { profile } = useSelector(
		(s) => s.profile
	);
  return (
    <div className="h-12 flex justify-between items-center ">
      <HamDashboardMenu />

      <div className=" flex gap-2 items-center">

        <img
          src={data?.currentPictureAddress}
          alt=""
          className="mobile:size-12 size-9 rounded-full"
        />
        <div className="text-white mobile:text-base text-sm">
          <div>
            {data?.fName} {data?.lName}
          </div>
          <div className="mobile:text-sm text-[10px]"> دانشجو</div>

        </div>
      </div>
      <div className="flex mobile:text-base text-xs items-center mobile:gap-16 gap-4 text-white ">
        <div className=""> صفحه اصلی </div>

        <div className=""> گزارش </div>

        <div className=""> ارتباط با ما </div>
      </div>
      <div className=" justify-between items-center gap-2 hidden tablet:flex">
        <NotificationBtn />
        {/* <ThemeToggle /> */}
      </div>
    </div>
  );
};

export default StudentPanelHeader;
