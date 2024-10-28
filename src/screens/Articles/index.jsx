import React from 'react'
import NewsMain from '../../components/NewsList/NewsMain/NewsMain'
import { getQuery } from '../../core/services/api/reactQuery/getQuery'

const Articles = () => {
  return (
    <div className='w-full max-w-[1520px] mx-auto px-10'>
      <NewsMain />
    </div>
  )
}

export default Articles