import {
  Cancel01Icon,
  CommentAdd01Icon,
  CommentAdd02Icon,
  DistributeVerticalCenterIcon,
  VirtualRealityVr01Icon,
} from "hugeicons-react";
import React, { useState, useEffect } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import CommentsReplyCard from "../CommentsReplyCard";
import { getQuery } from "../../../core/services/api/reactQuery/getQuery";
import { useParams } from "react-router";
import GetCommentsRepliesNews from "../../../core/services/api/ArticlesDetail/GetCommentsRepliesNews";
import CommentsReplyForm from "../CommentsReplyForm";
import CommentForm from "../CommentForm/CommentForm";

const AddCommentsCard = () => {
  const [commentIsOpen, setCommentIsOpen] = useState(false);
  const { articleId } = useParams();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const GetNewsAllComments = getQuery(
    "newsComment",
    `/News/GetNewsComments?NewsId=${articleId}`
  );
  const data = GetNewsAllComments;
  //  console.log('dattta' , data)

  return (
    <div
      className="col-span-12 sm:col-span-6 xl:col-span-3 h-72 p-4 rounded-3xl border bg-blue dark:bg-white flex flex-col justify-center items-center gap-4 shadow-md cursor-pointer "
      onClick={onOpen}
    >
      <div className="">
        <CommentAdd01Icon className="text-white mr-[49px]" />
        <h1 className="mt-[8px] font-DanaFaNum-600 text-lg text-white mr-[30px]">
          {" "}
          نظر شما{" "}
        </h1>
        <button className="mt-[16px] font-DanaFaNum-500 text-sm text-gray-100 text-opacity-[90%]">
          {" "}
          برای نظر دادن کلیک کنید{" "}
        </button>
      </div>
      <Modal
        backdrop="blur"
        size="5xl"
        radius="lg"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        className="h-[85%] overflow-y-auto"
        closeButton={
          <Button
            variant="bordered"
            size="md"
            color="danger"
            className="px-4 py-2"
          >
            <Cancel01Icon color="red" size={20} />
            <span className="text-red text-lg">بستن</span>
          </Button>
        }
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: "easeOut",
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.3,
                ease: "easeOut",
              },
            },
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className=" flex justify-between h-[63px] font-DanaFaNum-700 text-2xl text-nowrap">
                <span> نظرات دانشجو ها و اساتید </span>
              </ModalHeader>
              <ModalBody className="">
                {/*  */}
                {commentIsOpen ? (
                  // <CommentsReplyForm />
                  <CommentForm setCommentIsOpen={setCommentIsOpen} />
                ) : (
                  // <div
                  //   className="w-[107px] h-[40px] rounded-[40px] bg-blue flex justify-center items-center cursor-pointer "
                  //   onClick={(e) => {
                  //     e.stopPropagation();
                  //     setCommentIsOpen(true);
                  //   }}
                  // >
                  //   <CommentAdd02Icon className="text-white" />
                  //   <p className="text-white pr-2 font-DanaFaNum-500 text-base">
                  //     {" "}
                  //     نظر شما{" "}
                  //   </p>
                  // </div>
                  <Button
                    radius="full"
                    className="bg-blue text-white text-lg w-fit "
                    startContent={<CommentAdd01Icon className="text-white" />}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCommentIsOpen(true);
                    }}
                  >
                    نظر شما
                  </Button>
                )}

                {/*  */}
                {data.map((items, index) => {
                  return <CommentsReplyCard key={index} data={items} />;
                })}
                {/* {commentReplies.map((items , index) => {
                   return <CommentsReplyCard  key={index} GetNewsAllComments={items}/>
                })} */}
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default AddCommentsCard;
