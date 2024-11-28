import instance from '../../interceptor';

const CourseAddToFavorite = async (obj) => {

  try {
    const result = await instance.post("/Course/AddCourseFavorite", obj);
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
};

export default CourseAddToFavorite


export const DeleteArchiveCourseAPI = async (obj) => {
  try {
    const result = await instance.delete("/Course/DeleteCourseFavorite", {
      data: obj,
    });
    return result;
  } catch (error) {
    console.log(error);
  }

};