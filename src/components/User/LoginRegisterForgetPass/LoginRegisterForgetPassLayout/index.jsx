import React  , {useState} from 'react'
import style from './../../../../assets/images/LoginRegisterForgetPass/login.png'
import './Stepper.css'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import ThemeToggle from '../../../Header/ThemeAndNotifBtns/ThemeToggle';
import RegisterStepper from '../RegisterHolder/RegisterForm';
import ForgetPassStepper from '../ForgetPassHolder/ForgetPassStepper';
import ForgetPassStepperStep2 from '../ForgetPassHolder/ForgerPassStepperStep2';


const LoginRegisterForgetPassLayout = () => {
  const locationPath = useLocation().pathname;

   const params = useParams()

   console.log('party' , params)

    const configvalue = params.ConfigValue

    console.log('shot' ,configvalue )

  const handleSteps = (location) => {
    if(location === '/login'){
      return <div className=' w-[100%] h-32 flex relative top-[160px] '>  
                <div className='w-[55%] flex flex-wrap justify-end'>  
                  <div className='bg-gray-600 w-[250px] h-[8px] rounded-[9px] mt-[25px]  text-right '>      </div> 
                  <p className='w-[80%] text-right pr-1 relative top-[-5px] text-base font-DanaFaNum-600 text-gray-400 '>    تایید کد ارسال شده دو مرحله ای  </p>       
                  <p className='w-[80%] text-right pr-1 relative top-[-15px] text-sm font-DanaFaNum-600 text-gray-400'>  (درصورت فعال بودن دو مرحله ای)   </p>        
                 </div>
    
                <div className=' w-[45%] flex flex-wrap justify-center items-center'>  
                  <div className='bg-blue w-[250px] h-[8px] rounded-[9px] relative mr-[35px]'>      </div>
                  <p className=' w-[100%] text-right pr-16 relative top-[-37px] text-base font-DanaFaNum-600 text-black'>    وارد کردن شماره همراه   </p>                    
                </div>
        </div>
    }else if (location === '/login/verifycode'){
      return  <div className=' w-[100%] h-32 flex relative top-[160px] '>  
                <div className='w-[55%] flex flex-wrap justify-end'>  
                  <div className='bg-blue w-[250px] h-[8px] rounded-[9px] mt-[25px]  text-right '>      </div> 
                  <p className='w-[80%] text-right pr-1 relative top-[-5px] text-base font-DanaFaNum-600 text-gray-400 '>    تایید کد ارسال شده دو مرحله ای  </p>       
                  <p className='w-[80%] text-right pr-1 relative top-[-15px] text-sm font-DanaFaNum-600 text-gray-400'>  (درصورت فعال بودن دو مرحله ای)   </p>        
                 </div>
    
                <div className=' w-[45%] flex flex-wrap justify-center items-center'>  
                  <div className='bg-blue w-[250px] h-[8px] rounded-[9px] relative mr-[35px] opacity-[50%]'>      </div>
                  <p className=' w-[100%] text-right pr-16 relative top-[-37px] text-base font-DanaFaNum-600 text-black opacity-[50%]'>    وارد کردن شماره همراه   </p>                    
                </div>
           </div>
    }else if(location === '/login/register/step1') {
      return <RegisterStepper 
               className1='bg-gray-400 dark:bg-gray-800 tablet:w-[170px] h-[8px] rounded-[9px] tablet:mt-[25px] text-right'
               className2='tablet:w-[157px] text-right  tablet:relative tablet:top-[-13px] text-base font-DanaFaNum-500 text-black dark:text-gray-500 dark:opacity-[50%] opacity-[50%] '
               label3='وارد کردن اطلاعات شخصی'
               className3='bg-gray-400 dark:bg-gray-800 tablet:w-[156px] h-[8px] rounded-[9px] relative bg-gray-400 '
               className4='w-[100%] text-right  tablet:relative tablet:top-[-37px] text-base font-DanaFaNum-600 text-black dark:text-gray-500 opacity-[50%]  ' 
               label2='تایید کد ارسال شده'
               className5='bg-blue tablet:w-[157px] h-[8px] rounded-[9px] tablet:relative  '
               className6='w-[100%] text-right tablet:relative tablet:top-[-37px] text-base font-DanaFaNum-600 text-black  dark:text-gray-800 '
               label1='وارد کردن شماره همراه'
            />
    }else if(location === '/login/register/step2') {
      return <RegisterStepper 
               className1='bg-gray-400 dark:bg-gray-800 tablet:w-[170px] h-[8px] rounded-[9px] tablet:mt-[25px] text-right'
               className2='tablet:w-[157px] text-right  tablet:relative tablet:top-[-13px] text-base font-DanaFaNum-500 text-black dark:text-gray-500 dark:opacity-[50%] opacity-[50%]'
               label3='وارد کردن اطلاعات شخصی'
               className3='bg-blue tablet:w-[156px] h-[8px] rounded-[9px] relative'
               className4='w-[100%] text-right  tablet:relative tablet:top-[-37px] text-base font-DanaFaNum-600  tablet:bg-transparent text-black dark:text-gray-500  ' 
               label2='تایید کد ارسال شده'
               className5='bg-blue tablet:w-[157px] h-[8px] rounded-[9px] tablet:relative opacity-[50%] '
               className6='w-[100%] text-right tablet:relative tablet:top-[-37px] text-base font-DanaFaNum-600 text-black opacity-[50%] dark:text-gray-500 dark:opacity-[50%]'
               label1='وارد کردن شماره همراه'
            />
    }else if (location === '/login/register/step3') {
       return <RegisterStepper 
               className1='bg-blue dark:bg-blue tablet:w-[170px] h-[8px] rounded-[9px] tablet:mt-[25px] text-right'
               className2=' tablet:w-[157px] text-right  tablet:relative tablet:top-[-13px] text-base font-DanaFaNum-500 text-black dark:text-gray-500 '
               label3='وارد کردن اطلاعات شخصی'
               className3='bg-blue tablet:w-[156px] h-[8px] rounded-[9px] relative opacity-[50%]'
               className4='w-[100%] text-right  tablet:relative tablet:top-[-37px] text-base font-DanaFaNum-600 text-black dark:text-gray-500 opacity-[50%] dark:text-gray-800  ' 
               label2='تایید کد ارسال شده'
               className5='bg-blue  opacity-[50%] tablet:w-[157px] h-[8px] rounded-[9px] tablet:relative opacity-[50%] '
               className6='w-[100%] text-right tablet:relative tablet:top-[-37px] text-base font-DanaFaNum-600 text-black opacity-[50%] dark:text-gray-500 dark:opacity-[50%]'
               label1='وارد کردن شماره همراه'
            />     
      }else if(location === "/login/forgetpass" ){
        return  <ForgetPassStepper />
      }else if(location === `/login/forgetpass/step2/${configvalue}`) {
         return <ForgetPassStepperStep2 />
      }
     }
    

  return (
    <>
    <ThemeToggle />
    <div className=' w-auto h-[1100px] flex justify-center items-center gap-20 mr-[50px] tablet:mr-0' dir='ltr'>
        <div className='bg-gray-200 dark:bg-black border-2 dark:border-gray-500 hidden tablet:flex flex-wrap w-[748px] h-[960px]  relative top-[32px] left-[32px] rounded-[32px] dark:bg-blck  '> 
           <div className=' flex justify-end w-[100%] dark:bg-black'>
             <img className=' w-[189px] h-[38px]  mt-[60px]'  src="../../../../public/LogoTypegraphy.svg" alt="logo" />            
             <img className=' w-[42px] h-[40px] mr-[25px] mt-[50px]'  src="../../../../public/Logo.svg" alt="logo" />
           </div> 
           <div className=' w-[100%]  flex flex-col mr-[40px]  relative top-[-100px] '>
            <p className='w-auto h-auto  text-right  font-bold text-3xl font-DanaFaNum-700 text-black  leading-10 dark:text-white dark'>     شروع یک ماجراجویی  </p>
            <p className='w-auto h-auto relative top-[16px]  text-right  font-semibold font-DanaFaNum-600 text-xl text-gray-500 leading-[10px]'>      هر دوره ای که بخوای براحتی یاد پیدا کن و یاد بگیر  </p>            
          </div>
           <div className='w-[100%]  flex justify-center items-center relative top-[-90px]'> 
              <img src={style}/>   
           </div> 
        
        </div>
        <div className='w-[748px] h-[100%] text-white'>  
          <div className='h-14 flex justify-center items-center gap-6'>
            {handleSteps(locationPath)}
          </div>
         <Outlet />
       </div> 

    </div>

   </> 
  )
}

export  {LoginRegisterForgetPassLayout}