import React from 'react'
import {motion as m } from "framer-motion"


const CircleBorder = () => {
  return <>
          <div className='size-5 bg-blue rounded-full grid place-items-center '>
          <div className='size-2 bg-white rounded-full'>  </div>
        </div>
  </>
}

const LearnedProcessBar = () => {
  return (
    <div >
      <div className='w-full h-1 bg-gray-400 flex items-center'> 
        <m.div 
        initial={{x:'-100%'}}
        whileInView={{x: 0}}
        transition={{ duration: 4}}
        className='w-full h-1 bg-blue flex items-center'>
          <CircleBorder />
          <CircleBorder /> 
          <CircleBorder /> 
          <CircleBorder /> 
          <CircleBorder />           
        </m.div>



      </div>
    </div>
  )
}

export default LearnedProcessBar