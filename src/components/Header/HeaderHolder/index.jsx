import React, { useState } from "react";
import LogoWithTypo from "../../common/LogoWithTypo";
import { Link, NavLink } from "react-router-dom";
import { menuItems } from "../menuItems";
import LoginButton from "../LoginButton";
import { usequery } from "../../../core/services/api/reactQuery/useQuery";
import UserDropDown from "../UserDropDown";

const HeaderHolder = () => {
  // menuItems
  const data = usequery("isLogin");
  console.log(data);
  return (
    <div className="hidden tablet:flex justify-between items-center flex-nowrap h-12 p-1 bg-black dark:bg-white  text-white dark:text-black rounded-full">
      <ul className="flex justify-start flex-nowrap gap-6 mr-5 ml-8">
        {menuItems?.map((value, index) => (
          <li key={index} >
            <div>
              <NavLink
                className={({ isActive }) =>
                  `${isActive && " decoration-sky-200  dark:decoration-sky-500 underline underline-offset-8 "}`
                }
                to={value.path}
              >
                {value.title}
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
      {
        data ? (<UserDropDown />) : (<LoginButton />)
      }
      {/* <LoginButton /> */}
    </div>
  );
};

export default HeaderHolder;
