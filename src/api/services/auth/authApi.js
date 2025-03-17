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
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
