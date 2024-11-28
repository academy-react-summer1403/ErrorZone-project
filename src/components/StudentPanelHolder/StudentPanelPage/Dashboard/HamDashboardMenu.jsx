import React, { useState } from "react";
import { getQuery } from "../../../../core/services/api/reactQuery/getQuery";
import {
  Activity01Icon,
  Book02Icon,
  Books02Icon,
  Cancel01Icon,
  CourseIcon,
  LibraryIcon,
  Logout03Icon,
  MoneySend02Icon,
  UserSquareIcon,
} from "hugeicons-react";
import LogoWithTypo from "../../../common/LogoWithTypo";
import { Link } from "react-router-dom";
import LogoNoTypo from "../../../common/LogoNoTypo";
import HamMenuBtn from "../../../Header/HamburgerMenu/HamMenuBtn";
import { motion } from "motion/react"

const HamDashboardMenu = () => {
  getQuery("userInfo", "/SharePanel/GetProfileInfo");

  const sideBarItem = [
    {
      title: "داشبرد",
      icon: <Activity01Icon />,
      path: "/StudentPanel",
    },
    { title: "دوره من", icon: <CourseIcon />, path: "/StudentPanel/myCourse" },
    {
      title: "رزرو من",
      icon: <Book02Icon />,
      path: "/StudentPanel/reservesCourse",
    },
    {
      title: "دوره های موردعلاقه",
      icon: <Books02Icon />,
      path: "/StudentPanel/Coursesfav",
    },
    {
      title: "بلاگ های موردعلاقه",
      icon: <LibraryIcon />,
      path: "/StudentPanel/Blogfav",
    },
    {
      title: "پروفایل",
      icon: <UserSquareIcon />,
      path: "/StudentPanel/profile",
    },
    {
      title: "پرداخت ها",
      icon: <MoneySend02Icon />,
      path: "/StudentPanel/payment",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="">
        <HamMenuBtn
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
          onClick={() => setIsMenuOpen(true)}
          onPress={() => setIsMenuOpen(true)}
        />
      </div>

      {isMenuOpen ? (
        <motion.div initial={{x: 250}} animate={{ x: 0, transition: {duration: 0.2} }} className="side z-50 p-5 rounded-3xl tablet:hidden absolute top-0 bottom-0 right-0 w-[35%] text-white flex flex-col justify-between h-full bg-black">
          <div className="w-fit space-y-8">
            <div className="flex justify-between items-center">
              <LogoNoTypo />
              <Cancel01Icon size={30} onClick={() => setIsMenuOpen(false)} />
            </div>
            {sideBarItem?.map((item, index) => (
              <div key={index} className="font-DanaFaNum-500 text-lg">
                <Link
                  onClick={() => setIsMenuOpen(false)}
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
        </motion.div>
      ) : (
        false
      )}
    </>
  );
  //   return (
  //     <div className="hamburger-menu-container p-4 block tablet:hidden fixed left-0 right-0 top-0 h-[100vh] overflow-y-auto bg-black text-white dark:bg-black dark:text-white z-50">

  //     </div>
  //   )
};

export default HamDashboardMenu;
