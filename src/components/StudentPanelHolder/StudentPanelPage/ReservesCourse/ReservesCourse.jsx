import React from 'react'
import { getQuery } from '../../../../core/services/api/reactQuery/getQuery'
import { usequery } from '../../../../core/services/api/reactQuery/usequery';
import { Skeleton } from '@nextui-org/react';
import MyResCourseTable from './MyResCourseTable/MyResCourseTable';

const ReservesCourse = () => {
getQuery('myReservesCourses', '/SharePanel/GetMyCoursesReserve');
  return (
    <div>
      <div className='title font-DanaFaNum-700 text-2xl'>رزرو من</div>
      <div className='min-h-20 mt-6'>
        {usequery("myReservesCourses") ? <MyResCourseTable /> : <Skeleton className="rounded-2xl w-full min-h-52 h-full"/> }
        
      </div>
    </div>
  )
}

export default ReservesCourse