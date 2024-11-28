import React from 'react'
import instance from '../../interceptor';

const CourseDislike = async (courseId) => {
    try {
        const res = await instance.post(
          `/Course/AddCourseDissLike?CourseId=${courseId}`
        );
        return res;
      } catch (err) {
        console.log(err.response);
        return 0;
      }
}

export default CourseDislike