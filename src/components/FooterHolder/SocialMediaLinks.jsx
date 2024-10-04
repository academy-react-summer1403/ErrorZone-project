import { InstagramIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from 'hugeicons-react'
import React from 'react'

const SocialMediaLinks = () => {
  return (
    <div className="flex items-center flex-nowrap gap-6">
      <TwitterIcon size={24} />
      <YoutubeIcon size={24} />
      <TelegramIcon size={24} />
      <InstagramIcon size={24} />
    </div>
  )
}

export default SocialMediaLinks