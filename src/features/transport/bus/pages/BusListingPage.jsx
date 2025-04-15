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
  FiArrowRight,
  FiX,
} from "react-icons/fi";
import BusLoading from "../../../../components/BusLoading";

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

  const skeletonLoader = Array.from({ length: 5 }).map((_, index) => (
    <div
      key={index}
      className="p-4 bg-white rounded-lg shadow animate-pulse space-y-4"
    >
      <div className="h-6 bg-gray-300 rounded w-1/3"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2"></div>
    </div>
  ));

  // if (mapLoading || busLoading) return <Loading />;
  if (mapLoading || busLoading) return <Loading />;

  // if (mapLoading || busLoading) {
  //   return (
  //     <div className="min-h-screen bg-gray-50 p-4">
  //       <div className="space-y-4">
  //         <Loading />
  //       </div>
  //       {/* <div className="space-y-4">{skeletonLoader}</div> */}
  //     </div>
  //   );
  // }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-white p-4"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white rounded-xl shadow-md p-6 text-center"
        >
          <FiAlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Oops! Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Try Again
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50">
      {/* Header with search */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-md"
      >
        <div className="max-w-7xl mx-auto">
          <BusSearch from={from} to={to} />
        </div>
      </motion.div>

      {/* Route info bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-2 mb-2 sm:mb-0">
            <FiMapPin className="text-blue-600" />
            <span className="font-medium">{from}</span>
            <motion.div
              animate={{ x: [-5, 5, -5] }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "linear",
              }}
            >
              <FiArrowRight className="text-gray-400 mx-1" />
            </motion.div>
            <FiMapPin className="text-red-600" />
            <span className="font-medium">{to}</span>
          </div>

          <div className="flex space-x-4">
            {distance && (
              <div className="flex items-center text-sm text-gray-600">
                <FiMapPin className="mr-1" />
                {distance} km
              </div>
            )}
            {duration && (
              <div className="flex items-center text-sm text-gray-600">
                <FiClock className="mr-1" />~{duration}
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Mobile filter toggle */}
      <div className="lg:hidden bg-white shadow-sm sticky top-0 z-20">
        <motion.button
          whileTap={{ scale: 0.98 }}
          onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          className="w-full py-3 px-4 flex items-center justify-between text-blue-600 font-medium"
        >
          <div className="flex items-center">
            <FiFilter className="mr-2" />
            Filters & Sort
          </div>
          <span className="text-sm bg-blue-100 px-2 py-1 rounded-full">
            {buses.length} buses
          </span>
        </motion.button>
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
            transition={{ type: "spring", damping: 30 }}
            className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white z-40 shadow-2xl lg:hidden overflow-y-auto"
          >
            <div className="p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-800">Filters</h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              <BusFilter
                from={from}
                to={to}
                originalBuses={originalBuses}
                setBuses={setBuses}
                busData={buses}
              />
              <div className="mt-4 pt-4 border-t border-gray-100">
                <BusSort
                  originalBuses={originalBuses}
                  setBuses={setBuses}
                  buses={buses}
                />
              </div>
              <div className="mt-6">
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium"
                >
                  Apply Filters
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters - Desktop */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className={`lg:block w-full lg:w-72 flex-shrink-0 ${
              mobileFiltersOpen ? "block" : "hidden"
            }`}
          >
            <div className="bg-white rounded-xl shadow-md p-4 sticky top-4">
              <BusFilter
                from={from}
                to={to}
                originalBuses={originalBuses}
                setBuses={setBuses}
                busData={buses}
              />
              <div className="mt-4 pt-4 border-t border-gray-100">
                <BusSort
                  originalBuses={originalBuses}
                  setBuses={setBuses}
                  buses={buses}
                />
              </div>
            </div>
          </motion.div>

          {/* Bus listings */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-4 hidden lg:block"
            >
              {/* <div className="bg-white rounded-xl shadow-md p-4">
                <BusSort
                  originalBuses={originalBuses}
                  setBuses={setBuses}
                  buses={buses}
                />
              </div> */}
            </motion.div>

            {buses.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                {buses.map((bus, index) => (
                  <motion.div
                    key={bus._id || index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
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
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl shadow-md p-8 text-center"
              >
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  src="/empty-state.svg"
                  alt="No buses found"
                  className="w-48 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  No buses found
                </h3>
                <p className="text-gray-600 mb-4">
                  We couldn't find any buses matching your filters. Try
                  adjusting your search criteria.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setBuses(originalBuses);
                    setMobileFiltersOpen(true);
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Reset Filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusListingPage;

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
//   FiArrowRight,
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
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-white"
//       >
//         <Loading />
//         <motion.p
//           initial={{ y: 20, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//           className="mt-4 text-gray-600"
//         >
//           Finding the best buses for you...
//         </motion.p>
//       </motion.div>
//     );
//   }

//   if (error) {
//     return (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-white p-4"
//       >
//         <motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           className="max-w-md w-full bg-white rounded-xl shadow-md p-6 text-center"
//         >
//           <FiAlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
//           <h2 className="text-2xl font-bold text-gray-800 mb-2">
//             Oops! Something went wrong
//           </h2>
//           <p className="text-gray-600 mb-6">{error}</p>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             onClick={() => window.location.reload()}
//             className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             Try Again
//           </motion.button>
//         </motion.div>
//       </motion.div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header with search */}
//       <motion.div
//         initial={{ y: -50, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-md"
//       >
//         <div className="max-w-7xl mx-auto">
//           <BusSearch from={from} to={to} />
//         </div>
//       </motion.div>

//       {/* Route info bar */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.3 }}
//         className="bg-white shadow-sm"
//       >
//         <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between">
//           <div className="flex items-center space-x-2 mb-2 sm:mb-0">
//             <FiMapPin className="text-blue-600" />
//             <span className="font-medium">{from}</span>
//             <motion.div
//               animate={{ x: [-5, 5, -5] }}
//               transition={{
//                 repeat: Infinity,
//                 duration: 2,
//                 ease: "linear",
//               }}
//             >
//               <FiArrowRight className="text-gray-400 mx-1" />
//             </motion.div>
//             <FiMapPin className="text-red-600" />
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
//       </motion.div>

//       {/* Mobile filter toggle */}
//       <div className="lg:hidden bg-white shadow-sm sticky top-0 z-20">
//         <motion.button
//           whileTap={{ scale: 0.98 }}
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
//         </motion.button>
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
//             transition={{ type: "spring", damping: 30 }}
//             className="fixed inset-y-0 right-0 w-4/5 max-w-sm bg-white z-40 shadow-2xl lg:hidden overflow-y-auto"
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
//                 <motion.button
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setMobileFiltersOpen(false)}
//                   className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium"
//                 >
//                   Apply Filters
//                 </motion.button>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Main content */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Filters - Desktop */}
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ delay: 0.4 }}
//             className={`lg:block w-full lg:w-72 flex-shrink-0 ${
//               mobileFiltersOpen ? "block" : "hidden"
//             }`}
//           >
//             <div className="bg-white rounded-xl shadow-md p-4 sticky top-4">
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
//           </motion.div>

//           {/* Bus listings */}
//           <div className="flex-1">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.5 }}
//               className="mb-4 hidden lg:block"
//             >
//               <div className="bg-white rounded-xl shadow-md p-4">
//                 <BusSort
//                   originalBuses={originalBuses}
//                   setBuses={setBuses}
//                   buses={buses}
//                 />
//               </div>
//             </motion.div>

//             {buses.length > 0 ? (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 className="space-y-4"
//               >
//                 {buses.map((bus, index) => (
//                   <motion.div
//                     key={bus._id || index}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ delay: 0.1 * index }}
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
//               <motion.div
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 className="bg-white rounded-xl shadow-md p-8 text-center"
//               >
//                 <motion.img
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ type: "spring" }}
//                   src="/empty-state.svg"
//                   alt="No buses found"
//                   className="w-48 mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   No buses found
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   We couldn't find any buses matching your filters. Try
//                   adjusting your search criteria.
//                 </p>
//                 <motion.button
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => {
//                     setBuses(originalBuses);
//                     setMobileFiltersOpen(true);
//                   }}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//                 >
//                   Reset Filters
//                 </motion.button>
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusListingPage;

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
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
//   FiArrowRight,
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
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-white">
//         <Loading />
//         <p className="mt-4 text-gray-600">Finding the best buses for you...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-white p-4">
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
//       <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-md">
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
//             <FiArrowRight className="text-gray-400 mx-1" />
//             <FiMapPin className="text-red-600" />
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
//       <div className="lg:hidden bg-white shadow-sm sticky top-0 z-10">
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

//       {/* Main content */}
//       <div className="max-w-7xl mx-auto px-4 py-6">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Filters - Desktop */}
//           <div
//             className={`lg:block w-full lg:w-72 flex-shrink-0 ${
//               mobileFiltersOpen ? "block" : "hidden"
//             }`}
//           >
//             <div className="bg-white rounded-xl shadow-md p-4 sticky top-4">
//               <div className="mb-4 flex justify-between items-center lg:hidden">
//                 <h3 className="text-lg font-semibold">Filters</h3>
//                 <button
//                   onClick={() => setMobileFiltersOpen(false)}
//                   className="text-blue-600 text-sm"
//                 >
//                   Close
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
//             </div>
//           </div>

//           {/* Bus listings */}
//           <div className="flex-1">
//             <div className="mb-4 hidden lg:block">
//               <div className="bg-white rounded-xl shadow-md p-4">
//                 <BusSort
//                   originalBuses={originalBuses}
//                   setBuses={setBuses}
//                   buses={buses}
//                 />
//               </div>
//             </div>

//             {buses.length > 0 ? (
//               <div className="space-y-4">
//                 {/* {buses.map((bus, index) => ( */}
//                 <BusCard
//                   // key={index}
//                   from={from}
//                   to={to}
//                   distance={distance}
//                   busData={buses}
//                 />
//                 {/* ))} */}
//               </div>
//             ) : (
//               <div className="bg-white rounded-xl shadow-md p-8 text-center">
//                 <img
//                   src="/empty-state.svg"
//                   alt="No buses found"
//                   className="w-48 mx-auto mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   No buses found
//                 </h3>
//                 <p className="text-gray-600 mb-4">
//                   We couldn't find any buses matching your filters. Try
//                   adjusting your search criteria.
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
