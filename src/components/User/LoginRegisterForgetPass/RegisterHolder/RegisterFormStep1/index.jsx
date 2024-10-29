import { Formik , Form } from 'formik'
import React  , {useState} from 'react'
import AuthFields from '../../../../common/AuthFields/AuthFields'
import ButtonSpecial from '../../../../common/ButtonSpecial'
import { Link, useNavigate } from 'react-router-dom'
import { Home03Icon, ViewIcon } from 'hugeicons-react';

import RegisterSendVerifyMessage from '../../../../../core/services/api/Auth/Register/RegisterSendVerifyMessage'
import RegisterStep1Schema from '../../../../../core/validations/Schemas/Auth/Register/RegisterStep1Schema'
import { useDispatch, useSelector } from 'react-redux'
import { onSetPhoneNumber } from '../../../../../redux/auth/register'
import { SuccessToastify } from '../../../../../core/utils/Toastifies/SuccessToastify.Utils'
import { ErrorToastify } from '../../../../../core/utils/Toastifies/ErrorToastify.Utils'
import { ToastContainer } from 'react-toastify'

  const RegisterFormStep1 = () => {

    const Navigate = useNavigate()
  
    const register = useSelector((reducer) => reducer.register);
    const dispatch = useDispatch();
  
    const onSubmit = async (value) => {
      try {
        const result = await RegisterSendVerifyMessage(value);
        if (result.success === true) {   
           dispatch(onSetPhoneNumber(value.phoneNumber));                     
             SuccessToastify(result.message)            
            Navigate('/login/register/step2');                       
        } else if (result.success === false) {
          return ErrorToastify(result.message);
        }
      } catch (error) {
        return false;
      }

    };
     return (
        <div className='  w-[100%] h-[87%] mt-[105px]' dir='rtl'>
           <ToastContainer rtl/>        
        <div className='flex gap-[20px] '>
      </div  >  
          <p className='w-[230px] h-[40px] relative top-[106px] right-[70px] font-semibold text-3xl text-black font-DanaFaNum-600 dark:text-white '>  خوش امدی</p> 
          <p className='w-[350px] h-[46px] relative top-[110px] right-[70px] text-base font-DanaFaNum-500 text-gray-400'>   لطفا شماره همراه خود را وارد کنید تا کد تایید برای شما ارسال شود </p>
       <div>    
       <Formik 
       initialValues={{phoneNumber: "",}}
       validationSchema={RegisterStep1Schema}
       onSubmit={onSubmit}
       >
          <Form>   
           <div className='flex flex-wrap w-[600px] h-auto relative top-[140px]  text-black '>
               <AuthFields type='text' name='phoneNumber' placeholder='شماره خود را وارد کنید' label='شماره همراه یا ایمیل'/>            

               <div className='bg-blue dark:bg-gray-500 w-[389px] h-[48px] rounded-[40px] relative top-[3px] right-[65px] flex justify-center items-center'>  
               {/* <button type='submit' className=' text-white w-[98px] h-[23px] font-DanaFaNum-600 text-base '>     ارسال کد تایید    </button> */}
               <ButtonSpecial type='submit' innerHtml='ارسال کد تایید' className=' text-white w-full h-full bg-blue font-DanaFaNum-600 text-base ' />
               </div> 
                <div className='w-[283px] h-[30px] relative top-[18px] right-[120px] flex gap-2 '> 
                  <p className='w-[138p] h-[23px] text-black dark:text-gray-800 font-DanaFaNum-600 text-base'>
                    حساب کاربری دارید؟ 
                  </p>
                  <Link className='border-b-sky-500 w-[140px] h-[23px] text-blue font-DanaFaNum-600 text-base border-b border-sky-400'>  ورود به حساب کاربری </Link>
               </div>
               <div className='bg-white dark:bg-blue w-[141px] h-[40px] rounded-[34px] border-2 border-gray-400  relative top-[72px] left-[90px] flex justify-center items-center'>
                  <Link className='w-[77px] h-[23px] font-DanaFaNum-500 text-blue dark:text-white text-base' >    صفحه اصلی  </Link>
                  <Home03Icon className='text-blue dark:text-white' />
              </div>
            </div>
          </Form> 
        </Formik>
      </div>
    
      </div> 
      )
}

export default RegisterFormStep1