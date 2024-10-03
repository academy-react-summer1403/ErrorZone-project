import React from 'react'
import DashDate from './DashDate'
import { Calendar03Icon, Time02Icon } from 'hugeicons-react'

const DashHeaderRight = () => {
  return (
    <div className='flex flex-col gap-4'> 
    <div className='flex items-baseline gap-4'>
      <div className='font-DanaFaNum-700 text-2xl w-58 '>   سلام پارسا ، روزت بخیر 👋</div>
        <div className=' text-sm  text-gray-800'> امیدوارم روز خوبی داشته باشید</div>
      </div>
      <div className='flex  gap-14'>
        <DashDate name="ساعت "  icon={<Time02Icon />}  value={"22:10"} />
        <DashDate name="تاریخ" icon={<Calendar03Icon />} value={"29اردیبهشت  "} />
      </div>

    </div>
  )
}

export default DashHeaderRight