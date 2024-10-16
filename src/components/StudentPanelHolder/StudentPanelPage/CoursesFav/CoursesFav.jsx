import React from 'react'
import { getQuery } from '../../../../core/services/api/reactQuery/getQuery';
import { usequery } from '../../../../core/services/api/reactQuery/usequery';
import MyFavCourseTable from './MyFavCourseTable/MyFavCourseTable';
import { DatePicker, Skeleton } from '@nextui-org/react';
import DatePickerSpecial from '../../../common/DatePickerSpecial/DatePickerSpecial';



const CoursesFav = () => {
  getQuery('myFavCourses', '/SharePanel/GetMyFavoriteCourses');
  return (
    <div>
      <div className='title font-DanaFaNum-700 text-2xl'>دوره های موردعلاقه</div>
      <DatePickerSpecial />
      <div className='min-h-20 mt-6'>
        {usequery("myFavCourses") ? <MyFavCourseTable /> : <Skeleton className="rounded-2xl w-full min-h-52 h-full"/> }
        
      </div>
    </div>
  )
}


export default CoursesFav