import { configureStore } from '@reduxjs/toolkit'
import { themeSlice } from './themeSlice'
import login from './auth/login'

export const store = configureStore({
  reducer: {
    theme : themeSlice.reducer,
    login,
  },
})