import React from "react";

import BlogCardTop from "./BlogCardTop/BlogCardTop";
import BlogCardBottom from "./BlogCardBottom/BlogCardBottom";

const BlogsCard = ({ item }) => {
  const { insertDate, googleTitle, image, categoryName } = item;

  return (
    <div className="flex flex-col gap-3 w-80 tablet:w-[431px] overflow-hidden">
      <BlogCardTop item={item} />

      <BlogCardBottom item={item} />
    </div>
  );
};

export default BlogsCard;
