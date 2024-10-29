import { CommentAdd01Icon, CommentAdd02Icon, DistributeVerticalCenterIcon, VirtualRealityVr01Icon } from 'hugeicons-react'
import React , {useState , useEffect} from 'react'
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import CommentsReplyCard from '../CommentsReplyCard';
import { getQuery } from '../../../core/services/api/reactQuery/getQuery';
import { useParams } from 'react-router';
import GetCommentsRepliesNews from '../../../core/services/api/ArticlesDetail/GetCommentsRepliesNews';

const AddCommentsCard = () => {
  const {articleId} = useParams()
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

   const GetNewsAllComments = getQuery('newsComment' , `/News/GetNewsComments?NewsId=${articleId}`)
   const data = GetNewsAllComments
  //  console.log('dattta' , data)

   return (
    <div className='col-span-12 sm:col-span-6 xl:col-span-3 h-72 p-4 rounded-3xl border bg-blue dark:bg-white flex flex-col justify-center items-center gap-4 shadow-md cursor-pointer ' onClick={onOpen} >
      <div className=''>
       < CommentAdd01Icon className='text-white mr-[49px]'/>
       <h1 className='mt-[8px] font-DanaFaNum-600 text-lg text-white mr-[30px]'>   نظر شما  </h1>
       <button  className='mt-[16px] font-DanaFaNum-500 text-sm text-gray-100 text-opacity-[90%]'>   برای نظر دادن کلیک کنید   </button>
      </div>
       <Modal className='overflow-x-hidden h-[500px]  overflow-y-auto scroll-smooth' size={'3xl'} isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false} isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 w-[263px] h-[63px] font-DanaFaNum-700 text-2xl text-nowrap">نظرات دانشجو ها و اساتید </ModalHeader>
              <ModalBody className=''>
              <div className='w-[107px] h-[40px] rounded-[40px] bg-blue flex justify-center items-center '> 
                <CommentAdd02Icon className='text-white' />
                <p className='text-white pr-2 font-DanaFaNum-500 text-base'>  نظر شما  </p>
              </div>
                {data.map((items , index) => {
                  return <CommentsReplyCard key={index} data={items} />
                })} 
                {/* {commentReplies.map((items , index) => {
                   return <CommentsReplyCard  key={index} GetNewsAllComments={items}/>
                })} */}
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> 
    </div>
  )
}

export default AddCommentsCard