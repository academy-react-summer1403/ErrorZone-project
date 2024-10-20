import React from 'react'
import CourseCard from '../../common/CourseCard'
import Regtangle from './../../../assets/images/CardsImage/Rectangle.png'
import ViewMoreBtn from '../../common/ViewMoreBtn/ViewMoreBtn'

const ArticleDetailSimilarCard = () => {
  const SimilarCards = [
    {
      id: 1,
      title: "دوره پایتون",
      teacherName:'محمدرضا',
      typeName:'برنامه نویسی',
      cost:88000,
      levelName:'مقدماتی'
    } ,

    {
      id: 2,
      title: "دوره جاوا",
      teacherName:'محمدرضا',
      typeName:'برنامه نویسی',
      cost:45,
      levelName:'مقدماتی'
    } ,
    
     {
      id: 3,
      title: "دوره جی اس",
      teacherName:'رضا',
      typeName:'برنامه نویسی',
      cost:30000000000,
      levelName:'مقدماتی'
    } ,   

       {
       id: 4,
       title: "دوره ری اکت",
       teacherName:'علی',
       typeName:'برنامه نویسی',
       cost:200,
       levelName:'مقدماتی'
     } ,    
  ]


  return (
    <>
    {/* <div className='mt-6 flex gap-8'> 
     {SimilarCards.map((items , index) => {
      // return(   <CourseCard key={index} response={response} item={{cost: 45000000 , teacherName:'محمدرضا' , title:'دوره ی ری اکت جی اس' , typeName:'برنامه نویسی' , levelName:'مقدماتی' }} />)
      return (<CourseCard  item={items}/>)
     })}
    

    </div> */}



<div className="space-y-12">
      <div className="wrapper flex justify-around flex-wrap items-center gap-6">
        {SimilarCards?.map((item, index) => {
          return <CourseCard item={item} key={index} />;
        })}
      </div>
    </div>
    </>
  )
}

export default ArticleDetailSimilarCard