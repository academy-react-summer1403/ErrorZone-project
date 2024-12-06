import React from 'react'
import {motion as m } from "framer-motion"


const  CircleBorder = () => {
  return <div className=' '>
    
          <div className='size-5 bg-blue rounded-full grid place-items-center '>
          <div className='size-2 bg-white rounded-full'>  </div>
        </div>
  </div>
}

const LearnedProcessBar = () => {
  return (
    <div className='' >
      <div className=' relative w-full h-1 bg-gray-400 flex items-center'> 
        <m.div 
        initial={{x:'-100%'}}
        whileInView={{x: 0}}
        transition={{ duration: 4}}
        className='w-full h-1 bg-blue flex items-center'>
      
        </m.div>
        <div className='absolute flex justify-around px- w-full '>
          <CircleBorder />
          <CircleBorder /> 
          <CircleBorder /> 
          <CircleBorder /> 
          <CircleBorder /> 
        </div>
            

      </div>
    </div>
  )
}

export default LearnedProcessBar