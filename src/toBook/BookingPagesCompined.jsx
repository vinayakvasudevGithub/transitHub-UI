import React from "react";
import BusBookingPage from "./BusBookingPage/BusBookingPage";
import { Route, Routes } from "react-router-dom";

const BookingPagesCompined = () => {
  return (
    <div>
      <Routes>
        <Route path="/busTicket" element={<BusBookingPage />} />
      </Routes>
    </div>
  );
};

export default BookingPagesCompined;
