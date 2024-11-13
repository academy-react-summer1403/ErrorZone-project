import React from 'react'

const UserInfoComment = ({img , name , date}) => {
  return (

    <div className='flex gap-2'>
      <img src={img} className='size-12 rounded-full' />
      <div className='flex flex-col gap-1'>
        <h2 className='text-black'>{name}</h2>
        <span className='text-gray-800 '>{date}</span>
      </div>
    </div>
  )
}

export default UserInfoComment