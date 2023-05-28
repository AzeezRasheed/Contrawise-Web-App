import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useSelector } from "react-redux";
import { UserData } from "../utilities/types";

interface User {
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  org_admin: boolean;
  org: number;
}

interface AuthState {
  isLoggedIn: boolean;
  user_name: string;
  user: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user_name: "",
  user: {
    first_name: "",
    last_name: "",
    email: "",
    job_title: "",
    org_admin: false,
    org: 0,
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
      state.user_name = action.payload;
    },
    setUserData: (state, action: PayloadAction<UserData>) => {
      const { first_name, last_name, email, job_title, org_admin, org } =
        action.payload;
      state.user = { first_name, last_name, email, job_title, org_admin, org };
    },
  },
});

export default authSlice.reducer;
export const { setLogin, setUserData, setUsername } = authSlice.actions;

export function useIsUserLoggedIn() {
  return useSelector((state: any) => state.auth.isLoggedIn);
}

export function useUsername() {
  return useSelector((state: any) => state.auth.user_name);
}

export function useUserData() {
  return useSelector((state: any) => state.auth.user);
}
