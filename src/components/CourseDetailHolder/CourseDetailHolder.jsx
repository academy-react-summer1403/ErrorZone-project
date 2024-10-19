import React from 'react'
import CourseMainInfo from './CourseMainInfo/CourseMainInfo'
import CourseDetailDescribe from './CourseDetailDescribe/CourseDetailDescribe'
import { getQuery } from '../../core/services/api/reactQuery/getQuery'
import { useQuery } from '@tanstack/react-query'

const CourseDetailHolder = () => {
  const {data, isError, isLoading} = useQuery({
    queryKey: ['CourseDetailById']
  })

  if(isError) return <div>Error</div>
  if(isLoading) return <div>Loading ...</div>

  return (
    <>
        <CourseMainInfo data={data} />
        <CourseDetailDescribe data={data} />
    </>
  )
}

export default CourseDetailHolder