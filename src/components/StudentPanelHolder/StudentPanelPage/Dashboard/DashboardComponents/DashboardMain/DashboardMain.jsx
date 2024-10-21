import React from 'react'
import ProgressCircle from './ProgressCircle/ProgressCircle'
import MyCourseTable from '../../../MyCourse/MyCourseTable/MyCourseTable'

const DashboardMain = () => {
  return (
    <div className='flex '>
      <div>
      <ProgressCircle />
      </div>
      <div>
      <MyCourseTable />
      </div>
    </div>
  )
}

export default DashboardMain