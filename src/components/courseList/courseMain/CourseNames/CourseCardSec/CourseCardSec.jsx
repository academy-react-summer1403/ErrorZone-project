import React from "react";
import CourseCard from "../../../../common/CourseCard";
import { useQuery } from "@tanstack/react-query";
import { usequery } from "../../../../../core/services/api/reactQuery/useQuery";
import { Card, Skeleton } from "@nextui-org/react";

const CourseCardSec = ({ pageNum }) => {
  const data = usequery("coursesByPagination", pageNum);

  const { courseFilterDtos } = data ? data : false;

  const skeletArray = [];

  for (let i = 0; i < 12; i++) {
    skeletArray.push({});
  }

  return (
    <div className=" flex flex-wrap justify-between ">
      {courseFilterDtos ? (
        courseFilterDtos.map((item, index) => {
          return <CourseCard item={item} key={index} />;
        })
      ) : (
        <div className="flex justify-between flex-wrap gap-6">
          {skeletArray.map((item, index) => (
            <Skeleton className="rounded-lg">
              <Card className="w-80 h-72 space-y-5" radius="lg" key={index}></Card>
            </Skeleton>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseCardSec;
