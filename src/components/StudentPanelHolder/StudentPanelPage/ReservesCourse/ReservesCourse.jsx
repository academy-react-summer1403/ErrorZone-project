import React from "react";

import { Skeleton } from "@nextui-org/react";
import MyResCourseTable from "./MyResCourseTable/MyResCourseTable";

const ReservesCourse = () => {
  return (
    <div>
      <div className="title font-DanaFaNum-700 text-2xl">رزرو من</div>
      <div className="min-h-20 mt-6">
        <MyResCourseTable />
      </div>
    </div>
  );
};

export default ReservesCourse;
