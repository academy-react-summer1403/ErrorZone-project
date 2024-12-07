import instance from "../../interceptor";

 const getMyCommentsCourse = async () => {
    try {
    const result = await instance.get('/SharePanel/GetMyCoursesComments');
  
    return result
    
    } catch (error) {
      console.log(error.message)
    }
  }

  export default getMyCommentsCourse