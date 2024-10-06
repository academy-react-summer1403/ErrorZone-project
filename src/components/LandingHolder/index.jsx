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
    <div className="landingHolder px-4 tablet:px-10 space-y-28">
      <HeroSection />
      <LearnedProcessSec />
      <OurGoalsSec />
      <OurServises />
      <TopCourses />
      <TopBlogs />
    </div>
  );
};

export default LandingHolder;
