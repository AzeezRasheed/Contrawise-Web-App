import React, { useState } from "react";
import { RiUserAddLine } from "react-icons/ri";
import { useDispatch } from "react-redux";
import Spinner from "../../../components/Loader/Spinner";
import Link from "next/link";
import { signupLoginSchema } from "../../../helper";
import { Formik, useFormik } from "formik";
import { SignupFormValues } from "../../../utilities/types";
import { useRouter } from "next/router";
// import { toast } from "react-toastify";
// import Spinner from "../../components/spinnerModal/Spinner";
// import { SET_LOGIN, SET_NAME } from "../../redux/auth/authSlice";
// import { registerUser, validateEmail } from "../../services/authService";

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  job_title: "",
  password: "",
  password2: "",
};

function Register() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  const onSubmit = async (values: any) => {
    setIsLoading(true);
    // Submit form logic here
    try {
      // const data = await loginUser(userData);
      // await dispatch(SET_LOGIN(true));
      // await dispatch(SET_FIRSTNAME(data.first_name));
      // navigate("/dashboard");
      console.log(values);
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

  const { errors, touched, values, handleChange, handleBlur, handleSubmit } =
    formik;

  return (
    <form onSubmit={handleSubmit}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          {isLoading && <Spinner />}

          <div className="w-full max-w-md space-y-8">
            <div>
              <RiUserAddLine size={35} className="mx-auto h-12 w-auto" />
              <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                Register
              </h2>
            </div>
            <div className="mt-8 space-y-6">
              <input type="hidden" name="remember" value="true" />
              <div className="flex flex-col -space-y-px rounded-md shadow-sm gap-2">
                {/* first_name */}
                <div>
                  <label htmlFor="first_name" className="sr-only">
                    First Name
                  </label>

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
                    placeholder="Firstname"
                  />
                  {errors.first_name && touched.first_name && (
                    <div className="text-error text-sm mt-1">
                      {errors.first_name}
                    </div>
                  )}
                </div>

                {/* last_name */}
                <div>
                  <label htmlFor="last_name" className="sr-only">
                    Last Name
                  </label>
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
                    placeholder="Lastname"
                  />
                  {errors.last_name && touched.last_name && (
                    <div className="text-error text-sm mt-1">
                      {errors.last_name}
                    </div>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
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
                    placeholder="Email"
                  />
                  {errors.email && touched.email && (
                    <div className="text-error text-sm mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Job Title */}
                <div>
                  <label htmlFor="job_title" className="sr-only">
                    Job Title
                  </label>
                  <input
                    id="job_title"
                    name="job_title"
                    type="text"
                    value={values.job_title}
                    autoComplete="job_title"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 ${
                      errors.job_title && touched.job_title
                        ? "border-error"
                        : ""
                    }`}
                    placeholder="Job Title"
                  />
                  {errors.job_title && touched.job_title && (
                    <div className="text-error text-sm mt-1">
                      {errors.job_title}
                    </div>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={values.password}
                    autoComplete="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 ${
                      errors.password && touched.password ? "border-error" : ""
                    }`}
                    placeholder="Password"
                  />
                  {errors.password && touched.password && (
                    <div className="text-error text-sm mt-1">
                      {errors.password}
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="password2" className="sr-only">
                    Confirm Password
                  </label>
                  <input
                    id="password2"
                    name="password2"
                    type="password"
                    value={values.password2}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 ${
                      errors.password2 && touched.password2
                        ? "border-error"
                        : ""
                    }`}
                    placeholder="Confirm Password"
                  />
                  {errors.password2 && touched.password2 && (
                    <div className="text-error text-sm mt-1">
                      {errors.password2}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex items-center justify-between">
                  <div className="text-sm">
                    <Link
                      href="/"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Go to Home
                    </Link>
                  </div>

                  <Link
                    href="/auth/login"
                    className="text-[16px] flex flex-row font-medium text-black hover:text-indigo-700 "
                  >
                    <p>Already Registered? &nbsp;</p>
                    <p>Login</p>
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  {/* <span className="absolute inset-y-0 left-0 flex items-center pl-3"></span> */}
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </form>
  );
}

export default Register;
