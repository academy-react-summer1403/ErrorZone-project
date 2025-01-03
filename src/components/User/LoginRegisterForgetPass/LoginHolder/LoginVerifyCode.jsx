import React , {useState} from 'react'
import './LoginStepper.css'
import { BlueInputField } from '../../../common/InputFields/BlueInputFields';
import ButtonSpecial from '../../../common/ButtonSpecial';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import LoginVerifyCodeSchema from '../../../../core/validations/Schemas/Auth/Login/LoginVerifyCodeSchemas';
import { useSelector } from 'react-redux';
import { setItem } from '../../../../core/services/common/storage.services';
import { SuccessToastify } from '../../../../core/utils/Toastifies/SuccessToastify.Utils';
import { ErrorToastify } from '../../../../core/utils/Toastifies/ErrorToastify.Utils';
import { SlArrowLeft } from "react-icons/sl";
import AuthFields from '../../../common/AuthFields/AuthFields';
import VerifyCodeAPI from '../../../../core/services/api/Auth/Login/VerifyCodeApi';
import { checkExist } from '../../../../core/utils/MultiAccount/checkExist';
import { deactivateOtherUsers } from '../../../../core/utils/MultiAccount/deactivateOthers';

  const LoginVerifyCode = () => {

   const LoginInfo = useSelector((reducer) => reducer.login.UserLoginInfo)
  
   console.log("loginInfo", LoginInfo)

  const Navigate = useNavigate();
  
  const LoginVerifyCodeApiFunction = async (value) => {
    try {
      const resault = await VerifyCodeAPI(LoginInfo , value);
      console.log("resault" , resault)


      if(resault.success == true){
        console.log('resaultmassage' , resault.message)
        const userObj = {
          id: resault.id,
          phoneNumber: resault.phoneNumber,
          isActive: true,
          token: resault.token,
        };
        const usersArr = JSON.parse(localStorage.getItem("users"));
        if (!checkExist(resault.phoneNumber)) {
          console.log(userObj)
          usersArr
            ? setItem("users", [...usersArr, userObj])
            : setItem("users", [userObj]);
          deactivateOtherUsers(resault.id);
          setTimeout(() => {
            Navigate("/StudentPanel");
          }, 2000);
        console.log('resault' , resault)
        
      }else if (checkExist(resault.phoneNumber)){
        ErrorToastify('مشتی قبلا لاگین کردی با این')

      }else if(resault.succesc === false){
        ErrorToastify(resault.message)
      }
    } 
  }
  catch (error) {
    return false;
}}
  const handleSubmit = (value) => {
    console.log("value" , value);

     const newValue = value.verifyCode

    LoginVerifyCodeApiFunction(newValue)
  }

  return (
    <div className='  w-[100%] h-[87%] mt-[105px] ' dir='rtl'>
    <div className='flex gap-[20px] '>
  </div >  
      <p className='w-[230px] h-[40px] relative top-[96px] right-[60px] font-semibold text-2xl text-black font-DanaFaNum-600 dark:text-white '>    تایید کد دو مرحله ای ! </p> 
      <p className='w-[280px] h-[46px] relative top-[100px] right-[60px] text-base font-DanaFaNum-500 text-gray-400'>     کد دو مرحله ای شما ارسال شده لطفا کد را وارد کنید  </p>
   <div>    
  <Formik 
  initialValues={{verifyCode : ""}}
  validationSchema={LoginVerifyCodeSchema}
  onSubmit={(values) => {handleSubmit(values)}}
  >
     <Form>
       <div className='flex flex-wrap w-[600px] h-auto relative top-[106px]  text-black'>
        <AuthFields type='password' name='verifyCode' placeholder='کد دو مرحله ای خود را وارد کنید' />       
      <div className='bg-blue w-[398px] h-[48px] rounded-[40px] relative top-[-5px] right-[64px] flex justify-center items-center'>  
        {/* <button  type="submit" className='bg-red'>  click   </button>  */}
         <ButtonSpecial 
          type="submit"
          innerHtml="ورود به حساب "
          className=" text-white w-[98px] h-[23px] font-DanaFaNum-600 text-base bg-blue "
        />  
      </div> 
      <div className='w-[141px] h-[40px] rounded-[34px] relative top-[60px] left-[220px] flex justify-center items-center border-2 border-gray-400'>
          <Link className='w-[77px] h-[23px] font-DanaFaNum-500 text-blue text-base '>
             <SlArrowLeft  className='absolute left-[42px] top-[13px] ' size={10}/>   بازگشت 
          </Link>
      </div>
    </div>
    </Form> 
  </Formik>    
  </div>

  </div> 
  )
}

export default LoginVerifyCode