import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import { ArrowLeft01Icon, Cancel01Icon } from "hugeicons-react";
import CommentsReplyCard from "../CommentsReplyCard";
import { data } from "autoprefixer";
import { getQuery } from "../../../core/services/api/reactQuery/getQuery";
import { usequery } from "../../../core/services/api/reactQuery/useQuery";
import MyCourseComments from "../MyCourseComments/MyCourseComments";
import ModalComment from "../MyCourseComments/CourseCommentsModalPage";
import MyCourseCommentsPage from "../MyCourseComments/MyCourseCommentsPage";
import Comment from "../MyCourseComments/Comments";
import { MakeDatePersian } from "../../../core/utils/MakeDatePersian.js/MakeDatePersian";
import { ThumbsDownIcon, ThumbsUpIcon } from "hugeicons-react";
import NewReplyes from "../MyCourseComments/NewReplyes";

function CommentModal({ comments, newsComments }) {
  const [replies, setReplies] = useState([]);
  const [openReply, setOpenReply] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [OpenedTap, setOpenedTap] = useState("course");
  getQuery("myNewsComment", "/SharePanel/GetMyNewsComments");
  const data = usequery("myNewsComment");

  return (
    <>
      <span
        className="flex flex-nowrap gap-1 w-fit underline text-blue font-DanaFaNum-600 text-sm cursor-pointer dark:text-gray-900"
        onClick={onOpen}
      >
        مشاهده بیشتر
        <ArrowLeft01Icon />
      </span>

      <Modal
        size="4xl"
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
      >
        <ModalContent>
          {(onClose) => (
            <>
              <div className="flex relative z-40 ">
                <ModalHeader className=" flex justify-between w-full flex-wrap ">
                  <p className=" px-0  leading-[40px]"> نظرات شما</p>
                  <Tabs
                    size="lg"
                    className=""
                    onSelectionChange={setOpenedTap}
                    color="primary"
                    radius="full"
                  >
                    <Tab key="course" title="دوره ها" />
                    <Tab key="blog" title="بلاگ ها" />
                  </Tabs>
                  <Button
                    color="danger"
                    variant="light"
                    className="w-fit "
                    onPress={onClose}
                  >
                    بستن
                    <Cancel01Icon className="size-4" />
                  </Button>
                </ModalHeader>
              </div>
              <ModalBody>
                {OpenedTap == "course" ? (
                  <div className="scroll ">
                    {/* {comments?.map((item , index) => {
                    return (
                    <MyCourseComments 
                    key={index}
                    courseTitle={item.courseTitle}
                    insertDate={item.insertDate}
                    likeCount={item.likeCount}
                    dislikeCount={item.dislikeCount}
                    replyCount={item.replyCount}
                    id={item.commentId}
                    Oid={item.courseId}
                    title={item.title}
                    describe={item.describe}
                   />)
                  })}   */}

                    <div className="w-full h-[600px] overflow-y-auto">
                      {comments?.map((item, index) => {
                        return <ModalComment comment={item} key={index} />;
                      })}
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-[600px] overflow-y-auto">
                    {newsComments?.myNewsCommetDtos.map((item, index) => {
                      return (
                        <div className="flex flex-col gap-2 text-metricBlack ">
                          <div className="flex gap-2  border-r-4 border-r-black border-opacity-10 rounded-sm">
                            <div className="h-full w-1 rounded-full bg-metricPurple"></div>
                            <div className="flex flex-col gap-5">
                              <div className="flex items-center justify-between gap-3">
                                <p className="text-metricGray3 text-xs  font-medium">
                                  سینا قاسمی (شما)
                                </p>
                                <span className="w-[7px] h-[7px] bg-metricGray3 rounded-full"></span>
                                <p className="text-metricGray3 text-xs ">
                                  {MakeDatePersian(item?.insertDate)}
                                </p>
                              </div>
                              <div className="flex flex-col gap-2">
                                <h3 className=" leading-none font-semibold">
                                  {item.title}
                                </h3>
                                <p className="text-xs font-normal">
                                  {item.describe}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-5">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <ThumbsUpIcon />
                                <p className="font-medium text-lg">
                                  {item.likeCount}
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <ThumbsDownIcon />
                                <p className="font-medium text-lg">
                                  {item.dislikeCount}
                                </p>
                              </div>
                            </div>
                            {replies?.length !== 0 && (
                              <div
                                onClick={() => {
                                  setOpenReply(!openReply);
                                }}
                                className="text-xs font-semibold text-metricGray3 flex items-center gap-2 cursor-pointer"
                              >
                                پاسخ ها
                                {" (" + replies.length + ")"}
                              </div>
                            )}
                          </div>
                        </div>
                      );
                    })}
                    {openReply && (
                      <div className="flex items-center gap-3">
                        <div className="w-1 h-full mr-6 bg-metricOrange rounded-full"></div>
                        <div className="flex flex-col gap-10 py-2">
                          {replies?.map((e, i) => {
                            return <NewReplyes reply={e} key={i} />;
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
export default CommentModal;
