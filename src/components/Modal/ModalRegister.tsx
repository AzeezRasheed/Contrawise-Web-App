import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { REGISTER_USER } from "../../services/authServices";
import { setLogin, setUserData, setUsername } from "../../redux/authSlice";
import axios from "axios";
import { SignupFormValues } from "../../utilities/types";
import { Field, Formik, useFormik } from "formik";
import { signupLoginSchema } from "../../helper";
import Link from "next/link";
import Spinner from "../Loader/Spinner";
import Typography from "../Typography";
import { Dialog } from "@headlessui/react";
import Modal from "./Modal";
import Button from "../Button";
import styles from "../../styles/Home.module.scss";
import ArrowIcon from "../../svgComponents/ArrowIcon";
import { City, Country, State } from "country-state-city";
import { FormControl } from "@mui/material";
import Select from "react-select";
import {
  SET_LOGIN_MODAL_OPEN,
  SET_REGISTER_MODAL_OPEN,
} from "../../redux/modalSlice";
import setAuthorizationToken from "../../helper/useAuthorizationToken";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  company: "",
  industry: "",
  country: "",
  password: "",
  phone_number: "",
  confirm_password: "",
};

const ModalRegister = (props: any) => {
  const { isOpen } = props;
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const IndustriesOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];
  const countries = Country.getAllCountries();
  const updatedCountries = countries.map((country) => ({
    label: country.name,
    value: country.isoCode,
    ...country,
  }));

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    // Submit form logic here
    console.log(values);
    const {
      first_name,
      last_name,
      email,
      company,
      industry,
      phone_number,
      password,
    } = values;
    try {
      const data = await REGISTER_USER({
        first_name,
        last_name,
        email,
        company,
        industry,
        phone_number,
        password,
      });
      await dispatch(setUserData(data));
      const user_name = `${data.first_name} ${data.last_name}`;
      localStorage.setItem("user_name", JSON.stringify(user_name));
      await dispatch(setUsername(user_name));
      await dispatch(setLogin(true));
      // Store the bearer token in local storage
      localStorage.setItem("token", data.token);
      setAuthorizationToken(data.token);
      router.push("/dashboard");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const formik = useFormik<SignupFormValues>({
    initialValues,
    validationSchema: signupLoginSchema,
    onSubmit,
  });

  const {
    errors,
    values,
    touched,
    setValues,
    handleChange,
    handleBlur,
    handleSubmit,
  } = formik;
  return (
    <Modal isOpen={isOpen}>
      <div className=" flex flex-col gap-6  w-full p-6 mt-8 overflow-scroll text-center align-middle ">
        <div className="flex flex-col align-middle">
          <Dialog.Title
            as="h3"
            className="text-[32px] font-medium font-Inter leading-[24px] text-[#000000] mb-2"
          >
            Create an account
          </Dialog.Title>

          <div className="flex flex-wrap gap-1 align-middle m-auto justify-center items-center">
            <Typography size="authSubTitle" variant="black">
              Already have an account?
            </Typography>

            <Button
              ripple
              onClick={() => {
                dispatch(SET_LOGIN_MODAL_OPEN(true)),
                  dispatch(SET_REGISTER_MODAL_OPEN(false));
              }}
            >
              <span className="text-[20px] leading-[24px] font-normal font-Inter text-[#112F82] ">
                sign in
              </span>
            </Button>
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        {isLoading && <Spinner />}

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          <div className="flex min-h-full items-center justify-center px-4 ">
            <div className="w-full max-w-[507px] space-y-8">
              <div className="mt-8 space-y-6">
                <input type="hidden" name="remember" value="true" />
                <div className="flex flex-col -space-y-px rounded-md  gap-6 w-full pb-8 ">
                  {/* first_name and last_name */}
                  <div className="flex flex-wrap w-full gap-4 justify-between items-center ">
                    {/* first_name */}
                    <div className="w-full md:max-w-[237px] flex flex-col gap-2">
                      <label htmlFor="first_name">First Name</label>

                      <input
                        id="first_name"
                        name="first_name"
                        type="first_name"
                        value={values.first_name}
                        autoComplete="first_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 ${
                          errors.first_name && touched.first_name
                            ? "border-error"
                            : ""
                        }`}
                        placeholder="First name"
                      />
                      {errors.first_name && touched.first_name && (
                        <div className="text-error text-sm mt-1">
                          {errors.first_name}
                        </div>
                      )}
                    </div>

                    {/* last_name */}
                    <div className="w-full md:max-w-[237px] flex flex-col gap-2">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                        id="last_name"
                        name="last_name"
                        type="last_name"
                        value={values.last_name}
                        autoComplete="last_name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 ${
                          errors.last_name && touched.last_name
                            ? "border-error"
                            : ""
                        }`}
                        placeholder="Last name"
                      />
                      {errors.last_name && touched.last_name && (
                        <div className="text-error text-sm mt-1">
                          {errors.last_name}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email">Email address</label>
                    <input
                      id="email"
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

                  {/* Company */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={values.company}
                      autoComplete="company"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 ${
                        errors.company && touched.company ? "border-error" : ""
                      }`}
                      placeholder="Company name"
                    />
                    {errors.company && touched.company && (
                      <div className="text-error text-sm mt-1">
                        {errors.company}
                      </div>
                    )}
                  </div>

                  <div className="flex flex-wrap w-full gap-4 justify-between items-center ">
                    {/* country and industry */}
                    {/* Industry */}
                    <div className="w-full md:max-w-[237px] flex flex-col gap-2">
                      <label htmlFor="industry">Industry</label>
                      <FormControl fullWidth>
                        <Field
                          component={Select}
                          name="industry"
                          id="industry"
                          value={values.industry ? values.industry.value : ""}
                          options={IndustriesOptions}
                          onChange={(value: any) => {
                            setValues((prevValues) => ({
                              ...prevValues,
                              industry: value.value,
                            }));
                          }}
                          error={touched.industry && Boolean(errors.industry)}
                          onBlur={handleBlur}
                        />
                      </FormControl>

                      {errors.industry && touched.industry && (
                        <div className="text-error text-sm mt-1">
                          {errors.industry}
                        </div>
                      )}
                    </div>

                    {/* country */}
                    <div className="w-full md:max-w-[237px] flex flex-col gap-2">
                      <label htmlFor="country">Country</label>
                      <FormControl fullWidth>
                        <Field
                          component={Select}
                          name="country"
                          id="country"
                          value={values.country ? values.country.name : ""}
                          options={updatedCountries}
                          onChange={(value: any) => {
                            setValues((prevValues) => ({
                              ...prevValues,
                              country: value.name,
                            }));
                          }}
                          error={touched.country && Boolean(errors.country)}
                          onBlur={handleBlur}
                        />
                      </FormControl>
                      {errors.country && touched.country && (
                        <div className="text-error text-sm mt-1">
                          {errors.country}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone_number">Phone Number</label>
                    <input
                      id="phone_number"
                      name="phone_number"
                      type="phone_number"
                      value={values.phone_number}
                      autoComplete="phone_number"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 ${
                        errors.phone_number && touched.phone_number
                          ? "border-error"
                          : ""
                      }`}
                      placeholder="+234"
                    />
                    {errors.phone_number && touched.phone_number && (
                      <div className="text-error text-sm mt-1">
                        {errors.phone_number}
                      </div>
                    )}
                  </div>

                  {/* Password */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      value={values.password}
                      autoComplete="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 ${
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

                  {/* Confirm Password */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="confirm_password">Confirm Password</label>
                    <input
                      id="confirm_password"
                      name="confirm_password"
                      type="password"
                      value={values.confirm_password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 ${
                        errors.confirm_password && touched.confirm_password
                          ? "border-error"
                          : ""
                      }`}
                      placeholder="at least 8 characters"
                    />
                    {errors.confirm_password && touched.confirm_password && (
                      <div className="text-error text-sm mt-1">
                        {errors.confirm_password}
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-center m-auto p-4 ">
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
    </Modal>
  );
};

export default ModalRegister;
