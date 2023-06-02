import React, { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClear } from "react-icons/md";
import {
  SET_LOGIN_MODAL_OPEN,
  SET_LOGOUT_MODAL_OPEN,
  SET_REGISTER_MODAL_OPEN,
  SET_RESETP_MODAL_OPEN,
} from "../../redux/modalSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  size?: "xs" | "lg" | undefined;
  subtitle?: string;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = (props) => {
  const { isOpen, title, size, subtitle, children } = props;

  const dispatch = useDispatch();

  const getSizeClasses = (size: any) => {
    let utilities = "";

    if (size === "xs") {
      utilities = "h-fit sm:max-w-md rounded-lg ";
    } else if (size === "lg") {
      utilities =
        "h-5/6 max-h-[52rem] sm:max-w-6xl rounded-md    ";
    } else {
      utilities = "h-4/5 sm:max-w-screen-md rounded-lg";
    }
    return utilities;
  };

  return (
    <>
      {/* Add overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#1F2937] bg-opacity-50 z-50"></div>
      )}
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-50 flex items-center justify-center inset-0 overflow-scroll"
          onClose={() => {
            dispatch(SET_LOGOUT_MODAL_OPEN(false));
            dispatch(SET_LOGIN_MODAL_OPEN(false));
            dispatch(SET_REGISTER_MODAL_OPEN(false));
            dispatch(SET_RESETP_MODAL_OPEN(false));
          }}
        >
          <Dialog.Overlay className="fixed inset-0 bg-neutral-800 bg-opacity-95 transition-opacity" />

          <button
            type="button"
            className={`absolute right-6 top-4 text-white text-2xl`}
            onClick={() => {
              dispatch(SET_LOGOUT_MODAL_OPEN(false));
              dispatch(SET_LOGIN_MODAL_OPEN(false));
              dispatch(SET_REGISTER_MODAL_OPEN(false));
              dispatch(SET_RESETP_MODAL_OPEN(false));
            }}
          >
            <MdClear />
          </button>
          {/*
            Use one Transition.Child to apply one transition to the backdrop...
          */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={`flex items-center justify-center  bg-[#F6F9FF] ${
                size === "xs" && "border-1 border-[#B165E9] bg-white"
              } overflow-scroll shadow-xl transform transition-all align-middle w-full md:w-full ${
                title ? "pt-10" : ""
              } ${getSizeClasses(size)}`}
            >
              {title && (
                <div className="absolute top-0 w-full  flex gap-2 flex-col text-center py-2 font-semibold">
                  <Dialog.Title className="inline-block">{title}</Dialog.Title>

                  {subtitle && (
                    <Dialog.Description className="inline-block">
                      text
                    </Dialog.Description>
                  )}
                </div>
              )}
              <div className="w-full h-full">{props.children}</div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
