import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

interface ModalSliceState {
  isLogoutModalOpen: boolean;
  isLoginModalOpen: boolean;
  isRegisterModalOpen: boolean;
  isResetPModalOpen: boolean;
}

type ModalActionPayload = boolean;

interface ModalAction {
  type: string;
  payload: ModalActionPayload;
}

const initialState = {
  isLogoutModalOpen: false,
  isLoginModalOpen: false,
  isRegisterModalOpen: false,
  isResetPModalOpen: false,
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    SET_LOGOUT_MODAL_OPEN: (state: ModalSliceState, action: ModalAction) => {
      state.isLogoutModalOpen = action.payload;
    },
    SET_LOGIN_MODAL_OPEN: (state: ModalSliceState, action: ModalAction) => {
      state.isLoginModalOpen = action.payload;
    },
    SET_REGISTER_MODAL_OPEN: (state: ModalSliceState, action: ModalAction) => {
      state.isRegisterModalOpen = action.payload;
    },
    SET_RESETP_MODAL_OPEN: (state: ModalSliceState, action: ModalAction) => {
      state.isResetPModalOpen = action.payload;
    },
  },
});

function GetIsLogoutModalOpen() {
  const isLogoutModalOpen = useSelector(
    (state: { modal: ModalSliceState }) => state.modal.isLogoutModalOpen
  );
  return isLogoutModalOpen;
}

function GetIsLoginModalOpen() {
  const isLoginModalOpen = useSelector(
    (state: { modal: ModalSliceState }) => state.modal.isLoginModalOpen
  );
  return isLoginModalOpen;
}

function GetIsRegisterModalOpen() {
  const isRegisterModalOpen = useSelector(
    (state: { modal: ModalSliceState }) => state.modal.isRegisterModalOpen
  );
  return isRegisterModalOpen;
}

function GetIsResetPModalOpen() {
  const isResetPModalOpen = useSelector(
    (state: { modal: ModalSliceState }) => state.modal.isResetPModalOpen
  );
  return isResetPModalOpen;
}

export default modalSlice.reducer;

export const {
  SET_LOGOUT_MODAL_OPEN,
  SET_LOGIN_MODAL_OPEN,
  SET_REGISTER_MODAL_OPEN,
  SET_RESETP_MODAL_OPEN,
} = modalSlice.actions;

export {
  GetIsLogoutModalOpen,
  GetIsLoginModalOpen,
  GetIsRegisterModalOpen,
  GetIsResetPModalOpen,
};
