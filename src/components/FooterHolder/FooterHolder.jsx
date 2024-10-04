import React from 'react'
import LogoWithTypo from "../common/LogoWithTypo"
import FooterMenu from './FooterMenu'
import LogoNoTypo from '../common/LogoNoTypo'
import SocialMediaLinks from './SocialMediaLinks'

const FooterHolder = () => {
  return (
    <div className='border-t-2 border-gray-400  pt-16'>
        <div className='w-full h-max flex justify-between items-center flex-wrap space-y-10 '>
          <LogoWithTypo />
          <FooterMenu />
          <LogoNoTypo/>
          <SocialMediaLinks />
        </div>
    </div>
  )
}

export default FooterHolder