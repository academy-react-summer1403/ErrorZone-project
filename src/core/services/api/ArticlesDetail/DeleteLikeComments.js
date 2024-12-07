import instance from "../../interceptor";

 const DeleteArticleCommentLikeAPI = async (obj) => {
    try {
      const result = await instance.delete("/Course/DeleteCourseLike", {
        data: obj,
      });
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  export default DeleteArticleCommentLikeAPI