import React from 'react'
import instance from '../../interceptor';

const CourseAddToFavorite = async (courseId) => {
    try {
        const res = await instance.post("/Course/AddCourseFavorite", {
          courseId: courseId,
        });
        return res;
      } catch (err) {
        console.log(err.resposne);
        return 0;
      }
}

export default CourseAddToFavorite