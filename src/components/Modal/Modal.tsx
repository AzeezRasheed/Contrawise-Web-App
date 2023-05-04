import React, { FC, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { MdClear } from "react-icons/md";
import { SET_MODAL_OPEN } from "../../redux/modalReducer";
import { useDispatch } from "react-redux";
import Link from "next/link";

interface ModalProps {
  isOpen: boolean;
  title?: string;
  size?: "xs" | "lg" | undefined;
  share?: () => void;
  children: React.ReactNode;
}

const Modal: FC<ModalProps> = (props) => {
  const { isOpen, title, size, share, children } = props;

  const dispatch = useDispatch();
  const setIsOpen = dispatch(SET_MODAL_OPEN(true));
  //   const setClose = dispatch(SET_MODAL_OPEN(false));

  console.log(size);
  const getSizeClasses = (size) => {
    let utilities = "";

    if (size === "xs") {
      utilities = "h-fit sm:max-w-md rounded-lg ";
    } else if (size === "lg") {
      utilities =
        "h-5/6 max-h-[52rem] sm:max-w-6xl rounded-md rounded-l-none   ";
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
          className="fixed z-50 flex items-center justify-center inset-0 overflow-y-auto"
          onClose={() => dispatch(SET_MODAL_OPEN(false))}
        >
          <Dialog.Overlay className="fixed inset-0 bg-neutral-800 bg-opacity-95 transition-opacity" />

          <button
            type="button"
            className={`absolute right-6 top-4 text-white text-2xl`}
            onClick={() => dispatch(SET_MODAL_OPEN(false))}
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
              className={`flex items-center justify-center bg-white  border-1 border-[#B165E9] overflow-hidden shadow-xl transform transition-all align-middle w-3/4  md:w-full ${
                title ? "pt-10" : ""
              } ${getSizeClasses(size)}`}
            >
              {title && (
                <div className="absolute top-0 w-full text-center border-b py-2 font-semibold">
                  <Dialog.Title className="inline-block">{title}</Dialog.Title>
                  {share && (
                    <Link
                      href={"/"}
                      className="absolute right-5 text-sky-500"
                      onClick={share}
                    >
                      Share
                    </Link>
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
