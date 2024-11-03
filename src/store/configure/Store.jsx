import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "../slice/FlightSlice";
import busReducer from "../slice/BusSlice";
import trainReducer from "../slice/TrainSlice";
// import busOperatorReducer from "../Operator/BusOperator"; // Import renamed reducer

export const store = configureStore({
  reducer: {
    flight: flightReducer,
    bus: busReducer,
    train: trainReducer,
    // busOperator: busOperatorReducer, // Use the renamed reducer
  },
});
