import axiosInstance from "../../config/axiosInstance";
import { API_ENDPOINTS } from "../../config/apiConfig";
import handleApiError from "../../config/globalErrorHandler";

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

export const bookedBuses = async (from, to) => {
  try {
    const response = await axiosInstance.get(
      API_ENDPOINTS.BUS.GET_BOOKED_BUSES
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const bookBusTicket = async (formData) => {
  try {
    const response = await axiosInstance.post(
      API_ENDPOINTS.BUS.BOOK_BUS_TICKET,
      formData
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
