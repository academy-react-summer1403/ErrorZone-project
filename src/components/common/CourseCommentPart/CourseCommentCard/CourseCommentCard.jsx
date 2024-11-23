import React from "react";
import Commentss from "./Commentss";
import { Button } from "@nextui-org/react";
import { CommentAdd01Icon } from "hugeicons-react";

const CourseCommentCard = ({ data }) => {
  return (
    <div className="overflow-auto h-[500px]">
      <Button
        radius="full"
        className="bg-blue text-white text-lg "
        startContent={<CommentAdd01Icon className="text-white" />}
      >
        نظر شما
      </Button>
      {data?.map((item, i) => {
        return (
          <div className=" pt-2 ">
            <Commentss key={i} data={item} />

          </div>
        );
      })}
    </div>
  );
};

export default CourseCommentCard;
