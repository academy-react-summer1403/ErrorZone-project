import React from 'react'
import MidHeroSecPart from './MobileViewHeroSec/MidHeroSecPart'
import RightHeroSecPart from './MobileViewHeroSec/RightHeroSecPart'
import LeftHeroSecPart from './MobileViewHeroSec/LeftHeroSecPart'

const MobileViewHeroSec = () => {
  return (
    <div className='flex justify-center flex-col items-center gap-12 mx-auto'>
        <MidHeroSecPart />
        <RightHeroSecPart />
        <LeftHeroSecPart />
    </div>
  )
}

export default MobileViewHeroSec