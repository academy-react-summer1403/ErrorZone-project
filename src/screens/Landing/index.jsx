import React, { useEffect, useState } from "react";
import LandingHolder from "../../components/LandingHolder";
import {
  getQuery,
  getQueryFiltterByCount,
  getQueryNoApi,
} from "../../core/services/api/reactQuery/getQuery";
import LandingBestTaechers from "../../components/LandingBestTaechers/LandingBestTaechers";
import { getItem } from "../../core/services/common/storage.services";
import GsapAnim from "../../components/common/animations/GsapAnim";
import {
  ArrowDiagonalIcon,
  ArrowDown03Icon,
  ArrowUp01Icon,
  ArrowUp02Icon,
  ArrowUp03Icon,
  ArrowUpDownIcon,
} from "hugeicons-react";
import { Button, Tooltip, HiddenSelect } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";

const Landing = () => {
  getQuery("topCourses", "/Home/GetCoursesTop?Count=4");
  const [scrollToTop, setScrollToTop] = useState(false);
  getQuery("landingInfo", "/Home/LandingReport");
  getQuery(
    "TopBlogs",
    "/News?PageNumber=1&RowsOfPage=10&SortingCol=InsertDate&SortType=DESC"
  );

  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollToTop(true) : setScrollToTop(false);
  });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  GsapAnim();

  return (
    <div className=" w-full max-w-[1960px] space-y-[72px] mx-auto overflow-x-hidden">
      {/* landing holder */}
      <LandingHolder />
      <AnimatePresence mode="wait">
        <Tooltip content="به سمت بالا">
          {scrollToTop && (
            <motion.button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 100 }}
              exit={{ y: 100, opacity: 0 }}
              className="bg-blackPanel bottom-10 left-12 fixed"
            >
              <ArrowUp01Icon color="white" size={50} />{" "}
            </motion.button>
          )}
        </Tooltip>
      </AnimatePresence>

      {/* Teacers of the week */}
      <LandingBestTaechers />
    </div>
  );
};

export default Landing;
