import React from 'react'
import instance from '../../interceptor'

const ArticleDetailsCommentsLike = async (CommentId) => {
    try {
        const res = await instance.post(`/News/CommentLike/${CommentId}`)
        return res
    } catch (error) {
        return 0
    }
  
}

export default ArticleDetailsCommentsLike