import React, { useContext, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import sand from "../assets/sand.jpg";
import { UserContext } from "../../context/UserContext";
import SideBar from "../components/common/SideBar";
import BusHomeSearch from "../features/homesearch/BusHomeSearch";
import FlightHomeSearch from "../features/homesearch/FlightHomeSearch";
import TrainHomeSearch from "../features/homesearch/TrainHomeSearch";

const HomePage = () => {
  const { user } = useContext(UserContext);
  const [select, setSelect] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col ">
      <main
        className="flex-grow relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${sand})`,
        }}
      >
        <header className=" shadow-sm flex justify-end">
          {/* <ClientsToUpload /> */}
          <SideBar />
        </header>
        <div className=" inset-0 flex flex-col items-center justify-center p-4 ">
          <div className=" w-full">
            {user && (
              <div className="">
                <p className="text-2xl text-white font-medium ">
                  Hi, {user?.user?.name}
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => navigate("/mytrip")}
            className="mt-6 bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-colors flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            View My Bookings
          </button>
          {/* </div> */}
          {/* Compact Transportation Selector */}
          <div className="mt-7 w-full  bg-white bg-opacity-90 rounded-xl p-6 shadow-lg">
            <h2 className="text-lg font-semibold text-center mb-6 text-gray-800">
              Where would you like to go?
            </h2>

            <div className="flex space-x-4 justify-center mb-6">
              {/* Flight Button */}
              <Link
                to="/home/flight"
                onClick={() => setSelect("flight")}
                className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                  select === "flight"
                    ? "bg-blue-50 border border-blue-200"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className=" bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <img
                    className="size-[4rem]"
                    src="https://edge.ixigo.com/st/vimaan/_next/static/media/flight.f515b25a.svg"
                    alt="Flights"
                  />
                </div>
                <span className="text-xs font-medium">Flights</span>
              </Link>

              {/* Bus Button */}
              <Link
                to="/home/Bus"
                onClick={() => setSelect("bus")}
                className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                  select === "bus"
                    ? "bg-blue-50 border border-blue-200"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className=" bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <img
                    className="size-[4rem]"
                    src="https://images.ixigo.com/image/upload/trains/trains/d59e0e79f7d5d31a6dcb048f96c2dd6b-umlsp.png"
                    alt="Bus"
                  />
                </div>
                <span className="text-xs font-medium">Buses</span>
              </Link>

              {/* Train Button */}
              <Link
                to="/home/Train"
                onClick={() => setSelect("train")}
                className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                  select === "train"
                    ? "bg-blue-50 border border-blue-200"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className=" bg-blue-100 rounded-full flex items-center justify-center mb-2">
                  <img
                    className="size-[4rem]"
                    src="https://images.ixigo.com/image/upload/trains/trains/6219365fbe7fdb49d5fa346457de8190-decie.png"
                    alt="Train"
                  />
                </div>
                <span className="text-xs font-medium">Trains</span>
              </Link>
            </div>

            {/* Search Components */}
            <div className="mt-4">
              <Routes>
                {/* <Route path="/flight" element={<FlightHomeSearch />} /> */}
                <Route path="/flight" element={<FlightHomeSearch />} />
                <Route path="/Train" element={<TrainHomeSearch />} />
                {/* <Route path="/Train" element={<TrainHomeSearch />} /> */}
                {/* <Route path="/Bus" element={<BusSearchHome />} /> */}
                <Route path="/Bus" element={<BusHomeSearch />} />
                {/* <Route path="/Bus" element={<BusListingPage />} /> */}
              </Routes>
            </div>
          </div>
          {/* Booked Tickets Button */}
          {/* <button
            onClick={() => navigate("/booked")}
            className="mt-6 bg-white text-blue-600 hover:bg-blue-50 px-4 py-2 rounded-full text-sm font-medium shadow-sm transition-colors flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              />
            </svg>
            View My Bookings
          </button> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4 text-center text-xs">
          © {new Date().getFullYear()} TravelEase | All rights reserved
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
