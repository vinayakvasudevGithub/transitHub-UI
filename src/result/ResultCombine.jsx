import React from "react";
import FlightResult from "./pages/flight/FlightResult";
import BusResult from "./pages/bus/BusResult";
import TrainResult from "./pages/train/TrainResult";
import { Route, Routes } from "react-router-dom";

const ResultCombine = () => {
  return (
    <>
      <Routes>
        <Route path="/FlightResult" element={<FlightResult />} />
        <Route path="/TrainResult" element={<TrainResult />} />
        <Route path="/BusResult" element={<BusResult />} />
      </Routes>
    </>
  );
};

export default ResultCombine;
