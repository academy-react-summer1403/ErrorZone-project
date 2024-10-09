import React from "react";
import EachPartofthis from "./EachPartofthis";
import stdsPic from '../../../../assets/images/HeroSection/students.svg'
import teacherPic from '../../../../assets/images/HeroSection/teachers.svg'
import { useQuery } from "@tanstack/react-query";
const RightHeroSecPart = ({width}) => {

  const { data } = useQuery({
    queryKey: ["landingInfo"],
  });

  return (
    <div className='space-y-4  col-span-full  row-start-6 row-end-9 tablet:col-start-1 tablet:col-span-3 tablet:row-auto' style={{width:{width},}}>
      <EachPartofthis num={data? data.studentCount : "..."} pic={stdsPic} title="دانشجو فعال در دوره" />
      <EachPartofthis num={data ? data.teacherCount : "..."} pic={teacherPic} title="اساتید برتر جهان" />
    </div>
  );
};

export default RightHeroSecPart;
