import axiosInstance from "../../config/axiosInstance";
import { API_ENDPOINTS } from "../../config/apiConfig";
import handleApiError from "../../config/globalErrorHandler";

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

export const bookedTrains = async () => {
  try {
    const response = await axiosInstance.get(
      API_ENDPOINTS.TRAIN.GET_BOOKED_TRAINS
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const bookTrainTicket = async (FormData) => {
  try {
    const response = await axiosInstance.post(
      API_ENDPOINTS.TRAIN.BOOK_TRAIN_TICKET,
      FormData
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
