import React from "react";

const MidHeroSecPart = ({ref}) => {
  return (
    <div className="box space-y-6 " ref={ref}>
      <div className="box flex flex-col gap-[6px] w-[78%] mx-auto text-center font-DanaFaNum-700 tablet:text-6xl text-4xl">
        <h3 className="box">آموزش مدرن</h3>
        <h3 className="box">پیشرفت سریع</h3>
      </div>
      <div className="box tablet:text-lg text-base text-center text-gray-800 dark:text-gray-400">
        آکادمی آموزش تخصصی برنامه نویسی بحر از کودکان تا بزرگسال
      </div>
    </div>
  );
};

export default MidHeroSecPart;
