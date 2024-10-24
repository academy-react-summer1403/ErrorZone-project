import React from "react";
import CourseNote from "../../components/courseList/courseNote/courseNote";
import CourseMain from "../../components/courseList/courseMain/courseMain";
import { getQuery } from "../../core/services/api/reactQuery/getQuery";
import CourseFilter from "../../components/courseList/courseMain/courseFilter/CourseFilter";

const Courses = () => {
  // getQuery(
  //   "corsesByPagination",
  //   "/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=12&SortingCol=Active&SortType=DESC"
  // );
  getQuery('CourseCategories', "/Home/GetTechnologies");
  getQuery('courseLevels', "/CourseLevel/GetAllCourseLevel");
  getQuery('teachers', "/Home/GetTeachers");
  // getQuery('', "/CourseLevel/GetAllCourseLevel");
  

  return (
    <div className="w-full px-10 max-w-[1520px] mx-auto">
      <CourseNote />
        <CourseMain />

    </div>
  );
};

export default Courses;
