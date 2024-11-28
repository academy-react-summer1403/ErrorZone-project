import React from "react";
import NotificationBtn from "../../Header/ThemeAndNotifBtns/NotificationBtn";
import ThemeToggle from "../../Header/ThemeAndNotifBtns/ThemeToggle";
import { usequery} from "../../../core/services/api/reactQuery/useQuery";
import { useSelector } from "react-redux";

const StudentPanelHeader = () => {
  const data = usequery('userInfo');
	const { profile } = useSelector(
		(s) => s.profile
	);
  return (
    <div className="h-12 flex justify-between items-center ">
      <div className=" flex gap-2 items-center">
        <img src={profile?.currentPictureAddress} alt="" className="size-12 rounded-full" />
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
        {/* <ThemeToggle /> */}
      </div>
    </div>
  );
};

export default StudentPanelHeader;
