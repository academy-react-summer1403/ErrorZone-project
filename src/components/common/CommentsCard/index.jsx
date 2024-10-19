import { ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React , {useState , useEffect} from 'react'
import { useParams } from 'react-router'
import GetNewsComments from '../../../core/services/api/ArticlesDetail/getNewsComments'
import { getQuery } from '../../../core/services/api/reactQuery/getQuery'
import { MakeDatePersian } from '../../../core/utils/MakeDatePersian.js/MakeDatePersian'
import NewsLike from '../../../core/services/api/ArticlesDetail/NewsLike'
import ArticleDetailDissLike from '../../../core/services/api/ArticlesDetail/ArticleDetailDissLike'
import { SuccessToastify } from '../../../core/utils/Toastifies/SuccessToastify.Utils'
import {ErrorToastify} from '../../../core/utils/Toastifies/ErrorToastify.Utils'
import { ErrorMessage } from 'formik'
import NoPhoto from './../../../assets/images/NoPhoto/nophoto.png' 
import ArticleDetails from '../../../core/services/api/ArticlesDetail/ArticleDetails'

const CommentsCard = ({response}) => {
    const currentUserIsLike = response.currentUserIsLike;
    const currentLikeCount = response.likeCount;
    const currentUserIsdissLike = response.currentUserIsDissLike;
    const dissLikeCount = response.dissLikeCount;
    const date = response.inserDate;
    // console.log('isUserLike' , currentUserIsLike)
    // console.log('isUserdisslike' , currentUserIsdissLike)

    const [currentLike, setCurrentsLike] = useState(currentLikeCount)
    const [isUserLike, setIsUserLike] = useState(currentUserIsLike) 
    const [currentDislike, setCurrentDislike] = useState(dissLikeCount)      
    const [isUserDislike, setIsUserDislike] = useState(currentUserIsdissLike)  
    const [newsList, setNewsList] = useState([])
     
 

    // const resualts = response 

    const id = response.newsId

    const handleLike = async () => {
    const res = await NewsLike(id)
    // console.log('liked' , res)
    // const GetDetail = ArticleDetails(id)
    // setNewsList(GetDetail)


    // if(res.ErrorMessagemassege === true){
    //     SuccessToastify(ErrorMessage)
    // } else{
    //     // ErrorToastify(ErrorMessage)
    //   }
      setIsUserLike(!isUserLike)
    console.log('likes' , isUserLike)
    console.log('likecount' , currentLike)

      // setCurrentsLike((prev) => prev + 1)

    }

    const handleDissLike = async () => {
      const resault = await ArticleDetailDissLike(id)
      setIsUserDislike(!isUserDislike)
      console.log('dislike' , isUserDislike)
      console.log('disslikecount' , currentDislike)
      // setCurrentDislike((prev) => prev + 1)
    }


  return (
    <div className=' bg-gray-100 dark:bg-gray-800  phone:w-full  tablet:w-[324px] h-[282px] rounded-[24px] grid grid-cols-1 items-center pt-4 pr-4 pl-4 pb-4 '>
       <p className='w-[292px] h-[26px] font-DanaFaNum-700 text-lg text-black  mx-auto dark:text-white '>    {response.title}  </p>
       <p className='w-[292px] h-[157px] mx-auto mt-4 font-DanaFaNum-500 text-base text-gray-800 dark:text-white'>  {response.describe} </p>
       
       <div className=' w-[292px] h-[42px] mx-auto grid grid-cols-2 items-center gap-[50px] '>   
         <div className='w-[100px] h-[41px]  grid grid-cols-2 ' > 
           <div className='bg-green-400 w-[40px] h-[40px] rounded-[134px]'> {response.pictureAddress ? '' : <img className='w-[40px] h-[40px] rounded-[134px]' src={NoPhoto} />}    </div>         
           <div className=' w-[93px] h-[41px] grid grid-cols-1 '> 
             <span className=' w-[93px] h-[20px] font-DanaFaNum-600 text-sm text-black text-nowrap relative top-[5px] dark:text-white' > {response.autor ? '' : 'اسمی وجود ندارد'} </span>
             <span className=' w-[93px] h-[17px] font-DanaFaNum-500 text-xs text-gray-800 text-nowrap pt-1 dark:text-white' >  {MakeDatePersian(date)}     </span>
           </div>         
        </div>
         <div className=' w-[103px] h-[24px] grid grid-cols-2  mb-[-10px] pr-3 dark:text-black'> 
          <div className=' w-[49x] h-[24px] grid grid-cols-2 cursor-pointer pr-3' onClick={handleLike}> 
           {isUserLike ? (<i className='w-[24px] h-[24px] ' >  <ThumbsUpIcon  className='relative bottom-1'/>   </i>) 
           
           : (<i className='w-[24px] h-[24px] text-blue cursor-pointer'>  <ThumbsUpIcon   className='relative bottom-1  text-blue'/>   </i>
           )}
             <span className='w-[17px] h-[23px] font-DanaFaNum-500 text-base text-black pr-3'>   {currentLike}  </span>            
          </div>
          <div className=' w-[49px] h-[24px] grid grid-cols-2  mr-4 dark:text-black'> 
            {isUserDislike ? (<i className='w-[24px] h-[24px] text-red cursor-pointer' onClick={handleDissLike}> <ThumbsDownIcon />   </i> )
            : (<i className='w-[24px] h-[24px]' onClick={handleDissLike}> <ThumbsDownIcon />   </i>)
            }                    
             <span className='w-[17px] h-[23px] font-DanaFaNum-500 text-base text-black pr-2'>   {currentDislike}  </span>                            
         </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsCard