import React from 'react'

const RegisterStepper = ({label1 , label2 , label3 , className1 , className2 , className3 , className4 , className5 , className6}) => {
  return (
    <div className='w-[400px] tablet:w-[516px] flex flex-wrap   tablet:pl-0  tablet:h-32 h-[120px] tablet:flex tablet:justify tablet:justify-between tablet:relative tablet:top-[160px]  tablet:left-[52px] relative top-[150px] right-[-90px] '>  
    <div className='w-[361px] tablet:w-[157px] tablet:flex tablet:flex-wrap tablet:justify-end '>  
      <div className={className1}>      </div> 
      <p className={className2}>  {label3}</p>             
     </div>

    <div className='w-[361px]  tablet:w-[156px] tablet:flex tablet:flex-wrap tablet:justify-center tablet:items-center'>  
      <div className={className3}>      </div>
      <p className={className4}>   {label2}  </p>                    
    </div>

    <div className='w-[361px]  tablet:w-[157px] tablet:flex tablet:flex-wrap tablet:justify-start tablet:items-center '>
      <div className={className5}>      </div>
      <p className={className6}>       {label1}   </p>       
    </div>
</div>
  )
}

export default RegisterStepper
