import React from "react";

const OurGoalsCard = ({title, description, image}) => {

  return (
    <div className="rightToLeft card  border-2 border-gray-400 hover:border-blue hover:cursor-pointer text-right rounded-3xl p-5 w-full desktop:w-1/5 mobile:w-1/3 h-[442px] bg-white dark:bg-black" >
      <div className="card-title  text-xl font-DanaFaNum-700 mb-5">{title}</div>
      <div className="card-description  mb-6 text-[#7E7E7E] ">{description}</div>
      <img src={image} alt={title} />
    </div>
  );
};

export default OurGoalsCard;
