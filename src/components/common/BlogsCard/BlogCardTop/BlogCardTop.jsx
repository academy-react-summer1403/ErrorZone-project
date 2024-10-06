import React from "react";
import ImageNotFound from "../../CourseCard/ImageNotFound";

const BlogCardTop = ({item}) => {

    const {image, googleTitle} = item;

  return (
    <div className="cardTop ">
      {image ? (
        <img
          src={image}
          alt={googleTitle}
          className="rounded-[32px] block w-full h-[293px] scale-105"
        />
      ) : (
        <ImageNotFound />
      )}
    </div>
  );
};

export default BlogCardTop;
