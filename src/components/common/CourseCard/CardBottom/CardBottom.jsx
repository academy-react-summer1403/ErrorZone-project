import React from "react";

const CardBottom = ({ item }) => {
  const { title, teacherName, cost } = item;

  return (
    <div className="cardBottom text-black dark:text-white px-1">

      <h2 className="block font-DanaFaNum-700 text-2xl">{title}</h2>

      <div className="flex justify-between items-center">
        <h4 className="text-gray-800 dark:text-gray-400">{teacherName}</h4>

        <div className="flex gap-1 items-center">
          <span className="font-DanaFaNum-700">{cost}</span>
          <span className="text-sm">تومان</span>
        </div>
      </div>

    </div>
  );
};

export default CardBottom;
