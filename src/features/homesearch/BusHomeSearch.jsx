// // import React, { useState, useEffect } from "react";
// // import { useDispatch } from "react-redux";
// // import { useNavigate } from "react-router-dom";

// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";
// // import { tripInfo } from "../../store/slices/userTransport/busUserSlice";
// // import { getAllBuses } from "../../api/services/transport/busApi";

// // const BusHomeSearch = () => {
// //   const [from, setFrom] = useState("Kannur");
// //   const [to, setTo] = useState("Mukkam");
// //   const [travelDate, setTravelDate] = useState(new Date());
// //   const [inpSearch, setInpSearch] = useState([]);
// //   const [inpBox, setInpBox] = useState("");
// //   const dispatch = useDispatch();
// //   const navigate = useNavigate();

// //   // Debounce function for performance optimization
// //   const debounce = (func, delay) => {
// //     let timeout;
// //     return (...args) => {
// //       clearTimeout(timeout);
// //       timeout = setTimeout(() => func(...args), delay);
// //     };
// //   };

// //   const handleFromChange = debounce((value) => setFrom(value), 0);
// //   const handleToChange = debounce((value) => setTo(value), 0);

// //   useEffect(() => {
// //     const fetchAllBuses = async () => {
// //       try {
// //         const data = await getAllBuses();
// //         setInpSearch(data);
// //         // console.log(data);
// //       } catch (error) {
// //         console.error("Error fetching buses");
// //         // alert("Failed to fetch bus data. Please try again later.");
// //       }
// //     };

// //     fetchAllBuses();
// //   }, []);

// //   const filteredBusStops = [
// //     ...new Map(
// //       inpSearch
// //         .flatMap((bus) =>
// //           bus.stations.filter((stop) =>
// //             stop.city.toLowerCase().includes(from.toLowerCase())
// //           )
// //         )
// //         .map((stop) => [stop.city, stop])
// //     ).values(),
// //   ];

// //   const filteredDestinations = [
// //     ...new Map(
// //       inpSearch
// //         .flatMap((bus) =>
// //           bus.stations.filter((stop) =>
// //             stop.city.toLowerCase().includes(to.toLowerCase())
// //           )
// //         )
// //         .map((stop) => [stop.city, stop])
// //     ).values(),
// //   ];

// //   const results = (e) => {
// //     e.preventDefault();
// //     dispatch(
// //       tripInfo({
// //         departureCity: from,
// //         destinationCity: to,
// //         // travelDate,
// //       })
// //     );
// //     navigate("/result/BusResult");
// //   };

// //   return (
// //     <div className="bg-gray-200  p-4 rounded-lg">
// //       <form onSubmit={results}>
// //         <div className="grid grid-cols-1  md:grid-cols-4 gap-4">
// //           {/* Departure City */}
// //           <div>
// //             <h3 className="text-xs font-semibold mb-1">From</h3>

// //             <div
// //               className="bg-gray-100 cursor-pointer"
// //               onClick={() => setInpBox("from")}
// //             >
// //               <input
// //                 type="text"
// //                 value={from}
// //                 className="bg-gray-100 w-full p-2 rounded"
// //                 onChange={(e) => handleFromChange(e.target.value)}
// //               />
// //             </div>
// //             {inpBox === "from" && (
// //               <div className="relative">
// //                 <div className="bg-white overflow-y-scroll h-40 absolute z-50 top-0 left-0 w-full animate-slide-down">
// //                   {filteredBusStops.map((stations, index) => (
// //                     <div
// //                       key={index}
// //                       onClick={() => {
// //                         setFrom(stations.city);
// //                         setInpBox("");
// //                       }}
// //                       className="p-2 hover:bg-gray-300 cursor-pointer"
// //                     >
// //                       <div className="flex justify-between">
// //                         <span className="font-bold">{stations.city}</span>,{" "}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* Arrival City */}
// //           <div>
// //             <h3 className="text-xs font-semibold mb-1">To</h3>
// //             <div
// //               className="bg-gray-100 cursor-pointer"
// //               onClick={() => setInpBox("to")}
// //             >
// //               <input
// //                 type="text"
// //                 value={to}
// //                 className="bg-gray-100 w-full p-2 rounded"
// //                 onChange={(e) => handleToChange(e.target.value)}
// //               />
// //             </div>
// //             {inpBox === "to" && (
// //               <div className="relative">
// //                 <div className="bg-gray-200 overflow-y-scroll h-40 absolute z-50 top-0 left-0 w-full animate-slide-down">
// //                   {filteredDestinations.map((stations, index) => (
// //                     <div
// //                       key={index}
// //                       onClick={() => {
// //                         setTo(stations.city);
// //                         setInpBox("");
// //                       }}
// //                       className="p-2 hover:bg-gray-300 cursor-pointer"
// //                     >
// //                       <div className="flex justify-between">
// //                         <span className="font-bold">{stations.city}</span>,{" "}
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>
// //             )}
// //           </div>

// //           {/* Date Picker */}
// //           <div className="">
// //             <h3 className="text-xs font-semibold mb-1">Date</h3>
// //             <DatePicker
// //               selected={travelDate}
// //               onChange={(date) => setTravelDate(date)}
// //               className="bg-gray-100 p-2 rounded w-full"
// //             />
// //           </div>

// //           {/* Search Button */}
// //           <div className="flex items-end">
// //             <button
// //               type="submit"
// //               className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
// //             >
// //               Search Buses
// //             </button>
// //           </div>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default BusHomeSearch;

// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { FiSearch, FiCalendar, FiMapPin } from "react-icons/fi";
// import { tripInfo } from "../../store/slices/userTransport/busUserSlice";
// import { getAllBuses } from "../../api/services/transport/busApi";

// const BusHomeSearch = () => {
//   const [from, setFrom] = useState("Kannur");
//   const [to, setTo] = useState("Mukkam");
//   const [travelDate, setTravelDate] = useState(new Date());
//   const [inpSearch, setInpSearch] = useState([]);
//   const [activeInput, setActiveInput] = useState(null);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Debounce function for performance optimization
//   const debounce = (func, delay) => {
//     let timeout;
//     return (...args) => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => func(...args), delay);
//     };
//   };

//   const handleFromChange = debounce((value) => setFrom(value), 300);
//   const handleToChange = debounce((value) => setTo(value), 300);

//   useEffect(() => {
//     const fetchAllBuses = async () => {
//       try {
//         const data = await getAllBuses();
//         setInpSearch(data);
//       } catch (error) {
//         console.error("Error fetching buses");
//       }
//     };

//     fetchAllBuses();
//   }, []);

//   const filteredBusStops = [
//     ...new Map(
//       inpSearch
//         .flatMap((bus) =>
//           bus.stations.filter((stop) =>
//             stop.city.toLowerCase().includes(from.toLowerCase())
//           )
//         )
//         .map((stop) => [stop.city, stop])
//     ).values(),
//   ];

//   const filteredDestinations = [
//     ...new Map(
//       inpSearch
//         .flatMap((bus) =>
//           bus.stations.filter((stop) =>
//             stop.city.toLowerCase().includes(to.toLowerCase())
//           )
//         )
//         .map((stop) => [stop.city, stop])
//     ).values(),
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(
//       tripInfo({
//         departureCity: from,
//         destinationCity: to,
//         travelDate: travelDate.toISOString().split("T")[0],
//       })
//     );
//     navigate("/result/BusResult");
//   };

//   return (
//     <div className="bg-white shadow-lg rounded-xl p-6 max-w-5xl mx-auto">
//       <h2 className="text-2xl font-bold text-gray-800 mb-6">
//         Search Bus Tickets
//       </h2>
//       <form onSubmit={handleSubmit}>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {/* Departure City */}
//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               From
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FiMapPin className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 value={from}
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 onChange={(e) => handleFromChange(e.target.value)}
//                 onClick={() => setActiveInput("from")}
//                 placeholder="Departure city"
//               />
//             </div>
//             {activeInput === "from" && filteredBusStops.length > 0 && (
//               <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-auto">
//                 {filteredBusStops.map((station, index) => (
//                   <div
//                     key={index}
//                     onClick={() => {
//                       setFrom(station.city);
//                       setActiveInput(null);
//                     }}
//                     className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
//                   >
//                     <FiMapPin className="mr-2 text-blue-500" />
//                     <span className="font-medium">{station.city}</span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Arrival City */}
//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               To
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FiMapPin className="text-gray-400" />
//               </div>
//               <input
//                 type="text"
//                 value={to}
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 onChange={(e) => handleToChange(e.target.value)}
//                 onClick={() => setActiveInput("to")}
//                 placeholder="Destination city"
//               />
//             </div>
//             {activeInput === "to" && filteredDestinations.length > 0 && (
//               <div className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-auto">
//                 {filteredDestinations.map((station, index) => (
//                   <div
//                     key={index}
//                     onClick={() => {
//                       setTo(station.city);
//                       setActiveInput(null);
//                     }}
//                     className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
//                   >
//                     <FiMapPin className="mr-2 text-blue-500" />
//                     <span className="font-medium">{station.city}</span>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Date Picker */}
//           <div className="relative">
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Travel Date
//             </label>
//             <div className="relative">
//               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                 <FiCalendar className="text-gray-400" />
//               </div>
//               <DatePicker
//                 selected={travelDate}
//                 onChange={(date) => setTravelDate(date)}
//                 minDate={new Date()}
//                 className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                 dateFormat="dd MMM yyyy"
//               />
//             </div>
//           </div>

//           {/* Search Button */}
//           <div className="flex items-end">
//             <button
//               type="submit"
//               className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
//             >
//               <FiSearch className="mr-2" />
//               Search Buses
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default BusHomeSearch;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FiSearch, FiCalendar, FiMapPin, FiRepeat } from "react-icons/fi";
import { tripInfo } from "../../store/slices/userTransport/busUserSlice";
import { getAllBuses } from "../../api/services/transport/busApi";
import { motion, AnimatePresence } from "framer-motion";

const BusHomeSearch = () => {
  const [from, setFrom] = useState("Kannur");
  const [to, setTo] = useState("Mukkam");
  const [travelDate, setTravelDate] = useState(new Date());
  const [inpSearch, setInpSearch] = useState([]);
  const [activeInput, setActiveInput] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Debounce function for performance optimization
  // const debounce = (func, delay) => {
  //   let timeout;
  //   return (...args) => {
  //     clearTimeout(timeout);
  //     timeout = setTimeout(() => func(...args), delay);
  //   };
  // };

  // const handleFromChange = debounce((value) => setFrom(value), 300);
  // const handleToChange = debounce((value) => setTo(value), 300);

  // Swap departure and destination cities
  const handleSwapCities = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  useEffect(() => {
    const fetchAllBuses = async () => {
      try {
        const data = await getAllBuses();
        setInpSearch(data);
      } catch (error) {
        console.error("Error fetching buses");
      }
    };

    fetchAllBuses();
  }, []);

  const filteredBusStops = [
    ...new Map(
      inpSearch
        .flatMap((bus) =>
          bus.stations.filter((stop) =>
            stop.city.toLowerCase().includes(from.toLowerCase())
          )
        )
        .map((stop) => [stop.city, stop])
    ).values(),
  ];

  const filteredDestinations = [
    ...new Map(
      inpSearch
        .flatMap((bus) =>
          bus.stations.filter((stop) =>
            stop.city.toLowerCase().includes(to.toLowerCase())
          )
        )
        .map((stop) => [stop.city, stop])
    ).values(),
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      tripInfo({
        departureCity: from,
        destinationCity: to,
        travelDate: travelDate.toISOString().split("T")[0],
      })
    );
    navigate("/result/BusResult");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="w-full"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Departure & Arrival Cities */}
          <div className="relative flex-grow md:w-2/5 flex gap-2">
            <div className="relative flex-grow">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                From
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMapPin className="text-teal-500" />
                </div>
                <input
                  type="text"
                  value={from}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  // onChange={(e) => handleFromChange(e.target.value)}
                  onChange={(e) => setFrom(e.target.value)}
                  onClick={() => setActiveInput("from")}
                  placeholder="Departure city"
                />
              </div>
              <AnimatePresence>
                {activeInput === "from" && filteredBusStops.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-auto"
                  >
                    {filteredBusStops.map((station, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setFrom(station.city);
                          setActiveInput(null);
                        }}
                        className="px-4 py-3 hover:bg-teal-50 cursor-pointer flex items-center"
                      >
                        <FiMapPin className="mr-2 text-teal-500" />
                        <span className="font-medium">{station.city}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Swap button */}
            <div className="flex items-end mb-1">
              <button
                type="button"
                onClick={handleSwapCities}
                className="bg-gray-100 hover:bg-gray-200 p-3 rounded-lg text-gray-600 transition-colors flex-shrink-0"
              >
                <FiRepeat />
              </button>
            </div>

            <div className="relative flex-grow">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                To
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMapPin className="text-teal-500" />
                </div>
                <input
                  type="text"
                  value={to}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  // onChange={(e) => handleToChange(e.target.value)}
                  onChange={(e) => setTo(e.target.value)}
                  onClick={() => setActiveInput("to")}
                  placeholder="Destination city"
                />
              </div>
              <AnimatePresence>
                {activeInput === "to" && filteredDestinations.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute z-10 mt-1 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-auto"
                  >
                    {filteredDestinations.map((station, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setTo(station.city);
                          setActiveInput(null);
                        }}
                        className="px-4 py-3 hover:bg-teal-50 cursor-pointer flex items-center"
                      >
                        <FiMapPin className="mr-2 text-teal-500" />
                        <span className="font-medium">{station.city}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Date Picker */}
          <div className="md:w-1/5">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Travel Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiCalendar className="text-teal-500" />
              </div>
              <DatePicker
                selected={travelDate}
                onChange={(date) => setTravelDate(date)}
                minDate={new Date()}
                className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                dateFormat="dd MMM yyyy"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="md:w-1/5 flex items-end">
            <button
              type="submit"
              className="w-full bg-teal-500 hover:bg-teal-600 text-white font-medium py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
            >
              <FiSearch className="mr-2" />
              Find Buses
            </button>
          </div>
        </div>
      </form>

      {/* Travel Tips */}
      <div className="mt-6 bg-teal-50 rounded-lg p-4 flex items-start">
        <div className="bg-teal-100 rounded-full p-2 mr-3">
          <FiCalendar className="text-teal-600" />
        </div>
        <div>
          <h4 className="font-medium text-gray-800">Travel Tip</h4>
          <p className="text-sm text-gray-600">
            Book 3-4 days in advance for best prices and seat availability.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default BusHomeSearch;
