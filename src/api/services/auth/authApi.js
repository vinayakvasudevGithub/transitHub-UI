import axiosInstance from "../../config/axiosInstance";
import { API_ENDPOINTS } from "../../config/apiConfig";
import handleApiError from "../../config/globalErrorHandler";

export const registerUser = async (formData) => {
  try {
    const response = await axiosInstance.post(
      API_ENDPOINTS.USER.REGISTER,
      formData
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const loginUser = async (formData) => {
  try {
    const response = await axiosInstance.post(
      API_ENDPOINTS.USER.LOGIN,
      formData
    );
    return response;
  } catch (error) {
    return handleApiError(error);
  }
};

export const loggedInUser = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.USER.CURRENT);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const profile = async () => {
  try {
    const res = await axiosInstance.get(API_ENDPOINTS.USER.PROFILE);
    return res.data;
  } catch (error) {
    return handleApiError(error);
  }
};
