import React from "react";
import LogoWithTypo from "../../common/LogoWithTypo";
import { Cancel01Icon } from "hugeicons-react";

const HamMenuHeader = ({onClick, isMenuOpen, setIsMenuOpen}) => {
  return (
    <div className="w-full h-14 flex justify-between flex-nowrap ">
      <div className="flex flex-nowrap items-center justify-center ">
        <img src="../../../../public/Logo.svg" alt="logo" />
        <img src="../../../../public/LogoTypegraphy.svg" alt="logo" />
      </div>
      <div className="size-14 flex justify-center items-center cursor-pointer " onClick={onClick}>
        <Cancel01Icon size={24}/>
      </div>
    </div>
  );
};

export default HamMenuHeader;
