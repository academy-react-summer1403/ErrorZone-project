import React, { useEffect, useState } from "react";
import PcViewHeroSec from "./PcViewHeroSec";
import MobileViewHeroSec from "./MobileViewHeroSec";

const HeroSection = () => {
  return window.screen.width >= 800 ? <PcViewHeroSec /> : <MobileViewHeroSec />;
};

export default HeroSection;
