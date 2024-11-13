import React from "react";
import CourseInfoTable from "./CourseInfoTable";
import CourseDetailImagePart from "./CourseDetailImagePart/CourseDetailImagePart";
import RateAndPriceSec from "./RateAndPriceSec/RateAndPriceSec";
import CourseDetailButtonsPart from "./CourseDetailButtonsPart/CourseDetailButtonsPart";
import { getQuery } from "../../../core/services/api/reactQuery/getQuery";
import { Skeleton } from "@nextui-org/react";

const CourseMainInfo = ({data}) => {

  return (

    <div className="flex flex-col-reverse gap-0 tablet:gap-12 tablet:flex-row justify-between items-center flex-nowrap w-full mb-14">
      {
        data ? 
      <CourseDetailImagePart pic={data?.imageAddress ? data.imageAddress : false} />
        :
         <Skeleton className="rounded-[32px] w-1/2 min-h-[400px] h-full" />
      }

      <div className="w-full tablet:w-1/2 flex flex-col gap-6 ">

        <div className="font-DanaFaNum-700 text-2xl tablet:text-4xl">
          {data?.title}  
        </div>

        <CourseInfoTable data={data} />

        <RateAndPriceSec data={data} />

        <CourseDetailButtonsPart data={data} />
      </div>
    </div>
  );
};

export default CourseMainInfo;
