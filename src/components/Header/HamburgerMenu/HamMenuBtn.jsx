import { Menu02Icon } from "hugeicons-react";
import React from "react";
import ButtonSpecial from "../../common/ButtonSpecial";

const HamMenuBtn = ({ onClick, isMenuOpen, setIsMenuOpen, onPress }) => {
  return (
    <ButtonSpecial
      className="hamburgerBtn flex tablet:hidden justify-center items-center bg-black text-white dark:bg-white dark:text-black cursor-pointer p-4"
      onClick={onClick}
      onPress={onPress}
      innerHtml={<Menu02Icon size={24} />}
    ></ButtonSpecial>
  );
};

export default HamMenuBtn;
