import React from 'react'
import CourseMainInfo from './CourseMainInfo/CourseMainInfo'
import CourseDetailDescribe from './CourseDetailDescribe/CourseDetailDescribe'
import { getQuery } from '../../core/services/api/reactQuery/getQuery'
import { useQuery } from '@tanstack/react-query'
import CourseCommentsPart from './CourseCommentsPart/CourseCommentsPart'

const CourseDetailHolder = () => {
  const {data} = useQuery({
    queryKey: ['CourseDetailById']
  })

  return (
    <>
        <CourseMainInfo data={data} />
        <CourseDetailDescribe data={data} />
        <CourseCommentsPart />
    </>
  )
}

export default CourseDetailHolder