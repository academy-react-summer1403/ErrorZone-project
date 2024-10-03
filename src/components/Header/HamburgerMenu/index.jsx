import { Menu02Icon } from "hugeicons-react";

import React, { useState } from "react";
import HamMenuBtn from "./HamMenuBtn";
import HamMenuContainer from "./HamMenuContainer";

const HamburgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {!isMenuOpen ? (
        <HamMenuBtn
          onClick={() => setIsMenuOpen(true)}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      ) : (
        <HamMenuContainer
          onClick={() => setIsMenuOpen(false)}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
      )}
    </>
  );
};

export default HamburgerMenu;
