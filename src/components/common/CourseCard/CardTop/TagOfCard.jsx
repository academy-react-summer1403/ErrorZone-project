import React from "react";

const randomColor = ["#ce2d4f", "#653239", "#00916e", "#CB04A5", "#942911"];

const TagOfCard = ({ title }) => {
  return (
    <span
      className="py-0.5 px-2 rounded-[32px] text-white"
      style={{ background: randomColor[Math.floor(Math.random() * 5)] }}
    >
      {title}
    </span>
  );
};

export default TagOfCard;
