import React from "react";
import { Link } from "react-router-dom";

const LogoNoTypo = () => {
  return (
    <div className="flex tablet:hidden flex-nowrap items-center justify-center">
      <Link to="/">
        <img src="../../../../public/Logo.svg" alt="logo" />
      </Link>
    </div>
  );
};

export default LogoNoTypo;
