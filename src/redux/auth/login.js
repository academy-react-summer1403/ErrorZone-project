import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name: 'login',
    initialState: {
      UserLoginInfo : {
        phoneOrGmail: '',
        password: '',
        rememberMe: '',
      },
    },
    reducers : {
        onSetLoginInfo : (state , action) => {
           state.UserLoginInfo = {...state.UserLoginInfo , ...action.payload}
        }
    }
})

export const {onSetLoginInfo} = loginSlice.actions;

export default loginSlice.reducer