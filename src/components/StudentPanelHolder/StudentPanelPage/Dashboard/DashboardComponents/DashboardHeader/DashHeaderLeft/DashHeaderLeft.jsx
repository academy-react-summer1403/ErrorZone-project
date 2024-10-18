import React from "react";
import { usequeryy } from "../../../../../../../core/services/api/reactQuery/useQuery";

const DashHeaderLeft = () => {
  const data = usequeryy('userInfo');
  return (
      <span className="  flex  w-[40%] leading-5 ">
        {data?.userAbout}
      </span>
  );
};

export default DashHeaderLeft;
