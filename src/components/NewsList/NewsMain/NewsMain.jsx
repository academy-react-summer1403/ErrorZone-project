import React from "react";
import NewsNote from "../NewsNote/NewsNote";
import NewsFilter from "./NewsFilter/NewsFilter";
import NewsSort from "./NewsSort/NewsSort";
import NewsCardName from "./NewsCardName/NewsCardName";
import PaginationNews from "./PaginationNews/PaginationNews";

const NewsMain = () => {
  return (
    <div>
      <div>
        <NewsNote />
      </div>
      <div className="flex justify-between  pt-16 ">
        <div className="flex border-2 border-gray-400 rounded-[32px] w-[22%]  pt-4 pb-6 px-5 h-fit">
          <NewsFilter />
        </div>

        <div className="flex flex-col rounded-2xl gap-6 w-3/4   ">
          <NewsSort />
          <NewsCardName />
          <PaginationNews />
        </div>
      </div>
    </div>
  );
};

export default NewsMain;
