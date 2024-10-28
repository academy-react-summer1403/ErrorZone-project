import React, { useEffect } from 'react'
import NewsMain from '../../components/NewsList/NewsMain/NewsMain'
import { getQuery } from '../../core/services/api/reactQuery/getQuery'
import GsapAnim from '../../components/common/animations/GsapAnim'

const Articles = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  GsapAnim();

  return (
    <div className='w-full max-w-[1520px] mx-auto px-10'>
      <NewsMain />
    </div>
  )
}

export default Articles