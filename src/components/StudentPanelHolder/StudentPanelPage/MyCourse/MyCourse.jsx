import React from 'react'
import MyCourseTable from './MyCourseTable/MyCourseTable'
import { getQuery } from '../../../../core/services/api/reactQuery/getQuery'

const MyCourse = () => {
  getQuery('MyCourses', '/SharePanel/GetMyCourses?PageNumber=1&RowsOfPage=10&SortingCol=DESC&SortType=LastUpdate&Query=')
  return (
    <div>
      <div className='title font-DanaFaNum-700 text-2xl'>دوره من</div>
      <div className='rounded-2xl bg-gray-100'>
        <MyCourseTable  />
      </div>
    </div>
  )
}

export default MyCourse