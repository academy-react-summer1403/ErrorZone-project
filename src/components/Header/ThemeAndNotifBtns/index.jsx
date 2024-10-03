import React from 'react'
import NotificationBtn from './NotificationBtn'
import ThemeToggle from './ThemeToggle'

const ThemeAndNotifBtns = () => {
  return (
    <div className='hidden flex-nowrap gap-2 tablet:flex'>
      <NotificationBtn />
      <ThemeToggle />
    </div>
  )
}

export default ThemeAndNotifBtns