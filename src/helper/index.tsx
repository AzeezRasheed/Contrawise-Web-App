import * as Yup from "yup";

export const alphabet = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
export const splitedAlphabet = alphabet.split(",");

interface AnyPresentValue {
  name: string;
  size: number;
  type: string;
  lastModified?: number;
}

export const createContractSchema = Yup.object().shape({
  parties: Yup.array()
    .of(Yup.string().required("Party is required"))
    .min(2, "Must have at least two parties")
    .required("Parties are required"),
  tag: Yup.string().required("Select Tags option is required"),
  title: Yup.string().required("Title is required"),
  // category: Yup.string().required("Category is required"),
  customClass: Yup.string().required("Select Class option is required"),
  agreement_date: Yup.date().required("Agreement date is required"),
  termination_date: Yup.date().required("Agreement duration is required"),
  notice_date: Yup.date().required("Notice period is required"),
  amount: Yup.number().required("Amount is required"),
  comment: Yup.string(),
  upload: Yup.mixed<AnyPresentValue>(),
});

export const authLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    )
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
});

export const resetPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    )
    .required("Email is required"),
});

export const signupLoginSchema = Yup.object().shape({
  first_name: Yup.string().required("first name is required"),
  last_name: Yup.string().required("last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("emali address is required"),
  company: Yup.string().required("Company name is required"),
  industry: Yup.string().required("Industry is required"),
  country: Yup.string().required("Country is required"),
  phone_number: Yup.string()
    .matches(/^\+(?:[0-9]){1,3}[0-9-]{4,14}(?:x.+)?$/, "Invalid phone number")
    .required("Phone number is required"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  confirm_password: Yup.string()
    .required("Confirm your password")
    .oneOf([Yup.ref("password"), undefined], "Passwords must match"),
});
// upload: Yup.mixed<AnyPresentValue>().test(
//   "fileSize",
//   "File is too large",
//   (value) => value && value.size <= 10000000 // 10MB
// ),
