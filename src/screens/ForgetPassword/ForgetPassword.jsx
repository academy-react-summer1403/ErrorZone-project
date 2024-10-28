import React, { useEffect } from 'react'
import ForgetPassFormStep1 from '../../components/User/LoginRegisterForgetPass/ForgetPassHolder/ForgetPassFormStep1'


const ForgetPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className='w-full h-full'>
       <ForgetPassFormStep1 />
    </div>
  )
}

export default ForgetPassword