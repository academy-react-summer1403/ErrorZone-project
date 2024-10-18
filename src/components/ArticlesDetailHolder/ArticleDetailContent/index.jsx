import React , {useEffect} from 'react'
import AddCommentsCard from '../../common/AddCommentsCard'
import CommentsCard from '../../common/CommentsCard'
import ArticleDetail from '../../../core/services/api/ArticlesDetail/ArticleDetails'
import { useParams, useSearchParams } from 'react-router-dom'
import ArticleDetailSimilarCard from '../ArticleDetailSimilarCard'


const ArticleDetailContent = () => {
   // const [params] = useSearchParams()
   // const articleId = params.get("")  
   const {articleId} = useParams()

    const getArticlesDetail = async () => {
        const res = await ArticleDetail(articleId)
        console.log("res" , res)
    }
     
 useEffect(() => {
   getArticlesDetail()
 
 }, [])
 

  return (
    <div className='pr-20 mt-3 '>
    <div className='w-full max-w-[1520px] h-[324px] mx-auto'>
       <h1 className='w-[219px] h-[29px] font-DanaFaNum-700 text-xl text-gray-800 mx-aut0'>   نظرات دانشجو ها و اساتید   </h1>
      <div  className=' w-full max-w-[1520px] h-[324px]  grid grid-cols-4 items-center gap-[22px] mx-auto '> 
        <AddCommentsCard />
        <CommentsCard /> 
       </div> 
    </div>
    <div className=' w-full max-w-[1520px] mt-[111px]  mx-auto'>  
       <ArticleDetailSimilarCard />
    </div>
    </div>
  )
}

export default ArticleDetailContent