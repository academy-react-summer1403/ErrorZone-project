import React from 'react'
import instance from '../../interceptor'

const GetNewsComments = async () => {
  try {
     response = await instance.get(`/News/GetNewsComments?NewsId=${newsId}`)
     return response
  } catch (error) {
    return 0
  }
}

export default GetNewsComments