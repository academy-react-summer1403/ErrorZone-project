import { Button, Input, Switch } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik'
import { ArrowRight01Icon, ArrowRight02Icon, ArrowRight03Icon, ArrowRight05Icon, ComputerIcon, EyeIcon, FileVerifiedIcon, LockPasswordIcon, SecurityCheckIcon, SecurityLockIcon, ViewIcon } from 'hugeicons-react'
import { ChangePassword } from '../../../../../core/services/api/ChangePassword/ChangePaswors'
import { SuccessToastify } from '../../../../../core/utils/Toastifies/SuccessToastify.Utils'
import { ErrorToastify } from '../../../../../core/utils/Toastifies/ErrorToastify.Utils'
import { ToastContainer } from 'react-toastify'


const ChangePassowrd = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);
  
    const toggleVisibility = () => setIsVisible(!isVisible);
    const toggleVisibility2 = () => setIsVisible2(!isVisible2);

    const onSubmitPassword = async (values) => {

        const passwordObj = {oldPassword: values.oldPassword, newPassword: values.newPassword}
    
        console.log(passwordObj)
        const response = await ChangePassword(passwordObj)
    
        if(values.newPassword === "" || values.oldPassword === "") {
            ErrorToastify(" رمز عبور خود را وارد کنید ")
        }
        else if(response ? response.success === true : response) {
            SuccessToastify(response.message)
        }
        else{
          ErrorToastify(' رمز شما صحیح نمی باشد ')
        }
    
        }



  return (
    <div className='w-3/4 mx-auto'> 
    <div className='p-2 dark:bg-slate-700 bg-white w-full h-full rounded-2xl my-5 flex flex-row-reverse justify-center phone:justify-around items-start gap-2'>
        <ToastContainer />
       <Formik
            initialValues={{oldPassword: '', NewPassword: ''}}
            onSubmit={(values) => {onSubmitPassword(values)}}
        >
            <Form className='w-full relative' style={{direction: 'rtl'}}>

                <h2 className='mb-2 w-full mt-5 font-bold'>  رمز عبور </h2>
                <div className='w-full flex relative'>
                    <Field name="oldPassword" type={isVisible ? "text" : "password"} className='dark:bg-slate-900 dark:border-none dark:text-white w-full p-3 rounded-md  text-sm focus:outline-none focus:border focus:border-blue-500
                     font-semibold  relative bg-gray-100 ' placeholder="رمزعبور جدید خود را وارد کنید" />

                    <button className="focus:outline-none absolute left-3 top-2" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                        {isVisible ? (
                            <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <ViewIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>

                </div>

                <h2 className='mb-2 mt-5 font-bold'> رمز عبور جدید  </h2>
                <div className='w-full flex relative'>
                    <Field name="newPassword" type={isVisible2 ? "text" : "password"} className=' dark:bg-slate-900 w-full p-3 rounded-md bg-gray-100 text-sm focus:outline-none focus:border focus:border-blue-500
                     font-semibold pr-12 relative' placeholder="رمزعبور جدید خود را دوباره وارد کنید" />

                    <button className="focus:outline-none absolute left-3 top-2" type="button" onClick={toggleVisibility2} aria-label="toggle password visibility">
                        {isVisible2 ? (
                            <EyeIcon className="text-2xl text-default-400 pointer-events-none" />
                        ) : (
                            <ViewIcon className="text-2xl text-default-400 pointer-events-none" />
                        )}
                    </button>

                </div>

                <Button type='submit' color="primary" className='block w-full rounded-full font-semibold relative top-3'>
                    تایید رمز عبور
                </Button>

            </Form>

        </Formik>
    </div>
    </div>
  )
}

export default ChangePassowrd