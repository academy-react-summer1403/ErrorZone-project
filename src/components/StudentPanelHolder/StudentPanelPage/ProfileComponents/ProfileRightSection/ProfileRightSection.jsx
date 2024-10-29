import React from 'react'
import ProfileLinks from './ProfileLinks'
import { getQuery } from '../../../../../core/services/api/reactQuery/getQuery'
import { Link, NavLink } from 'react-router-dom'

const ProfileRightSection = () => {

  return ( 
    <div className='w-[248px] h-[100%] p-[24px] border-l border-gray-400  hidden desktop:flex flex-wrap dark:bg-blackPanel dark:border-gray-800'>
      <h1 className='w-[115px] h-[34px] font-DanaFaNum-700 text-2xl '>    پروفایل من  </h1>
      <div className=' pb-[580px] pt-8'>
      <div className='w-full '> 
         <NavLink  to={"/StudentPanel/profile/"} className='w-[192px] h-[48px] rounded-[48px] text-gray-800 flex items-center font-DanaFaNum-600 text-lg pr-2' >  اطلاعات حساب کاربری   </NavLink>
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
    </div>
  )
}

export default ProfileRightSection