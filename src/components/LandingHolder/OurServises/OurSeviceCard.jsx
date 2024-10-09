import React from "react";

const OurSeviceCard = ({ title, description, image, iconColor }) => {
  return (
    <div
      className="card  border-2 border-gray-400 hover:border-blue hover:cursor-pointer text-right rounded-3xl p-5 w-full tablet:w-[45%] h-36 flex items-center bg-gray-100 dark:bg-black"
    >
      <div className="flex justify-start gap-4 items-center">
        <div
          className="w-[88px] h-[88px] rounded-full border flex items-center justify-center bg-white dark:bg-blackPanel"
          style={{ color: iconColor, borderColor: iconColor }}
        >
          {image}
        </div>
        <div>
          <span className="text-xl font-DanaFaNum-700 ">{title}</span>
          <p className="m-0 p-0 font-DanaFaNum-400 dark:text-gray-400 text-gray-800">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default OurSeviceCard;
