import {
  Archive02Icon,
  Book02Icon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "hugeicons-react";
import React from "react";
import ButtonSpecial from "../../../common/ButtonSpecial";
import CourseDislike from "../../../../core/services/api/CourseDetail/CourseDislike";
import CourseLike from "../../../../core/services/api/CourseDetail/CourseLike";
import { SuccessToastify } from "../../../../core/utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../core/utils/Toastifies/ErrorToastify.Utils";
import DeleteCourseFavorite from "../../../../core/services/api/CourseDetail/DeleteCourseFavorite";
import CourseAddToFavorite from "../../../../core/services/api/CourseDetail/CourseAddToFavorite";
import { ToastContainer } from "react-toastify";
import PostCourseToReserv from "../../../../core/services/api/CourseDetail/PostCourseToReserv";

const CourseDetailButtonsPart = ({ data }) => {
  console.log("data1234", data);

  const like = data?.currentUserLike;
  const dislike = data?.currentUserDissLike;

  // const isuserFavorite = data?.isUserFavorite;
  const favId = data?.userFavoriteId;
  console.log("1234", favId);
  const id = data?.courseId;

  console.log("id12e3", id);

  // const params = useParams();
  // const articleid = params.articleId;

  const handleLike = async () => {
    const res = await CourseLike(id);
    // changeFlager()
    if (res.success === true) {
      SuccessToastify("ثبت نظر با موفقیت انجام شد");
    } else if (res.success === false) {
      ErrorToastify("ثبت نظر با مشکل مواجه شده است");
    }
  };

  const handleDissLike = async () => {
    const res = await CourseDislike(id);
    // changeFlager()
    if (res.success === true) {
      SuccessToastify("ثبت نظر با موفقیت انجام شد");
    } else if (res.success === false) {
      ErrorToastify("ثبت نظر با مشکل مواجه شده است");
    }
  };
  console.log("datafavorite", data?.isUserFavorite);

  const favoriteHandler = async () => {
    if (data?.isUserFavorite === true) {
      const res = await DeleteCourseFavorite(favId);
      console.log("5666", res);
      if (res.success === true) {
        SuccessToastify("مقاله مورد نظر ار لیست علاقه مندی ها حذف شده است");
      }
    } else if (data?.isUserFavorite === false) {
      const res = await CourseAddToFavorite(id);
      if (res.success === true) {
        SuccessToastify(" مقاله مورد نظر به لیست علاقه مندی ها اضافه شده است");
      } else if (res.success === true) {
        SuccessToastify(res.message);
      }
    }
  };
  console.log("id111");

  const handleReserv = async () => {
    if (data?.isCourseReseve === "0") {
      const res = await PostCourseToReserv(id);
      console.log("44444", res);
    }
  };

  return (
    <div className="flex items-center justify-between spay flex-wrap-reverse desktop:gap-2">
      <ToastContainer rtl />
      <ButtonSpecial
        onClick={handleReserv}
        innerHtml={
          <>
            <Book02Icon
              strokeWidth={2}
              size={24}
              className="hidden tv:block"
            ></Book02Icon>
            <p>رزرو دوره</p>
          </>
        }
        className="bg-blue text-white py-3 px-6 font-DanaFaNum-700 desktop:text-lg"
      />

      {data?.userFavoriteId === true ? (
        <ButtonSpecial
          onClick={favoriteHandler}
          innerHtml={
            <>
              <Archive02Icon
                strokeWidth={2}
                size={24}
                className="hidden tv:block"
              ></Archive02Icon>
              <p> حذف از لیست علاقه مندی ها </p>
            </>
          }
          className="bg-red text-white dark:bg-white dark:text-black py-3 px-6 font-DanaFaNum-500 desktop:text-xl desktop:ml-auto"
        />
      ) : (
        <ButtonSpecial
          onClick={favoriteHandler}
          innerHtml={
            <>
              <Archive02Icon
                strokeWidth={2}
                size={24}
                className="hidden tv:block"
              ></Archive02Icon>
              <p>اضافه به لیست موردعلاقه</p>
            </>
          }
          className="bg-black text-white dark:bg-white dark:text-black py-3 px-6 font-DanaFaNum-500 desktop:text-xl desktop:ml-auto"
        />
      )}

      <div className="flex gap-0 desktop:gap-4 items-center">
        <div onClick={handleLike} className="cursor-pointer">
          {like ? (
            <div className="border bg-blue text-white border-gray-400 w-14 h-14 rounded-full flex justify-center items-center">
              <i className="">
                {" "}
                <ThumbsUpIcon className="size-4 desktop:size-6"></ThumbsUpIcon>{" "}
              </i>
            </div>
          ) : (
            <div
              className="border border-gray-400 w-14 h-14 rounded-full flex justify-center items-center"
              onClick={handleLike}
            >
              <i className="">
                {" "}
                <ThumbsUpIcon className="size-4 desktop:size-6"></ThumbsUpIcon>{" "}
              </i>
            </div>
          )}
        </div>
        <div onClick={handleDissLike} className="cursor-pointer">
          {dislike ? (
            <div className="border bg-[#E71D36] text-white border-gray-400 w-14 h-14 rounded-full flex justify-center items-center">
              <i className="">
                {" "}
                <ThumbsDownIcon className="size-4 desktop:size-6"></ThumbsDownIcon>{" "}
              </i>
            </div>
          ) : (
            <div className="border border-gray-400 w-14 h-14 rounded-full flex justify-center items-center">
              <i className="">
                {" "}
                <ThumbsDownIcon className="size-4 desktop:size-6"></ThumbsDownIcon>{" "}
              </i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseDetailButtonsPart;
