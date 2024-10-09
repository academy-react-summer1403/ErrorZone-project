import { Calendar03Icon } from 'hugeicons-react';
import React from 'react'

const BlogCardBottom = ({item}) => {
    const {googleTitle, categoryName, insertDate} = item;
  return (
    <div className="cardBottom text-black dark:text-white px-1">
    <h2 className="block font-DanaFaNum-700 text-2xl">{googleTitle}</h2>

    <div className="flex justify-between items-center">
      <h4 className="text-gray-800 dark:text-gray-400">{categoryName}</h4>

      <div className="flex gap-1 items-center">
        <span className="text-sm text-gray-800 dark:text-gray-400 mt-1">{insertDate}</span>
        <Calendar03Icon size={20} className='text-gray-800 dark:text-gray-400'/>
      </div>
    </div>
  </div>
  )
}

export default BlogCardBottom