import React from 'react'
import instance from '../../interceptor'

const ArticleDetailDissLike = async (newsId) => {
    try {
         const res = await instance.post(`/News/NewsDissLike/${newsId}`)
         return res
    } catch (error) {
        return error
    }
}

export default ArticleDetailDissLike