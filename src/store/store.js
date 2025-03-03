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
const store = configureStore({
  reducer: {
    flight: flightReducer,
    train: trainReducer,
  },
});

export default store;
