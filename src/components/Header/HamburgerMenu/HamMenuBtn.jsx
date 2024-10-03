import { Menu02Icon } from 'hugeicons-react'
import React from 'react'

const HamMenuBtn = ({onClick, isMenuOpen, setIsMenuOpen}) => {

  return (
    <div className='hamburgerBtn size-14 flex tablet:hidden justify-center items-center rounded-full bg-black text-white dark:bg-white dark:text-black cursor-pointer' onClick={onClick}>
    <Menu02Icon animate={true} size={24} />
  </div>
  )
}

export default HamMenuBtn