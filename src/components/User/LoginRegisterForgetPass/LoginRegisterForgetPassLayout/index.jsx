import React from 'react'
import style from './../../../../assets/images/LoginRegisterForgetPass/login.png'

const LoginRegisterForgetPassLayout = () => {
  return (
    <div className='bg-slate-800 w-auto h-[1100px] flex justify-center items-center gap-20' dir='ltr'>
        <div className='bg-gray-200 w-[748px] h-[960px]  relative top-[32px] left-[32px] rounded-[32px] '>  
             <img className=' w-[42px] h-[40px] relative top-[64px] left-[715px]'  src="../../../../public/Logo.svg" alt="logo" />
             <img className=' w-[189px] h-[38px] relative top-[27px] left-[522px]'  src="../../../../public/LogoTypegraphy.svg" alt="logo" />

            <p className='w-[275px] h-[46px]  text-right relative left-[473px] top-[171px] font-bold text-2xl  leading-10'>     شروع یک ماجراجویی  </p>
            <p className='w-[410px] h-[29px] text-right relative left-[338px] top-[233px] font-semibold text-xl text-gray-800 leading-5'>      هر دوره ای که بخوای براحتی یاد پیدا کن و یاد بگیر  </p>            
 
           <div className='w-[368px] h-[309px] relative left-[222px] top-[420px]'> 
              <img src={style}/>   
           </div> 
        
        </div>
        <div className='bg-green-900 w-[748px] h-[100%] text-white'>  right  </div>       
    </div>
  )
}

export  {LoginRegisterForgetPassLayout}