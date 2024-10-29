import React from 'react'
import instance from '../../interceptor';

const DeleteCourseFavorite = async (CourseFavoriteId) => {
    const data = new FormData();
    data.append("CourseFavoriteId", CourseFavoriteId);
  
    try {
      const res = instance.delete("/Course/DeleteCourseFavorite", { data: data });
      return res;
    } catch (err) {
      console.log(err.response);
      return 0;
    }
}

export default DeleteCourseFavorite