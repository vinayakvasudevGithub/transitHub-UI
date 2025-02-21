import axiosInstance from "./axiosInstance";
import { API_ENDPOINTS } from "./apiConfig";
import handleApiError from "./globalErrorHandler";

export const getAllTrains = async () => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.TRAIN.GET_ALL);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const searchTrains = async (from, to) => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINTS.TRAIN.GET_TRAIN_BY_SEARCH}?from=${from}&to=${to}`
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
