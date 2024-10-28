import React, { useEffect } from "react";
import LandingHolder from "../../components/LandingHolder";
import {
  getQuery,
  getQueryFiltterByCount,
  getQueryNoApi,
} from "../../core/services/api/reactQuery/getQuery";
import LandingBestTaechers from "../../components/LandingBestTaechers/LandingBestTaechers";
import { getItem } from "../../core/services/common/storage.services";

const Landing = () => {
  getQuery("topCourses", "/Home/GetCoursesTop?Count=4");
  getQuery("landingInfo", "/Home/LandingReport");
  getQueryFiltterByCount("TopBlogs", "/News/GetListNewsCategory", 3);


  return (
    <div className=" w-full max-w-[1520px] space-y-[72px] mx-auto overflow-x-hidden">
      {/* landing holder */}
      <LandingHolder />
      {/* Teacers of the week */}
      <LandingBestTaechers />
    </div>
  );
};

export default Landing;
