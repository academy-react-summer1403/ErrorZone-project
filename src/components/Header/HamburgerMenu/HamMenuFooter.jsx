import { InstagramIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from 'hugeicons-react'
import React from 'react'

const HamMenuFooter = () => {
  return (
    <div className='border-t border-white pt-4 flex justify-center items-center gap-6'>
      <TwitterIcon className='cursor-pointer' />
      <YoutubeIcon className='cursor-pointer' />
      <TelegramIcon className='cursor-pointer' />
      <InstagramIcon className='cursor-pointer' />
    </div>
  )
}

export default HamMenuFooter