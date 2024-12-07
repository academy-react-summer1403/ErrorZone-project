import {
  Archive02Icon,
  Book02Icon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "hugeicons-react";
import React from "react";
import ButtonSpecial from "../../../common/ButtonSpecial";
import CourseDislike, { DeleteLikeCourseAPI } from "../../../../core/services/api/CourseDetail/CourseDislike";
import CourseLike, { LikeCourseAPI } from "../../../../core/services/api/CourseDetail/CourseLike";
import { SuccessToastify } from "../../../../core/utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../../core/utils/Toastifies/ErrorToastify.Utils";
import DeleteCourseFavorite from "../../../../core/services/api/CourseDetail/DeleteCourseFavorite";

import { ToastContainer } from "react-toastify";
import PostCourseToReserv from "../../../../core/services/api/CourseDetail/PostCourseToReserv";
import { postQuery } from "../../../../core/services/api/reactQuery/postQuery";
import { useParams } from "react-router-dom";
import CourseAddToFavorite, { DeleteArchiveCourseAPI } from "../../../../core/services/api/CourseDetail/CourseAddToFavorite";
import DissLikeCourseAPI from "../../../../core/services/api/CourseDetail/CourseDislike";

const CourseDetailButtonsPart = ({ data , FlagHandler }) => {
  console.log("data1234", data);

  const like = data?.currentUserLike;
  const dislike = data?.currentUserDissLike;


  const favId = data?.userFavoriteId;

  const id = data?.courseId;

const params = useParams()

console.log("params" , params)


  const handleArchive = () => {
		!data.isUserFavorite ? AddFav() : delArchive();
	};

  const handleLike = () => {
		like === "0" ? likeCourse() : deleteLikeCourse();
	};

	const handleDissLike = () => {
		dislike === "0" && dissLikeCourse();
	};


	const likeCourse = async () => {
		const res = await LikeCourseAPI(params);
		if (res.success) {
			SuccessToastify("دوره با موفقیت لایک شد");
			FlagHandler();
		} else {
			ErrorToastify("مشکلی پیش امده است");
		}
	};

  const deleteLikeCourse = async () => {
		const obj = new FormData();
		obj.append("CourseLikeId", data.userLikeId);
		const result = await DeleteLikeCourseAPI(obj);
		if (result.success) {
			SuccessToastify("دوره با موفقیت لایک شد");
			FlagHandler();
		} else {
      ErrorToastify("مشکلی پیش امده است");
		}
	};

  const dissLikeCourse = async () => {
		const res = await DissLikeCourseAPI(params);
		if (res.success) {
			SuccessToastify("دوره با موفقیت لایک شد");
			FlagHandler();
		} else {
			ErrorToastify("مشکلی پیش امده است");
		}
	};


  const AddFav = async () => {
    const obj = { courseId: params.id };
		const result = await CourseAddToFavorite(obj);
		if (result.success) {
      SuccessToastify(" مقاله مورد نظر به لیست علاقه مندی ها اضافه شده است");
      FlagHandler()
		} else {
		  ErrorToastify("مشکلی پیش امده")
		}
  }


	const delArchive = async () => {
		const obj = new FormData();
		obj.append("CourseFavoriteId", data.userFavoriteId);
		const result = await DeleteArchiveCourseAPI(obj);
		if (result.success) {
			SuccessToastify("دوره از لیست علاقه مندی ها حذف شد");
      FlagHandler()
		} else {
			ErrorToastify(" مشکلی پیش امده ");
		}
	};




  const reserveCourse = async () => {
    const obj = { courseId: params.id };
    const result = await PostCourseToReserv(obj);
    if (result.success) {
        SuccessToastify(result.message);
        FlagHandler()
    } else {
      ErrorToastify("این دوره را قبلا رزرو کرده اید")
    }
  };


  return (
    <div className="flex items-center justify-between spay flex-wrap-reverse desktop:gap-2">
      <ToastContainer rtl />
      {data?.isCourseReseve === "1" ? (
        <ButtonSpecial
        onClick={reserveCourse}
        innerHtml={
          <>
            <Book02Icon
              strokeWidth={2}
              size={24}
              className="hidden tv:block"
            ></Book02Icon>
            <p>حذف دوره</p>
          </>
        }
        className="bg-[#E71D36] text-white py-3 px-6 font-DanaFaNum-700 desktop:text-lg"
      />
 ) : (
          <ButtonSpecial
        onClick={reserveCourse}
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
 )}






      {data?.isUserFavorite === true ? (
        <ButtonSpecial
          onClick={handleArchive}
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
          onClick={handleArchive}
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
          {like === "1" ? (
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
          {dislike === "1" ? (
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
