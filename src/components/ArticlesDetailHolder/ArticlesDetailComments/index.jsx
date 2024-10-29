import React from 'react'
import AddCommentsCard from '../../common/AddCommentsCard'
import CommentsCard from '../../common/CommentsCard'
import ArticleDetailSimilarCard from '../ArticleDetailSimilarCard'

const ArticlesDetailComments = () => {
  return (
    <>
    <div className=' w-full max-w-[1520px] h-[324px] grid grid-cols-4 items-center gap-[22px] mx-auto'>
        <AddCommentsCard />
        <CommentsCard /> 
    </div>
        {/* <div className=' w-full max-w-[1520px] h-[324px]  mx-auto bg-red'>  </div> */}
   </>
  )
}

export default ArticlesDetailComments