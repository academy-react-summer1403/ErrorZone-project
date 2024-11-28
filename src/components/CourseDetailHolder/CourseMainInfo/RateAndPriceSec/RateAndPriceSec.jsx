import { Rating } from '@mui/material'
import React from 'react'

const RateAndPriceSec = ({data}) => {
  return (
    <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <div className="rate flex gap-1" style={{ direction: "ltr" }}>
        <Rating
          name="half-rating"
          defaultValue={data?.currentRate}
          precision={0.5}
          readOnly
        />
        <span>( {data?.currentRate} )</span>
      </div>
      <span>( {data?.commentCount} ) نظرات </span>
    </div>

    <div className="price flex items-center gap-1">
      <span className="font-DanaFaNum-700 text-2xl">{data?.cost}</span>
      <span className="text-sm">تومان</span>
    </div>
  </div>
  )
}

export default RateAndPriceSec