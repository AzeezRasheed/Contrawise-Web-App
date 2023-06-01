import axios from "axios";
import { toast } from "react-toastify";
import { BACKEND_URL } from "../../config";

console.log({ BACKEND_URL });

const testing_uri = `${BACKEND_URL}/api/auth/login`;

export const CREATE_CONTRACT = async (formData: any) => {
  try {
    const response = await axios.post(
      `${BACKEND_URL}/api/contracts`,
      formData,
      { withCredentials: true }
    );
    if (response.status === 200) {
      toast.success("Contract created");
    }
    return response.data;
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    throw error;
  }
};

export const GET_CONTRACTS = async () => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/contracts`);

    return response.data;
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    throw error;
  }
};

export const GET_CONTRACT = async (id: any) => {
  try {
    const response = await axios.get(`${BACKEND_URL}/api/contracts/${id}`);
    return response.data;
  } catch (error: any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    toast.error(message);
    throw error;
  }
};
