import React, { Fragment, useEffect, useState } from "react";
import RightHeroSecPart from "./RightHeroSecPart";
import MidHeroSecPart from "./MidHeroSecPart";
import LeftHeroSecPart from "./LeftHeroSecPart";

const HeroSection = () => {
  return (
    <Fragment>
      <div className="hidden mx-auto tablet:flex justify-evenly items-center mt-10 tablet:mt-20">
        <RightHeroSecPart />
        <MidHeroSecPart />
        <LeftHeroSecPart />
      </div>
      <div className="flex flex-col mx-auto tablet:hidden space-y-12 mt-20 tablet:mt-10 w-fit items-center">
        <MidHeroSecPart />
        <RightHeroSecPart />
        <LeftHeroSecPart />
      </div>
    </Fragment>
  );
};

export default HeroSection;
