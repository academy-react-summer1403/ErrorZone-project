import React from "react";
import CardTop from "./CardTop/CardTop";
import CardBottom from "./CardBottom/CardBottom";

const CourseCard = ({ item }) => {
  const { tumbImageAddress, title, levelName, typeName, teacherName, cost } =
    item;

  return (
    <div className="flex flex-col gap-3 w-80 overflow-hidden">
      <CardTop item={item} />
      <CardBottom item={item} />

    </div>
  );
};

export default CourseCard;
