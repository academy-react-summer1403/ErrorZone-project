import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import LearnedProcessSec from "./LearnedProcessSec";
import OurGoalsSec from "./OurGoalsSec";
import OurServises from "./OurServises";
import TopCourses from "./TopCourses";
// import Button from "../common/Button";

const LandingHolder = () => {
  return (
    <div className="landingHolder space-y-28 my-[72px]">
      <HeroSection />
      <LearnedProcessSec />
      <OurGoalsSec />
      <OurServises />
      <TopCourses />
    </div>
  );
};

export default LandingHolder;
