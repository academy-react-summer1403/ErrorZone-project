import React from "react";
import { Link } from "react-router-dom";

const LeftHeroSecPart = ({ref}) => {
  return (
    <div className="box space-y-3" ref={ref}>
      <div className="text-lg">
        <h4 className="box">همین حالا</h4>
        <h4 className="box">شروع کن به یادگیری!</h4>
      </div>
       <Link to="/Courses" className="box bg-black dark:bg-white text-white dark:text-black mx-auto block px-4 py-3 overflow-hidden rounded-full text-center" > جدیدترین دوره‌ها </Link>
    </div>
  );
};

export default LeftHeroSecPart;
