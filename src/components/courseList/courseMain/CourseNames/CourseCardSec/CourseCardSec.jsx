import React from "react";
import CourseCard from "../../../../common/CourseCard";
import { useQuery } from "@tanstack/react-query";
import { usequery } from "../../../../../core/services/api/reactQuery/useQuery";
import { Card, Skeleton } from "@nextui-org/react";

const CourseCardSec = () => {
  const data = usequery("corsesByPagination");

  console.log(data);

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
            <Card className="w-80 space-y-5 p-4" radius="lg" key={index}>
              <Skeleton className="rounded-lg">
                <div className="h-48 rounded-lg bg-default-300"></div>
              </Skeleton>
              <div className="space-y-3">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-6 w-3/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-4/5 rounded-lg">
                  <div className="h-6 w-4/5 rounded-lg bg-default-200"></div>
                </Skeleton>
                <Skeleton className="w-2/5 rounded-lg">
                  <div className="h-6 w-2/5 rounded-lg bg-default-300"></div>
                </Skeleton>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default CourseCardSec;
