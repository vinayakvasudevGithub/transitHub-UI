import React from "react";
// import FlightResults from "../components/FlightResults";
import TrainResults from "../components/TrainResults";
// import BusResults from "../components/BusResults";
import { Route, Routes, useNavigate } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import BusListingPage from "../features/transport/bus/pages/BusListingPage";
import FlightListingPage from "../features/transport/flight/pages/FlightListingPage";

const SearchResults = () => {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/FlightResult" element={<FlightResults />} /> */}
        <Route path="/FlightResult" element={<FlightListingPage />} />
        <Route path="/TrainResult" element={<TrainResults />} />
        {/* <Route path="/BusResult" element={<BusResults />} /> */}
        <Route path="/BusResult" element={<BusListingPage />} />
      </Routes>
      <footer className="bg-gradient-to-r from-violet-500 via-purple-600 to-indigo-500 text-white text-center py-3 shadow-md">
        <p className="text-sm">© 2025 TransitHub | All rights reserved.</p>
      </footer>
    </>
  );
};

export default SearchResults;
