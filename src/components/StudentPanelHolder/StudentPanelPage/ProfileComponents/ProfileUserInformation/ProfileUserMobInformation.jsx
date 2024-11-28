import React from 'react'
import NextuiInput from '../../../../common/InputFields/NextuiInput/NextuiInput'
import UserModal from '../../../../common/Modal/UserModal'
import NextUiDatePicker from '../../../../common/InputFields/NextUiDatePicker/NextUiDatePicker'
import NextUiDadioGroup from '../../../../common/InputFields/NextUiRadioGroup/NextUiDadioGroup'
import AddressModal from '../../../../common/Modal/AddressModal'

const ProfileUserMobInformation = () => {
  return (
    <div className='w-full h-full mt-3  border border-gray-400 rounded-xl desktop:hidden dark:bg-black'>
      <div> 
       <div className='w-[50%] mx-auto '>
        <div> 
          <NextuiInput  type='text' label='نام'/>
       </div>
        <div className=''> 
          <NextuiInput  type='text' label=' نام خانوادگی'/>
        </div>
        <div className=''> 
          <NextuiInput  type='text' label=' شماره همراه'/>
       </div>
        <div className=''> 
          <NextuiInput  type='text' label='کد ملی'/>            
         </div>   
         <div className=' pt-6'>
          <NextUiDatePicker />
         </div> 
         <div className='flex justify-between flex-wrap pt-3 '>
          <UserModal />          
          <AddressModal />
         </div>
         <div className='pt-3'>       
          <NextUiDadioGroup />   
         </div>    
       </div>
     </div>
  
    </div>
  )
}

export default ProfileUserMobInformation