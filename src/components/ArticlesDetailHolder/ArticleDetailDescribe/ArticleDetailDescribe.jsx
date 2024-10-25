import React from 'react'
import ArticleDescribeRate from './ArticleDescribeRate'

const ArticleDetailDescribe = ({data}) => {
    const response = data?.detailsNewsDto
  return (

    <div className=''>
      <span className='mb-5 font-DanaFaNum-700 text-xl text-gray-800'>توضیحات دوره</span>

      <div className='w-full text-wrap'>
        {response?.describe}
      </div>
       <ArticleDescribeRate data={response} /> 
    </div>

  )
}

export default ArticleDetailDescribe