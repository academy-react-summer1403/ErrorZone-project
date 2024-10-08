import { Image } from "@nextui-org/react";
import React from "react";
import CourseInfoTable from "./CourseInfoTable";

const CourseMainInfo = () => {
  return (
    <div className="flex flex-col tablet:flex-row justify-between items-center flex-nowrap w-full">
      <div className="w-full tablet:w-[47%] h-[424px]">
      <Image
      width={"100%"}
      height={424}
      alt="NextUI hero Image with delay"
      src="https://app.requestly.io/delay/5000/https://nextui.org/images/hero-card-complete.jpeg"
      className="w-full"
    />
      </div>
      <div className="w-full tablet:w-1/2 flex flex-col gap-6 ">

      <div className="font-DanaFaNum-700 text-2xl tablet:text-4xl">دوره جاوااسکریپت</div>
      <CourseInfoTable />
      <div className="font-DanaFaNum-700 text-4xl">دوره جاوااسکریپت</div>

      </div>
    </div>
  );
};

export default CourseMainInfo;
