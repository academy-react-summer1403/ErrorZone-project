import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const ProfileLinks = () => {
  return (
    <div className='mt-[32px] hidden desktop:flex flex-wrap'>
      <div className='w-full'> 
         <NavLink  to={"/StudentPanel/profile"} className={({isActive}) => isActive? 'w-[192px] h-[48px] rounded-[48px] text-blue flex  items-center  bg-gray-200 font-DanaFaNum-600 text-lg pr-2' : 'w-[192px] h-[48px] rounded-[48px] text-gray-800 flex items-center font-DanaFaNum-600 text-lg pr-2' }>  اطلاعات حساب کاربری   </NavLink>
      </div>
      <div className='w-full'>
         <NavLink className={({isActive}) => isActive? 'w-[80px] h-[48px] rounded-[48px] text-blue flex items-center   bg-gray-200 font-DanaFaNum-600 text-lg pr-2 mt-4 ' : 'w-[80px] h-[48px] rounded-[48px] text-gray-800 flex  items-center font-DanaFaNum-600 text-lg pr-2 mt-4' } to={"/StudentPanel/profile/UserImages"}>   عکس ها  </NavLink>
      </div> 
      <div className='w-full'>
        <NavLink className={({isActive}) => isActive? 'w-[110px] h-[48px] rounded-[48px] text-blue flex  items-center  bg-gray-200 font-DanaFaNum-600 text-lg pr-2 mt-4' : 'w-[110px] h-[48px] rounded-[48px] text-gray-800 flex  items-center font-DanaFaNum-600 text-lg pr-2 mt-4' } to={"/StudentPanel/profile/UserAddress"}>  محل سکونت  </NavLink>
      </div>  
      <div className='w-full'>
        <NavLink className={({isActive}) => isActive? 'w-[70px] h-[48px] rounded-[48px] text-blue flex  items-center  bg-gray-200 font-DanaFaNum-600 text-lg pr-2 mt-4' : 'w-[70px] h-[48px] rounded-[48px] text-gray-800 flex  items-center font-DanaFaNum-600 text-lg pr-2 mt-4' } to={"/StudentPanel/profile/UserLinks"}>  لینک ها  </NavLink>     
     </div>
    </div>
  )
}      

export default ProfileLinks