import instance from "../../interceptor";

 const AddDissLikeComment = async (id) => {
    try {
    const result = await instance.post(`/Course/AddCourseCommentDissLike?CourseCommandId=${id}`);
  
    return result
    
    } catch (error) {
    console.log(error);
      return error.message;
    }
  }

  export default AddDissLikeComment