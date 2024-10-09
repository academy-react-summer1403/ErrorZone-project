import React from 'react'
import CourseCard from '../../common/CourseCard'
import Regtangle from './../../../assets/images/CardsImage/Rectangle.png'

const ArticleDetailSimilarCard = () => {
  return (
    <>
    <h1 className='w-[125px] h-[29px] font-DanaFaNum-700 text-xl text-gray-800 '>   دوره های مرتبط  </h1>
    <div className='mt-6'> 
    
       <CourseCard item={{cost: 45000000 , teacherName:'محمدرضا' , title:'دوره ی ری اکت جی اس' , typeName:'برنامه نویسی' , levelName:'مقدماتی' }} />
    </div>
    </>
  )
}

export default ArticleDetailSimilarCard