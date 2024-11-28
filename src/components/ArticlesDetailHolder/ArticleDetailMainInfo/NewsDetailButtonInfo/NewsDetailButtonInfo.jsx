import {
  Archive02Icon,
  Book02Icon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "hugeicons-react";
import React, { useEffect, useState } from "react";
import ButtonSpecial from "../../../common/ButtonSpecial";
import ArticleDetails from "../../../../core/services/api/ArticlesDetail/ArticleDetails";
import { useParams } from "react-router";
import ArticleLike from "../../../../core/services/api/ArticlesDetail/ArticleLike";
import { SuccessToastify } from "../../../../core/utils/Toastifies/SuccessToastify.Utils";
import { ToastContainer } from "react-toastify";
import ArticleDetailDissLike from "../../../../core/services/api/ArticlesDetail/ArticleDetailDissLike";
import ArticleAddToFavorite from "../../../../core/services/api/ArticlesDetail/ArticleAddToFavorite";
import { ErrorToastify } from "../../../../core/utils/Toastifies/ErrorToastify.Utils";
import DeleteFavNews from "../../../../core/services/api/ArticlesDetail/DeleteFavNews";
import GetNewsFavoriteList from "../../../../core/services/api/ArticlesDetail/GetNewsFavoriteList";
import RateArticle from "../../../../core/services/api/ArticlesDetail/RateArticle";
import { Attachment01Icon } from "hugeicons-react";

const NewsDetailButtonsPart = ({data , changeFlager}) => {
  const [news, setNews] = useState([]);
  const like = data?.currentUserIsLike;
  const dislike = data?.currentUserIsDissLike;
 

const isuserFavorite = data?.isCurrentUserFavorite;
const favId = data?.currentUserFavoriteId;
 
const id = data?.id

  const params = useParams();
  const articleid = params.articleId;
 
  const handleLike = async () => {
    const res = await ArticleLike(id);
    changeFlager()
    if (res.success === true) {

      
      SuccessToastify("ثبت نظر با موفقیت انجام شد");

    } else if (res.success === false) {
      ErrorToastify("ثبت نظر با مشکل مواجه شده است");
    }
  };

  const handleDissLike = async () => {
    const res = await ArticleDetailDissLike(id)
    changeFlager()
      if (res.success === true) {    
      SuccessToastify("ثبت نظر با موفقیت انجام شد");
    } else if (res.success === false) {
      ErrorToastify("ثبت نظر با مشکل مواجه شده است");
    }
  }

  const favoriteHandler = async () => {
  
    if(data?.isCurrentUserFavorite === true ){
     const data = {  "deleteEntityId": favId}
     const res = await DeleteFavNews(data)
     changeFlager()
     if(res.success === false){
      SuccessToastify('مقاله مورد نظر به لیست مورد علاقه ها  اضافه است')
      
     }
        
    }else if(data?.isCurrentUserFavorite === false ){
      const res = await ArticleAddToFavorite(articleid)
      changeFlager()
      if(res.success === true){
        SuccessToastify('مقاله مورد نظر شما از لیست علاقه مندی ها حذف شده است')
      }else if(res.success === false){
        SuccessToastify(res.message)
      }
    }
     
  }

  return (
    <div className="flex items-center justify-between spay flex-wrap-reverse desktop:gap-2">    
      <ToastContainer rtl/>
      <ButtonSpecial
        innerHtml={
          <>
            <Attachment01Icon
              strokeWidth={2}
              size={24}
              className="hidden tv:block"
            ></Attachment01Icon>
             <p> کپی کردن لینک صفحه </p>  
          </>
        }
        className="bg-white  text-blue py-3 px-6 font-DanaFaNum-500  desktop:text-xl border border-blue"
      />



   {data?.isCurrentUserFavorite === false ?
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
  :
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
  
  }


      {/* <ButtonSpecial
       onClick={favoriteHandler}
        innerHtml={
          <>
            <Archive02Icon
              strokeWidth={2}
              size={24}
              className="hidden tv:block"
            ></Archive02Icon>
             {data?.isCurrentUserFavorite === false ?  <p>اضافه به لیست موردعلاقه</p> :  <p> حذف از لیست علاقه مندی ها </p> }
          </>
        }
        className="bg-black text-white dark:bg-white dark:text-black py-3 px-6 font-DanaFaNum-700 desktop:text-lg desktop:ml-auto"
      /> */}

      <div className="flex gap-0 desktop:gap-4 items-center">
       <div onClick={handleLike} className="cursor-pointer">
        {like ? (
         <div className="border bg-blue text-white border-gray-400 w-14 h-14 rounded-full flex justify-center items-center">
          <i className=""> <ThumbsUpIcon className="size-4 desktop:size-6"></ThumbsUpIcon> </i>
         </div>
        ) : (
         <div className="border border-gray-400 w-14 h-14 rounded-full flex justify-center items-center" onClick={handleLike}>
           <i className=""> <ThumbsUpIcon className="size-4 desktop:size-6"></ThumbsUpIcon> </i>
         </div>
        )}
        </div>
        <div onClick={handleDissLike} className="cursor-pointer">
        {dislike ? ( 
         <div className="border bg-[#E71D36] text-white border-gray-400 w-14 h-14 rounded-full flex justify-center items-center">
           <i className=""> <ThumbsDownIcon className="size-4 desktop:size-6"></ThumbsDownIcon> </i>
         </div>
        )
        :    (   
         <div className="border border-gray-400 w-14 h-14 rounded-full flex justify-center items-center">
           <i className=""> <ThumbsDownIcon className="size-4 desktop:size-6"></ThumbsDownIcon> </i>
         </div>    
        )
        }
      </div>
      </div>
    </div>
  );
};

export default NewsDetailButtonsPart;
