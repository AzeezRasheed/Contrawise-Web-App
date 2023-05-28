import { configureStore } from "@reduxjs/toolkit";
import CreareContrat from "./contractSlice";
import UserSlice from "./authSlice";
import Modal from "./modalSlice";

const store = configureStore({
  reducer: {
    contract: CreareContrat,
    modal: Modal,
    auth: UserSlice,
  },
});

export default store;
