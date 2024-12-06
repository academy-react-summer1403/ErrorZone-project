import instance from "../../interceptor";

 const CommentReplayAPI = async (courseID,commentId) => {
  try {
    const result = await instance.get(`/Course/GetCourseReplyCommnets/${courseID}/${commentId}`);
    return result;
  } catch (error) {
    console.log(error);
  }
};

  export default CommentReplayAPI