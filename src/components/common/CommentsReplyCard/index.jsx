import React , {useState} from 'react'
import { ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import CommentsReplyForm from '../CommentsReplyForm'

const CommentsReplyCard = () => {
    const [isRepleyCommentsOpen, setIsRepleyCommentsOpen] = useState(false)  
    const [isUserLike, setIsUserLike] = useState(false) 
    const [currentLike, setCurrentsLike] = useState(12)
    const [currentDislike, setCurrentDislike] = useState(100)   
    const [isUserDislike, setIsUserDislike] = useState(false)      

    const handleLike = () => {
        setCurrentsLike((prev) => prev+1)
        setIsUserLike(!isUserLike)
    }

    const handleDislike = () => {
         setCurrentDislike((prev) => prev-1)
         setIsUserDislike(!isUserDislike)
    }

  return (
    <div className='w-[803px] relative right-[24px] top-[-16px]'>   
    <div className='w-[149px] h-[48px] flex gap-2 items-center'>  
      <div className='w-[48px] h-[48px] rounded-[134px] bg-blue'>    </div>
      <div className='w-[93px] h-[41px] grid grid-cols-1'>  
        <label className='w-[93px] h-[20px] font-DanaFaNum-600 text-base'>  محمدرضا  </label>
        <span className='w-[120px] h-[17px] font-DanaFaNum-500 text-sm text-gray-800'>  1401/اردیبهشت/1  </span>
      </div>                    
    </div>
    <div className='w-[803px] h-[80px] grid grid-cols-1 relative top-[12px] right-[8px]'> 
      <p className='w-[264px] h-[26px] font-DanaFaNum-700 text-lg'>    واقعا دوره ی خوبی بود   </p> 
      <p className='w-[803px] h-[46px] font-DanaFaNum-500 text-base overflow-hidden'>      واقعا دورهی خوبی بود بهتر از این دوره من نمیتونستم پیدا کنم ولی در این زمانه ارزو اینه   </p>
    </div> 
    <div className='w-[226px] h-[72px] relative-[-30px]  grid grid-cols-3 items-center '>  
    <div className=' w-[103px] h-[24px] grid grid-cols-2 relative top-[-20px] right-[8px] pt-2 '> 
           <div className=' w-[49x] h-[24px] grid grid-cols-2 '> 
         {isUserLike ? (<i className='w-[24px] h-[24px] text-green-700 ' onClick={handleLike}>  <ThumbsUpIcon />   </i>) 
         : (<i className='w-[24px] h-[24px] ' onClick={handleLike}>  <ThumbsUpIcon />   </i>
         )}
        <span className='w-[17px] h-[23px] font-DanaFaNum-500 text-base text-black pr-1'>   {currentLike}  </span>            
        </div>
         <div className=' w-[49px] h-[24px] grid grid-cols-2 pr-2'>   
           {isUserDislike ? (<i className='w-[24px] h-[24px] text-red' onClick={handleDislike}> <ThumbsDownIcon />   </i> )
           : (<i className='w-[24px] h-[24px]' onClick={handleDislike}> <ThumbsDownIcon />   </i>)
           }          
                
           <span className='w-[17px] h-[23px] font-DanaFaNum-500 text-base text-black pr-2'>   {currentDislike}  </span>                            
          </div>
         </div> 
        {isRepleyCommentsOpen ? (<CommentsReplyForm />)
        : (<button className='w-[99px] h-[39px] rounded-[40px] border border-blue text-blue bg-white font-DanaFaNum-500 text-base relative right-[64px] top-[-17px]' onClick={() => setIsRepleyCommentsOpen(true)} >     جواب دادن   </button>)
        }                      
    </div>                                      
</div>     
  )
}

export default CommentsReplyCard