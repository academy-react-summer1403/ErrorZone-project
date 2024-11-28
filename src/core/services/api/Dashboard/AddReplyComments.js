import instance from "../../interceptor";

export const addReplyComment = async (formData) => {
    try {
    const result = await instance.post('/Course/AddReplyCourseComment', formData);
  
    return result
    
    } catch(error){
    
   }
  }