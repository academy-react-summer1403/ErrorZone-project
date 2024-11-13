import React from "react";
import CourseDescribeRate from "../CourseDescribeRate/CourseDescribeRate";

const CourseDetailDescribe = ({ data }) => {
  return (
    <div>
      <span className="mb-5 font-DanaFaNum-700 text-xl text-gray-800 dark:text-gray-500">
        توضیحات دوره
      </span>

      <div className="w-full text-wrap">{data?.describe}</div>

      <CourseDescribeRate />
    </div>
  );
};

export default CourseDetailDescribe;
