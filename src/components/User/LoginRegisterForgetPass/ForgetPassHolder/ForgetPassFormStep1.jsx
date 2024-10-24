import { Formik , Form } from 'formik'
import React  , {useState , useEffect} from 'react'
import { Link, useNavigate, } from 'react-router-dom'
import { ArrowLeft01Icon} from 'hugeicons-react';
import AuthFields from '../../../common/AuthFields/AuthFields';
import ButtonSpecial from '../../../common/ButtonSpecial';
import { ForgetpassSchema } from '../../../../core/validations/Schemas/Auth/ForgetPass/ForgetPassSchema';
import ForgetPass from '../../../../core/services/api/Auth/ForgetPassword/ForgetPass';
import { InfoToastify } from '../../../../core/utils/Toastifies/InfoToastify.Utils';
import { SuccessToastify } from '../../../../core/utils/Toastifies/SuccessToastify.Utils';
import { ErrorToastify } from '../../../../core/utils/Toastifies/ErrorToastify.Utils';
import NextuiButton from '../../../common/NextuiButton/NextuiButton';
import NextuiInput from '../../../common/InputFields/NextuiInput/NextuiInput';
import GoldenInputField from '../../../common/InputFields/GoldenInputField/GoldenInputField';
import GoldenInput from '../../../common/GoldenInput/GoldenInput';
import { ToastContainer } from 'react-toastify';

const ForgetPassFormStep1 = () => {

const navigate = useNavigate()

const baseUrl = "http://localhost:5173/login/forgetpass/step2"

  useEffect(() => {
   InfoToastify('برای تغییر رمز عبور ابتدا ایمیل خود را وارد کنید')
  }, [])
   

 const onSubmit = async (value) => {

  const newValue = { ...value , baseUrl}
  try {
     const res = await ForgetPass(newValue)
     console.log('email' , res)
     if(res.success === true) {
      SuccessToastify('درخواست شما با موفقیت تایید شد لطفا برای ادامه کار به جیمیل خود بروید')

     }else if(res.success === false) {
      ErrorToastify(res.message)
     }
  } catch (error) {
    console.log('error' , error)
  }
 }

  return (
    <div className='  w-[100%] h-[87%] mt-[105px]' dir='rtl'>
    <div className='flex gap-[20px]'>
  </div  > 
    <ToastContainer rtl />
     <div className='w-full mt-[131px]'>
      <p className=' w-full h-[40px] relative font-semibold text-3xl text-black font-DanaFaNum-600 dark:text-white '>  فراموشی رمزعبور</p> 
      <p className='w-[350px] h-[46px] pt-3  text-base font-DanaFaNum-500 text-gray-400 '>  اگر رمز عبور خود را فراموش کردید لطفا ایمیل خود را وارد کنید تا لینک صفحه برای شما ارسال شود</p>
     </div> 
   <div>    
   <Formik 
   initialValues={{email: "",}}
   validationSchema={ForgetpassSchema}
   onSubmit={(value) =>  onSubmit(value)}
   >
      <Form>
        <div className='flex flex-wrap w-full h-auto pt-[48px]  text-black '> 
             <GoldenInputField  type='text' name='email' placeholder='ایمیل خود را وارد کنید' label='  ایمیل' labelClassName='' /> 
            <div className='bg-blue dark:bg-gray-500 w-[389px] h-[48px] rounded-[40px]  flex justify-center items-center relative top-[-13px]'>   
            <ButtonSpecial type='submit' innerHtml='ارسال لینک' className='bg-transparent text-white w-full h-full font-DanaFaNum-600 text-base ' /> 
             </div>  
            <div className='w-[398px]  flex justify-center items-center mt-1'>  
            <div className='bg-white dark:bg-blue w-[141px] h-[40px] rounded-[34px] border-2 border-gray-400 flex justify-center items-center'>
             <Link to='/login' className='w-[77px] h-[23px] font-DanaFaNum-500 text-blue dark:text-white text-base' >    صفحه اصلی  </Link>
             <ArrowLeft01Icon className='text-blue dark:text-white' />
           </div>
          </div>
        </div>
      </Form> 
    </Formik>
  </div>

  </div> 
  )
}

export default ForgetPassFormStep1
