import React from 'react'
import { Link } from 'react-router-dom'

const ViewMoreBtn = ({link}) => {
  return (
    <div className='w-fit'>
        <Link to={link} className='block px-4 py-2 bg-black dark:bg-white text-white dark:text-black text-center rounded-full'>
        مشاهده بیشتر
        </Link>
    </div>
  )
}

export default ViewMoreBtn