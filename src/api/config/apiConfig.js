export const API_ENDPOINTS = {
  BUS: {
    GET_ALL: "/bus",
    GET_BUS_BY_SEARCH: `/bus/search`,
    GET_BOOKED_BUSES: "/busticket",
    BOOK_BUS_TICKET: "/busticket/booking",
  },
  TRAIN: {
    GET_ALL: "/train",
    GET_TRAIN_BY_SEARCH: "/train/search",
    GET_BOOKED_TRAINS: "/trainticket",
    BOOK_TRAIN_TICKET: "/trainticket/booking",
  },
  FLIGHT: {
    GET_ALL: "/flight",
    GET_FLIGHT_BY_SEARCH: "/flight/search",
    GET_BOOKED_FLIGHTS: "/flightticket",
    BOOK_FLIGHT_TICKET: "/flightticket/booking",
  },
  USER: {
    REGISTER: "/users/register",
    LOGIN: "/users/login",
    CURRENT: "/users/current",
  },
};
