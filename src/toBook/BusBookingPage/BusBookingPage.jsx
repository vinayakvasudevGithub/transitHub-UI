import React from "react";
import { useLocation } from "react-router-dom";

const BusBookingPage = () => {
  const location = useLocation();

  const { seat, busData } = location.state || {};

  console.log(busData);
  return (
    <div>
      <h1>Bus Ticket Booking</h1>
      <p>Selected Seat: {seat}</p>
    </div>
  );
};

export default BusBookingPage;
