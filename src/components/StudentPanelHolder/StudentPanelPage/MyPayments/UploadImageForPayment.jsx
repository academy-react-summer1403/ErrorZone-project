import { Modal, ModalBody, ModalContent, ModalHeader,Spinner } from '@nextui-org/react'
import React, { Fragment,  useState } from 'react'
import MyPayMentsAddImage from '../../../../core/services/api/MyPayments/MyPaymentsAddImage'

const UploadImage = ({ 
  isOpen,
  onOpenChange,
  setIsModalOpen,
  dataAPIForPayment,
  setreder
}) => {
  const [UploadImage, setUploadImage] = useState(null)
  const AddImage=async (image)=>{
    setUploadImage(image)
    let massage=await MyPayMentsAddImage(dataAPIForPayment.courseID,dataAPIForPayment.price,dataAPIForPayment.time,dataAPIForPayment.numberInvoice,image)
    setreder(prev=>!prev)
    setIsModalOpen(false)
  }
  return (
    <Fragment>
    <Modal dir='rtl' isOpen={isOpen} onOpenChange={onOpenChange} scrollBehavior='outside' placement='top' size={'lg'}>
      <ModalContent >
        <ModalHeader className="flex flex-row-reverse items-center gap-1 justify-end">

            <div className='flex gap-7 items-center'>
                <h2 className='font-[700] text-[24px] flex flex-row-reverse w-full justify-end gap-1'> بارگزاری رسید پرداخت</h2>
            </div>


        </ModalHeader>

        <ModalBody>

                <div className='w-full h-[400px] bg-[#E8E8E8] rounded-[16px] relative'>
                    <img src={UploadImage? URL.createObjectURL(UploadImage):null} className='w-full h-full rounded-[16px]' />
                </div>
                <input id="file-upload" type="file" accept="image/*" className='hidden' onChange={(el)=>AddImage(el.target.files[0])}/>
                {UploadImage!=null? <Spinner className='mt-[90px] mb-[20px] w-[120px] h-[40px] rounded-[10px] text-center leading-8 bg-blue-500 ' color='white'/>:<label className='mt-[90px] mb-[20px] w-[120px] h-[40px] rounded-[10px] text-center leading-8 bg-blue-500 text-blue-50 font-semibold cursor-pointer' htmlFor='file-upload'>بارگزاری</label>}               

        </ModalBody>
      
      </ModalContent>

    </Modal>
    </Fragment>

  )
}

export default UploadImage
