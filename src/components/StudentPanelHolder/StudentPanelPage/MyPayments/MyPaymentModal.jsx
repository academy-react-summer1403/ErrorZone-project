import {Modal, ModalBody, ModalContent, ModalHeader,Spinner } from '@nextui-org/react'
import React, { useState } from 'react'
import { Field, Formik,Form ,ErrorMessage} from 'formik'
import * as yup from 'yup'
import UploadImage from './UploadImageForPayment'
import jMoment from 'jalali-moment'
import {  ToastContainer } from 'react-toastify'
import { useDisclosure } from "@nextui-org/react";

const MyPaymentModal = ({ 
    name,
    courseID,
    isOpen,
    onOpenChange,
    maxNumber,
    setIsModalOpen,
    setreder
  }) => {   
    const {isOpen:isOpenTwo, onOpen:onOpenTwo, onOpenChange:onOpenChangeTwo} = useDisclosure();
    const [dataAPIForPayment, setdataAPIForPayment] = useState({})
    const [OpenModalPic, setOpenModalPic] = useState(false)
    const onSubmit=async(el)=>{
      
      setdataAPIForPayment({"courseID":courseID,"price":el.price,"time":jMoment().locale('en').format('YYYY-MM-DD'),"numberInvoice":el.numberInvoice})
      setOpenModalPic(true)
      onOpenTwo(true)
    }
    const generateRandom10DigitNumber = () => {
        return Math.floor(1000000000 + Math.random() * 9000000000); 
      };
      
    const [InitialValue, setInitialValue] = useState({
        title:name,
        price:"",
        numberInvoice:generateRandom10DigitNumber(),
        date:jMoment().locale('fa').format('jYYYY jMMMM jD')
      })

    const validation=yup.object().shape(
        {
            price: yup
            .number()
            .typeError('قیمت باید یک عدد باشد')
            .min(0, 'قیمت نمی‌تواند کمتر از صفر باشد') 
            .max(maxNumber, 'میزان پرداختی از هزینه دوره بیشتر می باشد.')
            .required('لطفاً قیمت را وارد کنید')
        }
    )
  return (
    <Modal dir='rtl' isOpen={isOpen} onOpenChange={onOpenChange}  scrollBehavior='outside' placement='top' size={'lg'}>
      <ModalContent>
        
        <ModalHeader className="flex flex-row-reverse items-center gap-1 justify-end">

            <div className='flex gap-7 items-center'>
                <h2 className='font-[700] text-[24px] flex flex-row-reverse w-full justify-end gap-1'> پرداخت </h2>
            </div>

            <ToastContainer />

        </ModalHeader>

        <ModalBody>
                <Formik  onSubmit={onSubmit}  initialValues={InitialValue} validationSchema={validation} enableReinitialize={true}>
                    <Form>
                            <div className='flex flex-col gap-4'>
                            <h2 className='text-base text-[#787878]'> نام دوره </h2>
                            <Field name='title' className="bg-[#e8e7e7] cursor-default dark:bg-slate-900 rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3  w-[100%] h-[48px]" readOnly/>
                        </div>
                        <div className='flex flex-col gap-4 my-2'>
                            <h2 className='text-base text-[#787878]'> مبلغ پرداختی</h2>
                            <Field name='price' className="bg-[#e8e7e7] dark:bg-slate-900 rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3  w-[100%] h-[48px]"/>
                            <ErrorMessage name='price' className='text-red-700 text-[14px]' component={"p"}/>
                            <span className='text-green-700 text-[14px]'>میزان بدهی شما برابر است با {Number(maxNumber).toLocaleString('en-US')} تومان</span>
                        </div>
                        <div className='flex flex-col gap-4 my-2'>
                            <h2 className='text-base text-[#787878]'>  تاریخ پرداخت</h2>
                            <Field name='date' className="bg-[#e8e7e7] cursor-default dark:bg-slate-900 rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3  w-[100%] h-[48px]"  readOnly/>
                        </div>
                        <div className='flex flex-col gap-4 my-2'>
                            <h2 className='text-base text-[#787878]'> شماره فاکتور پرداخت</h2>
                            <Field name='numberInvoice' className="bg-[#e8e7e7] cursor-default dark:bg-slate-900 rounded-[16px] text-right placeholder-[#787878] font-[700] text-[14px] px-3  w-[100%] h-[48px]" readOnly/>
                        </div>
                        <button type='submit' className='bg-blue-500 px-7 py-2 rounded-xl font-bold text-white my-4'>پرداخت </button>
                        {OpenModalPic && <UploadImage isOpen={isOpenTwo} setIsModalOpen={setIsModalOpen} onOpenChange={setIsModalOpen} dataAPIForPayment={dataAPIForPayment} setreder={setreder}/> }
                    </Form>
                </Formik>
                
               

        </ModalBody>
      
      </ModalContent>
    </Modal>
  )
}

export default MyPaymentModal