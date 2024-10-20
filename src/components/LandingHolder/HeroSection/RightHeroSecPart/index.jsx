import React from "react";
import EachPartofthis from "./EachPartofthis";
import stdsPic from '../../../../assets/images/HeroSection/students.svg'
import teacherPic from '../../../../assets/images/HeroSection/teachers.svg'
import { useQuery } from "@tanstack/react-query";
import { usequery } from "../../../../core/services/api/reactQuery/useQuery";
const RightHeroSecPart = () => {

  const data = usequery("landingInfo");

  return (
    <div className='space-y-4'>
      <EachPartofthis num={data ? data.studentCount : "..."} pic={stdsPic} title="دانشجو فعال در دوره" />
      <EachPartofthis num={data ? data.teacherCount : "..."} pic={teacherPic} title="اساتید برتر جهان" />
    </div>
  );
};

export default RightHeroSecPart;
