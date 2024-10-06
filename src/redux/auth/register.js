import { createSlice } from "@reduxjs/toolkit";

const registerSlice = createSlice({
    name: 'register',
    initialState: {
        phoneNumber: '',
    },
    reducers: {
        onSetPhoneNumber: (state , action) =>{
           state.phoneNumber = action.payload;

     }
   }
})

export const {onSetPhoneNumber} =  registerSlice.actions;

export default registerSlice.reducer;