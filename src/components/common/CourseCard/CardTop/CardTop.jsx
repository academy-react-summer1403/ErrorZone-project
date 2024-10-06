import React from "react";
import ImageNotFound from "../ImageNotFound";
import TagOfCard from "./TagOfCard";

const CardTop = ({ item }) => {
  const { levelName, typeName, tumbImageAddress, title } = item;

  return (
    <div className="cardTop  relative overflow-hidden">
      <div className="absolute top-1.5 right-3 z-10 flex justify-center items-center gap-1">
        <TagOfCard title={levelName} />
        <TagOfCard title={typeName} />
      </div>
      {tumbImageAddress ? (
        <img
          src={tumbImageAddress}
          alt={title}
          className="rounded-[32px] block w-full h-[293px] scale-105"
        />
      ) : (
        <ImageNotFound />
      )}
    </div>
  );
};

export default CardTop;