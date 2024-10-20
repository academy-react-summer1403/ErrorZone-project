import React from 'react'
import ProfileLinks from './ProfileLinks'
import { getQuery } from '../../../../../core/services/api/reactQuery/getQuery'

const ProfileRightSection = () => {

  return (
    <div className='w-[248px] h-[100%] p-[24px] border-l border-gray-400'>
      <h1 className='w-[115px] h-[34px] font-DanaFaNum-700 text-2xl'>    پروفایل من  </h1>
      <ProfileLinks />
    </div>
  )
}

export default ProfileRightSection