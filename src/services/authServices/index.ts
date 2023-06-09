import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../config";

console.log({ BACKEND_URL });

const testing_uri = `${BACKEND_URL}/api/auth/login`;

console.log(testing_uri);

export const REGISTER_USER = async (formData: any) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/auth/register`,
      formData,
      { withCredentials: true }
    );
    if (response.status === 200) {
      toast.success("Successfully Registered User");
    }
    return response.data;
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const LOGIN_USER = async (formData: any) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/auth/login`,
      formData,
      { withCredentials: true }
    );
    if (response.status === 200) {
      toast.success("Welcome ☺️");
    }
    console.log(response.data);
    return response.data;
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};

export const LOGOUT_USER = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/auth/logout`);
    if (response.status === 200) {
      console.log("user logged out");
    }
    return response;
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
  }
};
