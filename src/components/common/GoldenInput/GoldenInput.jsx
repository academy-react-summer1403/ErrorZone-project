import { Field } from 'formik'
import React from 'react'

const GoldenInput = ({className , type , name , placeholder , FieldclassName , label }) => {
  return (
    <div className={className}>
        <h1 className='font-DanaFaNum-600 text-base'>   {label}    </h1>
        <Field
         type={type}
         name={name}
         placeholder={placeholder}
         className={FieldclassName}
        />
    </div>
  )
}

export default GoldenInput