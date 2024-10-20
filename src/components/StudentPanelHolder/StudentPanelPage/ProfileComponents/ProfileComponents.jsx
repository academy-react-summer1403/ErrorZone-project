import React from 'react'
import ProfileRightSection from './ProfileRightSection/ProfileRightSection'
import ProfileFields from './ProfileFields/ProfileFields'

const ProfileComponents = () => {
  return (
    <div className=' w-[100%] h-[100%] flex' >
        <ProfileRightSection />
        <ProfileFields />
      </div>
  )
}

export default ProfileComponents