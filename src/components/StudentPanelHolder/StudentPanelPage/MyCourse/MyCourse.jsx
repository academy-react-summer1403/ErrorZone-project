import React from 'react'
import MyCourseTable from './MyCourseTable/MyCourseTable'
import { getQuery } from '../../../../core/services/api/reactQuery/getQuery'
// import { usequery } from '../../../../core/services/api/reactQuery/usequery'
import { Skeleton } from '@nextui-org/react'
import { usequery } from '../../../../core/services/api/reactQuery/useQuery'
const MyCourse = () => {
  return (
    <div>
      <div className='title font-DanaFaNum-700 text-2xl'>دوره من</div>
      <div className='min-h-20 mt-6'>
        <MyCourseTable  />
        
      </div>
    </div>
  )
}

export default MyCourse