import React from 'react'
import GoldenInput from '../../../../common/GoldenInput/GoldenInput'
import { Form, Formik } from 'formik'

const UserLinks = () => {
  return (
   <Formik>  
    <Form> 
    <div className='w-[100%] h-[100%] pt-[90px] pl-[278px] pb-[137px] pr-[24px]'>
     <div className='w-[100%]'> 
       <GoldenInput
            type='text'
            name='telegram'
            placeholder='لینک تلگرام خود را وارد کنید'
            label='تلگرام'
            FieldclassName='w-[576px] h-[48px] rounded-[24px]  mt-2 border border-gray-400 pr-2'
          />    
        </div> 
       <div className='w-[100%] pt-4'> 
       <GoldenInput
            type='text'
            name='linkdin'
            placeholder='لینک لینکدین خود را وارد کنید'
            label='لینکدین'
            FieldclassName='w-[576px] h-[48px] rounded-[24px]  mt-2 border border-gray-400 pr-2'
          />           
       </div>
     </div>
    </Form>
   </Formik> 
  )
}

export default UserLinks