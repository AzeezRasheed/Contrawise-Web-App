import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  isModalOpen: false,
};

const ModalReducer = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    SET_MODAL_OPEN: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

function GetIsModalOpen() {
  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  return isModalOpen;
}

export default ModalReducer.reducer;

export const { SET_MODAL_OPEN } = ModalReducer.actions;

export { GetIsModalOpen };
