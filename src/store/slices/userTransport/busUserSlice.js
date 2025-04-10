import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  BusList: JSON.parse(localStorage.getItem("BusList")) || [],
  tripDetails: JSON.parse(localStorage.getItem("journey")) || [],
};

const BusUserSlice = createSlice({
  name: "BUS",
  initialState,
  reducers: {
    tripInfo: (state, action) => {
      const { departureCity, destinationCity } = action.payload;
      const tripDetails = { departureCity, destinationCity };

      state.BusList.push(tripDetails);
      localStorage.setItem("BusList", JSON.stringify(state.BusList));
    },
    tripDetails: (state, action) => {
      const {
        busSeatNumber,
        busName,
        busnumber,
        busType,
        arrivalTime,
        departureTime,
        price,
      } = action.payload;
      const journeyDetails = {
        busSeatNumber,
        busName,
        busnumber,
        busType,
        arrivalTime,
        departureTime,
        price,
      };

      state.tripDetails.push(journeyDetails);
      localStorage.setItem("journey", JSON.stringify(state.tripDetails));
    },
  },
});

export default BusUserSlice.reducer;
export const { tripInfo } = BusUserSlice.actions;
export const { tripDetails } = BusUserSlice.actions;
