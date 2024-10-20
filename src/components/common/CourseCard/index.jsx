import React from "react";
import CardTop from "./CardTop/CardTop";
import CardBottom from "./CardBottom/CardBottom";
import { Link } from "react-router-dom";

const CourseCard = ({ item }) => {
  return (
    <div className="flex flex-col gap-3 w-80 overflow-hidden">
      <Link to={`/courses/${item.courseId}`}>
        <CardTop item={item} />
        <CardBottom item={item} />
      </Link>
    </div>
  );
};

export default CourseCard;
