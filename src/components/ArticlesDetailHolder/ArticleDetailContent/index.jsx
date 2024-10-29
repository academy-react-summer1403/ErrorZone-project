import React , {useState , useEffect} from 'react'
import AddCommentsCard from '../../common/AddCommentsCard'
import CommentsCard from '../../common/CommentsCard'
import ArticleDetail from '../../../core/services/api/ArticlesDetail/ArticleDetails'
import { useParams, useSearchParams } from 'react-router-dom'
import ArticleDetailSimilarCard from '../ArticleDetailSimilarCard'
import { getQuery } from '../../../core/services/api/reactQuery/getQuery'
import { useQuery } from '@tanstack/react-query'
import ViewMoreBtn from '../../common/ViewMoreBtn/ViewMoreBtn'

import ArticleDetailMainInfo from '../ArticleDetailMainInfo/ArticleDetailMainInfo'
import ArticleDetails from '../../../core/services/api/ArticlesDetail/ArticleDetails'
import ArticleDetailDescribe from '../ArticleDetailDescribe/ArticleDetailDescribe'

import { usequery } from '../../../core/services/api/reactQuery/useQuery'
import AddCourseCommentCard from '../../common/CourseCommentCard/AddCourseCommentCard'
import CourseCommentCard from '../../common/CourseCommentCard/CourseCommentCard'



const ArticleDetailContent = () => {
  // const [comments , setComments] = useState([])
const [deatil, setDeatil] = useState([])
const [changeFlag, setChangeFlag] = useState(false)

const changeFlager = () => {
  setChangeFlag(!changeFlag)
}

   const {articleId} = useParams()



  //  const response = getQuery('newsComment', `/News/GetNewsComments?NewsId=${articleId}`);
  //  console.log("redes" , response?.slice(0 , 3));
     
  //  const {data, isLoading, error} = useQuery({
  //  queryKey: ['newsComment']
  // })

        getQuery('newsComment', `/News/GetNewsComments?NewsId=${articleId}`);
        const response = usequery('newsComment');
        console.log("redes" , response?.slice(0 , 3));
     
//  useEffect(() => {
//    getArticlesDetail()
 
//  }, [])
  //  const {data, isLoading, error} = useQuery({
  //  queryKey: ['newsComment']
  // })


//  if(isLoading) return <div>loading ...</div>
//  if(error) return <div>error</div>

const GetArticleNews = async () => {
  const res = await ArticleDetails(articleId)
  setDeatil(res)
  
}

useEffect(() => {
 GetArticleNews()
}, [changeFlag])

  return (
    <div className='pr-20 mt-3 '>
       <div className='w-full max-w-[1520px] desktop:h-[324px] h-auto mx-auto mb-[111px] pl-14'>   
      <ArticleDetailMainInfo data={deatil} changeFlager={changeFlager}/>
       </div>
      <div className='w-full max-w-[1520px] desktop:h-[324px] h-auto mx-auto pt-[56px] pl-14'> 
        <ArticleDetailDescribe data={deatil}/>
      </div>
    <div className='w-full max-w-[1520px]  h-auto mx-auto mb-[111px]'>
       <h1 className='w-[219px] h-[29px] font-DanaFaNum-700 text-xl  text-gray-800 mb-6'>   نظرات دانشجو ها و اساتید   </h1>
        
          {/* <div className=' flex gap-7 pr-10 flex-wrap'>
        <AddCommentsCard  />
         {response?.slice(0,3).map((item , index) => {
          return (<CommentsCard key={index} data={item}/>) 
        })}  
      </div> */}
     
     <div className="grid grid-cols-12 gap-5">
       {/* <AddCourseCommentCard /> */}
      <AddCommentsCard  />
      {
        
        response?.slice(0,3).map((item, index) => {
          return <CommentsCard key={index} data={item}/>
        }) 
      }
    </div>


       <div className='flex justify-center pt-6  '>  <ViewMoreBtn />   </div>
    </div>
      <div  className='w-full max-w-[1520px]  h-auto mx-auto'> 
        <h1 className='w-[219px]  font-DanaFaNum-700 text-xl  text-gray-800 mb-6'>   دوره های مرتبط </h1>
       <div className='' >  
       <ArticleDetailSimilarCard />
      </div>
    </div>
    </div>
  )
}

export default ArticleDetailContent