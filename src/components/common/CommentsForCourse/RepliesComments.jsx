import { Button } from '@nextui-org/react'
import { insert } from 'formik'
import { ArrowUp01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import React, { Fragment, useState } from 'react'
import AddReply from './AddReply'
import { ToastContainer } from 'react-toastify'
import AddDissLikeComment from '../../../core/services/api/CourseDetail/AddDislikeComments'
import AddLikeComment from '../../../core/services/api/CourseDetail/AddLikeComments'
import { ErrorToastify } from '../../../core/utils/Toastifies/ErrorToastify.Utils'
import { SuccessToastify } from '../../../core/utils/Toastifies/SuccessToastify.Utils'
import noPhoto from './../../../assets/images/NoPhoto/imgno.png'
import Reply from './Reply'
const ReplyCom = ({                 
    id,
    title,
    describe,
    author,
    userId,
    insertDate,
    accept,
    acceptReplysCount,
    disslikeCount,
    dissLikeCount,
    likeCount,
    currentUserEmotion,
    pictureAddress,
    currentUserLikeId,
    Oid,
    getRepliesAll,
    changeHandler,
 }) => {

  const [checkAdd, setCheckAdd] = useState(false)

  const [like, setLike] = useState(currentUserEmotion === 'LIKED' ? true : false)
  const [dislike, setDislike] = useState(currentUserEmotion === 'DISSLIKED' ? true : false)
  
  const [likeCounted, setLikeCounted] = useState(likeCount)
  const [dislikeCounted, setDislikeCounted] = useState(window.location.pathname.includes('NewDetail') ? dissLikeCount : disslikeCount)
  const [replyVisible, setVisibleReply] = useState(false)

  const setVisible = () => {
    if(replyVisible === false){
        setVisibleReply(true)
    }
    else{
        setVisibleReply(false)
    }
  }


  const likeComment = async () => {
    const response = await AddLikeComment(id)
        if(response.success) {
          SuccessToastify("لایک با موفقیت انجام شد")
        }
        else{
            ErrorToastify(' نظر شما ثبت نشد ')
        }
    }

    const dissLikeComment = async () => {
        const response = await AddDissLikeComment(id)
        if(response.success) {
            SuccessToastify(res.message)
        }
        else{
            ErrorToastify(' نظر شما ثبت نشد ')
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
        <div className=' w-[6px] h-[95%] bg-blue opacity-75 rounded-[4px]'>     </div>
        <div className='w-full h-fit flex flex-col gap-4'>
            <div className='w-fit h-[48px] flex gap-2'>
                <img src={pictureAddress ? pictureAddress : noPhoto} className='size-12 rounded-full' />
                <div className='flex flex-col justify-center gap-1'>
                    <h2 className='font-DanaFaNum-600 text-[14px]'> {author} </h2>
                    <span className='font-DanaFaNum-600 text-[12px] text-gray-800'> {insertDate} </span>
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='font-DanaFaNum-700 text-gray-700 text-[18px] dark:text-white'> {title} </span>
                <span className='font-DanaFaNum-500 text-gray-700 text-[16px] dark:text-white'> {describe} </span>
            </div>
            <div className='flex gap-6 md:items-center md:flex-row flex-col justify-start'>
                <div className='flex gap-4'>
                    <div className='flex gap-2 flex-row-reverse font-[500] text-gray-700 dark:text-white text-[16px]'> {likeCounted} <ThumbsUpIcon className={`${like ? 'text-red-500' : 'text-black dark:text-white' } cursor-pointer`} onClick={() => {likeComment(), liking(), countingLike()}}  /> </div>
                    <div className='flex gap-2 flex-row-reverse font-[500] text-gray-700 dark:text-white text-[16px]'> {dislikeCounted} <ThumbsDownIcon className={`${dislike ? 'text-red-500' : 'text-black dark:text-white' } cursor-pointer`} onClick={() => {dissLikeComment(), disliking(), countingDislike()}} /> </div>
                </div>
                {!checkAdd && <Button onClick={() => {setCheckAdd(true)}} className='bg-white dark:bg-slate-700 dark:border-none dark:text-white w-fit text-blue border rounded-full border-blue text-base font-semibold'> جواب دادن </Button>}
                {checkAdd && <AddReply getRepliesAll={getRepliesAll} setCheckAdd={setCheckAdd} commentId={id} Oid={Oid} changeHandler={changeHandler} />}
            </div>
            {replyVisible && <Reply commentId={id} Oid={Oid} />}
        </div>
        <ToastContainer />
    </Fragment>
  )
}

export default ReplyCom