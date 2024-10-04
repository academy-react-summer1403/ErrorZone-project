import React from 'react'
import LanguagesIcons from './LanguagesIcons'
import Html5Pic  from '../../../assets/images/ProgramminLangPic/Html5Pic.svg'
import Css3Pic  from '../../../assets/images/ProgramminLangPic/Css3Pic.svg'
import JSPic  from '../../../assets/images/ProgramminLangPic/JSPic.svg'
import ReactPic  from '../../../assets/images/ProgramminLangPic/ReactPic.svg'
import FigmaPic  from '../../../assets/images/ProgramminLangPic/FigmaPic.svg'

const LearnedProcessSec = () => {
  return (
    <div className="w-5/6 mx-auto flex justify-between flex-nowrap items-center">
      <LanguagesIcons pic={FigmaPic} className="block rotate-[15] size-16 tablet:size-24" />
      <LanguagesIcons pic={ReactPic} className="block -rotate-[15] size-[71px] tablet:size-28" />
      <LanguagesIcons pic={JSPic} className="block size-16 tablet:size-24 " />
      <LanguagesIcons pic={Css3Pic} className="block -rotate-[15] size-16 tablet:size-24" />
      <LanguagesIcons pic={Html5Pic} className="block rotate-[9.5] size-16 tablet:size-24" />
    </div>
  )
}

export default LearnedProcessSec