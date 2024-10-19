import React from "react";
import CourseFilter from "./courseFilter/CourseFilter";
import CourseNames from "./CourseNames/CourseNames";
import PaginationCards from "./PaginationCards/PaginationCards";

const CourseMain = () => {
  return (
    <div className="flex justify-between mt-[72px]">
      <CourseFilter />
      <div className=" flex flex-col justify-between w-[76%] mx-auto text-center">
        <CourseNames />
        <PaginationCards />
      </div>
    </div>
  );
};

export default CourseMain;
