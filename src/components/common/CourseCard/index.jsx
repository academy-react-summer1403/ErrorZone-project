import React from "react";
import CardTop from "./CardTop/CardTop";
import CardBottom from "./CardBottom/CardBottom";
import { Link } from "react-router-dom";

const CourseCard = ({ item, onARow }) => {
  return (
    <>
      {onARow ? (
        <div className="flex flex-col gap-3 tv:col-span-3 tablet:col-span-6 col-span-12 overflow-hidden">
          <Link to={`/courses/${item.courseId}`}>
            <CardTop item={item} />
            <CardBottom item={item} />
          </Link>
        </div>
      ) : (
        <div className="flex flex-col gap-3 tv:col-span-4 mobile:col-span-6 col-span-12 overflow-hidden">
          <Link to={`/courses/${item.courseId}`}>
            <CardTop item={item} />
            <CardBottom item={item} />
          </Link>
        </div>
      )}
    </>
  );
};

export default CourseCard;
