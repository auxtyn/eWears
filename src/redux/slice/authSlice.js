import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  email: null,
  userName: null,
  userID: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    SET_ACTIVE_USER: (state, action) => {
      console.log(action.payload);

      const {email, uid, userName} = action.payload;

      state.isLoggedIn = true
      state.email = email
      state.userID = uid
      state.userName = userName

      // state.email = action.payload.email;
      // console.log(actions.payload.SET_ACTIVE_USER.email)
    },
  },
});

export const { SET_ACTIVE_USER } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectUserName = (state) => state.auth.userName;
export const selectEmail = (state) => state.auth.email;
export const selectUserID = (state) => state.auth.userID;

export default authSlice.reducer;
