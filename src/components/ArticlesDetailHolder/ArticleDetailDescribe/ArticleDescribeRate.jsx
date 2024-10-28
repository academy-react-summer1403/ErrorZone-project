import React , {useState} from 'react'
import { Rating } from '@mui/material'
import RateArticle from '../../../core/services/api/ArticlesDetail/RateArticle'
import { useParams } from 'react-router'
import { SuccessToastify } from '../../../core/utils/Toastifies/SuccessToastify.Utils'
import { ErrorToastify } from '../../../core/utils/Toastifies/ErrorToastify.Utils'

const ArticleDescribeRate = ({data}) => {
  const [rate, setRate] = useState(0)
  
  const params = useParams()
 
  const articleId = params.articleId
 
   const Ratehandler = async () => {
    const res = await RateArticle(articleId , rate)
    if(res.success === true) {
      SuccessToastify('امتیاز شما با موفقیت ثبت شد')
    }else if (res.message === false ) {
      ErrorToastify(res.message)
    }
    
  }
  return (
    <div className="flex justify-between items-center pt-10">
    <div className="flex items-center gap-2">
      <h1 className='text-blue font-DanaFaNum-600 text-base'>  امتیاز بدید  </h1>
      <div className="rate flex gap-1" style={{ direction: "ltr" }}>
        <Rating
          name="half-rating"
          precision={1}
          defaultValue={2.5}
          onChange={(value) => {
            setRate(value.target.value)
            Ratehandler()
           
          }}
        />
      
      </div>   
    </div>
  </div>
  )
}

export default ArticleDescribeRate