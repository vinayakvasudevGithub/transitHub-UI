import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "../slice/FlightSlice";
import busReducer from "../slice/BusSlice";
import trainReducer from "../slice/TrainSlice";
import busBookingReducer from "../BookingSlice/BusBookingSlice";
// import { flightReducer } from "../slices/userTransport/flightUserSlice";

export const store = configureStore({
  reducer: {
    flight: flightReducer,
    bus: busReducer,
    train: trainReducer,
    busTicket: busBookingReducer,
  },
});
