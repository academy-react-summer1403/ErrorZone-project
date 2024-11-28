import { Calendar03Icon } from "hugeicons-react";
import React from "react";
import { convertDate } from "../../../../core/utils/DateToShamsi";

const BlogCardBottom = ({ item }) => {
  const { title, keyword, insertDate } = item;
  return (
    <div className="cardBottom text-black dark:text-white mt-3 px-1">
      <h2 className="block font-DanaFaNum-700 text-2xl">{title}</h2>

      <div className="flex justify-between items-center">
        <h4 className="text-gray-800 dark:text-gray-400">{keyword}</h4>

        <div className="flex gap-1 items-center">
          <span className="text-sm text-gray-800 dark:text-gray-400 mt-1">
            {convertDate(insertDate)}
          </span>
          <Calendar03Icon
            size={20}
            className="text-gray-800 dark:text-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCardBottom;
