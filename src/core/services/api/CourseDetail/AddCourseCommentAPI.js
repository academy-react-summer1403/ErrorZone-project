import instance from "../../interceptor";

const AddCourseCommentAPI = async (obj) => {
    try {
      const result = await instance.post("/Course/AddCommentCourse", obj);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  export default AddCourseCommentAPI