import React from 'react'
import instance from '../../interceptor'

const GetMyNewsComments = async () => {
  
try {
    const res  = await instance.get("/SharePanel/GetMyNewsComments")
    return res
} catch (error) {
    return false
}
  
}

export default GetMyNewsComments