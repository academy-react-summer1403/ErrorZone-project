import { Formik , Form } from 'formik'
import React, { useEffect, useRef, useState } from 'react'
import AuthFields from '../../../../common/AuthFields/AuthFields'
import ButtonSpecial from '../../../../common/ButtonSpecial'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft01Icon, Home03Icon} from 'hugeicons-react';
import { RegisterStep2Schema } from '../../../../../core/validations/Schemas/Auth/Register/RegisterStep2Schema'
import RegisterVerifyMessage from '../../../../../core/services/api/Auth/Register/RegisterVerifyMessage'
import { SuccessToastify } from '../../../../../core/utils/Toastifies/SuccessToastify.Utils'
import { ErrorToastify } from '../../../../../core/utils/Toastifies/ErrorToastify.Utils'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'

const RegisterFormStep2 = () => {
  const [opt , setOpt] = useState("")
  const [minutes , setMinutes] = useState(1)
  const [seconds , setSeconds] = useState(59)

  const Navigate = useNavigate()

  const register = useSelector((state) => state.register)
   
  useEffect(() => {
    const interval  = setInterval(() => {
        if(seconds > 0) {
            setSeconds(seconds - 1)
        }
        if(seconds === 0) {
           if(minutes === 0) {
             clearInterval(interval)
           }else{
            setSeconds(59)
            setMinutes(minutes - 1)
           }
        }

    } , 1000)
    return () => {
        clearInterval(interval)
    }
  }, [seconds])
  
const onSubmit = async (value) => {
  const newValue = {...register , ...value }
 try {
   const resualt = await RegisterVerifyMessage(newValue)
  if(resualt.success === true){
    SuccessToastify(resualt.message)
    setTimeout(() => {
      Navigate("/login/register/step3")
    }, 2000);

  }else if(resualt.success === false) {
    ErrorToastify(resualt.message)
  }
 } catch (error) {
   return false
 }

}
   
    return (
        <div className='  w-[100%] h-[87%] mt-[105px] ' dir='rtl'>
          <ToastContainer rtl/>
        <div className='flex gap-[20px] '>
      </div  >  
          <p className='w-[230px] h-[40px] relative top-[106px] right-[70px] font-semibold text-3xl text-black font-DanaFaNum-600 dark:text-white '>  خوش امدی</p> 
          <p className='w-[350px] h-[46px] relative top-[110px] right-[70px] text-base font-DanaFaNum-500 text-gray-400'>   لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود </p>
       <div>    
       <Formik
         initialValues={{verifyCode: ''}}
         validationSchema={RegisterStep2Schema}
         onSubmit={onSubmit}
       >
          <Form>
            <div className='flex flex-wrap w-[600px] h-auto relative top-[140px]  text-black '>
               <AuthFields type='text' name='verifyCode' placeholder='  کد تایید خود را وارد کنید' label=' کد تایید'/>            
               <div className=' w-[196px] h-[36px]  flex gap-3 justify-start  items-center relative right-[70px] rounded-[40px] top-[3px] bg-gray-100 dark:bg-gray-500 dark:border dark:border-white'> 
               <p className=' w-auto  font-DanaFaNum-600 text-sm text-blue dark:text-white pr-3 '>    ارسال مجدد کد تایید</p>           
               <span style={{fontWeight:600}} className='text-blue dark:text-white'>   
               {minutes < 10 ? `0${minutes}` : minutes}:
               {seconds < 10 ? `0${seconds}` : seconds}           
               </span>         
           </div>
               <div className='bg-blue dark:bg-gray-500 dark:border dark:border-white w-[389px] h-[48px] rounded-[40px] relative top-[60px] left-[130px] flex justify-center items-center'>  
             <ButtonSpecial type='submit' innerHtml='تایید' className=' text-white w-full h-full bg-blue font-DanaFaNum-600 text-base ' />
               </div> 

               <div className='w-[141px] h-[40px] rounded-[34px]  border-2 border-gray-400 dark:bg-blue  relative top-[80px] right-[180px] flex justify-center items-center'>
                 <Link to='/login/register/step1' className='w-[77px] h-[23px] font-DanaFaNum-500 text-blue dark:text-white text-base '>
                    <ArrowLeft01Icon  className='absolute left-[42px] top-[11px] dark:text-white ' size={16}/>   بازگشت                     
                 </Link>
              </div>
            </div>
          </Form> 
        </Formik>
      </div>
    
      </div> 
      )
}

export default RegisterFormStep2