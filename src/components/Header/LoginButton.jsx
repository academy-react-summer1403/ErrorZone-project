import React, { useState } from "react";
import ButtonSpecial from "../common/ButtonSpecial";
import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <button className="h-full bg-blue text-white px-2 py-1 leading-9 font-DanaFaNum-600">
      <Link to="/login" className="block h-full w-full leading-8">
        ثبت نام یا ورود
      </Link>
    </button>
  );

// for logedIn situation will be like this

// functions
// const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

// const dropDownOpenAndClose = (e) => {
//   setDropDownIsOpen(!dropDownIsOpen);
//   if (dropDownIsOpen) {
//     document.addEventListener("click", handleClickOutside(e));
//   } else {
//     document.removeEventListener("click", handleClickOutside(e));
//   }
// };
// const handleClickOutside = (e) => {
//   if (!e.target.closest(".dropDownHeader")) {
//     setDropDownIsOpen(false);
//   }
// };

//   <div
//   className="dropDownHeader rounded-full h-full flex gap-2 items-center justify-end border border-gray-400 p-2 relative"
//   onClick={(e) => {
//     dropDownOpenAndClose(e);
//   }}
// >
//   {!dropDownIsOpen ? (
//     <ArrowDown01Icon size={20} className="transition-all" />
//   ) : (
//     <ArrowDown01Icon size={20} className="rotate-180 transition-all" />
//   )}
//   <img src={PepeIcon} />
//   {dropDownIsOpen ? 
//     <div className="dropDownContent absolute top-16 -left-1/2 border border-gray-400 rounded-3xl w-[200%] p-2">
//       <div>ثبت نام یا ورود</div>
//       <div>وارد شدن به سامانه</div>
//       <ReactIcon size={32} name="user" />
//     </div>
//    : (
//     false
//   )}
// </div>
/////////

};

export default LoginButton;
