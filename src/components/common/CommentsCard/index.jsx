import { ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React , {useState , useEffect} from 'react'
import GetNewsComments from '../../../core/services/api/ArticlesDetail/getNewsComments'

const CommentsCard = () => {
    const [currentLike, setCurrentsLike] = useState(12)
    const [isUserLike, setIsUserLike] = useState(false)   
    const [isUserDislike, setIsUserDislike] = useState(false)  
    const [currentDislike, setCurrentDislike] = useState(25)    

    const handleLike = () => {
        setCurrentsLike((prev) => prev+1)
        setIsUserLike(!isUserLike)
    }

    const hanldeDislike = () => {
      setCurrentDislike((prev) => prev-1)
      setIsUserDislike(!isUserDislike)
    }


        const getCommentsApi = async () => {
          const res = await GetNewsComments()
          console.log("news comments" , res)
        }

        useEffect(() => {
          getCommentsApi()
        }, [])
        


  return (
    <div className='bg-gray-100 w-[324px] h-[282px] rounded-[24px] grid grid-cols-1 items-center pt-4 pr-4 pl-4 pb-4 '>
       <p className='w-[292px] h-[26px] font-DanaFaNum-700 text-lg text-black  mx-auto '>      این مقاله خوب بود  </p>
       <p className='w-[292px] h-[157px] mx-auto mt-4 font-DanaFaNum-500 text-base text-gray-800'>   این مقاله عجیب خوب بود و ما دراین لحظه توانایی مقابله با ان هها را نداریم  </p>
       
       <div className=' w-[292px] h-[42px] mx-auto grid grid-cols-2 items-center gap-[50px] '>   
         <div className='w-[100px] h-[41px]  grid grid-cols-2 ' > 
           <div className='bg-green-400 w-[40px] h-[40px] rounded-[134px]'>   </div>         
           <div className=' w-[93px] h-[41px] grid grid-cols-1 '> 
             <span className=' w-[93px] h-[20px] font-DanaFaNum-600 text-sm text-black' > محمد یعقوب   </span>
             <span className=' w-[93px] h-[17px] font-DanaFaNum-500 text-xs text-gray-800 text-nowrap' >    1400 /اردیبهشت / 2 </span>
           </div>         
        </div>
         <div className=' w-[103px] h-[24px] grid grid-cols-2  mb-[-10px]  '> 
          <div className=' w-[49x] h-[24px] grid grid-cols-2 cursor-pointer'> 
           {isUserLike ? (<i className='w-[24px] h-[24px] text-green-700 ' onClick={handleLike}>  <ThumbsUpIcon   className='relative bottom-1  text-blue'/>   </i>) 
           : (<i className='w-[24px] h-[24px] ' onClick={handleLike}>  <ThumbsUpIcon  className='relative bottom-1'/>   </i>
           )}
             <span className='w-[17px] h-[23px] font-DanaFaNum-500 text-base text-black pr-2'>   {currentLike}  </span>            
          </div>
          <div className=' w-[49px] h-[24px] grid grid-cols-2  mr-4'> 
            {isUserDislike ? (<i className='w-[24px] h-[24px] text-red' onClick={hanldeDislike}> <ThumbsDownIcon />   </i> )
            : (<i className='w-[24px] h-[24px]' onClick={hanldeDislike}> <ThumbsDownIcon />   </i>)
            }                    
             <span className='w-[17px] h-[23px] font-DanaFaNum-500 text-base text-black pr-2'>   {currentDislike}  </span>                            
         </div>
        </div>
      </div>
    </div>
  )
}

export default CommentsCard