import instance from "../../interceptor";

 const AddLikeCommentNew = async (id, likeType) => {
    try {
    const result = await instance.post(`/News/CommentLike/${id}?LikeType=${likeType}` );
  
    return result
    
    } catch (error) {
      return [error.message, error.status]
    }
  }

  export default AddLikeCommentNew