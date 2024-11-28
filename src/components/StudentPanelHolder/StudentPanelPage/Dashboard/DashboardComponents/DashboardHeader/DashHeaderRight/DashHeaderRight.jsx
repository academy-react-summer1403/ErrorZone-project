import React, { useEffect, useState } from "react";
import DashDate from "./DashDate";
import { Calendar03Icon, Time02Icon } from "hugeicons-react";
import { usequery } from "../../../../../../../core/services/api/reactQuery/useQuery";
import { convertDate } from "../../../../../../../core/utils/DateToShamsi";

const DashHeaderRight = () => {
  const data = usequery("userInfo");
  const [time, setTime] = useState(new Date());
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    const today = new Date();
    const formattendDate = today.toDateString();
    setCurrentDate(convertDate(formattendDate));
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-baseline tablet:gap-4 gap-2">
        <div className="font-DanaFaNum-700 text-2xl tablet:w-58 ">
          {" "}
          سلام {data?.fName} ، روزت بخیر 👋
        </div>
        <div className=" text-sm  text-gray-800">
          {" "}
          امیدوارم روز خوبی داشته باشید
        </div>
      </div>
      <div className="flex  gap-14">
        <DashDate
          name="ساعت "
          icon={<Time02Icon />}
          value={time.toLocaleTimeString()}
        />
        <DashDate name="تاریخ" icon={<Calendar03Icon />} value={currentDate} />
      </div>
    </div>
  );
};

export default DashHeaderRight;
