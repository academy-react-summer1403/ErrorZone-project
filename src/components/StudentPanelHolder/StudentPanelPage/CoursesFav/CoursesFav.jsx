import React, { lazy } from 'react'
import { getQuery } from '../../../../core/services/api/reactQuery/getQuery';
import { DatePicker, Skeleton } from '@nextui-org/react';
import DatePickerSpecial from '../../../common/DatePickerSpecial/DatePickerSpecial';
import { usequery } from '../../../../core/services/api/reactQuery/useQuery';
const MyFavCourseTable = lazy(() => import("./MyFavCourseTable/MyFavCourseTable"))



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