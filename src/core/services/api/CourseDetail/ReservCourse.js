import React from 'react'
import instance from '../../interceptor'

const ReservCourse = async () => {
try {
    const res = await instance.post()
} catch (error) {
    
}
}

export default ReservCourse