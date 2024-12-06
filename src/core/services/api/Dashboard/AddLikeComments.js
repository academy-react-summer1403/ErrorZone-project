import instance from "../../interceptor";

 const AddLikeComment = async (id) => {
    try {
    const result = await instance.post(`/Course/AddCourseCommentLike?CourseCommandId=${id}`);
  
    return result
    
    } catch (error) {
      return [error.message, error.status]
    }
  }

  export default AddLikeComment