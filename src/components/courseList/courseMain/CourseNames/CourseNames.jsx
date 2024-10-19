import React from 'react'
import CourseSortPart from './CourseSortPart/CourseSortPart'
import CourseCardSec from './CourseCardSec/CourseCardSec'

const CourseNames = () => {
  return (
    <div className='space-y-6'> 
      <CourseSortPart />
      <CourseCardSec />
    </div>
  )
}

export default CourseNames