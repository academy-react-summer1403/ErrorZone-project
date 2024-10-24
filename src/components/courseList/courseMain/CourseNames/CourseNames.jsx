import React from 'react'
import CourseSortPart from './CourseSortPart/CourseSortPart'
import CourseCardSec from './CourseCardSec/CourseCardSec'

const CourseNames = ({pageNum}) => {
  return (
    <div className='space-y-6'> 
      <CourseSortPart pageNum={pageNum} />
      <CourseCardSec pageNum={pageNum} />
    </div>
  )
}

export default CourseNames