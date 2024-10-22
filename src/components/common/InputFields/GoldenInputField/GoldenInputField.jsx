import React from 'react'
import { BlueInputField } from '../BlueInputFields'

const GoldenInputField = ({type , name , placeholder , label , icon , labelClassName , className }) => {
  return (
    <div>
    <label className={labelClassName}>   {label} </label>
    <div className={className}> 
    <BlueInputField type={type} name={name} placeholder={placeholder} icon={ icon ? icon  : ""}/>   
   </div>       
   </div>
  )
}

export default GoldenInputField