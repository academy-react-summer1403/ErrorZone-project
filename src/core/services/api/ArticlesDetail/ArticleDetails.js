import instance from "../../interceptor";

const ArticleDetails = async (articleId) => {
  try {
    const res = await instance.get(`/News/${articleId}`);
    return res;
  } catch (err) {
    console.log(err);
  
  }
};

export default ArticleDetails;