import React from "react";
import FlightResults from "../components/FlightResults";
import TrainResults from "../components/TrainResults";
import BusResults from "../components/BusResults";
import { Route, Routes, useNavigate } from "react-router-dom";

const SearchResults = () => {
  const Navigate = useNavigate();

  const handleNavigate = (value) => {
    Navigate(`/home/${value}`);
  };

  return (
    <>
      <div className="  flex justify-start space-x-2 p-1">
        <div className="flex">
          Transit<p className="text-red-500 font-bold">H</p>ub
        </div>
        <div className="rounded-lg " onClick={() => handleNavigate("flight")}>
          <img
            className="w-11 h-11  "
            src="https://edge.ixigo.com/st/vimaan/_next/static/media/flight.f515b25a.svg"
            alt="Flights"
          />
        </div>
        <div className="rounded-lg " onClick={() => handleNavigate("bus")}>
          <img
            className="w-11 h-11  "
            src="https://images.ixigo.com/image/upload/trains/trains/d59e0e79f7d5d31a6dcb048f96c2dd6b-umlsp.png"
            alt="Bus"
          />
        </div>
        <div className="rounded-lg " onClick={() => handleNavigate("train")}>
          <img
            className="w-11 h-11  "
            src="https://images.ixigo.com/image/upload/trains/trains/6219365fbe7fdb49d5fa346457de8190-decie.png"
            alt="Train"
          />
        </div>
      </div>
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
