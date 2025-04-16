// import React, { useEffect } from "react";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { PiArrowsLeftRightLight } from "react-icons/pi";
// import { HiMiniArrowsUpDown } from "react-icons/hi2";
// import { getAllBuses } from "../../../../api/services/transport/busApi";
// import { tripInfo } from "../../../../store/slices/userTransport/busUserSlice";

// const BusSearch = ({ from, to, busData }) => {
//   const dispatch = useDispatch();
//   const [searchFrom, setsearchFrom] = useState(from || "");
//   const [searchTo, setsearchTo] = useState(to || "");

//   const searchMore = (e) => {
//     e.preventDefault();
//     dispatch(
//       tripInfo({
//         departureCity: searchFrom ? searchFrom : from,
//         destinationCity: searchTo ? searchTo : to,
//       }),
//       window.location.reload()
//     );
//   };

//   const [Inpsearch, setInpsearch] = useState([]);

//   useEffect(() => {
//     const fetchAllBuses = async () => {
//       try {
//         const data = await getAllBuses();
//         setInpsearch(data);
//       } catch (error) {
//         console.error("Error fetching buses");
//         // alert("Failed to fetch bus data. Please try again later.");
//       }
//     };

//     fetchAllBuses();
//   }, []);

//   const filteredStations = Inpsearch.flatMap((bus) =>
//     bus.stations.filter((stations) =>
//       stations.city.toLowerCase().includes(searchFrom.toLowerCase())
//     )
//   );

//   const filteredDestinations = Inpsearch.flatMap((bus) =>
//     bus.stations.filter((stations) =>
//       stations.city.toLowerCase().includes(searchTo.toLowerCase())
//     )
//   );

//   // input box show and hide ------------------------------------------>>>>>>>>>>
//   const [InpBox, setInpBox] = useState("");

//   return (
//     <>
//       <div className=" bg-white col-span-6 grid grid-cols-1 sm:flex justify-between gap-1 p-2 w-full ">
//         {/* From Input */}
//         <div className="col-span-3 p-1 w-full">
//           <h3 className="text-xs font-semibold text-gray-600 mb-1">From</h3>
//           <div className="relative">
//             <input
//               type="text"
//               value={searchFrom}
//               className="bg-gray-100 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
//               placeholder="Enter origin"
//               onChange={(e) => setsearchFrom(e.target.value)}
//               onClick={(e) => setInpBox("from")}
//             />
//             {InpBox === "from" && (
//               <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-50 w-full max-h-40 overflow-y-auto">
//                 {filteredStations.map((stations) => (
//                   <p
//                     key={stations._id}
//                     className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-blue-100"
//                     onClick={(e) => {
//                       setsearchFrom(stations.city);
//                       setInpBox("");
//                     }}
//                   >
//                     {stations.city}
//                   </p>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Arrow Icons */}
//         <div className="col-span-1 flex justify-center items-center text-gray-500">
//           <PiArrowsLeftRightLight className="hidden sm:block text-2xl" />
//           <HiMiniArrowsUpDown className="block sm:hidden text-xl" />
//         </div>

//         {/* To Input */}
//         <div className="col-span-3 p-1 w-full">
//           <h3 className="text-xs font-semibold text-gray-600 mb-1">To</h3>
//           <div className="relative">
//             <input
//               type="text"
//               value={searchTo}
//               className="bg-gray-100 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
//               placeholder="Enter destination"
//               onChange={(e) => setsearchTo(e.target.value)}
//               onClick={() => setInpBox("to")}
//             />
//             {InpBox === "to" && (
//               <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-50 w-full max-h-40 overflow-y-auto">
//                 {filteredDestinations.map((stations) => (
//                   <p
//                     key={stations._id}
//                     className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-blue-100"
//                     onClick={(e) => {
//                       setsearchTo(stations.city);
//                       setInpBox("");
//                     }}
//                   >
//                     {stations.city}
//                   </p>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Date Input */}
//         <div className="col-span-3 p-1 w-full">
//           <h3 className="text-xs font-semibold text-gray-600 mb-1">Date</h3>
//           <input
//             type="date"
//             className="bg-gray-100 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
//           />
//         </div>

//         {/* Search Button */}
//         <div className="flex justify-center sm:w-[50%]">
//           <button
//             className="bg-blue-500 text-white  hover:bg-blue-600 font-semibold rounded-lg sm:w-full w-[25%] py-3 px-6 "
//             onClick={searchMore}
//           >
//             Search
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BusSearch;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FiMapPin, FiCalendar } from "react-icons/fi";
import { PiArrowsLeftRightLight } from "react-icons/pi";
import { HiMiniArrowsUpDown } from "react-icons/hi2";
import { getAllBuses } from "../../../../api/services/transport/busApi";
import { tripInfo } from "../../../../store/slices/userTransport/busUserSlice";

const BusSearch = ({ from, to }) => {
  const dispatch = useDispatch();
  const [searchFrom, setSearchFrom] = useState(from || "");
  const [searchTo, setSearchTo] = useState(to || "");
  const [Inpsearch, setInpsearch] = useState([]);
  const [InpBox, setInpBox] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    const fetchAllBuses = async () => {
      try {
        const data = await getAllBuses();
        setInpsearch(data);
      } catch (error) {
        console.error("Error fetching buses");
      }
    };
    fetchAllBuses();
  }, []);

  const filteredStations = Inpsearch.flatMap((bus) =>
    bus.stations.filter((station) =>
      station.city.toLowerCase().includes(searchFrom.toLowerCase())
    )
  );

  const filteredDestinations = Inpsearch.flatMap((bus) =>
    bus.stations.filter((station) =>
      station.city.toLowerCase().includes(searchTo.toLowerCase())
    )
  );

  const searchMore = (e) => {
    e.preventDefault();
    dispatch(
      tripInfo({
        departureCity: searchFrom || from,
        destinationCity: searchTo || to,
        date,
      })
    );
    window.location.reload();
  };

  return (
    <form
      onSubmit={searchMore}
      className="bg-white p-6  rounded-2xl shadow-xl flex flex-wrap md:flex-nowrap gap-4 items-end"
    >
      {/* FROM */}
      <div className="w-full md:w-1/4 relative ">
        <label className="text-sm font-medium text-gray-600 mb-1 block">
          From
        </label>
        <div className="relative ">
          <FiMapPin className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            value={searchFrom}
            onChange={(e) => setSearchFrom(e.target.value)}
            onClick={() => setInpBox("from")}
            placeholder="Departure city"
            className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          {InpBox === "from" && filteredStations.length > 0 && (
            <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow max-h-40 overflow-y-auto">
              {filteredStations.map((station) => (
                <div
                  key={station._id}
                  className="px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer"
                  onClick={() => {
                    setSearchFrom(station.city);
                    setInpBox("");
                  }}
                >
                  {station.city}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* SWAP ICON */}
      <div className="flex justify-center items-center md:w-1/12 w-full mt-1 md:mt-6 text-gray-500">
        <PiArrowsLeftRightLight className="hidden md:block text-2xl" />
        <HiMiniArrowsUpDown className="block md:hidden text-xl" />
      </div>

      {/* TO */}
      <div className="w-full md:w-1/4 relative">
        <label className="text-sm font-medium text-gray-600 mb-1 block">
          To
        </label>
        <div className="relative">
          <FiMapPin className="absolute top-3 left-3 text-gray-400" />
          <input
            type="text"
            value={searchTo}
            onChange={(e) => setSearchTo(e.target.value)}
            onClick={() => setInpBox("to")}
            placeholder="Destination city"
            className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          {InpBox === "to" && filteredDestinations.length > 0 && (
            <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow max-h-40 overflow-y-auto">
              {filteredDestinations.map((station) => (
                <div
                  key={station._id}
                  className="px-4 py-2 text-sm hover:bg-blue-100 cursor-pointer"
                  onClick={() => {
                    setSearchTo(station.city);
                    setInpBox("");
                  }}
                >
                  {station.city}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* DATE */}
      <div className="w-full md:w-1/4">
        <label className="text-sm font-medium text-gray-600 mb-1 block">
          Date
        </label>
        <div className="relative">
          <FiCalendar className="absolute top-3 left-3 text-gray-400" />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full pl-10 pr-3 py-2.5 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>
      </div>

      {/* SEARCH BUTTON */}
      <div className="w-full md:w-1/5 mt-4 md:mt-0">
        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default BusSearch;
