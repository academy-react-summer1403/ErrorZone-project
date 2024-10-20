import React from 'react'
import instance from '../../interceptor'

const UpdateProfileInfo = async (value) => {
try {
    const res = await instance.put('/SharePanel/UpdateProfileInfo' , value)
    return res
} catch (error) {
     console.log('error' , error)
}
}

export default UpdateProfileInfo