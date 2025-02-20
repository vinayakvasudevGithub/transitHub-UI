import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import sand from "../assets/sand.jpg";
import FlightHomeSearch from "../components/homeSearch/FlightHomeSearch";
import BusSearchHome from "../components/homeSearch/BusSearchHome";
import TrainHomeSearch from "../components/homeSearch/TrainHomeSearch";
// import { getAllBuses } from "../api/busApi";

const HomePage = () => {
  const [select, setSelect] = useState("");
  // const apiKey = import.meta.env.VITE_BASE_URL;
  // console.log(apiKey);
  console.log(select);
  return (
    <div className="relative grid grid-rows-10   bg-gray-50">
      {/* Header Section */}
      <div className="row-span-1  text-center py-3 ">
        <h1 className="text-xl font-bold">Travel Booking Portal</h1>
        <p className="text-sm">Book flights, trains, and buses seamlessly</p>
      </div>
      {/* Main Section */}
      <div
        className="row-span-8 grid grid-rows-4"
        style={{
          backgroundImage: `url(${sand})`,
          // backgroundImage: `url(${alaska})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" row-span-1 hidden md:block"></div>

        <div className=" row-span-2  flex justify-center items-center">
          <div className="w-full md:w-[80%]   bg-white bg-opacity-20  rounded-lg p-6 shadow-lg">
            <div className="flex justify-center ">
              <div className="flex justify-center items-center space-x-6 p-7">
                {/* Flights Button */}
                <Link to="/flight" onClick={() => setSelect("flight")}>
                  <div className="p-2 mt-5 relative flex justify-center group">
                    <div className="rounded-full bg-gray-300 border-[4px]  absolute bottom-10 flex justify-center items-center ">
                      <img
                        className="w-14 h-14  "
                        src="https://edge.ixigo.com/st/vimaan/_next/static/media/flight.f515b25a.svg"
                        alt="Flights"
                      />
                    </div>

                    <div className="border-[4px]  bg-gray-300 flex px-9 py-2 rounded-3xl justify-center items-center text-sm text-black font-medium">
                      Flight
                    </div>
                  </div>
                </Link>

                {/* Bus Button */}
                <Link to="/Bus" onClick={() => setSelect("bus")}>
                  <div className="p-2 mt-5 relative flex justify-center group">
                    <div
                      className={`rounded-full absolute bottom-9 flex justify-center items-center ${
                        select === "bus" ? "bg-red-500" : "bg-gray-300"
                      }   border-[4px]   transition-all `}
                    >
                      <img
                        className="w-14 h-14"
                        src="https://images.ixigo.com/image/upload/trains/trains/d59e0e79f7d5d31a6dcb048f96c2dd6b-umlsp.png"
                        alt="Bus"
                      />
                    </div>
                    <div className=" border-[4px]  bg-gray-300 flex px-9 py-2 rounded-3xl justify-center items-center text-sm text-black font-medium  ">
                      Buses
                    </div>
                  </div>
                </Link>

                {/* Train Button */}
                <Link to="/Train">
                  <div className="p-2 mt-5 relative flex justify-center group">
                    <div className="rounded-full absolute bottom-9 flex justify-center items-center bg-gray-300 border-[4px]  ">
                      <img
                        className="w-14 h-14"
                        src="https://images.ixigo.com/image/upload/trains/trains/6219365fbe7fdb49d5fa346457de8190-decie.png"
                        alt="Train"
                      />
                    </div>
                    <div className="bg-gray-300 border-[4px]  flex px-9 py-2 rounded-3xl justify-center items-center text-sm text-black font-medium ">
                      Trains
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <>
              <Routes>
                <Route path="/flight" element={<FlightHomeSearch />} />
                <Route path="/Train" element={<TrainHomeSearch />} />
                <Route path="/Bus" element={<BusSearchHome />} />
              </Routes>
            </>
          </div>
        </div>
        <div className="row-span-1 flex justify-center">g</div>
      </div>

      <div className="row-span-1 flex justify-center items-end">
        <footer className="text-center py-3 rounded-md shadow-md">
          <p className="text-sm">
            © 2025 Travel Booking Portal | All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default HomePage;

// import React, { useEffect, useState } from "react";
// import { getAllBuses } from "../api/busApi";

// const HomePage = () => {
//   const [buses, setBuses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   //   const baseURL = import.meta.env.VITE_BASE_URL;
//   //   console.log(baseURL);
//   useEffect(() => {
//     const fetchBuses = async () => {
//       try {
//         const data = await getAllBuses();
//         setBuses(data);
//       } catch (error) {
//         console.error("Failed to fetch buses.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBuses();
//   }, []);

//   if (loading) return <p>Loading buses....</p>;
//   if (!buses.length) return <p>No buses available....</p>;
//   // console.log(buses);
//   return (
//     <div>
//       {buses.map((bus) => {
//         return <div key={bus._id}>{bus.busname}</div>;
//       })}
//     </div>
//   );
// };

// export default HomePage;
