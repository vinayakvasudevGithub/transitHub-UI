import axios from "axios";
import handleApiError from "./globalErrorHandler";

const apiKey = import.meta.env.VITE_API_KEY_GOOGLE_MAP;

export const busRouteMap = async (from, to) => {
  try {
    const response = await axios.get(
      `https://maps.gomaps.pro/maps/api/distancematrix/json?destinations=${from.toUpperCase()}&origins=${to.toUpperCase()}&key=${apiKey}`
    );
    return response?.data;
  } catch (error) {
    return handleApiError(error);
  }
};
