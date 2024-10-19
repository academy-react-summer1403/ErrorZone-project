import React from "react";
import { usequery } from "../../../../../../../core/services/api/reactQuery/useQuery";

const DashHeaderLeft = () => {
  const data = usequery('userInfo');
  return (
      <span className="  flex  w-[40%] leading-5 ">
        {data?.userAbout}
      </span>
  );
};

export default DashHeaderLeft;
