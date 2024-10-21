import React from 'react'
import instance from '../../interceptor'

const GetNewsComments = async (newsId) => {
  try {
     response = await instance.get(`/News/GetNewsComments?NewsId=${newsId}`)
     return response
  } catch (error) {
   return error
  }
}

export default GetNewsComments