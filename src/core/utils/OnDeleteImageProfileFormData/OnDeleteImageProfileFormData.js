import React from 'react'
const OnDeleteImageProfileFormData = (value) => {
    const deleteImageData = new FormData();

    deleteImageData.append("DeleteEntityId", value);
  
    return deleteImageData;
}

export default OnDeleteImageProfileFormData