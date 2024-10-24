import React from "react";
import NewsNote from "../NewsNote/NewsNote";
import NewsFilter from "./NewsFilter/NewsFilter";
import NewsSort from "./NewsSort/NewsSort";
import NewsCardName from "./NewsCardName/NewsCardName";

const NewsMain = () => {
  return (
    <div>
        <div > 
            <NewsNote />
        </div>
      <div className="flex flex-col items-center justify-center pt-16">
        <div  className="flexitems-center py-6"> 
        <NewsSort />
        </div>
        <div className="w-full flex justify-between ">

          <NewsFilter />
          <NewsCardName />
        </div>
      </div>
    </div>
  );
};

export default NewsMain;
