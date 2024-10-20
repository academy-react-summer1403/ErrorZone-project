import React from 'react'
import instance from '../../interceptor'

const SelectImageProfile = async (value) => {
try {
    const response = await instance.post("/SharePanel/SelectProfileImage", value)
    return response
} catch (error) {
    console.log('imageprofileerror' , error)
}
}

export default SelectImageProfile