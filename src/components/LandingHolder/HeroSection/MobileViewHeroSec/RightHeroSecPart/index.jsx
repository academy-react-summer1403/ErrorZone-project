import React from "react";
import EachPartofthis from "./EachPartofthis";
import stdsPic from '../../../../../assets/images/HeroSection/students.svg'
import teacherPic from '../../../../../assets/images/HeroSection/teachers.svg'
const RightHeroSecPart = ({width}) => {
  return (
    <div className='space-y-4'>
      <EachPartofthis num="100" pic={stdsPic} title="دانشجو فعال در دوره" />
      <EachPartofthis num="50" pic={teacherPic} title="اساتید برتر جهان" />
    </div>
  );
};

export default RightHeroSecPart;
