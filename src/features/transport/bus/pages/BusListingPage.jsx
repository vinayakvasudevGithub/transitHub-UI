// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { busRouteMap } from "../../../../api/services/utilities/mapApi";
// import BusSearch from "../components/BusSearch";
// import BusFilter from "../components/BusFilter";
// import BusSort from "../components/BusSort";
// import BusCard from "../components/BusCard";
// import { searchBuses } from "../../../../api/services/transport/busApi";
// import Loading from "../../../../components/Loading";

// const BusListingPage = () => {
//   const searchKey = useSelector((state) => state.bus.BusList);
//   const from = searchKey[searchKey.length - 1].departureCity;
//   const to = searchKey[searchKey.length - 1].destinationCity;
//   const [buses, setBuses] = useState([]);
//   const [mapLoading, setMapLoading] = useState(true); // Loading for map data
//   const [busLoading, setBusLoading] = useState(true); // Loading for bus data
//   const [distance, setDistance] = useState();
//   const [originalBuses, setOriginalBuses] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMapData = async () => {
//       try {
//         setMapLoading(true);
//         const data = await busRouteMap(from, to);
//         const distanceText = data.rows[0].elements[0].distance.text;
//         if (distanceText) {
//           const numericDistance = parseFloat(
//             distanceText.replace(/[^0-9.]/g, "")
//           );
//           setDistance(numericDistance);
//         }
//       } catch (error) {
//         console.error("Error fetching map data:", error);
//         setError("Failed to load distance information");
//       } finally {
//         setMapLoading(false);
//       }
//     };

//     fetchMapData();
//   }, [from, to]);

//   useEffect(() => {
//     const fetchBuses = async () => {
//       try {
//         setBusLoading(true);
//         const data = await searchBuses(from, to);
//         setOriginalBuses(data);
//         setBuses(data);
//       } catch (error) {
//         console.error("Failed to fetch buses");
//         setError("Failed to load bus information");
//       } finally {
//         setBusLoading(false);
//       }
//     };
//     fetchBuses();
//   }, [from, to]);

//   // Show loading if either map or bus data is still loading
//   if (mapLoading || busLoading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <Loading />
//       </div>
//     );
//   }

//   // Show error message if there was an error
//   if (error) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
//           {error}
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-200 p-4 min-h-screen">
//       <div className="top-0 bg-gradient-to-b">
//         <div className="p-1">
//           <BusSearch from={from} to={to} />
//         </div>
//       </div>
//       <div className="grid lg:grid-cols-4 gap-3">
//         <div className="col-span-1 hidden lg:block p-1">
//           <BusFilter
//             from={from}
//             to={to}
//             originalBuses={originalBuses}
//             setBuses={setBuses}
//             busData={buses}
//           />
//         </div>
//         <div className="col-span-3">
//           <div className="p-1">
//             <BusSort
//               originalBuses={originalBuses}
//               setBuses={setBuses}
//               buses={buses}
//             />
//           </div>
//           <div>
//             <BusCard from={from} to={to} distance={distance} busData={buses} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusListingPage;

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { motion, AnimatePresence } from "framer-motion";
// import { busRouteMap } from "../../../../api/services/utilities/mapApi";
// import BusSearch from "../components/BusSearch";
// import BusFilter from "../components/BusFilter";
// import BusSort from "../components/BusSort";
// import BusCard from "../components/BusCard";
// import { searchBuses } from "../../../../api/services/transport/busApi";
// import Loading from "../../../../components/Loading";
// import {
//   FiAlertCircle,
//   FiMapPin,
//   FiClock,
//   FiFilter,
//   FiX,
// } from "react-icons/fi";

// const BusListingPage = () => {
//   const searchKey = useSelector((state) => state.bus.BusList);
//   const from = searchKey[searchKey.length - 1].departureCity;
//   const to = searchKey[searchKey.length - 1].destinationCity;
//   const [buses, setBuses] = useState([]);
//   const [mapLoading, setMapLoading] = useState(true);
//   const [busLoading, setBusLoading] = useState(true);
//   const [distance, setDistance] = useState();
//   const [duration, setDuration] = useState();
//   const [originalBuses, setOriginalBuses] = useState([]);
//   const [error, setError] = useState(null);
//   const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

//   useEffect(() => {
//     const fetchMapData = async () => {
//       try {
//         setMapLoading(true);
//         const data = await busRouteMap(from, to);
//         const distanceText = data.rows[0].elements[0].distance.text;
//         const durationText = data.rows[0].elements[0].duration.text;

//         if (distanceText) {
//           const numericDistance = parseFloat(
//             distanceText.replace(/[^0-9.]/g, "")
//           );
//           setDistance(numericDistance);
//         }
//         if (durationText) {
//           setDuration(durationText);
//         }
//       } catch (error) {
//         console.error("Error fetching map data:", error);
//         setError("Failed to load route information");
//       } finally {
//         setMapLoading(false);
//       }
//     };

//     fetchMapData();
//   }, [from, to]);

//   useEffect(() => {
//     const fetchBuses = async () => {
//       try {
//         setBusLoading(true);
//         const data = await searchBuses(from, to);
//         setOriginalBuses(data);
//         setBuses(data);
//       } catch (error) {
//         console.error("Failed to fetch buses");
//         setError("Failed to load bus information");
//       } finally {
//         setBusLoading(false);
//       }
//     };
//     fetchBuses();
//   }, [from, to]);

//   if (mapLoading || busLoading) {
//     return <Loading />;
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gray-50 p-4">
//         <div className="max-w-md w-full bg-white rounded-xl shadow-md p-6 text-center">
//           <FiAlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">
//             Oops! Something went wrong
//           </h2>
//           <p className="text-gray-600 mb-6">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Try Again
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header with search */}
//       <div className="bg-white p-4 shadow-sm">
//         <div className="max-w-7xl mx-auto">
//           <BusSearch from={from} to={to} />
//         </div>
//       </div>

//       {/* Route info bar */}
//       <div className="bg-white shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
//           <div className="flex items-center space-x-2 mb-2 sm:mb-0">
//             <FiMapPin className="text-blue-600" />
//             <span className="font-medium">{from}</span>
//             <FiMapPin className="text-red-600 ml-2" />
//             <span className="font-medium">{to}</span>
//           </div>

//           <div className="flex space-x-4">
//             {distance && (
//               <div className="flex items-center text-sm text-gray-600">
//                 <FiMapPin className="mr-1" />
//                 {distance} km
//               </div>
//             )}
//             {duration && (
//               <div className="flex items-center text-sm text-gray-600">
//                 <FiClock className="mr-1" />~{duration}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Mobile filter toggle */}
//       <div className="lg:hidden bg-white shadow-sm sticky top-0 z-20">
//         <button
//           onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
//           className="w-full py-3 px-4 flex items-center justify-between text-blue-600 font-medium"
//         >
//           <div className="flex items-center">
//             <FiFilter className="mr-2" />
//             Filters & Sort
//           </div>
//           <span className="text-sm bg-blue-100 px-2 py-1 rounded-full">
//             {buses.length} buses
//           </span>
//         </button>
//       </div>

//       {/* Mobile Filters Overlay */}
//       <AnimatePresence>
//         {mobileFiltersOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
//             onClick={() => setMobileFiltersOpen(false)}
//           />
//         )}
//       </AnimatePresence>

//       {/* Mobile Filters Sidebar */}
//       <AnimatePresence>
//         {mobileFiltersOpen && (
//           <motion.div
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ type: "tween", ease: "easeInOut" }}
//             className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white z-40 shadow-xl lg:hidden overflow-y-auto"
//           >
//             <div className="p-4">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-xl font-bold text-gray-800">Filters</h3>
//                 <button
//                   onClick={() => setMobileFiltersOpen(false)}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <FiX className="w-6 h-6" />
//                 </button>
//               </div>
//               <BusFilter
//                 from={from}
//                 to={to}
//                 originalBuses={originalBuses}
//                 setBuses={setBuses}
//                 busData={buses}
//               />
//               <div className="mt-4 pt-4 border-t border-gray-100">
//                 <BusSort
//                   originalBuses={originalBuses}
//                   setBuses={setBuses}
//                   buses={buses}
//                 />
//               </div>
//               <div className="mt-6">
//                 <button
//                   onClick={() => setMobileFiltersOpen(false)}
//                   className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
//                 >
//                   Apply Filters
//                 </button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Main content */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Filters - Desktop */}
//           <div className="lg:block w-full lg:w-72 flex-shrink-0 hidden">
//             <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
//               <BusFilter
//                 from={from}
//                 to={to}
//                 originalBuses={originalBuses}
//                 setBuses={setBuses}
//                 busData={buses}
//               />
//               <div className="mt-4 pt-4 border-t border-gray-100">
//                 <BusSort
//                   originalBuses={originalBuses}
//                   setBuses={setBuses}
//                   buses={buses}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Bus listings */}
//           <div className="flex-1">
//             {buses.length > 0 ? (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.3 }}
//                 className="space-y-4"
//               >
//                 {buses.map((bus, index) => (
//                   <motion.div
//                     key={bus._id || index}
//                     initial={{ y: 10, opacity: 0 }}
//                     animate={{ y: 0, opacity: 1 }}
//                     transition={{ delay: index * 0.05 }}
//                   >
//                     <BusCard
//                       from={from}
//                       to={to}
//                       distance={distance}
//                       busData={[bus]}
//                     />
//                   </motion.div>
//                 ))}
//               </motion.div>
//             ) : (
//               <div className="bg-white rounded-lg shadow-sm p-8 text-center">
//                 <img
//                   src="/empty-state.svg"
//                   alt="No buses found"
//                   className="w-48 mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   No buses found
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   We couldn't find any buses matching your filters.
//                 </p>
//                 <button
//                   onClick={() => {
//                     setBuses(originalBuses);
//                     setMobileFiltersOpen(true);
//                   }}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   Reset Filters
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusListingPage;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { busRouteMap } from "../../../../api/services/utilities/mapApi";
import BusSearch from "../components/BusSearch";
import BusFilter from "../components/BusFilter";
import BusSort from "../components/BusSort";
import BusCard from "../components/BusCard";
import { searchBuses } from "../../../../api/services/transport/busApi";
import Loading from "../../../../components/Loading";
import {
  FiAlertCircle,
  FiMapPin,
  FiClock,
  FiFilter,
  FiX,
  FiArrowRight,
  FiChevronDown,
  FiCheckCircle,
} from "react-icons/fi";

const BusListingPage = () => {
  const searchKey = useSelector((state) => state.bus.BusList);
  const from = searchKey[searchKey.length - 1].departureCity;
  const to = searchKey[searchKey.length - 1].destinationCity;
  const [buses, setBuses] = useState([]);
  const [mapLoading, setMapLoading] = useState(true);
  const [busLoading, setBusLoading] = useState(true);
  const [distance, setDistance] = useState();
  const [duration, setDuration] = useState();
  const [originalBuses, setOriginalBuses] = useState([]);
  const [error, setError] = useState(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [isFilterExpanded, setIsFilterExpanded] = useState(true);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        setMapLoading(true);
        const data = await busRouteMap(from, to);
        const distanceText = data.rows[0].elements[0].distance.text;
        const durationText = data.rows[0].elements[0].duration.text;

        if (distanceText) {
          const numericDistance = parseFloat(
            distanceText.replace(/[^0-9.]/g, "")
          );
          setDistance(numericDistance);
        }
        if (durationText) {
          setDuration(durationText);
        }
      } catch (error) {
        console.error("Error fetching map data:", error);
        setError("Failed to load route information");
      } finally {
        setMapLoading(false);
      }
    };

    fetchMapData();
  }, [from, to]);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        setBusLoading(true);
        const data = await searchBuses(from, to);
        setOriginalBuses(data);
        setBuses(data);
      } catch (error) {
        console.error("Failed to fetch buses");
        setError("Failed to load bus information");
      } finally {
        setBusLoading(false);
      }
    };
    fetchBuses();
  }, [from, to]);

  if (mapLoading || busLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-r from-teal-500 to-cyan-500 p-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <FiAlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-all shadow-md font-medium"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero header with search */}
      <div className="bg-gradient-to-r from-teal-500 to-cyan-500 pt-6 pb-8 px-4 shadow-md">
        <div className="max-w-7xl mx-auto">
          <BusSearch from={from} to={to} />
        </div>
      </div>

      {/* Route info bar */}
      <div className="bg-white shadow-md relative z-10 -mt-4 mx-4 rounded-xl">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <div className="flex items-center bg-teal-50 px-3 py-2 rounded-lg">
              <FiMapPin className="text-teal-600 mr-2" />
              <span className="font-medium text-gray-800">{from}</span>
            </div>
            <FiArrowRight className="text-cyan-500 mx-1" />
            <div className="flex items-center bg-cyan-50 px-3 py-2 rounded-lg">
              <FiMapPin className="text-cyan-600 mr-2" />
              <span className="font-medium text-gray-800">{to}</span>
            </div>
          </div>

          <div className="flex space-x-4">
            {distance && (
              <div className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                <FiMapPin className="mr-2 text-teal-500" />
                <span>{distance} km</span>
              </div>
            )}
            {duration && (
              <div className="flex items-center text-sm text-gray-600 bg-gray-100 px-3 py-2 rounded-lg">
                <FiClock className="mr-2 text-cyan-500" />
                <span>~{duration}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filter toggle */}
      <div className="lg:hidden sticky top-0 z-20 px-4 py-3">
        <button
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="w-full py-3 px-4 flex items-center justify-between bg-white rounded-lg shadow-md text-teal-600 font-medium"
        >
          <div className="flex items-center">
            <FiFilter className="mr-2" />
            Filters & Sort
          </div>
          <span className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
            {buses.length} buses
          </span>
        </button>
      </div>

      {/* Mobile Filters Overlay */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setMobileFiltersOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Filters Sidebar */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut" }}
            className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white z-40 shadow-xl lg:hidden overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-800">Filters</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="text-gray-500 hover:text-gray-700 bg-gray-100 p-2 rounded-full"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
              <BusFilter
                from={from}
                to={to}
                originalBuses={originalBuses}
                setBuses={setBuses}
                busData={buses}
              />
              <div className="mt-6 pt-6 border-t border-gray-100">
                <BusSort
                  originalBuses={originalBuses}
                  setBuses={setBuses}
                  buses={buses}
                />
              </div>
              <div className="mt-8 flex space-x-3">
                <button
                  onClick={() => {
                    setBuses(originalBuses);
                  }}
                  className="flex-1 py-3 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Reset
                </button>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="flex-1 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-md"
                >
                  Apply
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters - Desktop */}
          <div className="lg:block w-full lg:w-80 flex-shrink-0 hidden">
            <div className="bg-white rounded-xl shadow-md overflow-hidden sticky top-4">
              <div
                className="bg-gradient-to-r from-teal-500 to-cyan-500 px-6 py-4 text-white flex justify-between items-center cursor-pointer"
                onClick={() => setIsFilterExpanded(!isFilterExpanded)}
              >
                <h3 className="font-medium flex items-center">
                  <FiFilter className="mr-2" />
                  Filters & Sorting
                </h3>
                <FiChevronDown
                  className={`transition-transform ${
                    isFilterExpanded ? "rotate-180" : ""
                  }`}
                />
              </div>

              <AnimatePresence>
                {isFilterExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="p-6">
                      <BusFilter
                        from={from}
                        to={to}
                        originalBuses={originalBuses}
                        setBuses={setBuses}
                        busData={buses}
                      />
                      <div className="mt-6 pt-6 border-t border-gray-100">
                        <BusSort
                          originalBuses={originalBuses}
                          setBuses={setBuses}
                          buses={buses}
                        />
                      </div>

                      <div className="mt-6 flex space-x-3">
                        <button
                          onClick={() => setBuses(originalBuses)}
                          className="flex-1 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
                        >
                          Reset All
                        </button>
                        <button className="flex-1 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg font-medium hover:opacity-90 transition-all shadow-sm text-sm">
                          Apply Filters
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Bus listings */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-md p-4 mb-4 flex items-center justify-between">
              <h2 className="text-gray-800 font-medium">
                <span className="text-teal-600 font-bold">{buses.length}</span>{" "}
                buses available
              </h2>
              <div className="text-sm text-gray-500">
                {from} → {to} • {new Date().toLocaleDateString()}
              </div>
            </div>

            {buses.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                {buses.map((bus, index) => (
                  <motion.div
                    key={bus._id || index}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <BusCard
                      from={from}
                      to={to}
                      distance={distance}
                      busData={[bus]}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                  <FiAlertCircle className="w-12 h-12 text-gray-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  No buses found
                </h3>
                <p className="text-gray-600 mb-6">
                  We couldn't find any buses matching your filters.
                </p>
                <button
                  onClick={() => {
                    setBuses(originalBuses);
                    setMobileFiltersOpen(true);
                  }}
                  className="px-6 py-3 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:opacity-90 transition-all shadow-md"
                >
                  Reset Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusListingPage;
