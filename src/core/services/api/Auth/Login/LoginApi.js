import React from 'react'
import instance from '../../../interceptor'
import { ErrorToastify } from '../../../../utils/Toastifies/ErrorToastify.Utils'

const LoginApi = async (value) => {
try {
   const response =  await instance.post('/Sign/Login' , value)
   return response;

} catch (error) {
    return ErrorToastify('متاسفانه درخواست شما با مشکل مواجه شده است')
    
}
}

export  {LoginApi}