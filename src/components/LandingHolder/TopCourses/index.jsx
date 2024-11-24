import React, { useEffect } from "react";
import CourseCard from "../../common/CourseCard";
import { useQuery } from "@tanstack/react-query";
import ViewMoreBtn from "../../common/ViewMoreBtn/ViewMoreBtn";

const TopCourses = () => {
  const { data } = useQuery({
    queryKey: ["topCourses"],
  });
  console.log(data);

  return (
    <div className="space-y-12">
      <span className="tablet:text-4xl text-2xl mx-auto block text-center font-DanaFaNum-700">
        دوره های برتر هفته
      </span>
      <div className="wrapper grid grid-cols-12 gap-6">
        {data?.map((item, index) => {
          return <CourseCard onARow={4} item={item} key={index} />;
        })}
      </div>
      <div className="mx-auto w-fit">
        <ViewMoreBtn link="/courses" />
      </div>
    </div>
  );
};

export default TopCourses;
