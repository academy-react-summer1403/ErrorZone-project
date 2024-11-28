import { Cancel01Icon, CommentAdd01Icon } from "hugeicons-react";
import React, { Fragment , useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import CommentCom from "../CommentsForCourse/GetCourseComments";

const AddCourseCommentCard = ({course , Oid , title , changeHandler}) => {

  console.log('oid' , Oid)

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Fragment>
      <div
        onClick={onOpen}
        className="col-span-12 sm:col-span-6 xl:col-span-3 h-72 p-4 rounded-3xl border bg-blue dark:bg-white flex flex-col justify-center items-center gap-4 shadow-md cursor-pointer"
      >
        <div className="text-white text-center flex flex-col gap-2">
          <div>
            <CommentAdd01Icon className="mx-auto" size={32} />
          </div>
          <span className="text-lg font-DanaFaNum-600 text-center">
            نظر شما
          </span>
        </div>
        <div className="text-gray-100">برای نظر دادن کلیک کنید</div>
      </div>

      <Modal
        className="w-full h-[600px] overflow-y-auto "
        backdrop="blur"
        size="5xl"
        radius="lg"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
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
              <ModalHeader className="flex flex-col gap-1 font-DanaFaNum-700 text-2xl">
                نظرات دانشجو ها و اساتید
              </ModalHeader>
              <ModalBody>
               
               {course?.map((item) => {
                  return(
                       <CommentCom 
                       pictureAddress={item?.pictureAddress}
                       author={(item?.author) ? (item.author === null ? 'ناشناس' : item.author) : (item.autor === null ? 'ناشناس' : item.autor)}
                       insertDate={item?.insertDate}
                       likeCount={item?.likeCount}
                       disslikeCount={item?.disslikeCount && item?.disslikeCount }
                       dissLikeCount={item?.dissLikeCount && item?.dissLikeCount }
                       acceptReplysCount={(item?.acceptReplysCount) ? item?.acceptReplysCount : item?.replyCount}
                       id={item?.id}
                       Oid={Oid}
                       title={item?.title}
                       describe={item?.describe}
                       currentUserIsLike={(item?.currentUserIsLike) ? item?.currentUserIsLike : null}
                       currentUserIsDissLike={(item?.currentUserIsDissLike) ? item?.currentUserIsDissLike : null}
                       currentUserEmotion={item?.currentUserEmotion}
                       changeHandler={changeHandler}
                       />
                  )
                }) }
              
              {course[0] == undefined && <span className='mx-auto h-[300px] text-[30px] text-gray-400 font-semibold flex items-center'> نظری ثبت نشده است </span>}

              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  بستن
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default AddCourseCommentCard;
