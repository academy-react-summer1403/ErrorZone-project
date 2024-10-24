import React from 'react'
import instance from '../../../interceptor'

const ResetConfirmValue = async (configValue) => {
try {
    const response = await instance.get(`/Sign/Reset/${configValue}`)
    return response
} catch (error) {
    return console.log('errorring', error)
}
}

export default ResetConfirmValue