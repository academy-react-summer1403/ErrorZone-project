import React from 'react'
import instance from '../../interceptor'

const ArticleLike = async (articleId) => {
try {
    const response = await instance.post(`/News/NewsLike/${articleId}`)
    return response
} catch (error) {
    return 0
}
}

export default ArticleLike