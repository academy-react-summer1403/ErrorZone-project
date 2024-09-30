import React, { useState } from "react";
import Logo from "../../common/Logo";
import { Link, NavLink } from "react-router-dom";
// import { Button } from "@nextui-org/react";
import ButtonSpecial from "../../common/ButtonSpecial";

const HeaderHolder = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const menuItems = [
  //   "Profile",
  //   "Dashboard",
  //   "Activity",
  //   "Analytics",
  //   "System",
  //   "Deployments",
  //   "My Settings",
  //   "Team Settings",
  //   "Help & Feedback",
  //   "Log Out",
  // ];

  return (
    <div className="flex justify-between items-center flex-nowrap h-12 p-1 bg-black dark:bg-white  text-white dark:text-black rounded-full !important">
      <ul className="flex justify-start flex-nowrap gap-6 mr-5 ml-8">
        <li>
          <a>خانه</a>
        </li>
        <li>
          <a>دوره ها</a>
        </li>
        <li>
          <a>بلاگ ها</a>
        </li>
        <li>
          <a>درباره ما</a>
        </li>
      </ul>
      <ButtonSpecial className={"bg-blue text-white rounded-full min-w-0"} innerHtml= {<Link to="/login" > ثبت نام یا ورود</Link>} >
      </ButtonSpecial>

    </div>
  );
};

export default HeaderHolder;
