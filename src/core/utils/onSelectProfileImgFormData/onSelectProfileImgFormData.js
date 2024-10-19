import React from 'react'

const onSelectProfileImgFormData = (value) => {
const selectImageData = new FormData()

selectImageData.append("ImageId", value)
return selectImageData
}

export default onSelectProfileImgFormData