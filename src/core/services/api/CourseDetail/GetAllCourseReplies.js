import instance from "../../interceptor";

const GetAllCourseREplies = async (params) => {
    try {
    const result = await instance.get(`/Course/GetCourseReplyCommnets/${params.Oid}/${params.commentId}`);
  
    return result
    
    } catch (error) {
    console.log(error);
      return [];
    }
  }

  export default GetAllCourseREplies