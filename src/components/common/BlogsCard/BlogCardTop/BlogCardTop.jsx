import React from "react";
// import ImageNotFound from "../../CourseCard/ImageNotFound";

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
        // <ImageNotFound />
        <img
          src="https://classapi.sepehracademy.ir/\Pictures\Course\blank-thumbnail_009f5021-ce99-4a2d-9077-9d4417b6111f.jpg"
          alt={googleTitle}
          className="rounded-[32px] block w-full h-[293px] scale object-contain"
        />        
      )}
    </div>
  );
};

export default BlogCardTop;
