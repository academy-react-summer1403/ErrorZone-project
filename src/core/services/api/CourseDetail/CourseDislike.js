import React from 'react'
import instance from '../../interceptor';

 const DissLikeCourseAPI = async (id) => {
  try {
    const result = await instance.post(`/Course/AddCourseDissLike?CourseId=${id}`);
    console.log(result , "Successfully added")
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default DissLikeCourseAPI

export const DeleteLikeCourseAPI = async (obj) => {
  try {
    const result = await instance.delete("/Course/DeleteCourseLike", {
      data: obj,
    });
    console.log(result , "Successfully deleted")
    return result;
  } catch (error) {
    console.log(error);
  }
};