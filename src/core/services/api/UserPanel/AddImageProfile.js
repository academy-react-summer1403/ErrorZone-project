import React from 'react'
import instance from '../../interceptor'

const AddImageProfile = async (value) => {
 try {
    const res = await instance.post('/SharePanel/AddProfileImage', value)
    return res
 } catch (error) {
    console.log('error', error)
 }
}

export default AddImageProfile