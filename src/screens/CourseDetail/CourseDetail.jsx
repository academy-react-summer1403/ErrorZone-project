import React from 'react'
import CourseDetailHolder from '../../components/CourseDetailHolder/CourseDetailHolder'
import {getQuery} from "../../core/services/api/reactQuery/getQuery"
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

  const params = useParams();

  getQuery("CourseDetailById", `/Home/GetCourseDetails?CourseId=${params.id}`);
  
  return (
    <div className='w-full max-w-[1520px] mx-auto px-10 py-14'>
        <CourseDetailHolder />
    </div>
  )
}

export default CourseDetail