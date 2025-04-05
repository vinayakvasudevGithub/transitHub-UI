import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import BusListingPage from "../features/transport/bus/pages/BusListingPage";
import FlightListingPage from "../features/transport/flight/pages/FlightListingPage";
import TrainListingPage from "../features/transport/train/pages/TrainListingPage";

const SearchResults = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/FlightResult" element={<FlightListingPage />} />
        <Route path="/TrainResult" element={<TrainListingPage />} />
        <Route path="/BusResult" element={<BusListingPage />} />
      </Routes>
      <footer className="bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-500 text-white text-center py-3 shadow-md">
        <p className="text-sm">© 2025 TransitHub | All rights reserved.</p>
      </footer>
    </>
  );
};

export default SearchResults;
