import React ,{useState} from 'react'
import { Outlet } from 'react-router'
import ProfileRightSectionHamberger from '../ProfileRightSection/ProfileRightSectionHamberger'
import { Link, NavLink } from 'react-router-dom'

const ProfileFields = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const isToggle = () => {
    setIsOpen(!isOpen)
  }
  const onClose = () => {
    setIsOpen(isOpen)
  }

  return (
    <div className='w-[100%] h-[100%] scroll dark:bg-blackPanel'> 
    <div className='flex items-center'>  
       <ProfileRightSectionHamberger  isToggle={isToggle} isOpen={isOpen}/>
       <div className={`bg-black text-white  rounded-xl desktop:hidden mx-auto   ${isOpen ? 'show' : 'hidden'}`}> 
    <div className='  flex gap-1'>
      <div className='w-full text-white'> 
         <NavLink  to={"/StudentPanel/profile"} className='text-gray-800 flex items-center   font-DanaFaNum-500 text-sm  pr-2 pt-2 rounded-xl '>  اطلاعات حساب کاربری   </NavLink>
      </div>
      <div className='w-full'>
         <NavLink className={({isActive}) => isActive ? ' text-blue flex items-center   font-DanaFaNum-500 text-sm pr-2 pt-2 rounded-xl' : ' text-gray-800 flex  items-center font-DanaFaNum-500 text-sm  pr-1 pt-2' } to={"/StudentPanel/profile/UserImages"}>   عکس ها  </NavLink>
      </div> 
      <div className='w-full'>
        <NavLink className={({isActive}) => isActive ? ' text-blue flex  items-center  font-DanaFaNum-500 text-sm  pr-2 pt-2 rounded-xl' : ' text-gray-800 flex  items-center font-DanaFaNum-500 text-sm  pr-2 pt-2' } to={"/StudentPanel/profile/UserAddress"}>  محل سکونت  </NavLink>
      </div>  
      <div className='w-full'>
        <NavLink className={({isActive}) => isActive ? ' text-blue flex  items-center   font-DanaFaNum-500 text-sm  pr-2 pt-2 rounded-xl' : ' text-gray-800 flex  items-center font-DanaFaNum-500 text-sm pr-2 pt-2' } to={"/StudentPanel/profile/UserLinks"}>  لینک ها  </NavLink>     
     </div>
     <div className='w-full'>
        <NavLink className={({isActive}) => isActive? 'w-[70px] h-[48px] rounded-[48px] text-blue flex  items-center  bg-gray-200 font-DanaFaNum-600 text-lg pr-2 mt-4' : 'w-[70px] h-[48px] rounded-[48px] text-gray-800 flex  items-center font-DanaFaNum-600 text-lg pr-2 mt-4' } to={"/StudentPanel/profile/myjobs"}>  شغل ها  </NavLink>     
     </div>
      <div className='w-8 h-8 flex justify-center items-center  text-gray-black hover:text-red pr-3 pl-3 mt-1 bg-gray-800 rounded-full cursor-pointer ml-1' onClick={onClose}  >
          x
      </div>
    </div>
      </div>
    </div>
    <Outlet />  
    </div>
  )
}

export default ProfileFields