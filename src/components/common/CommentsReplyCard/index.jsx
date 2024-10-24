import React, { useState, useEffect } from "react";
import {
  CommentAdd02Icon,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "hugeicons-react";
import CommentsReplyForm from "../CommentsReplyForm";
import NoPhoto from "./../../../assets/images/NoPhoto/nophoto.png";
import { getQuery } from "../../../core/services/api/reactQuery/getQuery";
import { useParams } from "react-router";
import NewsLike from "../../../core/services/api/ArticlesDetail/NewsLike";
import ArticleDetailDissLike from "../../../core/services/api/ArticlesDetail/ArticleDetailDissLike";
import { SuccessToastify } from "../../../core/utils/Toastifies/SuccessToastify.Utils";
import { ErrorToastify } from "./../../../core/utils/Toastifies/ErrorToastify.Utils";
import { MakeDatePersian } from "../../../core/utils/MakeDatePersian.js/MakeDatePersian";
import GetCommentsRepliesNews from "../../../core/services/api/ArticlesDetail/GetCommentsRepliesNews";

const CommentsReplyCard = ({ data }) => {
  const [isRepleyCommentsOpen, setIsRepleyCommentsOpen] = useState(false);
  const [isUserLike, setIsUserLike] = useState(data.currentUserIsLike);
  const [currentLike, setCurrentsLike] = useState(data.likeCount);
  const [currentDislike, setCurrentDislike] = useState(data.dissLikeCount);
  const [isUserDislike, setIsUserDislike] = useState(
    data.currentUserIsDissLike
  );
  const [commentReplies, setCommentReplies] = useState([]);
  const { commentsreply } = useParams();

  const newsId = data.newsId;
  const date = data.inserDate;
  const id = data.id;
  console.log("dataaaa", data);

  const handleLike = () => {
    const res = NewsLike(newsId);
    if ((res.success = true)) {
      // SuccessToastify(res.ErrorMessage)
      setIsUserLike(!isUserLike);
      // setCurrentsLike((prev) => prev + 1)
      console.log("like", isUserLike);
    }
  };

  const handleDislike = () => {
    const res = ArticleDetailDissLike(newsId);
    //  setCurrentDislike((prev) => prev + 1)
    setIsUserDislike(!isUserDislike);
  };
  console.log("id1", id);
  // const replyComments = getQuery('commentsreply' , `/News/CreateNewsReplyComment?id=${commentsreply}`)

  const replyComments = async () => {
    console.log("id2", id);
    const res = await GetCommentsRepliesNews(id);
    setCommentReplies(res);
  };
  console.log("repcomments", commentReplies);

  useEffect(() => {
    replyComments();
  }, []);

  return (
    <>
      <div className="mt-[-5px] ">
        <div className="w-[149px] h-auto flex gap-2 items-center mt-4  pr-2">
          <div className="w-[48px]  h-[48px] rounded-[134px] flex items-center justify-center">
            {" "}
            {data.pictureAddress ? (
              ""
            ) : (
              <img
                className="w-[40px] h-[40px] rounded-[134px]"
                src={NoPhoto}
              />
            )}{" "}
          </div>
          <div className="w-[93px] h-[41px] grid grid-cols-1">
            <label className="w-[93px] h-[20px] font-DanaFaNum-600 text-sm text-nowrap">
              {" "}
              {data.autor ? "" : "اسمی وجود ندارد"}{" "}
            </label>
            <span className="w-[120px] h-[17px] font-DanaFaNum-500 text- text-gray-800 text-nowrap">
              {" "}
              {MakeDatePersian(date)}{" "}
            </span>
          </div>
        </div>
        <div className="w-[803px] h-[80px] grid grid-cols-1 relative top-[12px] right-[8px]">
          <p className="w-[264px] h-[26px] font-DanaFaNum-700 text-lg">
            {" "}
            {data.title}{" "}
          </p>
          <p className="w-[803px] h-[46px] font-DanaFaNum-500 text-base overflow-hidden">
            {" "}
            {data.describe}{" "}
          </p>
        </div>
        <div className="w-[226px] h-[72px] relative top-[-5px] grid grid-cols-3 items-center">
          <div className=" w-[103px] h-[24px] grid grid-cols-2 relative top-[-20px] right-[8px] pt-2 ">
            <div className=" w-[49x] h-[24px] grid grid-cols-2 ">
              {isUserLike ? (
                <i
                  className="w-[24px] h-[24px] text-blue  cursor-pointer"
                  onClick={handleLike}
                >
                  {" "}
                  <ThumbsUpIcon />{" "}
                </i>
              ) : (
                <i
                  className="w-[24px] h-[24px] cursor-pointer"
                  onClick={handleLike}
                >
                  {" "}
                  <ThumbsUpIcon />{" "}
                </i>
              )}
              <span className="w-[17px] h-[23px] font-DanaFaNum-500 text-base text-black pr-1">
                {" "}
                {currentLike}{" "}
              </span>
            </div>
            <div className=" w-[49px] h-[24px] grid grid-cols-2 pr-2">
              {isUserDislike ? (
                <i
                  className="w-[24px] h-[24px] text-red cursor-pointer"
                  onClick={handleDislike}
                >
                  {" "}
                  <ThumbsDownIcon />{" "}
                </i>
              ) : (
                <i
                  className="w-[24px] h-[24px] cursor-pointer"
                  onClick={handleDislike}
                >
                  {" "}
                  <ThumbsDownIcon />{" "}
                </i>
              )}

              <span className="w-[17px] h-[23px] font-DanaFaNum-500 text-base text-black pr-2">
                {" "}
                {currentDislike}{" "}
              </span>
            </div>
          </div>
          {isRepleyCommentsOpen ? (
            <CommentsReplyForm data={data} />
          ) : (
            <button
              className="w-[99px] h-[39px] rounded-[40px] border border-blue text-blue bg-white focus:ring focus:ring-violet-300 hover:bg-blue hover:text-white f font-DanaFaNum-500 text-base relative right-[64px] top-[-17px]"
              onClick={() => setIsRepleyCommentsOpen(true)}
            >
              {" "}
              جواب دادن{" "}
            </button>
          )}
        </div>

        {/* این ازمایشیه میخواستیم ببنیم کار میکنه یا نه درست شد پاک میکنم   */}

        <div className="w-full h-auto ">
          {commentReplies ?
          commentReplies?.map((items, index) => {
            return (
              <div className=" pr-2">
                <div className="w-[149px] h-auto flex gap-2 items-center mt-4  pr-2 ">
                  <div className="w-[48px]  h-[48px] rounded-[134px] flex items-center justify-center">
                    {" "}
                    {data.pictureAddress ? (
                      ""
                    ) : (
                      <img
                        className="w-[40px] h-[40px] rounded-[134px]"
                        src={NoPhoto}
                      />
                    )}{" "}
                  </div>
                  <div className="w-[93px] h-[41px] grid grid-cols-1">
                    <label className="w-[93px] h-[20px] font-DanaFaNum-600 text-sm text-nowrap">
                      {" "}
                      {data.autor ? "" : "اسمی وجود ندارد"}{" "}
                    </label>
                    <span className="w-[120px] h-[17px] font-DanaFaNum-500 text- text-gray-800 text-nowrap">
                      {" "}
                      {MakeDatePersian(date)}{" "}
                    </span>
                  </div>
                </div>
                <div className="w-[803px] h-[80px] grid grid-cols-1 relative top-[12px] right-[8px]">
                  <p className="w-[264px] h-[26px] font-DanaFaNum-700 text-lg">
                    {" "}
                    {data.title}{" "}
                  </p>
                  <p className="w-[803px] h-[46px] font-DanaFaNum-500 text-base overflow-hidden">
                    {" "}
                    {data.describe}{" "}
                  </p>
                </div>
                <div className="w-[226px] h-[72px] relative top-[-5px] grid grid-cols-3 items-center">
                  <div className=" w-[103px] h-[24px] grid grid-cols-2 relative top-[-20px] right-[8px] pt-2 ">
                    <div className=" w-[49x] h-[24px] grid grid-cols-2 ">
                      {isUserLike ? (
                        <i
                          className="w-[24px] h-[24px] cursor-pointer"
                          onClick={handleLike}
                        >
                          {" "}
                          <ThumbsUpIcon />{" "}
                        </i>
                      ) : (
                        <i
                          className="w-[24px] h-[24px] text-blue  cursor-pointer"
                          onClick={handleLike}
                        >
                          {" "}
                          <ThumbsUpIcon />{" "}
                        </i>
                      )}
                      <span className="w-[17px] h-[23px] font-DanaFaNum-500 text-base text-black pr-1">
                        {" "}
                        {currentLike}{" "}
                      </span>
                    </div>
                    <div className=" w-[49px] h-[24px] grid grid-cols-2 pr-2">
                      {isUserDislike ? (
                        <i
                          className="w-[24px] h-[24px] cursor-pointer"
                          onClick={handleDislike}
                        >
                          {" "}
                          <ThumbsDownIcon />{" "}
                        </i>
                      ) : (
                        <i
                          className="w-[24px] h-[24px] text-red cursor-pointer"
                          onClick={handleDislike}
                        >
                          {" "}
                          <ThumbsDownIcon />{" "}
                        </i>
                      )}

                      <span className="w-[17px] h-[23px] font-DanaFaNum-500 text-base text-black pr-2">
                        {" "}
                        {currentDislike}{" "}
                      </span>
                    </div>
                  </div>
                  {isRepleyCommentsOpen ? (
                    <CommentsReplyForm data={data} />
                  ) : (
                    <button
                      className="w-[99px] h-[39px] rounded-[40px] border border-blue text-blue bg-white focus:ring focus:ring-violet-300 hover:bg-blue hover:text-white f font-DanaFaNum-500 text-base relative right-[64px] top-[-17px]"
                      onClick={() => setIsRepleyCommentsOpen(true)}
                    >
                      {" "}
                      جواب دادن{" "}
                    </button>
                  )}
                </div>
              </div>
            );
          }) : false}
        </div>
      </div>
    </>
  );
};

export default CommentsReplyCard;
