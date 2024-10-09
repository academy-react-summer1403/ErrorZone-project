import React from "react";
import { Link } from "react-router-dom";

const LeftHeroSecPart = () => {
  return (
    <div className="space-y-3 col-span-full row-start-10 row-end-12 tablet:col-start-10 tablet:col-span-2 tablet:row-auto">
      <div className="text-lg">
        <h4>همین حالا</h4>
        <h4>شروع کن به یادگیری!</h4>
      </div>
       <Link to="/Courses" className="bg-black dark:bg-white text-white dark:text-black mx-auto block px-4 py-3 overflow-hidden size-full rounded-full text-center" > جدیدترین دوره‌ها </Link>
    </div>
  );
};

export default LeftHeroSecPart;
