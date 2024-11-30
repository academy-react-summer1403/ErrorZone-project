import instance from "../../interceptor";

 const GetAllReplies = async (id) => {
    try {
    const result = await instance.get(`/News/GetRepliesComments?Id=${id}`);
  
    return result
    
    } catch (error) {
    console.log(error);
      return [];
    }
  }

  export default GetAllReplies