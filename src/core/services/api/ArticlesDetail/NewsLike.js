import React from 'react'
import instance from '../../interceptor'

const NewsLike = async (newsId) => {
try {
    const res = await instance.post(`/News/NewsLike/${newsId}`)
    return res
} catch (error) {
    return error
}
}

export default NewsLike