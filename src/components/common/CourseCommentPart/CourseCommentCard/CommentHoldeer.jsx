import {Textarea} from "@nextui-org/react";
import React from 'react'
import CommentsReplyCard from "../../CommentsReplyCard";




const CommentHoldeer = ({describe}) => {
  return (
    <div> 
      {/* <Textarea
    label=""
    variant="bordered"
    placeholder=""
    disableAnimation
    disableAutosize
    classNames={{
        direction:"rtl",
      base: "max-w-xs",
      input: " min-h-[60px]",
    }}
  />  */}
  {describe}
  
  </div>
  )
}

export default CommentHoldeer