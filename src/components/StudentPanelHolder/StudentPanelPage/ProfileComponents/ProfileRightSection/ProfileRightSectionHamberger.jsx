import { Menu02Icon } from 'hugeicons-react'
import React from 'react'

const ProfileRightSectionHamberger = ({isToggle , isOpen}) => {
  return (
    <div className={` bg-black text-white w-[56px] h-[56px] mr-4  cursor-pointer rounded-full  desktop:hidden   ${isOpen ? 'hidden' : 'show'}`} onClick={isToggle}>
        <Menu02Icon  className='mr-3 mt-3'/>
        
    </div>
  )
}

export default ProfileRightSectionHamberger