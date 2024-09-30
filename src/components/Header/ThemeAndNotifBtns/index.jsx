import React from 'react'
import NotificationBtn from './NotificationBtn'
import ThemeToggle from './ThemeToggle'

const ThemeAndNotifBtns = () => {
  return (
    <div className='flex flex-nowrap gap-2'>
      <NotificationBtn />
      <ThemeToggle />
    </div>
  )
}

export default ThemeAndNotifBtns