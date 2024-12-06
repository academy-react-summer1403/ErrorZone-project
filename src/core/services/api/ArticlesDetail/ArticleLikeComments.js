import instance from "../../interceptor";

const ArticleLikeCommentAPI = async (CommentId) => {
    try {
      const result = await instance.post(
        `/News/CommentLike/${CommentId}?LikeType=true`
      );
      console.log(result, "result");
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  export default ArticleLikeCommentAPI