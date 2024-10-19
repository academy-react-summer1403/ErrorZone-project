import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ProfileLinks = () => {
  return (
    <div className='mt-[32px] flex flex-wrap'>
        <NavLink  to={"/StudentPanel/profile/Userinformation"} className={({isActive}) => isActive? 'w-[192px] h-[48px] rounded-[48px] text-blue flex  items-center justify-center bg-gray-200 font-DanaFaNum-600 text-lg pr-1' : 'w-[192px] h-[48px] rounded-[48px] text-gray-800 flex items-center font-DanaFaNum-600 text-lg' }>  اطلاعات حساب کاربری   </NavLink>
        <NavLink className={({isActive}) => isActive? 'w-[192px] h-[48px] rounded-[48px] text-blue flex items-center   bg-gray-200 font-DanaFaNum-600 text-lg pr-1 mt-4' : 'w-[192px] h-[48px] rounded-[48px] text-gray-800 flex  items-center font-DanaFaNum-600 text-lg pr-1 mt-4' } to={"/StudentPanel/profile/UserImages"}>   عکس ها  </NavLink>
        <NavLink className={({isActive}) => isActive? 'w-[192px] h-[48px] rounded-[48px] text-blue flex  items-center  bg-gray-200 font-DanaFaNum-600 text-lg pr-1 mt-4' : 'w-[192px] h-[48px] rounded-[48px] text-gray-800 flex  items-center font-DanaFaNum-600 text-lg pr-1 mt-4' } to={"/StudentPanel/profile/UserAddress"}>  محل سکونت  </NavLink>
        <NavLink className={({isActive}) => isActive? 'w-[192px] h-[48px] rounded-[48px] text-blue flex  items-center  bg-gray-200 font-DanaFaNum-600 text-lg pr-1 mt-4' : 'w-[192px] h-[48px] rounded-[48px] text-gray-800 flex  items-center font-DanaFaNum-600 text-lg pr-1 mt-4' } to={"/StudentPanel/profile/UserLinks"}>  لینک ها  </NavLink>     
    </div>
  )
}      

export default ProfileLinks