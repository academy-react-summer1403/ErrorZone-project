import React, { useEffect } from 'react'
import ArticlesDetailComments from '../../components/ArticlesDetailHolder/ArticlesDetailComments'
import ArticleDetailContent from '../../components/ArticlesDetailHolder/ArticleDetailContent'

const ArticlesDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className=''>
        {/* <ArticlesDetailComments /> */}
        <ArticleDetailContent />
    </div>
  )
}

export default ArticlesDetail