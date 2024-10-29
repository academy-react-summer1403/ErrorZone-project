import React from 'react'
import NewsDetailImagePart from './NewsDetailImagePart/NewsDetailImagePart'
import NewsInfoTable from './NewsInfoTable/NewsInfoTable'
import NewsDetailButtonsPart from './NewsDetailButtonInfo/NewsDetailButtonInfo'
import RateAndPriceNews from './RateAndPriceNews/RateAndPriceNews'


const ArticleDetailMainInfo = ({data , changeFlager}) => {

const response = data?.detailsNewsDto;
console.log('response123', response)
  return (
    
    <div className='flex flex-col-reverse gap-8 tablet:gap-0 tablet:flex-row justify-between items-center flex-nowrap w-full mb-14'>
          
        <NewsDetailImagePart  pic={response?.currentImageAddressTumb ? response?.currentImageAddressTumb : false} />

        <div className="w-full tablet:w-1/2 flex flex-col gap-6 ">

          <div className="font-DanaFaNum-700 text-2xl tablet:text-4xl">
           {response?.title}  
           </div>  

         <NewsInfoTable data={response}/> 

        <RateAndPriceNews data={response}/>  

        <NewsDetailButtonsPart data={response} changeFlager={changeFlager} />  
    </div> 
    </div>
  )
}

export default ArticleDetailMainInfo