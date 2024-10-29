import { Formik , Form } from 'formik'
import React from 'react'
import AuthFields from '../../../../common/AuthFields/AuthFields'
import ButtonSpecial from '../../../../common/ButtonSpecial'
import { Link, useNavigate } from 'react-router-dom'
import { Home03Icon , ViewIcon} from 'hugeicons-react';
import { RegisterStep3Schema } from '../../../../../core/validations/Schemas/Auth/Register/RegisterStep3Schema'
import RegisterLastStep from '../../../../../core/services/api/Auth/Register/RegisterLastStep'
import { useSelector } from 'react-redux'
import { SuccessToastify } from '../../../../../core/utils/Toastifies/SuccessToastify.Utils'
import { ErrorToastify } from '../../../../../core/utils/Toastifies/ErrorToastify.Utils'
import { ToastContainer } from 'react-toastify'

const RegisterFormStep3 = () => {

  const Navigate = useNavigate()
  const register = useSelector((state ) => state.register)

 const onSubmit = async (value) => {

  const newValue = {...value, ...register}

  try {
     const resault = await RegisterLastStep(newValue)
     if(resault.success === true){
        SuccessToastify(resault.message)
        setTimeout(() => {
          Navigate("/StudentPanel")
        }, 2000);
     }else if(resault.success === false){
       ErrorToastify(resault.message)
     }
  } catch (error) {
    return false
  }
 }

    return (
      <div className='  w-[100%] h-[87%] mt-[105px] ' dir='rtl'>
        <ToastContainer rtl/>
        <div className='flex gap-[20px]'>
      </div  >  
          <p className='w-auto h-[40px] relative top-[106px] right-[70px] font-semibold text-3xl text-black font-DanaFaNum-600 dark:text-white '>  وارد کردن اطلاعات شخصی </p> 
          <p className='w-auto h-[46px] relative top-[114px] right-[70px] text-base font-DanaFaNum-500 text-gray-800'>   لطفا اطلاعات اولیه خواسته شده را وارد نمایید</p>
       <div>    
       <Formik
        initialValues={{gmail: "" , password:"" }}
        validationSchema={RegisterStep3Schema}
        onSubmit={onSubmit}
       >
          <Form>
            <div className='flex flex-wrap w-[600px] h-auto relative top-[140px]  text-black '>
               <AuthFields type='text' name='gmail' placeholder='ایمیل خود را وارد کنید' label=' ایمیل'/>   
               <AuthFields  type='text' name='password' placeholder='رمز عبور جدید خود را وارد کنید' label='رمز عبور جدید' icon={ <ViewIcon size={24} />}/>  
               <ViewIcon className='relative right-[420px] bottom-[60px]' />         
               <div className='bg-blue w-[389px] h-[48px] rounded-[40px] relative top-[-1px] right-[40px] flex justify-center items-center'>  
             <ButtonSpecial type='submit' innerHtml=' تایید' className=' text-white w-full h-full font-DanaFaNum-600 text-base ' />
               </div> 
            </div>
          </Form> 
        </Formik>
      </div>
    
      </div> 
      )
}

export default RegisterFormStep3