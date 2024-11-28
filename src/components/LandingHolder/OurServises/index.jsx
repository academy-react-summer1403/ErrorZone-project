import React from "react";
import OurSeviceCard from "./OurSeviceCard";
import { ServicesCardData } from "./OurServisesData";

const OurServices = () => {
  return (
    <div className="space-y-12 text-wrap h-max">
      <span className=" rightToLeft title  block  font-DanaFaNum-700 text-center w-1/4 mx-auto text-2xl tablet:text-4xl">
        خدماتی که ما در طی دوره‌ها به شما ارائه میدیم
      </span>
      <div className=" wrapper  flex gap-5 justify-center items-center flex-wrap h-fit">
        {ServicesCardData?.map((item, index) => {
          return (
            <OurSeviceCard
              title={item.title}
              description={item.description}
              image={item.image}
              iconColor={item.iconColor}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
