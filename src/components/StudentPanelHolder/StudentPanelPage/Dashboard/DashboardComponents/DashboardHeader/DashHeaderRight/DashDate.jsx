import { Calendar03Icon } from 'hugeicons-react'
import React from 'react'

const DashDate = ({ name , icon ,value}) => {
  return (

    <div className=" flex gap-2  ">
      <div className='size-10  bg-gray-200 rounded-full grid place-items-center'> 
        {icon}
    </div>  
     <div className=' flex flex-col '> 
    <span className='text-sm font text-gray-800'> {name}</span> 
     <span className='text-base font-DanaFaNum-600'>{value}</span> 
     </div>

    
    
    </div>
  )
}

export default DashDate