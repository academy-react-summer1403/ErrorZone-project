import React, { useState } from "react";
import LogoWithTypo from "../../common/LogoWithTypo";
import { Link, NavLink } from "react-router-dom";
import { menuItems } from "../menuItems";
import LoginButton from "../LoginButton";

const HeaderHolder = () => {
  // menuItems

  return (
    <div className="hidden tablet:flex justify-between items-center flex-nowrap h-12 p-1 bg-black dark:bg-white  text-white dark:text-black rounded-full">
      <ul className="flex justify-start flex-nowrap gap-6 mr-5 ml-8">
        {menuItems?.map((value, index) => (
          <li key={index} >
            <div>
              <NavLink
                className={({ isActive }) =>
                  `${isActive && " decoration-sky-200 underline underline-offset-8 "}`
                }
                to={value.path}
              >
                {value.title}
              </NavLink>
            </div>
          </li>
        ))}
      </ul>
      <LoginButton />
    </div>
  );
};

export default HeaderHolder;
