import { Field, Form, Formik } from 'formik'
import React , {useState} from 'react'
import { SentIcon, SmileIcon } from 'hugeicons-react'
import ArticleDetailReplyComments from '../../../core/services/api/ArticlesDetail/ArticleDetailReplyComments'


const CommentsReplyForm = ({data}) => {
  const [comment, setComment] = useState('')
//  console.log('daaaa' ,data)
  const replyCommentsHandler = async (val) => {
    const objName = {
        newsId : data.newsId,
        parentId: data.id,
        title: val.title,
        describe: comment ,       
    }; 
    
      console.log('obj' , objName);
   
   
    const res = await ArticleDetailReplyComments(objName)
     console.log('replyee' , res) 
  }

  return (
    <Formik   
    initialValues={{title:"" , inputComment: comment}} 
    onSubmit={(value) => replyCommentsHandler(value)}
    > 
      <Form>
    <div className='w-[490px] h-[72px] bg-white border-2 border-blue rounded-3xl mr-[60px] flex'>  
     <div className='w-[96px] h-[72px] flex gap-2 items-center mr-[16px]'>
       <button type='submit' className='bg-blue text-white w-[40px] h-[40px] flex justify-center items-center '> <SentIcon />      </button>
       <div className='bg-white text-blue border border-gray-200 w-[40px] h-[40px] rounded-[50%] flex justify-center items-center'>   <SmileIcon />  </div>
     </div>
     <div className='w-[362px] h-[72px] grid grid-cols-1 pr-[16px]'>
        <div className='w-[340px] h-[36px]  border-b border-b-gray-400'>   
        <Field name='title' maxLength={300} className='w-full h-[20px] font-DanaFaNum-500 text-sm border border-white text-black pr-2' placeholder='عنوان نظر خود را بنویسید' />
        </div>
        <Field name='inputComment'  maxLength={300} className='w-full h-[20px]  border-collapse  ' placeholder='متن نظر خود را بنویسید' value={comment} onChange={(e) => setComment(e.target.value)}/>
     </div>
   </div>
     </Form>
   </Formik>
  )
}

export default CommentsReplyForm