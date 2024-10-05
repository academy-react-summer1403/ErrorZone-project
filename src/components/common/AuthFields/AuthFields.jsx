import React from 'react'
import { BlueInputField } from '../InputFields/BlueInputFields'
import { ViewIcon } from 'hugeicons-react'

const AuthFields = ({type , name , placeholder , label , icon }) => {
  return (
    <>
    <label className='w-[300px] h-[23px] relative top-[10px] right-[66px] text-black font-DanaFaNum-600 text-base '>   {label} </label>
    <div className='w-[100%] relative top-[10px] left-[50px]   '> 
    <BlueInputField type={type} name={name} placeholder={placeholder} icon={ icon ? icon  : ""}/>
     
   </div>       
   </>
  )
}

export default AuthFields