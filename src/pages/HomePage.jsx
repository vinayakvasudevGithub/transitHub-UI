// import React, { useContext, useState } from "react";
// import { Link, Route, Routes, useNavigate } from "react-router-dom";
// import sand from "../assets/sand.jpg";
// import FlightHomeSearch from "../components/homeSearch/FlightHomeSearch";
// import BusSearchHome from "../components/homeSearch/BusSearchHome";
// import TrainHomeSearch from "../components/homeSearch/TrainHomeSearch";
// import { UserContext } from "../../context/UserContext";

// const HomePage = () => {
//   const { user } = useContext(UserContext);
//   const [select, setSelect] = useState("");
//   const navigate = useNavigate();

//   return (
//     <div className="relative grid grid-rows-10   bg-gray-50">
//       <div className="row-span-1  text-center py-3 ">
//         <h1 className="text-xl font-bold">Travel Booking Portal</h1>
//         <p className="text-sm">Book flights, trains, and buses seamlessly</p>
//       </div>

//       <div
//         className="row-span-8 grid grid-rows-6"
//         style={{
//           backgroundImage: `url(${sand})`,
//           // backgroundImage: `url(${alaska})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className="text-white">
//           <button className="bg-red-300" onClick={() => navigate("/booked")}>
//             {" "}
//             Booked Tickets
//           </button>
//         </div>
//         {/* <div className="row-span-1 hidden md:block"></div> */}
//         <div>
//           <h1 className="text-white">welcome {user?.user?.name}</h1>
//         </div>
//         <div className=" row-span-2  flex justify-center items-center">
//           <div className="w-full md:w-[80%]   bg-white bg-opacity-20  rounded-lg p-6 shadow-lg">
//             <div className="flex justify-center ">
//               <div className="flex justify-center items-center space-x-6 p-7">
//                 {/* Flights Button */}
//                 <Link to="/home/flight" onClick={() => setSelect("flight")}>
//                   <div className="p-2 mt-5 relative flex justify-center group">
//                     <div className="rounded-full bg-gray-300 border-[4px]  absolute bottom-10 flex justify-center items-center ">
//                       <img
//                         className="w-14 h-14  "
//                         src="https://edge.ixigo.com/st/vimaan/_next/static/media/flight.f515b25a.svg"
//                         alt="Flights"
//                       />
//                     </div>

//                     <div className="border-[4px]  bg-gray-300 flex px-9 py-2 rounded-3xl justify-center items-center text-sm text-black font-medium">
//                       Flight
//                     </div>
//                   </div>
//                 </Link>

//                 {/* Bus Button */}
//                 <Link to="/home/Bus" onClick={() => setSelect("bus")}>
//                   <div className="p-2 mt-5 relative flex justify-center group">
//                     <div
//                       className={`rounded-full absolute bottom-9 flex justify-center items-center ${
//                         select === "bus" ? "bg-red-500" : "bg-gray-300"
//                       }   border-[4px]   transition-all `}
//                     >
//                       <img
//                         className="w-14 h-14"
//                         src="https://images.ixigo.com/image/upload/trains/trains/d59e0e79f7d5d31a6dcb048f96c2dd6b-umlsp.png"
//                         alt="Bus"
//                       />
//                     </div>
//                     <div className=" border-[4px]  bg-gray-300 flex px-9 py-2 rounded-3xl justify-center items-center text-sm text-black font-medium  ">
//                       Buses
//                     </div>
//                   </div>
//                 </Link>

//                 {/* Train Button */}
//                 <Link to="/home/Train">
//                   <div className="p-2 mt-5 relative flex justify-center group">
//                     <div className="rounded-full absolute bottom-9 flex justify-center items-center bg-gray-300 border-[4px]  ">
//                       <img
//                         className="w-14 h-14"
//                         src="https://images.ixigo.com/image/upload/trains/trains/6219365fbe7fdb49d5fa346457de8190-decie.png"
//                         alt="Train"
//                       />
//                     </div>
//                     <div className="bg-gray-300 border-[4px]  flex px-9 py-2 rounded-3xl justify-center items-center text-sm text-black font-medium ">
//                       Trains
//                     </div>
//                   </div>
//                 </Link>
//               </div>
//             </div>
//             <>
//               <Routes>
//                 <Route path="/flight" element={<FlightHomeSearch />} />
//                 <Route path="/Train" element={<TrainHomeSearch />} />
//                 <Route path="/Bus" element={<BusSearchHome />} />
//               </Routes>
//             </>
//           </div>
//         </div>
//         <div className="row-span-1 flex justify-center">g</div>
//       </div>

//       <div className="row-span-1 flex justify-center items-end">
//         <footer className="text-center py-3 rounded-md shadow-md">
//           <p className="text-sm">
//             © 2025 Travel Booking Portal | All rights reserved
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

import React, { useContext, useState } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import sand from "../assets/sand.jpg";
import FlightHomeSearch from "../components/homeSearch/FlightHomeSearch";
import BusSearchHome from "../components/homeSearch/BusSearchHome";
import TrainHomeSearch from "../components/homeSearch/TrainHomeSearch";
import { UserContext } from "../../context/UserContext";

const HomePage = () => {
  const { user } = useContext(UserContext);
  const [select, setSelect] = useState("");
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="bg-white py-3 shadow-sm">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-blue-600">TravelEase</h1>
          <p className="text-gray-600 text-sm">
            Book your journey in one click
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main
        className="flex-grow relative bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${sand})`,
        }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
          {/* User Welcome */}
          {user && (
            <div className="self-end mb-4 bg-white bg-opacity-90 rounded-full px-4 py-1 shadow-sm">
              <p className="text-sm font-medium">Hi, {user?.user?.name}</p>
            </div>
          )}

          {/* Compact Transportation Selector */}
          <div className="w-full  bg-white bg-opacity-90 rounded-xl p-6 shadow-lg">
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
                <Route path="/flight" element={<FlightHomeSearch />} />
                <Route path="/Train" element={<TrainHomeSearch />} />
                <Route path="/Bus" element={<BusSearchHome />} />
              </Routes>
            </div>
          </div>

          {/* Booked Tickets Button */}
          <button
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
          </button>
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
