import { createSlice } from "@reduxjs/toolkit";

const first_name = localStorage.getItem("first_name")
  ? JSON.parse(localStorage.getItem("first_name"))
  : null;

  const initialState = {
    isLoggedIn: false,
    first_name:  first_name ? first_name : "",
    user: {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
    //   bio: "",
    //   photo: "",
    },
  };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      SET_LOGIN: (state, action) => {
        state.isLoggedIn = action.payload;
      },
      SET_FIRSTNAME: (state, action) => {
        localStorage.setItem("first_name", JSON.stringify(action.payload));
        state.first_name = action.payload;
      },
      SET_USER: (state, action) => {
        const data = action.payload;
        state.user.first_name = data.first_name;
        state.user.last_name = data.last_name;
        state.user.email = data.email;
        state.user.phone = data.phone;
        // state.user.bio = data.bio;
        // state.user.photo= data.photo;
      },
    },
  });
  
  export default authSlice.reducer;
export const { SET_LOGIN, SET_USER, SET_FIRSTNAME } = authSlice.actions;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectFirstName = (state) => state.auth.first_name;
export const selectUser = (state) => state.auth.user;