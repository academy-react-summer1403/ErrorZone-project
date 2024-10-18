import { Field, Form, Formik } from 'formik'
import React from 'react'
import { SentIcon, SmileIcon } from 'hugeicons-react'

const CommentsReplyForm = () => {
  return (
    <Formik> 
      <Form>
    <div className='w-[490px] h-[72px] bg-white border-2 border-blue rounded-3xl mr-[60px] flex'>  
     <div className='w-[96px] h-[72px] flex gap-2 items-center mr-[16px]'>
       <button className='bg-blue text-white w-[40px] h-[40px] flex justify-center items-center '> <SentIcon />      </button>
       <div className='bg-white text-blue border border-gray-200 w-[40px] h-[40px] rounded-[50%] flex justify-center items-center'>   <SmileIcon />  </div>
     </div>
     <div className='w-[362px] h-[72px] grid grid-cols-1 pr-[16px]'>
        <div className='w-[340px] h-[36px]  border-b border-b-gray-400'>   
        <Field className='w-[143px] h-[20px] font-DanaFaNum-500 text-sm border border-white text-black pr-2' placeholder='عنوان نظر خود را بنویسید' />
        </div>
        <Field className='w-[143px] h-[20px]  border-collapse' placeholder='متن نظر خود را بنویسید'/>
     </div>
   </div>
     </Form>
   </Formik>
  )
}

export default CommentsReplyForm