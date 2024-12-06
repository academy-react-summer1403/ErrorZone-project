import instance from "../../interceptor";

const ArticleCommentAPI = async (newsID) => {
    try {
      const result = await instance.get(`/News/GetNewsComments?NewsId=${newsID}`);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

export default ArticleCommentAPI