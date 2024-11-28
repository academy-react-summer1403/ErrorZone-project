import React from 'react'
import instance from '../../interceptor';

const PostCourseToReserv = async (obj) => {
  try {
    const result = await instance.post("/CourseReserve/ReserveAdd", obj);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}

export default PostCourseToReserv