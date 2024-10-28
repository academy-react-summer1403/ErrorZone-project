import React from 'react'
import instance from '../../interceptor'

const ArticleAddToFavorite = async (newsId) => {
try {
    const res = await instance.post(`/News/AddFavoriteNews?NewsId=${newsId}`)
    return res
} catch (error) {
    return 0
}
}

export default ArticleAddToFavorite