import React from "react";

import BlogCardTop from "./BlogCardTop/BlogCardTop";
import BlogCardBottom from "./BlogCardBottom/BlogCardBottom";
import { Link } from "react-router-dom";

const BlogsCard = ({ item }) => {
  const { insertDate, googleTitle, image, categoryName } = item;

  return (
    <div className="flex flex-col gap-3 w-80 tablet:w-[431px] overflow-hidden">
      <Link to={`/articles/detail/${item.id}`}>
        <BlogCardTop item={item} />

        <BlogCardBottom item={item} />
      </Link>
    </div>
  );
};

export default BlogsCard;
