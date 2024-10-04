import React, { useEffect, useState } from "react";
import RightHeroSecPart from "./RightHeroSecPart";
import MidHeroSecPart from "./MidHeroSecPart";
import LeftHeroSecPart from "./LeftHeroSecPart";

const HeroSection = () => {
  return (
    <div className="mx-auto tablet:h-52 h-[460px] grid grid-cols-7 grid-rows-12 tablet:grid-rows-7 tablet:grid-cols-12 place-items-center tablet:mt-40 tablet:-mb-24  ">
      <RightHeroSecPart />
      <MidHeroSecPart />
      <LeftHeroSecPart />
    </div>
  );
};

export default HeroSection;
