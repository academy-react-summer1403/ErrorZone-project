import { createSlice } from "@reduxjs/toolkit";

const profile = createSlice({
	name: "profile",
	initialState: {
		profile: {},
		userImage: [],
	},
	reducers: {
		setState: (state, action) => {
			state.profile = action.payload;
		},
	},
});

export const {
	setState,
	setUserImage,
} = profile.actions;
export default profile.reducer;
