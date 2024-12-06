import React, { useEffect, useState } from 'react'
import jMoment from 'moment-jalaali'
import GetCommentsRepliesNews from '../../../core/services/api/ArticlesDetail/GetCommentsRepliesNews'
import GetRepliesCourse from '../../../core/services/api/CourseDetail/GetCourseCommentsReplyes'
import MyReplyComments from './MyReplyesComments'



const MyReply = ({ commentId, Oid }) => {

    const [replies, setReply] = useState([])

    const getReplies = async () => {
      const params = {
          Oid: Oid,
          commentId: commentId
      }
  
      const response = await GetRepliesCourse(params)
      setReply(response)
    }

    const repliesNew = async () => {
  
      const response = await GetCommentsRepliesNews(commentId)
      setReply(response)
    }
    
    const getRepliesAll = () => {
      getReplies()
      repliesNew()
    }

    useEffect(() => {
      getRepliesAll()
    }, [])

    return <>
        {replies.map((reply, index) => {
            return <li key={index} className='border-r-5 border-blue-500 pr-5 w-full h-fit flex gap-4'>
              <MyReplyComments
                id={reply.id}
                title={reply.title}
                describe={reply.describe}
                author={(reply.author) ? (reply.author === null ? 'ناشناس' : reply.author.replace('-', ' ')) : (reply.autor === null ? 'ناشناس' : reply.autor.replace('-', ' '))}
                userId={reply.userId}
                insertDate={jMoment(reply.insertDate).locale('fa').format('jD jMMMM jYYYY')}
                accept={reply.accept}
                acceptReplysCount={reply.acceptReplysCount}
                disslikeCount={reply.disslikeCount}
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

export default MyReply