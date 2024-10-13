import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  buses: JSON.parse(localStorage.getItem("buses")) || [],
};

export const BusSlice = createSlice({
  name: "bus",
  initialState,
  reducers: {
    BusDetails: (state, action) => {
      const newBus = {
        id: nanoid(),
        from: action.payload.from,
        to: action.payload.to,
        // busname: action.payload.busname,
        // busnumber: action.payload.busnumber,
        // bustype: action.payload.bustype,
      };

      state.buses.push(newBus);
      localStorage.setItem("buses", JSON.stringify(state.buses));
    },
  },
});

export const { BusDetails } = BusSlice.actions;
export default BusSlice.reducer;
