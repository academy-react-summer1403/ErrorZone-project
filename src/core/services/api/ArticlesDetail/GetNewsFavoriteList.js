import React from 'react'
import instance from '../../interceptor'

const GetNewsFavoriteList = async () => {
 try {
    const res = await instance.get('/SharePanel/GetMyFavoriteNews')
    return res
 } catch (error) {
    return 0
 }
}

export default GetNewsFavoriteList