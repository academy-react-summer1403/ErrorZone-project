import React from "react";

import BlogCardTop from "./BlogCardTop/BlogCardTop";
import BlogCardBottom from "./BlogCardBottom/BlogCardBottom";
import { Link } from "react-router-dom";

const BlogsCard = ({ item }) => {
  const { insertDate, googleTitle, image, categoryName } = item;

  return (
    <div className="col-span-4 flex flex-col gap-3 overflow-hidden shadow-sm">
      <Link to={`/articles/detail/${item.id}`}>
        <BlogCardTop item={item} />

        <BlogCardBottom item={item} />
      </Link>
    </div>
  );
};

export default BlogsCard;
