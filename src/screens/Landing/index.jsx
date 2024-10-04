import React, { useEffect } from "react";
import LandingHolder from "../../components/LandingHolder";
import { getQuery } from "../../core/services/api/reactQuery/getQuery";

const Landing = () => {
  getQuery("topCourses", "/Home/GetCoursesTop?Count=4");
  getQuery("landingInfo", "/Home/LandingReport");

  return (
    <div className="px-4 tablet:px-10 pb-[72px] w-full max-w-[1520px] mx-auto ">
      {/* landing holder */}
      <LandingHolder />
    </div>
  );
};

export default Landing;
