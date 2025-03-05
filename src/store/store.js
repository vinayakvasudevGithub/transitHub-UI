// import { configureStore } from "@reduxjs/toolkit";
// import flightReducer from "./slices/userTransport/flightUserSlice";
// const store = configureStore({
//   reducer: {
//     flight: flightReducer,
//   },
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/userTransport/flightUserSlice";
import trainReducer from "./slices/userTransport/trainUserSlice";
import busReducer from "./slices/userTransport/busUserSlice";
const store = configureStore({
  reducer: {
    flight: flightReducer,
    train: trainReducer,
    bus: busReducer,
  },
});

export default store;
