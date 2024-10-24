import React , {useState , useEffect} from 'react'
import AddCommentsCard from '../../common/AddCommentsCard'
import CommentsCard from '../../common/CommentsCard'
import ArticleDetail from '../../../core/services/api/ArticlesDetail/ArticleDetails'
import { useParams, useSearchParams } from 'react-router-dom'
import ArticleDetailSimilarCard from '../ArticleDetailSimilarCard'
import { getQuery } from '../../../core/services/api/reactQuery/getQuery'
import { useQuery } from '@tanstack/react-query'
import ViewMoreBtn from '../../common/ViewMoreBtn/ViewMoreBtn'
import { usequery } from '../../../core/services/api/reactQuery/useQuery'


const ArticleDetailContent = () => {
  // const [comments , setComments] = useState([])

   const {articleId} = useParams()

    // const getArticlesDetail = async () => {
    //     const res = await ArticleDetail(articleId)
    //     console.log("resault" , res)
    // }

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


  return (
    <div className='pr-20 mt-3 '>
    <div className='w-full max-w-[1520px] desktop:h-[324px] h-auto mx-auto mb-[111px]'>
       <h1 className='w-[219px] h-[29px] font-DanaFaNum-700 text-xl  text-gray-800 mb-6'>   نظرات دانشجو ها و اساتید   </h1>
      {/* <div  className=' desktop:w-full desktop:max-w-[1520px] w-auto desktop:h-[324px] h-auto  tablet:bg-yellow-300  place-content-center desktop:bg-green-500   grid  desktop:grid-cols-4  '>  */}      
        {/* <div  className=' desktop:w-full desktop:max-w-[1520px] w-auto desktop:h-[324px] h-auto  phone:grid phone:gap-10 phone:place-content-center  phone:grid-cols-1 tablet:grid-cols-2  tablet:grid-rows-2 tablet:grid tablet:place-content-center tablet:gap-2 place-content-center  desktop:flex  desktop:gap-6'> */}
          <div className='wrapper flex justify-around flex-wrap items-center gap-6'>
        <AddCommentsCard  />
         {response?.slice(0,3).map((item , index) => {
          return (<CommentsCard key={index} data={item}/>) 
        })}  


        {/* <div className='bg-red'>    
          <ViewMoreBtn />            
        </div>      */}
       </div> 
       <div className='flex justify-center pt-6 '>  <ViewMoreBtn />   </div>
    </div>
      <div  className='w-full max-w-[1520px]  h-auto mx-auto'> 
        <h1 className='w-[219px] h-[29px] font-DanaFaNum-700 text-xl  text-gray-800 mb-6'>   دوره های مرتبط </h1>
       <div >  
       <ArticleDetailSimilarCard />
      </div>
    </div>
    </div>
  )
}

export default ArticleDetailContent