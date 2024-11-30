import instance from "../../interceptor";

 const GetRepliesNew  = async (id) => {
    try {
    const result = await instance.get(`/News/GetRepliesComments?Id=${id}`);
  
    return result
    
    } catch (error) {
    console.log(error);
      return [];
    }
  }

  export default GetRepliesNew