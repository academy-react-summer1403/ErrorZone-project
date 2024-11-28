import React from 'react'

const ForgetPassStepperStep2 = () => {
  
return   (
<div className='w-full desktop:flex desktop:gap-4 desktop:flex-row-reverse relative top-[120px] pr-14 '>    
<div className=' desktop:w-[250px]  flex flex-wrap  justify-end items-center  float-right pt-4'>  
 <div className='bg-blue w-[400px] desktop:w-[250px]  h-[8px] rounded-[9px] relative  float-right opacity-[50%]'>      </div>
 <p className=' w-full   text-right  relative  text-base font-DanaFaNum-600 text-black pt-2 opacity-[50%]'>    وارد کردن ایمیل   </p>                    
</div> 

<div className=' desktop:w-[250px]  flex flex-wrap h-12 justify-end  float-right pt-4 '>  
 <div className='bg-blue w-[400px] desktop:w-[250px] h-[8px] rounded-[9px]  text-right float-right '>      </div> 
 <p className=' float-right  text-right text-base font-DanaFaNum-600 text-black pt-2'>   تایید کد ارسال شده دومرحله ای (درصورت فعال بودن کد دو محله ای)</p>            
</div>
</div>
)
}

export default ForgetPassStepperStep2