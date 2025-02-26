// import axiosInstance from "./axiosInstance";
import axiosInstance from "../../config/axiosInstance";
// import { API_ENDPOINTS } from "./apiConfig";
// import handleApiError from "./globalErrorHandler";
import { API_ENDPOINTS } from "../../config/apiConfig";
import handleApiError from "../../config/globalErrorHandler";

export const getAllFlights = async () => {
  try {
    const response = await axiosInstance.get(API_ENDPOINTS.FLIGHT.GET_ALL);
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
export const getFlightsById = async (id) => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINTS.FLIGHT.GET_ALL}/${id}`
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const searchFlights = async (from, to) => {
  try {
    const response = await axiosInstance.get(
      `${API_ENDPOINTS.FLIGHT.GET_FLIGHT_BY_SEARCH}?from=${from}&to=${to}`
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const bookedFlights = async () => {
  try {
    const response = await axiosInstance.get(
      API_ENDPOINTS.FLIGHT.GET_BOOKED_FLIGHTS
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};

export const bookFlightTicket = async (formData) => {
  try {
    const response = await axiosInstance.post(
      API_ENDPOINTS.FLIGHT.BOOK_FLIGHT_TICKET,
      formData
    );
    return response.data;
  } catch (error) {
    return handleApiError(error);
  }
};
