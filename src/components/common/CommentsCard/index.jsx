import { ThumbsDownIcon, ThumbsUpIcon } from "hugeicons-react";
import React, { useState, useEffect } from "react";

import { MakeDatePersian } from "../../../core/utils/MakeDatePersian.js/MakeDatePersian";
import { convertDate } from "../../../core/utils/DateToShamsi";
import { postQuery } from "../../../core/services/api/reactQuery/postQuery";
import http from "../../../core/services/interceptor";
import { useQueryClient } from "@tanstack/react-query";
import { SuccessToastify } from "../../../core/utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "../../../core/utils/Toastifies/ErrorToastify.Utils";
import ArticleLikeCommentAPI from "../../../core/services/api/ArticlesDetail/ArticleLikeComments";
import ArticleDissLikeCommentAPI from "../../../core/services/api/ArticlesDetail/ArticleDislikeComments";
import DeleteArticleCommentLikeAPI from "../../../core/services/api/ArticlesDetail/DeleteLikeComments";
import nophto from "../../../assets/images/NoPhoto/imgno.png";

const CommentsCard = ({ data, changeFlager }) => {
  console.log("123456", data);

  const likeCommentArticle = async () => {
    const res = await ArticleLikeCommentAPI(data.id);
    if (res.success) {
      SuccessToastify("لایک کردی");
      changeFlager();
    } else {
      ErrorToastify("بد لایک کردی");
    }
  };
  const dissLikeCommentArticle = async () => {
    const res = await ArticleDissLikeCommentAPI(data.id);
    if (res.success) {
      SuccessToastify("ذیسلایک کردی");
      changeFlager();
    } else {
      ErrorToastify("بددیسلایک کردی");
    }
  };

   const deleteLikeCommentArticle = async () => {
   	const obj = { deleteEntityId: commentData.currentUserLikeId };
   	const res = await DeleteArticleCommentLikeAPI(obj);
   	if (res.success) {
   		SuccessToastify("کامنت شما لایک شده");
       changeFlager()
   	} else {
   		ErrorToastify(" قبلا لایک کرده اید");
   	}
   };

  return (
    <>
      <div className="col-span-12 sm:col-span-6 xl:col-span-3 h-72 p-4 rounded-3xl border bg-gray-100 dark:bg-blackPanel flex flex-col justify-between shadow-md ">
        <div className="space-y-4">
          <div className="font-DanaFaNum-700 text-lg">{data.title}</div>
          <div className="text-gray-800 dark:text-gray-100">
            {data.describe}
          </div>
        </div>
        <div className="h-10 flex justify-between items-center">
          <div className="w-fit h-full flex gap-2">
            <img
              src={data.pictureAddress ? data.pictureAddress : nophto}
              alt="sss"
              className="rounded-full w-12 h-12"
            />
            <div className="flex flex-col">
              <span className="font-DanaFaNum-600 text-sm text-nowrap text-ellipsis max-w-[100px] overflow-hidden w-full">
                {data.autor}
              </span>
              <span className="text-xs text-gray-800 dark:text-gray-100 text-nowrap text-ellipsis max-w-[100px] overflow-hidden w-full">
                {MakeDatePersian(data?.inserDate)}
              </span>
            </div>
          </div>

          <div className="w-2/5 h-6 flex gap-4 items-center justify-end">
            <div className="flex gap-2 w-fit cursor-pointer">
              {data?.currentUserIsLike ? (
                <ThumbsUpIcon
                  size={24}
                  color="blue"
                  onClick={() => likeCommentArticle()}
                />
              ) : (
                <ThumbsUpIcon size={24} onClick={() => likeCommentArticle()} />
              )}

              {/* <ThumbsUpIcon size={24} /> */}
              <span className="h-min">{data.likeCount}</span>
            </div>
            <div className="flex gap-2 w-fit cursor-pointer">
              {data?.currentUserIsDissLike ? (
                <ThumbsDownIcon
                  size={24}
                  color="red"
                  onClick={() => dissLikeCommentArticle()}
                />
              ) : (
                <ThumbsDownIcon
                  size={24}
                  onClick={() => dissLikeCommentArticle()}
                />
              )}

              <span className="h-min">{data?.dissLikeCount}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CommentsCard;
