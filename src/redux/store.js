import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './themeSlice'
import login from './auth/login'
import register from './auth/register' 
import user from './User/user.js'
import { coursSortFilDataSlice } from './coursSortFilDataSlice.js'

export const store = configureStore({
  reducer: {
    theme : themeSlice.reducer,
    coursSortFilData : coursSortFilDataSlice.reducer,
    login,
    register,
    user,
  },
})