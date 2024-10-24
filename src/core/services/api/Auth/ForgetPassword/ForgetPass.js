import React from 'react'
import instance from '../../../interceptor'

const ForgetPass = async (value) => {
try {
    const response = await instance.post('/Sign/ForgetPassword' , value)
    return response
} catch (error) {
    return false
}
}

export default ForgetPass