import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  flights: JSON.parse(localStorage.getItem("flights")) || [], // Initialize from local storage if available
};

export const flightSlice = createSlice({
  name: "flight",
  initialState,
  reducers: {
    Flightdetails: (state, action) => {
      const newFlight = {
        id: nanoid(),
        from: action.payload.from,
        to: action.payload.to,
      };

      // Add the new flight to the state
      state.flights.push(newFlight);

      // Store the flight details in local storage
      localStorage.setItem("flights", JSON.stringify(state.flights));
    },
  },
});

export const { Flightdetails } = flightSlice.actions;
export default flightSlice.reducer;
