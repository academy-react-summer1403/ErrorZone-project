import React from 'react'
import GoldenInput from '../../../../common/GoldenInput/GoldenInput'
import { Form, Formik } from 'formik'
import { useSelector } from 'react-redux'
import UpdateProfileInfo from '../../../../../core/services/api/UserPanel/UpdateProfileInfo'
import onSetFormData from '../../../../../core/utils/onSetFormData/onSetFormData'

const UserLinks = () => {

const userInfo = useSelector((reducer) => reducer.user.userInformations)

console.log('userinfolinks', userInfo)

const onSubmit = async (value) => {
  try {
    // console.log(value);
    const data = onSetFormData(value);

    const result = await UpdateProfileInfo(data);


  } catch (error) {
    console.log(error)
    return false;
  }
};




const handleSubmit = async (value) => {

const newValue = 
  {
   ...value ,
   LinkdinProfile: value.LinkdinProfile?.toString(),
   TelegramLink: value.TelegramLink?.toString(),
  }

  onSubmit(newValue)
}

  return (
   <Formik
   initialValues={{
    TelegramLink: userInfo.telegramLink,
    LinkdinProfile: userInfo.LinkdinProfile,
   }}
   onSubmit={(value) => handleSubmit(value)}
   >  
    <Form> 
    <div className='w-[100%] h-[100%] pt-[90px] pl-[278px] pb-[137px] pr-[24px]'>
     <div className='w-[100%]'> 
       <GoldenInput
            type='text'
            name='TelegramLink'
            placeholder='لینک تلگرام خود را وارد کنید'
            label='تلگرام'
            FieldclassName='w-[576px] h-[48px] rounded-[24px]  mt-2 border border-gray-400 pr-2'
          />    
        </div> 
       <div className='w-[100%] pt-4'> 
       <GoldenInput
            type='text'
            name='LinkdinProfile'
            placeholder='لینک لینکدین خود را وارد کنید'
            label='لینکدین'
            FieldclassName='w-[576px] h-[48px] rounded-[24px]  mt-2 border border-gray-400 pr-2'
          />           
       </div>
         <div className="relative top-[20px]  flex justify-start">       
           <button type='submit' className='w-[125px] h-[48px] rounded-[10] bg-blue text-white font-DanaFaNum-500 text-base '>    اعمال تغییرات  </button>
        </div>     
     </div>
    </Form>
   </Formik> 
  )
}

export default UserLinks