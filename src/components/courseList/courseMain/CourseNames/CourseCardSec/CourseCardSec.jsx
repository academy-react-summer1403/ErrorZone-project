import React from "react";
import CourseCard from "../../../../common/CourseCard";
import { useQuery } from "@tanstack/react-query";

const CourseCardSec = () => {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["corsesByPagination"],
  });

  if (isError) return <div className="">error</div>;
  if (isLoading) return <div className="">loading ...</div>;

  const { courseFilterDtos } = data;

  return (
    <div className=" flex flex-wrap justify-between ">
      {courseFilterDtos?.map((item, index) => {
        return <CourseCard item={item} key={index} />;
      })}
    </div>
  );
};

export default CourseCardSec;
