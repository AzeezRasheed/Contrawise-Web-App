import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface ModalSliceState {
  isModalOpen: boolean;
}

type ModalActionPayload = boolean;

interface ModalAction {
  type: string;
  payload: ModalActionPayload;
}

const initialState = {
  isModalOpen: false,
};

const ModalReducer = createSlice({
  name: "modalReducer",
  initialState,
  reducers: {
    SET_MODAL_OPEN: (state: ModalSliceState, action: ModalAction) => {
      state.isModalOpen = action.payload;
    },
  },
});

function GetIsModalOpen() {
  const isModalOpen = useSelector(
    (state: { modal: ModalSliceState }) => state.modal.isModalOpen
  );
  return isModalOpen;
}

export default ModalReducer.reducer;

export const { SET_MODAL_OPEN } = ModalReducer.actions;

export { GetIsModalOpen };
