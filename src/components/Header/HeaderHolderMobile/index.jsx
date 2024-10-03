import { ArrowDown01Icon } from "hugeicons-react";
import { ReactIcon } from "hugeicons-react";
import PepeIcon from "../../../assets/Peppe–07.svg";
import React, { useState } from "react";
import LoginButton from "../LoginButton";

const HeaderHolderMobile = () => {
  return (
    <div className="dropDownHeader rounded-full h-14 flex gap-2 items-center justify-end border border-gray-400 p-2 relative">
      <LoginButton />
    </div>
  );
};

export default HeaderHolderMobile;
