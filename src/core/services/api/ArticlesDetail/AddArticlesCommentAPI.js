import instance from "../../interceptor";

const AddArticleCommentAPI = async (obj) => {
    console.log(obj, "obj");
    try {
      const result = await instance.post("/News/CreateNewsComment", obj);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  export default AddArticleCommentAPI