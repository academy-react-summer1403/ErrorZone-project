import React from 'react'
import { Outlet } from 'react-router'

const ProfileFields = () => {
  return (
    <div className='w-[100%] h-[100%] scroll'> <Outlet />  </div>
  )
}

export default ProfileFields