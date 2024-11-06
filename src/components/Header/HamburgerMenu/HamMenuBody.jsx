import React from "react";
import { menuItems } from "../menuItems";
import { Link } from "react-router-dom";

const HamMenuBody = ({onClick}) => {
  // menuItems

  return (
    <div className="space-y-6 mt-52 mb-32">
      {menuItems?.map((value, index) => (
        <div key={index} className="ham-menu-item w-full border-b border-white text-4xl " onClick={onClick}>
          <Link to={value.path} className="block">
            <span>{value.title}</span>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HamMenuBody;
