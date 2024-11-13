import { CommentAdd02Icon } from "hugeicons-react";
import React from "react";
import UserInfoComment from "../Profile/UserInfoComment";
import { convertDate } from "../../../../core/utils/DateToShamsi";
import { MakeDatePersian } from "../../../../core/utils/MakeDatePersian.js/MakeDatePersian";
import { makeDatePersian } from "../../../../core/utils/date-helper.utils";
import CommentInput from "./CommentHoldeer";
import CommentsReplyCard from "../../CommentsReplyCard";
import CommentHoldeer from "./CommentHoldeer";

const Commentss = ({data}) => {
  return (
    <div className=" flex-col ">
      <UserInfoComment img={data.pictureAddress} name={data.author} date={makeDatePersian(data?.insertDate)}/>
      <CommentHoldeer describe={data?.describe} />
      
      <CommentsReplyCard data={data ? data : []} />
    </div>
  );
};

export default Commentss;
