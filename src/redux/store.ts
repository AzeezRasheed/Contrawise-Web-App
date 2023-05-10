import { configureStore } from "@reduxjs/toolkit";
import CreareContrat from "./contractSlice";
import Modal from "./modalSlice";

const store = configureStore({
  reducer: {
    contract: CreareContrat,
    modal: Modal,
  },
});

export default store;
