import React from 'react'
import DashHeaderRight from './DashHeaderRight/DashHeaderRight'
import DashHeaderLeft from './DashHeaderLeft/DashHeaderLeft'

const DashboardHeader = () => {
  return (
    <div className='flex justify-between'>
        <DashHeaderRight />
        <DashHeaderLeft />
    </div>
  )
}

export default DashboardHeader