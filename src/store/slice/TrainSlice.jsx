import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  trains: JSON.parse(localStorage.getItem("trains")) || [],
};

export const TrainSlice = createSlice({
  name: "train",
  initialState,
  reducers: {
    TrainDetails: (state, action) => {
      const newTrain = {
        id: nanoid(),
        from: action.payload.from,
        to: action.payload.to,
      };

      state.trains.push(newTrain);
      localStorage.setItem("trains", JSON.stringify(state.trains));
    },
  },
});

export const { TrainDetails } = TrainSlice.actions;
export default TrainSlice.reducer;
