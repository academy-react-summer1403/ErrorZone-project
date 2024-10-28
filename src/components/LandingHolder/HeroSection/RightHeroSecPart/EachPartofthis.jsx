import React from 'react';


const EachPartofthis = ( {num, title, pic} ) => {


  return (
    <div className='box  flex justify-start items-center flex-wrap gap-2' style={{t:"0"}}>
      <div className='box rightPart flex items-center justify-start gap-1'>
        <img src={pic} alt="students" />
        <span className='p-0 m-0 font-DanaFaNum-600 text-xl block text-nowrap h-fit'>{`${num} +`}</span>
      </div>
      <div className='box leftPart text-sm'><span>{title}</span></div>
    </div>
  )
}

export default EachPartofthis