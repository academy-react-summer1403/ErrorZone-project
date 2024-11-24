import React from "react";
import CourseCommentWrapper from "./CourseCommentWrapper/CourseCommentWrapper";
import ViewMoreBtn from "../../common/ViewMoreBtn/ViewMoreBtn";

const CourseCommentsPart = () => {
  return (
    <div className=" mt-12 space-y-6">
      <div className="text-xl font-DanaFaNum-700 text-gray-800 dark:text-gray-500">
        نظرات دانشجو ها و اساتید
      </div>
      <CourseCommentWrapper />
      <div className="w-fit mx-auto">
        <ViewMoreBtn />
      </div>
    </div>
  );
};

export default CourseCommentsPart;
