import React from 'react'

const ForgetPassStepper = () => {
  
return   (
<div className='w-full desktop:flex desktop:gap-4 desktop:flex-row-reverse relative top-[120px] '>    
<div className=' desktop:w-[250px]  flex flex-wrap  justify-end items-center  float-right pt-4'>  
 <div className='bg-blue w-[400px] desktop:w-[250px]  h-[8px] rounded-[9px] relative  float-right'>      </div>
 <p className=' w-full   text-right  relative  text-base font-DanaFaNum-600 text-black pt-2'>    وارد کردن ایمیل   </p>                    
</div> 

<div className=' desktop:w-[250px]  flex flex-wrap h-12 justify-end  float-right pt-4 '>  
 <div className='bg-gray-400 w-[400px] desktop:w-[250px] h-[8px] rounded-[9px]  text-right float-right '>      </div> 
 <p className=' float-right  text-right text-base font-DanaFaNum-600 text-gray-800 pt-2'>   تایید کد ارسال شده دومرحله ای (درصورت فعال بودن کد دو محله ای)</p>            
</div>
</div>

)
}

export default ForgetPassStepper
