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
        // <ImageNotFound01Icon />
        <Image
          width={"100%"}
          height={424}
          alt="NextUI hero Image with delay"
          src="https://classapi.sepehracademy.ir/\Pictures\Course\blank-thumbnail_009f5021-ce99-4a2d-9077-9d4417b6111f.jpg"
          className="w-full object-fill"
        />        
      )}
    </div>
  );
};

export default CourseDetailImagePart;
