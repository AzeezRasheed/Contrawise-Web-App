import React, { useState } from "react";
import styles from "../../styles/Home.module.scss";
import ArrowIcon from "../../svgComponents/ArrowIcon";
import Button from "../Button";
import Modal from "./Modal";
import { Dialog } from "@headlessui/react";
import Typography from "../Typography";
import Link from "next/link";
import { setLogin, setUserData, setUsername } from "../../redux/authSlice";
import { LoginFormValues } from "../../utilities/types";
import { Formik, useFormik } from "formik";
import { authLoginSchema } from "../../helper";
import axios from "axios";
import { LOGIN_USER } from "../../services/authServices";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Spinner from "../Loader/Spinner";
import { RiLoginBoxLine } from "react-icons/ri";
import {
  SET_LOGIN_MODAL_OPEN,
  SET_REGISTER_MODAL_OPEN,
  SET_RESETP_MODAL_OPEN,
} from "../../redux/modalSlice";

const initialValues = {
  email: "",
  password: "",
};

const ModalLogin = (props: any) => {
  const { isOpen } = props;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    // Submit form logic here
    try {
      const data = await LOGIN_USER(values);
      await dispatch(setUserData(data));

      const user_name = `${data.first_name} ${data.last_name}`;
      localStorage.setItem("user_name", JSON.stringify(user_name));
      await dispatch(setUsername(user_name));
      // Store the bearer token in local storage
      localStorage.setItem("token", data.token);
      // Set the default Authorization header for Axios requests
      axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
      await dispatch(setLogin(true));
      dispatch(SET_LOGIN_MODAL_OPEN(false));
      router.push("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const formik = useFormik<LoginFormValues>({
    initialValues,
    validationSchema: authLoginSchema,
    onSubmit,
  });

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;
  return (
    <Modal isOpen={isOpen}>
      {isLoading && <Spinner />}
      <div className=" flex flex-col gap-6  w-full p-6 my-8 overflow-hidden text-center align-middle  ">
        <div className="flex flex-col align-middle">
          <Dialog.Title
            as="h3"
            className="text-[32px] font-medium font-Inter leading-[24px] text-[#000000] mb-2"
          >
            Sign in
          </Dialog.Title>

          <div className="flex flex-wrap gap-1 align-middle m-auto justify-center items-center">
            <Typography size="authSubTitle" variant="black">
              Don’t have an account yet?
            </Typography>

            <Button
              ripple
              onClick={() => {
                dispatch(SET_LOGIN_MODAL_OPEN(false)),
                  dispatch(SET_REGISTER_MODAL_OPEN(true));
              }}
            >
              <span className="text-[20px] leading-[24px] font-normal font-Inter text-[#112F82] ">
                sign up
              </span>
            </Button>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            <div>
              <div className="relative flex min-h-full items-center  justify-center ">
                <div className="w-full max-w-[507px] space-y-8">
                  <div className="mt-8 space-y-6 ">
                    <input type="hidden" name="remember" value="true" />
                    <div className="flex flex-col -space-y-px rounded-md gap-10 text-start">
                      <div>
                        <label htmlFor="email-address">Email</label>
                        <input
                          id="email-address"
                          name="email"
                          type="email"
                          value={values.email}
                          autoComplete="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 ${
                            errors.email && touched.email ? "border-error" : ""
                          }`}
                          placeholder="email@yourcompany.com"
                        />
                        {errors.email && touched.email && (
                          <div className="text-error text-sm mt-1">
                            {errors.email}
                          </div>
                        )}
                      </div>
                      <div>
                        <label htmlFor="password">Input password</label>
                        <input
                          id="password"
                          name="password"
                          type="password"
                          value={values.password}
                          autoComplete="current-password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 ${
                            errors.password && touched.password
                              ? "border-error"
                              : ""
                          }`}
                          placeholder="at least 8 characters"
                        />
                        {errors.password && touched.password && (
                          <div className="text-error text-sm mt-1">
                            {errors.password}
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col gap-8">
                      <Button
                        ripple
                        onClick={() => {
                          dispatch(SET_LOGIN_MODAL_OPEN(false)),
                            dispatch(SET_RESETP_MODAL_OPEN(true));
                        }}
                        className="text-[16px] flex flex-row font-medium text-black hover:text-indigo-700 "
                      >
                        <Typography size="authSubTitle" variant="purple">
                          Forgot password?
                        </Typography>
                      </Button>
                    </div>

                    <div className={styles.actionArea}>
                      <button type="submit" className={styles.button}>
                        <div className="items-center flex justify-center">
                          <span>Continue</span>
                          <span>
                            <ArrowIcon color="#FFFF" />
                          </span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Formik>
        </form>
      </div>
    </Modal>
  );
};

export default ModalLogin;
