import axiosInstance from "./axiosInstance";
import { API_ENDPOINTS } from "./apiConfig";
import handleApiError from "./globalErrorHandler";

export const getAllBuses = async () => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.BUS.GET_ALL);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const searchBuses = async (from, to) => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINTS.BUS.GET_BUS_BY_SEARCH}?from=${from}&to=${to}`
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
