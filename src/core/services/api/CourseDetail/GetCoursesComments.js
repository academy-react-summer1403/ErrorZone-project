import instance from "../../interceptor";

 const GetCommentsCourse = async (params) => {
    try {
    const result = await instance.get('/Course/GetCourseCommnets/' + params.id);
  
    return result
    
    } catch (error) {
      console.log(error.message)
    }
  }

  export default GetCommentsCourse