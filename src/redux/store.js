import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './themeSlice'
import login from './auth/login'
import register from './auth/register' 
import user from './User/user.js'
import { coursSortFilDataSlice } from './coursSortFilDataSlice.js'
import forgetpass from './auth/forgetPass'
import { newsSortFilDataSlice } from './newsSortFilDataSlice.js'
import profile from './userProfile/profile'

export const store = configureStore({
  reducer: {
    theme : themeSlice.reducer,
    coursSortFilData : coursSortFilDataSlice.reducer,
    newsSortFilData: newsSortFilDataSlice.reducer,
    login,
    register,
    user,
    forgetpass,
    profile,
  },
})