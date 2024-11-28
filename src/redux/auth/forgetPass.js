import { createSlice } from "@reduxjs/toolkit";


const forgetpassSlice = createSlice({
    name: "forgetpass",
    initialState: {
      userId: "",
      resetValue: "",
    },
    reducers:{
      onSetForgetpassUserId: (state , action) => {
           state.userId = action.payload;
        },
        onSetForgetpassResetValue: (state, action) => {
            state.resetValue = action.payload;
          },
    }
})

export const {onSetForgetpassUserId , onSetForgetpassResetValue } =
  forgetpassSlice.actions;

  export default forgetpassSlice.reducer;
