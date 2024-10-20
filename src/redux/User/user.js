import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInformations: {
      birthDay: "",
      currentPictureAddress: "",
      email: "",
      fName: "",
      gender: "",
      homeAdderess: "",
      lName: "",
      latitude: "",
      linkdinProfile: "",
      longitude: "",
      nationalCode: "",
      phoneNumber: "",
      profileCompletionPercentage: "",
      receiveMessageEvent: "",
      telegramLink: "",
      userAbout: "",
      userImage: [],
    },
  },
  reducers: {
    onSetUserInfo: (state, action) => {
      state.userInformations = { ...state.userInformations, ...action.payload };
    },
  },
});

export const { onSetUserInfo } = userSlice.actions;

export default userSlice.reducer;