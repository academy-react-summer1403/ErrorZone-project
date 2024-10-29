import React, { useState } from "react";
import CourseFilter from "./courseFilter/CourseFilter";
import CourseNames from "./CourseNames/CourseNames";
import PaginationCards from "./PaginationCards/PaginationCards";
import { getQuery } from "../../../core/services/api/reactQuery/getQuery";

const CourseMain = () => {
  const [currentPage, setcurrentPage] = useState(1);

  getQuery(
    "coursesByPagination",
    `/Home/GetCoursesWithPagination?PageNumber=${currentPage}&RowsOfPage=12&SortingCol=Active&SortType=DESC&TechCount=0`,
    currentPage
  );

  return (
    <div className="flex justify-between mt-[72px]">
      <CourseFilter />
      <div className=" flex flex-col justify-between w-[76%] mx-auto text-center">
        <CourseNames pageNum={currentPage} />
        <PaginationCards pageNum={currentPage} setPage={setcurrentPage} />
      </div>
    </div>
  );
};

export default CourseMain;
