import React from 'react'
import instance from '../../interceptor';

const PostCourseToReserv = async (courseId) => {
    try {
        const res = await instance.post("/CourseReserve/ReserveAdd", {
          courseId: courseId,
        });
        return res;
      } catch (err) {
        console.log(err);
        return [];
      }
}

export default PostCourseToReserv