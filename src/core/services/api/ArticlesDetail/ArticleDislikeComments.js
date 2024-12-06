import instance from "../../interceptor";

const ArticleDissLikeCommentAPI = async (CommentId) => {
    try {
      const result = await instance.post(
        `/Course/AddCourseCommentDissLike?CourseCommandId=${CommentId}`
      );
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  export default ArticleDissLikeCommentAPI