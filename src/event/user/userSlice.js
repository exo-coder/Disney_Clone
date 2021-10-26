import { createSlice } from "@reduxjs/toolkit";
// a slice is the collection of reducers

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //when user logedIn/signedIn save this details
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    //when user logedOut/signedOut just forget it
    setUserLogoutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});



export const { setUserLoginDetails, setUserLogoutState } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;