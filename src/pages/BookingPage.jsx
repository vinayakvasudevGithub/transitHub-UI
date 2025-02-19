import React from "react";
import { Route, Routes } from "react-router-dom";
import TrainBookingPage from "../components/bookingForm/TrainBookingPage";
import BusBookingPage from "../components/bookingForm/BusBookingPage";
import FlightBookingPage from "../components/bookingForm/FlightBookingPage";

const BookingPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/busTicket" element={<BusBookingPage />} />
        <Route path="/flightTicket" element={<FlightBookingPage />} />
        <Route path="/trainTicket" element={<TrainBookingPage />} />
      </Routes>
    </div>
  );
};

export default BookingPage;
