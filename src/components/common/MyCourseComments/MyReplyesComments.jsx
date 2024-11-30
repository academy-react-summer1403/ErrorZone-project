import { Button } from '@nextui-org/react'
import { insert } from 'formik'
import { ArrowUp01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React, { Fragment, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import AddDissLikeComment from '../../../core/services/api/Dashboard/AddDislikeComments'
import AddLikeComment from '../../../core/services/api/Dashboard/AddLikeComments'
import MyAddReplyes from './MyAddReply'
const MyReplyComments = ({
    id,
    title,
    describe,
    author,
    userId,
    insertDate,
    accept,
    acceptReplysCount,
    disslikeCount,
    likeCount,
    currentUserEmotion,
    pictureAddress,
    currentUserLikeId,
    Oid,
    getRepliesAll
}) => {


    const [checkAdd, setCheckAdd] = useState(false)

    
  const [like, setLike] = useState(currentUserEmotion === 'LIKED' ? true : false)
  const [dislike, setDislike] = useState(currentUserEmotion === 'DISSLIKED' ? true : false)

  const [likeCounted, setLikeCounted] = useState(likeCount)
  const [dislikeCounted, setDislikeCounted] = useState(disslikeCount)

    const notifySuccess = (message) => { toast.dismiss(), toast.success(message) }
    const notifyError = () => { toast.dismiss(), toast.error(' شما یک بار نظر خود را اعلام کرده اید ') }
  
    const likeComment = async () => {
      const response = await AddLikeComment(id)
      if(response.success) {
        //   notifySuccess(response.message)
      }
      else{
        //   notifyError()
      }
      }
  
      const dissLikeComment = async () => {
          const response = await AddDissLikeComment(id)
          if(response.success) {
            //   notifySuccess(response.message)
          }
          else{
            //   notifyError()
          }
      }

      const liking = () => {
        setLike(true)
        setDislike(false)
    }

    const disliking = () => {
        setLike(false)
        setDislike(true)
    }

    const [ban, setBan] = useState(true)
    const [ban2, setBan2] = useState(true)


    const countingLike = () => {
        if(ban) {
            setLikeCounted(likeCounted + 1) 
            if(dislikeCounted > 0){
             setDislikeCounted(dislikeCounted - 1) 
            }
            setBan(false)
            setBan2(true)
        }
     }
     
     const countingDislike = () => {
        if(ban2) {
            setDislikeCounted(dislikeCounted + 1)
            if(likeCounted > 0) {
                setLikeCounted(likeCounted - 1)  
            }
            setBan2(false)
            setBan(true)
        }
      }

  return (
    <Fragment>
        <div className='w-full h-fit flex flex-col gap-4'>
            <div className='w-fit h-[48px] flex gap-2'>
                <img src={pictureAddress} className='min-w-12 min-h-12 size-12 rounded-full bg-[#5865F2]' />
                <div className='flex flex-col justify-center gap-1'>
                    <h2 className='font-[600] text-[14px] text-right'> {author} </h2>
                    <span className='font-[600] text-[12px] text-[#707070] text-right whitespace-nowrap dark:text-gray-300'> {insertDate} </span>
                </div>
            </div>
            <div className='flex flex-col gap-2 text-right'>
                <span className='font-[700] text-[#2F2F2F] text-[18px] whitespace-nowrap dark:text-white'> {title} </span>
                <span className='font-[500] text-[#2F2F2F] text-[16px] whitespace-nowrap dark:text-white'> {describe} </span>
            </div>
            <div className='flex gap-6 md:items-center md:flex-row flex-col justify-start'>
                <div className='flex gap-4'>
                    <div className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] text-[16px] dark:text-white'> {likeCounted} <ThumbsUpIcon className={`${like ? 'text-red-500' : 'text-black dark:text-white' } cursor-pointer`} onClick={() => {likeComment(), liking(), countingLike()}} /> </div>
                    <div className='flex gap-2 flex-row-reverse font-[500] text-[#2F2F2F] text-[16px] dark:text-white'> {dislikeCounted} <ThumbsDownIcon className={`${dislike ? 'text-red-500' : 'text-black dark:text-white'} cursor-pointer`} onClick={() => {dissLikeComment(), disliking(), countingDislike()}} /> </div>
                </div>
                {!checkAdd && <Button onClick={() => {setCheckAdd(true)}} className='bg-white w-fit text-blue-500 border rounded-full border-blue-500 text-base font-semibold dark:bg-slate-700 dark:border-none dark:text-white'> جواب دادن </Button>}
                {checkAdd && <MyAddReplyes setCheckAdd={setCheckAdd} commentId={id} Oid={Oid} />}
            </div>
        </div>
        <ToastContainer />
    </Fragment>
  )
}

export default MyReplyComments
