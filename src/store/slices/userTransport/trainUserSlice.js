import { createSlice } from "@reduxjs/toolkit";
// import { tripInfo } from "./flightUserSlice";
const initialState = {
  TrainList: JSON.parse(localStorage.getItem("TrainList")) || [],
};

const TrainUserSlice = createSlice({
  name: "TRAIN",
  initialState,
  reducers: {
    tripInfo: (state, action) => {
      const { departureCity, destinationCity } = action.payload;
      const tripDetails = { departureCity, destinationCity };

      state.TrainList.push(tripDetails);
      localStorage.setItem("TrainList", JSON.stringify(state.TrainList));
    },
  },
});

export default TrainUserSlice.reducer;
export const { tripInfo } = TrainUserSlice.actions;
