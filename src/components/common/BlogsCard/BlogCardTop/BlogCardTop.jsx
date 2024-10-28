import React from "react";
// import ImageNotFound from "../../CourseCard/ImageNotFound";

const BlogCardTop = ({item}) => {

    const {currentImageAddressTumb, title} = item;

  return (
    <div className="cardTop ">
      {currentImageAddressTumb ? (
        <img
          src={currentImageAddressTumb}
          alt={title}
          className="rounded-[32px] block w-full h-[293px]"
        />
      ) : (
        // <ImageNotFound />
        <img
          src="https://classapi.sepehracademy.ir/\Pictures\Course\blank-thumbnail_009f5021-ce99-4a2d-9077-9d4417b6111f.jpg"
          alt={title}
          className="rounded-[32px] block w-full h-[293px] object-contain"
        />        
      )}
    </div>
  );
};

export default BlogCardTop;
