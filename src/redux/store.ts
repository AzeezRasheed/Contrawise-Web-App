import { configureStore } from "@reduxjs/toolkit";
import CreareContrat from "./contractReducer";
import Modal from "./modalReducer";

const store = configureStore({
  reducer: {
    contract: CreareContrat,
    modal: Modal,
  },
});

export default store;
