import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  Details: JSON.parse(localStorage.getItem("busBooking")) || [],
  // Details: [],
};

export const BusBookingSlice = createSlice({
  name: "bookingDetails", // Changed from "bus" to "busBooking"
  initialState,
  reducers: {
    BusBookingDetails: (state, action) => {
      const newBus = {
        id: nanoid(),
        busSeatNumber: action.payload.busSeatNumber,
        busName: action.payload.busName,
        busType: action.payload.busType,
        arrivalTime: action.payload.arrivalTime,
        departureTime: action.payload.departureTime,
      };
      state.Details.push(newBus);
      localStorage.setItem("busBooking", JSON.stringify(state.Details)); // Use a unique key
    },
  },
});
export const { BusBookingDetails } = BusBookingSlice.actions;
export default BusBookingSlice.reducer;

// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const loadFromLocalStorage = (key) => {
//   try {
//     const data = localStorage.getItem(key);
//     return data ? JSON.parse(data) : [];
//   } catch (error) {
//     console.error("Failed to load from localStorage:", error);
//     return [];
//   }
// };

// const saveToLocalStorage = (key, data) => {
//   try {
//     localStorage.setItem(key, JSON.stringify(data));
//   } catch (error) {
//     console.error("Failed to save to localStorage:", error);
//   }
// };

// const initialState = {
//   buses: loadFromLocalStorage("buses"),
// };

// export const BusSlice = createSlice({
//   name: "bus",
//   initialState,
//   reducers: {
//     BusDetails: (state, action) => {
//       const newBus = {
//         id: nanoid(),
//         ...action.payload, // Spread action.payload to allow for dynamic fields
//       };
//       state.buses.push(newBus);
//       saveToLocalStorage("buses", state.buses); // Use the helper function
//     },
//   },
// });

// export const { BusDetails } = BusSlice.actions;
// export default BusSlice.reducer;
