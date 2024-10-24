import { ThumbsDownIcon, ThumbsUpIcon } from "hugeicons-react";
import React from "react";
import { convertDate } from "../../../core/utils/DateToShamsi";

const CourseCommentCard = ({ data }) => {
  return (
    <div className="col-span-12 sm:col-span-6 xl:col-span-3 h-72 p-4 rounded-3xl border bg-gray-100 dark:bg-blackPanel flex flex-col justify-between shadow-md">
      <div className="space-y-4">
        <div className="font-DanaFaNum-700 text-lg">{data.title}</div>
        <div className="text-gray-800 dark:text-gray-100">{data.describe}</div>
      </div>
      <div className="h-10 flex justify-between items-center">
        <div className="w-fit h-full flex gap-2">
          <img src={data.pictureAddress} alt="sss" className="rounded-full" />
          <div className="flex flex-col">
            <span className="font-DanaFaNum-600 text-sm text-nowrap text-ellipsis max-w-[100px] overflow-hidden w-full">
              {data.author}
            </span>
            <span className="text-xs text-gray-800 dark:text-gray-100 text-nowrap text-ellipsis max-w-[100px] overflow-hidden w-full">
              {convertDate(data.insertDate)}
            </span>
          </div>
        </div>

        <div className="w-2/5 h-6 flex gap-4 items-center justify-end">
          <div className="flex gap-2 w-fit">
            <ThumbsUpIcon size={24} />
            <span className="h-min">{data.likeCount}</span>
          </div>
          <div className="flex gap-2 w-fit">
            <ThumbsDownIcon size={24} />
            <span className="h-min">{data.disslikeCount}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCommentCard;
