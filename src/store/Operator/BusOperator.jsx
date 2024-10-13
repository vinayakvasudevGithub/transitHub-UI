import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  busAPI: JSON.parse(localStorage.getItem("busAPI")) || [],
};

export const BusOperator = createSlice({
  name: "busInformation",
  initialState,
  reducers: {
    AddBusApi: (state, action) => {
      const newBus = {
        id: nanoid(),
        busname: action.payload.busname,
        busnumber: action.payload.busnumber,
        bustype: action.payload.bustype,
        station: action.payload.station,
        city: action.payload.city,
        district: action.payload.district,
        state: action.payload.state,
        arrivaltime: action.payload.arrivaltime,
        departureTime: action.payload.departureTime,
      };

      state.busAPI.push(newBus);
      localStorage.setItem("busAPI", JSON.stringify(state.busAPI));
    },
  },
});

export const { AddBusApi } = BusOperator.actions;
export default BusOperator.reducer;
