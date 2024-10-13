import React from "react";
import CourseInfoTable from "./CourseInfoTable";
import CourseDetailImagePart from "./CourseDetailImagePart/CourseDetailImagePart";
import RateAndPriceSec from "./RateAndPriceSec/RateAndPriceSec";
import CourseDetailButtonsPart from "./CourseDetailButtonsPart/CourseDetailButtonsPart";
import { getQuery } from "../../../core/services/api/reactQuery/getQuery";

const CourseMainInfo = ({data}) => {

  return (
    <div className="flex flex-col-reverse gap-8 tablet:gap-0 tablet:flex-row justify-between items-center flex-nowrap w-full mb-14">
      <CourseDetailImagePart pic={data.imageAddress ? data.imageAddress : false} />

      <div className="w-full tablet:w-1/2 flex flex-col gap-6 ">

        <div className="font-DanaFaNum-700 text-2xl tablet:text-4xl">
          {data.title}  
        </div>

        <CourseInfoTable data={data} />

        <RateAndPriceSec data={data} />

        <CourseDetailButtonsPart />
      </div>
    </div>
  );
};

export default CourseMainInfo;
