import React  , {useState} from 'react'
import style from './../../../../assets/images/LoginRegisterForgetPass/login.png'
import './Stepper.css'
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import ThemeToggle from '../../../Header/ThemeAndNotifBtns/ThemeToggle';
import RegisterStepper from '../RegisterHolder/RegisterForm';
import ForgetPassStepper from '../ForgetPassHolder/ForgetPassStepper';
import ForgetPassStepperStep2 from '../ForgetPassHolder/ForgerPassStepperStep2';
import LoginStepper1 from '../LoginHolder/LoginStepper1';
import LoginStepper2 from '../LoginHolder/LoginStepper2';
import RegisterStepper1 from '../RegisterHolder/RegisterFormStep1/RegisterStepper1';
import RegisterStepper2 from '../RegisterHolder/RegisterFormStep2/RegisterStepper2';
import RegisterStepper3 from '../RegisterHolder/RegisterFormStep3/RegisterStepper3';


const LoginRegisterForgetPassLayout = () => {
  const locationPath = useLocation().pathname;

   const params = useParams()

   console.log('party' , params)

    const configvalue = params.ConfigValue

    console.log('shot' ,configvalue )

  const handleSteps = (location) => {
    if(location === '/login'){
      return <LoginStepper1 />
    }else if (location === '/login/verifycode'){
      return  <LoginStepper2 />
    }else if(location === '/login/register/step1') {
      return  <RegisterStepper1 />
    }else if(location === '/login/register/step2') {
      return <RegisterStepper2 />
    }else if (location === '/login/register/step3') {
       return <RegisterStepper3 />  
      }else if(location === "/login/forgetpass" ){
        return  <ForgetPassStepper />
      }else if(location === `/login/forgetpass/step2/${configvalue}`) {
         return <ForgetPassStepperStep2 />
      }
     }
    

  return (
    <>

    <div className=' w-auto h-[1100px] flex justify-center items-center gap-20 mr-[50px] tablet:mr-0' dir='ltr'>
        <div className='bg-gray-200 dark:bg-black border-2 dark:border-gray-500 hidden desktop:flex flex-wrap w-[748px] h-[960px]  relative top-[32px] left-[32px] rounded-[32px] dark:bg-blck  '> 
           <div className=' flex justify-end w-[100%] dark:bg-black'>
             <img className=' w-[189px] h-[38px]  mt-[60px]'  src="../../../../public/LogoTypegraphy.svg" alt="logo" />            
             <img className=' w-[42px] h-[40px] mr-[25px] mt-[50px]'  src="../../../../public/Logo.svg" alt="logo" />
           </div> 
           <div className=' w-[100%]  flex flex-col pr-[40px]  relative top-[-100px] '>
            <p className='w-auto h-auto  text-right  gap2 font-bold text-3xl font-DanaFaNum-700 text-black  leading-10 dark:text-white dark'>     شروع یک ماجراجویی  </p>
            <p className='w-auto h-auto  gap-2 relative pt-4 text-right text-wrap font-semibold font-DanaFaNum-600 text-xl text-gray-500 '>      هر دوره ای که بخوای براحتی یاد پیدا کن و یاد بگیر  </p>            
          </div>
           <div className='w-[100%]  flex justify-center items-center relative top-[-90px] '> 
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