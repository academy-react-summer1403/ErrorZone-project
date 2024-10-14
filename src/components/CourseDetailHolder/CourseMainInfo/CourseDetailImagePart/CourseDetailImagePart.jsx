import { Image } from "@nextui-org/react";
import { ImageNotFound01Icon } from "hugeicons-react";
import React from "react";

const CourseDetailImagePart = ({ pic }) => {
  return (
    <div className="w-full tablet:w-[47%] h-[424px] rounded-[32px] overflow-hidden">
      {pic ? (
        <Image
          width={"100%"}
          height={424}
          alt="NextUI hero Image with delay"
          src={pic}
          className="w-full object-fill"
        />
      ) : (
        <ImageNotFound01Icon />
      )}
    </div>
  );
};

export default CourseDetailImagePart;
