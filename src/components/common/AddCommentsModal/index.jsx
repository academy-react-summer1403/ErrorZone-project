import { TextVerticalAlignmentIcon } from 'hugeicons-react'
import React from 'react'
import CommentsReplyCard from '../CommentsReplyCard'

const AddCommentsModal = ({isOpen , onClose}) => {

  return (
    <div className={`fixed top-[30%] right-[35%]    ${isOpen ? "visible bg-white/100 w-[851px] h-[600px] z-50 absolute" : "invisible"}`}>
        <div className=' w-[100%] h-[100%] grid grid-cols-1 border-2 border-gray-400'>
          <div className='w-[100%] h-[100px] '>   
            <h1 className='w-[263px] h-[34px] relative top-[24px] right-[24px] font-DanaFaNum-700 text-2xl text-black'>  نظرات دانشجو ها و اساتید   </h1>
            <button className='text-red w-[101px] h-[40px] bg-white rounded-[34px] border border-red absolute top-[21px] left-[24px] grid grid-cols-2 items-center' onClick={onClose}> <div className='w-[20px] h-[20px] pr-[20px]'> X  </div>  <div className='w-[41px] h-[26px] font-DanaFaNum-500 text-[18px] relative left-[7px]'> بستن </div>    </button>
          </div>
          <div className='w-[90%] h-[50px] relative top-[-20px]  right-[24px]' >  
          <span className='bg-blue w-[107px] h-[40px] rounded-[40px] border border-blue  text-white flex justify-center items-center'>  
             <TextVerticalAlignmentIcon />
             <p className='pr-1 font-DanaFaNum-500 text-base'>  نظر شما  </p>
          </span>
         </div>
            <div className='w-[100%] h-[500px]'>  
                <CommentsReplyCard  />
            </div>
        </div>
    </div>
  )
}

export default AddCommentsModal