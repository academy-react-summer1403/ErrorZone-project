import React, { Fragment } from "react";
import CourseCommentCard from "../../../common/CourseCommentCard/CourseCommentCard";
import AddCourseCommentCard from "../../../common/CourseCommentCard/AddCourseCommentCard";
import { usequery } from "../../../../core/services/api/reactQuery/useQuery";

const CourseCommentWrapper = () => {
  const res = usequery("courseComment");
  const data = res?.slice(0 , 3);
  return (
    <div className="grid grid-cols-12 gap-5">
      <AddCourseCommentCard />
      {
        data?.map((item, index) => {
          return <CourseCommentCard key={index} data={item}/>
        })
      }
    </div>
  );
};

export default CourseCommentWrapper;
