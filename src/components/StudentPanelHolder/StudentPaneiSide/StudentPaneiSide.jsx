import React from "react";
import LogoWithTypo from "../../common/LogoWithTypo/";
import {
  Activity01Icon,
  Book02Icon,
  Books02Icon,
  CourseIcon,
  LibraryIcon,
  Logout03Icon,
  MoneySend02Icon,
  UserSquareIcon,
} from "hugeicons-react";
import { Link } from "react-router-dom";

function StudentPaneiSide() {
  const sideBarItem = [
    { title: "داشبرد", icon: <Activity01Icon />, path: "/StudentPanel/dashboard" },
    { title: "دوره من", icon: <CourseIcon />, path: "/StudentPanel/myCourse" },
    { title: "رزرو من", icon: <Book02Icon />, path: "/StudentPanel/reservesCourse" },
    { title: "دوره های موردعلاقه", icon: <Books02Icon />, path: "/StudentPanel/Coursesfav" },
    { title: "بلاگ های موردعلاقه", icon: <LibraryIcon />, path: "/StudentPanel/Blogfav" },
    { title: "پروفایل", icon: <UserSquareIcon />, path: "/StudentPanel/profile" },
    { title: "پرداخت ها", icon: <MoneySend02Icon />, path: "/StudentPanel/payment" },
  ];

  return (
    <div className="side w-[20%] text-white flex flex-col justify-between">
      <div className="w-fit space-y-8">
        <LogoWithTypo />
        {sideBarItem?.map((item, index) => (
          <div key={index} className="font-DanaFaNum-500 text-lg">
            <Link
              to={item.path}
              className="flex items-center flex-row gap-2 flex-nowrap"
            >
              {item.icon}
              {item.title}
            </Link>
          </div>
        ))}
      </div>
      <div className=" border border-red rounded-full py-4 pr-4 pl-18 flex justify-start items-center gap-2 text-red ">
            <Logout03Icon />
    <span>خروج از حساب کاربری</span>

      </div>
    </div>
  );
}

export default StudentPaneiSide;
