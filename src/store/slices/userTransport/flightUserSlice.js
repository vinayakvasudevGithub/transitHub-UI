import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  FlightList: JSON.parse(localStorage.getItem("FlightList")) || [],
};

const flightUserSlice = createSlice({
  name: "FLIGHT",
  initialState,
  reducers: {
    tripInfo: (state, action) => {
      const { departureCity, destinationCity } = action.payload;
      const tripDetails = { departureCity, destinationCity };

      state.FlightList.push(tripDetails);
      localStorage.setItem("FlightList", JSON.stringify(state.FlightList));
    },
  },
});

export default flightUserSlice.reducer;
export const { tripInfo } = flightUserSlice.actions;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   flightList: JSON.parse(localStorage.getItem("FlightList")) || [],
// };

// const flightUserSlice = createSlice({
//   name: "FLIGHT", // Fix slice name
//   initialState,
//   reducers: {
//     tripInfo: (state, action) => {
//       state.flightList.push(action.payload);
//       localStorage.setItem("FlightList", JSON.stringify(state.flightList));
//     },
//   },
// });

// export const { tripInfo } = flightUserSlice.actions;
// export default flightUserSlice.reducer; // Correct export
