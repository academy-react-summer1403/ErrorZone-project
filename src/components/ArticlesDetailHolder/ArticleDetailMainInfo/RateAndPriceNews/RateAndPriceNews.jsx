import { Rating } from '@mui/material'
import React , {useState} from 'react'

const RateAndPriceNews = ({data}) => {

   console.log('data' , data)

  return (
    <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="rate flex gap-1" style={{ direction: "ltr" }}>
        <Rating
          name="half-rating"
          defaultValue={data?.currentUserRateNumber}
          precision={0.5}
          readOnly
        />
        <span>( {data?.currentUserRateNumber} )</span>
      </div>
      <span>( {data?.commentsCount} ) نظرات </span>
    </div>

  </div>
  )
}

export default RateAndPriceNews