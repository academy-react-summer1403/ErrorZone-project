import { Field, Form, Formik } from 'formik'
import { SentIcon, SmileIcon } from 'hugeicons-react'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import AddReplyComment from '../../../core/services/api/CourseDetail/AddReplyComments';
import { ErrorToastify } from '../../../core/utils/Toastifies/ErrorToastify.Utils';
import { SuccessToastify } from '../../../core/utils/Toastifies/SuccessToastify.Utils';
import AddReplyNew from '../../../core/services/api/CourseDetail/AddNewReply';

const AddReply = ({ commentId, Oid, setCheckAdd, getRepliesAll ,  changeHandler }) => {

  const addReply = async (value) => {

    if(window.location.pathname.includes('courses')) {
      const formData = new FormData()
      formData.append('Title', value.title )
      formData.append('Describe', value.describe)
      formData.append('CourseId', Oid)
      formData.append('CommentId', commentId)
  
      const response = await AddReplyComment(formData)
  
        if(value.title.length < 10 || value.describe.length < 10){
          ErrorToastify(" تعداد کاراکتر های امکان از 10 تا 390 است ")
        }
  
        if(response.success == true) {
            SuccessToastify(' عملیات با موفقیت انجام شد ')
            changeHandler()
            setCheckAdd(false)
            getRepliesAll()
        }
        else{
          ErrorToastify( ' درخواست شما ثبت نشد مقادیر رو با دقت وارد کنید ' )
        }
    }
    else if(window.location.pathname.includes('NewDetail')) {
      const raw = {
        title: value.title,
        describe: value.describe,
        newsId: Oid
      }
  
      const response = await AddReplyNew(raw)
  
        if(value.title.length < 10 || value.describe.length < 10){
          ErrorToastify(" تعداد کاراکتر های امکان از 10 تا 390 است ")
        }

        if(response.success === true) {
            SuccessToastify(' عملیات با موفقیت انجام شد ')
            setCheckAdd(false)
        }
        else{
          ErrorToastify( ' درخواست شما ثبت نشد مقادیر رو با دقت وارد کنید ' )
        }
    }

  }

  return (
      <Formik
        initialValues={{title: '', describe: ''}}
        onSubmit={(value) => addReply(value)}
      >

        <Form className='w-full border border-blyue rounded-[24px] h-fit flex gap-4 p-4'>

            <button type='submit' className='size-10 min-w-10 min-h-10 bg-blue rounded-full flex justify-center items-center'> <SentIcon className='size-5 text-white' /> </button>
            <button className='size-10 min-w-10 min-h-10 border border-white flex rounded-full justify-center items-center'> <SmileIcon className='size-5 text-blue-500' /> </button>

            <div className='w-full flex flex-col justify-between'>
                <Field name='title' placeholder='عنوان نظر خود را بنویسید' className='outline-none bg-transparent' />
                <div className='w-full border'></div>
                <Field name='describe' placeholder='متن نظر خود را بنویسید' className='outline-none bg-transparent' />
            </div>

            <ToastContainer />

        </Form>
        

      </Formik>
  )
}


export default AddReply
