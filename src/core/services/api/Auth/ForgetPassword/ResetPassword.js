import React from 'react'
import instance from '../../../interceptor'

const ResetPassword = async (value) => {
try {
    const response = await instance.post('/Sign/Reset' , value)
    return response 
} catch (error) {
    return false
}
}

export default ResetPassword