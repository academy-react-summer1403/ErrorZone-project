import React from 'react'
import MyCourseTable from './MyCourseTable/MyCourseTable'
import { getQuery } from '../../../../core/services/api/reactQuery/getQuery'
import { usequery } from '../../../../core/services/api/reactQuery/usequery'
import { Skeleton } from '@nextui-org/react'
const MyCourse = () => {
  getQuery('MyCourses', '/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate');
  return (
    <div>
      <div className='title font-DanaFaNum-700 text-2xl'>دوره من</div>
      <div className='min-h-20 mt-6'>
        {usequery("MyCourses") ? <MyCourseTable  /> : <Skeleton className="rounded-2xl w-full min-h-52 h-full"/> }
        
      </div>
    </div>
  )
}

export default MyCourse