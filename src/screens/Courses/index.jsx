import React, { useEffect } from "react";
import CourseNote from "../../components/courseList/courseNote/courseNote";
import CourseMain from "../../components/courseList/courseMain/courseMain";
import { getQuery } from "../../core/services/api/reactQuery/getQuery";
import CourseFilter from "../../components/courseList/courseMain/courseFilter/CourseFilter";
import GsapAnim from "../../components/common/animations/GsapAnim";

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  GsapAnim();
  
  return (
    <div className="w-full px-10 max-w-[1520px] mx-auto">
      <CourseNote />
      <CourseMain />
    </div>
  );
};

export default Courses;
