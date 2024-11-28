import React from 'react'
import instance from '../../interceptor'

const DeleteImageProfile = async (value) => {
    try {
        const response = await instance.delete("/SharePanel/DeleteProfileImage", {
          data: value,
        });
    
        return response;
      } catch (error) {
        return false;
      }
}

export default DeleteImageProfile