import React from 'react'
import CourseFilter from './courseFilter/CourseFilter'
import CourseNames from './CourseNames/CourseNames'

const CourseMain = () => {
  return (
    <div className=" flex justify-between w-full mx-auto text-center">
        <CourseFilter />
        <CourseNames />
    </div>
  )
}

export default CourseMain