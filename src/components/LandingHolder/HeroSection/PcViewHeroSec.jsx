import React from "react";
import RightHeroSecPart from "./PcviewHeroSec/RightHeroSecPart";
import MidHeroSecPart from "./PcviewHeroSec/MidHeroSecPart";
import LeftHeroSecPart from "./PcviewHeroSec/LeftHeroSecPart";

const PcViewHeroSec = () => {
  return (
    <div className="mx-auto tablet:h-52 h-[460px] grid grid-cols-7 grid-rows-12 tablet:grid-rows-7 tablet:grid-cols-12 place-items-center tablet:mt-40 tablet:-mb-24  ">
      <RightHeroSecPart />
      <MidHeroSecPart />
      <LeftHeroSecPart />
    </div>
  );
};

export default PcViewHeroSec;
