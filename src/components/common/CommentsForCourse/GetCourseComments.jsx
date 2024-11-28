import React, { useEffect, useState } from 'react'
import { Button } from '@nextui-org/react'
import { ArrowDown01Icon, ArrowUp01Icon, Comment01Icon, CommentAdd01Icon, ThumbsDownIcon, ThumbsUpIcon } from 'hugeicons-react'
import jMoment from 'jalali-moment'
import Reply from './Reply'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import CourseLike from '../../../core/services/api/CourseDetail/CourseLike'
import CourseDislike from '../../../core/services/api/CourseDetail/CourseDislike'
import AddLikeCommentNew from '../../../core/services/api/CourseDetail/AddLikeNewComments'
import AddReply from './AddReply'
import { ErrorToastify } from '../../../core/utils/Toastifies/ErrorToastify.Utils'
import { SuccessToastify } from '../../../core/utils/Toastifies/SuccessToastify.Utils'
import noPhoto from './../../../assets/images/NoPhoto/imgno.png'

const CommentCom = ({ pictureAddress, title, describe, likeCount, disslikeCount, dissLikeCount, insertDate, author, acceptReplysCount, id, Oid, currentUserIsLike, currentUserIsDissLike, currentUserEmotion , changeHandler }) => {

    const [replyVisible, setVisibleReply] = useState(false)
    const [checkAdd, setCheckAdd] = useState(false)
    const [like, setLike] = useState(window.location.pathname.includes('NewDetail') && currentUserIsLike ? true : false || window.location.pathname.includes('CourseDetail') && currentUserEmotion === 'LIKED' ? true : false)
    const [dislike, setDislike] = useState(window.location.pathname.includes('NewDetail') && currentUserIsDissLike ? true : false || window.location.pathname.includes('CourseDetail') && currentUserEmotion === 'DISSLIKED' ? true : false)

    const [likeCounted, setLikeCounted] = useState(likeCount)
    const [dislikeCounted, setDislikeCounted] = useState(window.location.pathname.includes('NewDetail') ? dissLikeCount : disslikeCount)

    const navigate = useNavigate()

    const setVisible = () => {
      if(replyVisible === false){
          setVisibleReply(true)
      }
      else{
          setVisibleReply(false)
      }
    }

    const likeComment = async () => {
        const response = await CourseLike(id)
        if(response.success) {
            SuccessToastify(response.message)
        }
        else{
            ErrorToastify(' نظر شما ثبت نشد ')
        }
    }

    const dissLikeComment = async () => {
        const response = await CourseDislike(id)
        if(response.success) {
            SuccessToastify(response.message)
        }
        else{
            ErrorToastify(' نظر شما ثبت نشد ')
        }
    }

    const likeNew = async (likeType) => {
        const response = await AddLikeCommentNew(id, likeType)
        if(response.success) {
            // ToastSuccess(' نظر شما با موفقیت ثبت شد ')
            SuccessToastify(response.message)            
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
    <ul className='w-full h-fit flex flex-col gap-4 '>
        <div className='w-fit h-[48px] flex gap-2'>
            <img src={pictureAddress ? pictureAddress : noPhoto} className='size-12 rounded-full ' />
            <div className='flex flex-col justify-center gap-1'>
                <h2 className='font-DanaFaNum-600 text-[14px]'> {author.replace('-', ' ')} </h2>
                <span className='font-DanaFaNum-600 text-[12px] text-gray-800'> {jMoment(insertDate).locale('fa').format('jD jMMMM jYYYY')} </span>
            </div>
        </div>
        <div className='flex flex-col gap-2'>
            <span className='font-DanaFaNum-700 text-gray-700 text-[18px] dark:text-white'> {title} </span>
            <span className='font-DanaFaNum-500 text-gray-700  text-[16px] dark:text-white'> {describe} </span>
        </div>
        <div className='flex gap-6 flex-col md:flex-row items-start md:items-center'>
            <div className='flex gap-4'>
                <div className='flex gap-2 flex-row-reverse font-DanaFaNum-500 dark:text-white text-black text-[16px]'> {likeCounted} <ThumbsUpIcon className={`${like ? 'text-red-500' : 'text-black dark:text-white'} cursor-pointer`} onClick={() => {window.location.pathname.includes('NewDetail') ? likeNew(true) : likeComment(), liking(), countingLike()}} /> </div>

                <div className='flex gap-2 flex-row-reverse font-DanaFaNum-500 dark:text-white text-black text-[16px]'> {dislikeCounted} <ThumbsDownIcon className={`${dislike ? 'text-red-500' : 'text-black dark:text-white'} cursor-pointer`} onClick={() => {window.location.pathname.includes('NewDetail') ? likeNew(false) : dissLikeComment(), disliking(), countingDislike()}} /> </div>
            </div>
            <div className='flex gap-4'>
                {!checkAdd && <Button onClick={() => {setCheckAdd(true)}} className='bg-white text-blue border rounded-full border-blue text-base font-semibold dark:bg-slate-700 dark:border-none dark:text-white'> جواب دادن </Button>}
                {acceptReplysCount > 0 && <button onClick={() => setVisible()} className='whitespace-nowrap text-[14px] font-DanaFaNum-500 underline flex gap-1 items-center'> مشاهده جواب‌ها ({acceptReplysCount}) {replyVisible ? <ArrowUp01Icon className='size-5' /> : <ArrowDown01Icon className='size-5' />} </button> }
            </div>

            {checkAdd && <AddReply commentId={id} Oid={Oid} setCheckAdd={setCheckAdd} changeHandler={changeHandler} />}

        </div>
        
        {replyVisible && <Reply commentId={id} Oid={Oid} />}
        <ToastContainer/>
    </ul>
  )
}

export default CommentCom