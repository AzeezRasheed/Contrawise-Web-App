import { configureStore } from "@reduxjs/toolkit";
import CreareContrat from "./contractReducer";
import Modal from "./modalReducer";

const store = configureStore({
  reducer: {
    createContract: CreareContrat,
    modal: Modal,
  },
});

export default store;
