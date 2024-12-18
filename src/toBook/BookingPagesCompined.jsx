import React from "react";
import BusBookingPage from "./BusBookingPage/BusBookingPage";
import { Route, Routes } from "react-router-dom";
import FlightBookingPage from "./FlightBookingPage.jsx/FlightBookingPage";
import TrainBookkingPage from "./TrainBookingPage.jsx/TrainBookkingPage";

const BookingPagesCompined = () => {
  return (
    <div>
      <Routes>
        <Route path="/busTicket" element={<BusBookingPage />} />
        <Route path="/flightTicket" element={<FlightBookingPage />} />
        <Route path="/trainTicket" element={<TrainBookkingPage />} />
      </Routes>
    </div>
  );
};

export default BookingPagesCompined;
