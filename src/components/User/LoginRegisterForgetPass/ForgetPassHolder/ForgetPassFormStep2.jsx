import { Formik , Form } from 'formik'
import React , {useEffect} from 'react'
import { ViewIcon} from 'hugeicons-react';
import AuthFields from '../../../common/AuthFields/AuthFields';
import ButtonSpecial from '../../../common/ButtonSpecial';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import ResetConfirmValue from '../../../../core/services/api/Auth/ForgetPassword/ResetConfirmValue';
import { onSetForgetpassResetValue, onSetForgetpassUserId } from '../../../../redux/auth/forgetPass';
import ResetPassword from '../../../../core/services/api/Auth/ForgetPassword/ResetPassword';
import { ForgetpassResetpassSchema } from '../../../../redux/auth/forgetPassResetPassSchema';
import { SuccessToastify } from '../../../../core/utils/Toastifies/SuccessToastify.Utils';
import { ErrorToastify } from '../../../../core/utils/Toastifies/ErrorToastify.Utils';
import { ToastContainer } from 'react-toastify';


const ForgetPassFormStep2 = () => {

const forgetpass = useSelector((reducer) =>  reducer.forgetpass )

const dispath = useDispatch()

console.log('forgetpass' , forgetpass)

const navigate = useNavigate()

const params = useParams()
console.log('params', params)

const ConfigValue = params.ConfigValue;

console.log('config value', ConfigValue)
   console.log('forgetpass2' , forgetpass)
const getConfigValue = async () =>{
  const result = await ResetConfirmValue(ConfigValue)
  console.log('result' , result)


  dispath(onSetForgetpassUserId(result.id))
  dispath(onSetForgetpassResetValue(result.message))
   console.log('forgetpass3' , forgetpass)
}

useEffect(() => {
  getConfigValue(ConfigValue)
}, [])

const onSubmit = async (value) => {
 const newPassword = value.newPassword
   console.log('forgetpass4' , forgetpass)
 const newValue = {newPassword , ...forgetpass}

 console.log('newValue', newValue)
 try {
    const res = await ResetPassword(newValue)

    console.log('res2' , res)
    if(res.success === true) {
      SuccessToastify(res.message)
      setTimeout(() => navigate("/login"), 2000)
    }else if(res.success === false) {
        return ErrorToastify(res.message)
    }
 } catch (error) {
    
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
    initialValues={{newPassword: "" , confirmPassword:"" }}
    validationSchema={ForgetpassResetpassSchema}
    onSubmit={(value) => onSubmit(value)}
   >
      <Form>
        <div className='flex flex-wrap w-[600px] h-auto relative top-[140px]  text-black '>
           <AuthFields type='password' name='newPassword' placeholder='رمزعبور جدید خود را وارد کنید' label='رمز عبور جدید'/> 
           <div className='w-full relative top-[-15px]'> 
           <AuthFields type='password' name='confirmPassword' placeholder='تکرار رمز عبور خود را وارد کنید' label='تکرار رمز عبور جدید ' icon={ <ViewIcon size={24} />}/>  
           </div>  
           <ViewIcon className='relative right-[420px] bottom-[75px]' />         
           <div className='bg-blue w-[389px] h-[48px] rounded-[40px] relative top-[-13px] right-[40px] flex justify-center items-center'>  
         <ButtonSpecial type='submit' innerHtml='تایید رمز عبور' className=' text-white w-full h-full bg-transparent font-DanaFaNum-600 text-base ' />
           </div> 
        </div>
      </Form> 
    </Formik>
  </div>

  </div> 
  )
}

export default ForgetPassFormStep2