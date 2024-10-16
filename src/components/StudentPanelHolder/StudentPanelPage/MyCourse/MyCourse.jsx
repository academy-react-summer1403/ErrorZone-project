import React from 'react'
import MyCourseTable from './MyCourseTable/MyCourseTable'

const MyCourse = () => {
  return (
    <div>
      <div className='title font-DanaFaNum-700 text-2xl'>دوره من</div>
      <div className='rounded-2xl bg-gray-100'>
        <MyCourseTable />
      </div>
    </div>
  )
}

export default MyCourse