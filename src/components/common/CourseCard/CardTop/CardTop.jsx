import React from "react";
// import ImageNotFound from "../ImageNotFound";
import TagOfCard from "./TagOfCard";

const CardTop = ({ item }) => {
  const { levelName, statusName, tumbImageAddress, title } = item;

  return (
    <div className="cardTop  relative overflow-hidden">
      <div className="absolute top-1.5 right-3 z-10 flex justify-center items-center gap-1">
        <TagOfCard title={levelName} />
        <TagOfCard title={statusName} />
      </div>
      {tumbImageAddress ? (
        <img
          src={tumbImageAddress}
          alt={title}
          className="rounded-[32px] block w-full h-[293px]"
        />
      ) : (
        // <ImageNotFound />
        <img
          src="https://classapi.sepehracademy.ir/\Pictures\Course\blank-thumbnail_009f5021-ce99-4a2d-9077-9d4417b6111f.jpg"
          alt={title}
          className="rounded-[32px] block w-full h-[293px]"
        />        
      )}
    </div>
  );
};

export default CardTop;
