import React from "react";
import ImageNotFound from "./ImageNotFound";


  const randomColor = ["#ce2d4f", "#653239", "#00916e", "#CB04A5", "#942911"];

const CourseCard = ({item}) => {

  const { tumbImageAddress, title, levelName, typeName } = item;

  return (
    <div className="flex flex-col gap-3 w-80 border border-gray-400 h-[300px] rounded-[32px] overflow-hidden">

      <div className="cardTop  relative">
        <div className="absolute top-1.5 right-3 z-10 flex justify-center items-center gap-1">
          <span className="py-0.5 px-2 rounded-[32px] text-white" style={{background:randomColor[Math.floor(Math.random() * 5)]}}>
            {levelName}
          </span>
          <span className="py-0.5 px-2 rounded-[32px] text-white" style={{background:randomColor[Math.floor(Math.random() * 5)]}} >{typeName}</span>
        </div>
        {tumbImageAddress ? <img src={tumbImageAddress} alt={title} className="rounded-[32px] block w-full h-[293px] scale-105" /> : <ImageNotFound/>}
      </div>

      <div className="cardBottom ">
        {title}
      </div>

    </div>
  );
};

export default CourseCard;
