import React from "react";
import BusBookingPage from "./BusBookingPage/BusBookingPage";
import { Route, Routes } from "react-router-dom";
import FlightBookingPage from "./FlightBookingPage.jsx/FlightBookingPage";

const BookingPagesCompined = () => {
  return (
    <div>
      <Routes>
        <Route path="/busTicket" element={<BusBookingPage />} />
        <Route path="/flightTicket" element={<FlightBookingPage />} />
      </Routes>
    </div>
  );
};

export default BookingPagesCompined;
