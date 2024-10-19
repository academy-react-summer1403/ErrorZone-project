import React from 'react'
import instance from '../../interceptor'

const GetCurrentUserProfile = async () => {
try {
    const response = await instance.get("/SharePanel/GetProfileInfo")
    return response;
} catch (error) {
    return console.log('err' , error)
}
}

export default GetCurrentUserProfile
