import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import LearnedProcessSec from "./LearnedProcessSec";
import OurGoalsSec from "./OurGoalsSec";
import OurServises from "./OurServises";
import TopCourses from "./TopCourses";
import TopBlogs from "./TopBlogs/TopBlogs";
// import Button from "../common/Button";

const LandingHolder = () => {
  return (
    <div className="landingHolder  space-y-28">
      <div className="px-4 tablet:px-10 space-y-28">
      <HeroSection />
      </div>
      <LearnedProcessSec />
      <div className="px-4 tablet:px-10 space-y-28">

      <OurGoalsSec />
      <OurServises />
      <TopCourses />
      <TopBlogs />
      </div>

    </div>
  );
};

export default LandingHolder;
