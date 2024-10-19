import React from "react";
import MyFavNewsTable from "./MyFavNewsTable/MyFavNewsTable";
import { getQuery } from "../../../../core/services/api/reactQuery/getQuery";
import { usequery } from "../../../../core/services/api/reactQuery/usequery";
import { Skeleton } from "@nextui-org/react";

const BlogFav = () => {
  getQuery("myFavNews", "/SharePanel/GetMyFavoriteNews");

  return (
    <div>
      <div className="title font-DanaFaNum-700 text-2xl">
        بلاگ های موردعلاقه
      </div>
      <div className="min-h-20 mt-6">
        {usequery("myFavNews") ? (
          <MyFavNewsTable />
        ) : (
          <Skeleton className="rounded-2xl w-full min-h-52 h-full" />
        )}
      </div>
    </div>
  );
};

export default BlogFav;
