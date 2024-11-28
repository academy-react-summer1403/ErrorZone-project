import React, { useEffect, useState } from 'react'
import jMoment from 'moment-jalaali'
import ReplyCom from './RepliesComments'
import GetAllReplies from '../../../core/services/api/CourseDetail/GetAllReplies'
import GetAllCourseREplies from '../../../core/services/api/CourseDetail/GetAllCourseReplies'

const Reply = ({ commentId, Oid }) => {
  const [changeFlag, setChangeFlag] = useState([])

  const changeHandler = () => {
    setChangeFlag(!changeFlag)
  }

    const [replies, setReply] = useState([])

    const getReplies = async () => {
      const params = {
          Oid: Oid,
          commentId: commentId
      }
  
      const response = await GetAllCourseREplies(params)
      setReply(response)
    }

     const repliesNew = async () => {
  
       const response = await GetAllReplies (commentId)
       setReply(response)
     }
  
    const getRepliesAll = () => {
      getReplies()
      repliesNew()
    }

    useEffect(() => {
      getRepliesAll()
    }, [changeFlag])

    console.log("repliesq222" , replies)

    return <>
        {replies?.map((reply, index) => {
            return <li key={index} className=' pr-5 w-full h-fit flex gap-4  '>
              <ReplyCom
               changeHandler={changeHandler}
                id={reply.id}
                title={reply.title}
                describe={reply.describe}
                author={(reply.author) ? (reply.author === null ? 'ناشناس' : reply.author.replace('-', ' ')) : (reply.autor === null ? 'ناشناس' : reply.autor.replace('-', ' '))}
                userId={reply.userId}
                insertDate={jMoment(reply.insertDate).locale('fa').format('jD jMMMM jYYYY')}
                accept={reply.accept}
                acceptReplysCount={reply.acceptReplysCount}
                dissLikeCount={reply.dissLikeCount && reply.dissLikeCount}
                disslikeCount={reply.disslikeCount && reply.disslikeCount}
                likeCount={reply.likeCount}
                currentUserEmotion={reply.currentUserEmotion}
                pictureAddress={reply.pictureAddress}
                currentUserLikeId={reply.currentUserLikeId}
                Oid={Oid}
                getRepliesAll={getRepliesAll}
            />
            </li>
        })}
    </>
}

export default Reply
