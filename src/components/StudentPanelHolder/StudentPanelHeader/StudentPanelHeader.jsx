import React from "react";
import NotificationBtn from "../../Header/ThemeAndNotifBtns/NotificationBtn";
import ThemeToggle from "../../Header/ThemeAndNotifBtns/ThemeToggle";
import { usequery} from "../../../core/services/api/reactQuery/useQuery";
import { Link } from "react-router-dom";

const StudentPanelHeader = () => {
  const data = usequery('userInfo');
  console.log(data);
  return (
    <div className="h-12 flex justify-between items-center ">
      <div className=" flex gap-2 items-center">
        <img src={data?.currentPictureAddress} alt="" className="size-12 rounded-full" />
        <div className="text-white">
          <div>{data?.fName}{" "}{data?.lName}</div>
          <div className="text-sm cursor-pointer"> دانشجو</div>
        </div>
      </div>
      <div className="flex items-center mobile:gap-16 gap-4 text-white ">
        <Link to="/" className="block w-fit cursor-pointer"> 

        <div  className=" ">  صفحه اصلی </div>
        
        </Link>

        <div className=" cursor-pointer"> گزارش </div>

        <div className="cursor-pointer"> ارتباط با ما </div>
      </div>
      <div className="flex justify-between items-center gap-2">
        <NotificationBtn />
        {/* <ThemeToggle /> */}
      </div>
    </div>
  );
};

export default StudentPanelHeader;
