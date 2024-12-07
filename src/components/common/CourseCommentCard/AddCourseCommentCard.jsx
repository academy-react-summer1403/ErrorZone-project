import { Cancel01Icon, CommentAdd01Icon, Comment01Icon } from "hugeicons-react";
import React, { Fragment, useState } from "react";
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
import { motion } from "framer-motion";
import Modals from "../Modal/Modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import AddArticleCommentAPI from "../../../core/services/api/ArticlesDetail/AddArticlesCommentAPI";
import AddCommentValidation from "../../../core/validations/Schemas/Article/CommentsValidation";
import { SuccessToastify } from "../../../core/utils/Toastifies/SuccessToastify.Utils";
import AddCourseCommentAPI from "../../../core/services/api/CourseDetail/AddCourseCommentApi";
import { ErrorToastify } from "../../../core/utils/Toastifies/ErrorToastify.Utils";
import ButtonSpecial from "../ButtonSpecial";

const AddCourseCommentCard = ({
  course,
  Oid,
  title,
  changeHandler,
  articleID,
}) => {
  console.log("oid", Oid);

  console.log("course 12333", course);

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addCourseComment = async (values) => {
    console.log(values, "value");
    const obj = new FormData();
    obj.append("CourseId", Oid);
    obj.append("Title", values.Title);
    obj.append("Describe", values.Describe);
    const result = await AddCourseCommentAPI(obj);
    if (result.success) {
      SuccessToastify("کامنت شما اضاف شد");
      changeHandler();
      closeModal();
    } else {
      ErrorToastify("بد اضاف کردی");
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Fragment>
      <div
        onClick={onOpen}
        className="col-span-12 sm:col-span-6 xl:col-span-3 h-72 p-4 rounded-3xl border bg-blue dark:bg-gray-700 flex flex-col justify-center items-center gap-4 shadow-md cursor-pointer"
      >
        <div className="text-white text-center flex flex-col gap-2">
          <div>
            <CommentAdd01Icon className="mx-auto" size={32} />
          </div>
          <span className="text-lg font-DanaFaNum-600 text-center ">
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
            className="px-4 py-2 mt-"
          >
            <Cancel01Icon color="red" size={20} />
            <span className="text-red text-lg ">بستن</span>
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
              {/* <Button className='bg-blue h-[40px] text-white md:flex hidden rounded-3xl text-base font-semibold'>  نظر شما  </Button> */}

              <ModalHeader className="flex flex-col gap-1 font-DanaFaNum-700 text-2xl">
                نظرات دانشجو ها و اساتید
              </ModalHeader>
              <motion.button
                onClick={openModal}
                className="bg-metricOrange  py-2 px-4 mb-4 mr-6 w-fit rounded-full flex items-center justify-center gap-1 bg-blue text-white font-DanaFaNum-600 "
                whileHover={{ scale: 1.05 }}
              >
                <CommentAdd01Icon />
                <p>نظر شما</p>
              </motion.button>

              <ModalBody>
                <Modals backgroundColor="#d0d0d0" isOpen={isModalOpen} onClose={closeModal}>
                  <div className="flex justify-between w-fit ">
                    <h2 className="font-semibold text-xl  dark:text-gray-900">
                      نظر شما
                    </h2>
                    <div className="w-12"></div>
                  </div>
                  <Formik 
                    initialValues={{ Title: "", Describe: "" }}
                    validationSchema={AddCommentValidation}
                    onSubmit={addCourseComment}
                    className="mt-4 font-medium bg-black "
                  >
                    <Form>
                      <div className="pt-4">
                        <label htmlFor="Title" className="font-DanaFaNum-500">
                          <p className="dark:text-slate-900">عنوان نظر</p>
                        </label>
                        <Field
                          type="text"
                          id="Title"
                          name="Title"
                          placeholder="عنوان نظر خود را وارد کنید ..."
                          className="w-full p-3 my-2 border border-gray-300 rounded-full outline-none placeholder-gray-700  dark:placeholder-white placeholder-opacity-50 font-DanaFaNum-400 px-4  "
                        />
                        <h2 className="text-red-400 text-xs font-medium mr-4">
                          <ErrorMessage name="Title" />
                        </h2>
                      </div>
                      <div className="pt-4">
                        <label
                          htmlFor="Describe"
                          className="font-DanaFaNum-500"
                        >
                          <p className="dark:text-slate-900">توضیحات بیشتر</p>
                        </label>
                        <Field
                          as="textarea"
                          id="Describe"
                          name="Describe"
                          placeholder="توضیحات بیشتر خود را وارد کنید ..."
                          className="w-full border h-28 my-2 resize-none border-gray-300 rounded-3xl outline-none placeholder-gray-700  dark:placeholder-white placeholder-opacity-50 font-normal px-4 py-2"
                        />
                        <h2 className="text-red-400 text-xs font-DanaFaNum-500 mr-4">
                          <ErrorMessage name="Describe" />
                        </h2>
                      </div>
                      <div className=" flex justify-evenly">
                        <button
                          type="submit"
                          className="bg-blue text-white px-4 py-2 rounded-full mt-2"
                        >
                          ثبت نظر
                        </button>
                        <ButtonSpecial
                          onClick={closeModal}
                          size="sm"
                          className=" bg-red px-4 py-2 rounded-full mt-2 text-white"
                          innerHtml={"انصراف"}
                        ></ButtonSpecial>
                      </div>
                    </Form>
                  </Formik>
                </Modals>

                {course?.map((item) => {
                  return (
                    <CommentCom
                      pictureAddress={item?.pictureAddress}
                      author={
                        item?.author
                          ? item.author === null
                            ? "ناشناس"
                            : item.author
                          : item.autor === null
                          ? "ناشناس"
                          : item.autor
                      }
                      insertDate={item?.insertDate}
                      likeCount={item?.likeCount}
                      disslikeCount={item?.disslikeCount && item?.disslikeCount}
                      dissLikeCount={item?.dissLikeCount && item?.dissLikeCount}
                      acceptReplysCount={
                        item?.acceptReplysCount
                          ? item?.acceptReplysCount
                          : item?.replyCount
                      }
                      id={item?.id}
                      Oid={Oid}
                      title={item?.title}
                      describe={item?.describe}
                      currentUserIsLike={
                        item?.currentUserIsLike ? item?.currentUserIsLike : null
                      }
                      currentUserIsDissLike={
                        item?.currentUserIsDissLike
                          ? item?.currentUserIsDissLike
                          : null
                      }
                      currentUserEmotion={item?.currentUserEmotion}
                      changeHandler={changeHandler}
                    />
                  );
                })}

                {course[0] == undefined && (
                  <span className="mx-auto h-[300px] text-[30px] text-gray-400 font-semibold flex items-center">
                    {" "}
                    نظری ثبت نشده است{" "}
                  </span>
                )}
              </ModalBody>
              <ModalFooter></ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </Fragment>
  );
};

export default AddCourseCommentCard;
