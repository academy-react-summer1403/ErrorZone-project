import React from 'react'
import instance from '../../interceptor'
import  onSetFormData  from '../../../utils/onSetFormData/onSetFormData'

const ArticleDetailReplyComments = async (data) => {
   try {
    // const myFormData = onSetFormData(data)
        const response = await instance.post(`/News/CreateNewsReplyComment?id=${data.parentId}` , data)
        // const res = await instance.post(`/News/CreateNewsReplyComment?id=${data.newsId}` , data)
     return response

   } catch (error) {
      console.log('replyerror' , error)
      //  console.log('ress' , error.message)
      return error
   }
  
}


export default ArticleDetailReplyComments