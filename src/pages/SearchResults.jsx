import React from "react";
import FlightResults from "../components/FlightResults";
import TrainResults from "../components/TrainResults";
import BusResults from "../components/BusResults";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../components/common/NavBar";

const SearchResults = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/FlightResult" element={<FlightResults />} />
        <Route path="/TrainResult" element={<TrainResults />} />
        <Route path="/BusResult" element={<BusResults />} />
      </Routes>
      <footer className="bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-500 text-white text-center py-3 shadow-md">
        <p className="text-sm">© 2025 TransitHub | All rights reserved.</p>
      </footer>
    </>
  );
};

export default SearchResults;
