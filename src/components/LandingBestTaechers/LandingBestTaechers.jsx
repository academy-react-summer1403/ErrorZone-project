import React from "react";
import { Link } from "react-router-dom";
import BestTeacherLine from "../../assets/images/BestTeachersOfWeek/BestTeacherLine.svg";
import BestTeacherLineVertical from "../../assets/images/BestTeachersOfWeek/BestTeacherLineVertical.svg";
import TopTeachers1 from "../../assets/images/BestTeachersOfWeek/TopTeachers1.svg";
import TopTeachers2 from "../../assets/images/BestTeachersOfWeek/TopTeachers2.svg";
import TopTeachers3 from "../../assets/images/BestTeachersOfWeek/TopTeachers3.svg";
import BestTeacherSecDescribe from "./BestTeacherSecDescribe/BestTeacherSecDescribe";

const LandingBestTaechers = () => {
  return (
    <div className="w-full maxw-[1520px] bg-black dark:bg-white text-white dark:text-black rounded-[32px] px-10 py-8 flex flex-col tablet:flex-row gap-12 justify-between min-h-[1190px]  h-max tablet:min-h-96 ">
      <BestTeacherSecDescribe />
      <div className="flex items-center h-[720px] tablet:h-auto bg-[#353535] overflow-hidden rounded-3xl relative">
        <img src={BestTeacherLine} className="hidden tablet:block" />
        <img src={BestTeacherLineVertical} className="block tablet:hidden h-full mx-auto" />
        <div className="absolute w-2/3 left-1/2 -translate-x-1/2 top-14 bottom-14 z-10 border border-red flex justify-between">
          {/* teachers place */}
        </div>
      </div>
    </div>
  );
};

export default LandingBestTaechers;
