import React from 'react'
import HamMenuHeader from './HamMenuHeader'
import HamMenuBody from './HamMenuBody'
import HamMenuFooter from './HamMenuFooter'

const HamMenuContainer = ({onClick, isMenuOpen, setIsMenuOpen}) => {
  return (
    <div className="hamburger-menu-container p-4 block tablet:hidden fixed left-0 right-0 top-0 h-[100vh] overflow-y-auto bg-black text-white dark:bg-black dark:text-white z-50">
        <HamMenuHeader onClick={onClick} setIsMenuOpen={setIsMenuOpen} />
        <HamMenuBody onClick={onClick}/>
        <HamMenuFooter />
    </div>
  )
}

export default HamMenuContainer