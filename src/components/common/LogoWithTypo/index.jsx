import React from "react";
import { Link } from "react-router-dom";

const LogoWithTypo = () => {
  return (
    <div className="hidden tablet:flex flex-nowrap items-center justify-center">
      <Link to="/" className="hidden tablet:flex flex-nowrap items-center justify-center">
        <img src="../../../../public/Logo.svg" alt="logo" />
        <img src="../../../../public/LogoTypegraphy.svg" alt="logo" />
      </Link>
    </div>
  );
};

export default LogoWithTypo;
