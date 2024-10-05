import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './themeSlice'
import login from './auth/login'
import register from './auth/register' 

export const store = configureStore({
  reducer: {
    theme : themeSlice.reducer,
    login,
    register,
  },
})