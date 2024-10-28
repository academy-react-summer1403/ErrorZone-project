import React from 'react'
import instance from '../../interceptor'

const DeleteFavNews = async (value) => {
try {
    const res = await instance.delete('/News/DeleteFavoriteNews' , {data : value})
    return res
} catch (error) {
    return 0
}
}

export default DeleteFavNews