import React from 'react'
import instance from '../../interceptor'

const RateArticle = async (newsid , rate) => {
  try {
    const res = await instance.post(`/News/NewsRate?NewsId=${newsid}&RateNumber=${rate}`)
    return res
  } catch (error) {
     return 0
  }
}

export default RateArticle