import { Dialog } from "@headlessui/react";
import React from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { SET_LOGOUT_MODAL_OPEN, GetIsLogoutModalOpen } from "../../redux/modalSlice";
import { useRouter } from "next/router";

interface ModalLogoutProps {
  isOpen: boolean;
}

const ModalLogout = (props: ModalLogoutProps) => {
  const { isOpen } = props;
  const dispatch = useDispatch();
  const router = useRouter();
  //   const setClose = dispatch(SET_LOGOUT_MODAL_OPEN(false));
  console.log(GetIsLogoutModalOpen());
  return (
    <Modal isOpen={isOpen} size="xs">
      <div className="inline-block max-w-md w-full p-6 my-8 overflow-hidden text-center align-middle  ">
        <Dialog.Title
          as="h3"
          className="text-[14px] font-normal font-Poppins leading-[15px] text-[#000000] mb-6"
        >
          Are you sure you want to logout?
        </Dialog.Title>
        <div className="mt-4 flex justify-center space-x-4">
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-[14px]  font-normal font-Poppins text-[#000000] border-1 border-[#B165E9] rounded-md hover:bg-[] focus:outline-none focus:ring-2 focus:ring-offset-2 "
            onClick={() => {
              dispatch(SET_LOGOUT_MODAL_OPEN(false));
            }}
          >
            No
          </button>
          <button
            type="button"
            className="inline-flex justify-center px-4 py-2 text-[14px]  font-normal font-Poppins text-[#000000] border-1 border-[#B165E9] rounded-md hover:bg-[] focus:outline-none focus:ring-2 focus:ring-offset-2 "
            onClick={() => {
              console.log("Logout confirmed");
              router.push("/auth/login");
            }}
          >
            Yes
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ModalLogout;
