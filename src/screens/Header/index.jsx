import React from "react";
import HeaderHolder from "../../components/Header/HeaderHolder";
import Logo from "../../components/common/Logo";
import ThemeAndNotifBtns from "../../components/Header/ThemeAndNotifBtns";

const Header = () => {
  return (
    <div className="w-full mx-auto flex justify-between">
      <Logo />
      <HeaderHolder />
      <ThemeAndNotifBtns />
    </div>
  );
};

export default Header;
