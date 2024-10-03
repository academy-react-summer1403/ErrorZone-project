import React from "react";
import { GoalsCardData } from "./GoalsCardItem";
import OurGoalsCard from "./OurGoalsCard";

const OurGoalsSec = () => {
  return (
    <div className="space-y-12 text-wrap h-max">
      <span className="title  block tablet:text-4xl text-2xl font-DanaFaNum-700 text-center">
        اهداف ما در آکادمی
      </span>
      <div className="wrapper  flex justify-evenly gap-5 items-center flex-wrap h-fit">
        {GoalsCardData?.map((item, index) => {
          return (
            <OurGoalsCard
              title={item.title}
              description={item.description}
              image={item.image}
              color={item.color}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default OurGoalsSec;
