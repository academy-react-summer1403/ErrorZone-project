import React from 'react'
import instance from '../../interceptor';

const CourseLike =  async (courseId) => {
    try {
        const res = await instance.post(
          `/Course/AddCourseLike?CourseId=${courseId}`
        );
        return res;
      } catch (err) {
        console.log(err.response);
        return 0;
      }
}

export default CourseLike

export const LikeCourseAPI = async (params) => {
  try {
    const result = await instance.post(`/Course/AddCourseLike?CourseId=${params.id}`);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};