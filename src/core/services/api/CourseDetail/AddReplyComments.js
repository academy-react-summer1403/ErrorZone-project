import instance from "../../interceptor";

 const AddReplyComment = async (formData) => {
    try {
    const result = await instance.post('/Course/AddReplyCourseComment', formData);
  
    return result
    
    } catch(error){
      if(error.response.data.ErrorMessage){
         toast.error(error.response.data.ErrorMessage + '  ' + error.response.data.StatusCode)
      }
      else{
         toast.error(' مشکلی پیش آمده است ')
     }
   }
  }

  export default AddReplyComment