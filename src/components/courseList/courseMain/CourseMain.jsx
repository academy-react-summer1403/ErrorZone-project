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
    <div className="grid grid-cols-12 gap-8 mt-[72px]">
      <CourseFilter />
      <div className="col-span-12 desktop:col-span-9 text-center">
        <CourseNames pageNum={currentPage} />
        <PaginationCards pageNum={currentPage} setPage={setcurrentPage} />
      </div>
    </div>
  );
};

export default CourseMain;
