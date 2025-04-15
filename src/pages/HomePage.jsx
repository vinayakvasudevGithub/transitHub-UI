// import React, { useContext, useState, useEffect } from "react";
// import { Link, Route, Routes, useNavigate } from "react-router-dom";
// import { motion, AnimatePresence } from "framer-motion";
// import { UserContext } from "../../context/UserContext";
// import SideBar from "../components/common/SideBar";
// import BusHomeSearch from "../features/homesearch/BusHomeSearch";
// import FlightHomeSearch from "../features/homesearch/FlightHomeSearch";
// import TrainHomeSearch from "../features/homesearch/TrainHomeSearch";
// import {
//   FiCompass,
//   FiMapPin,
//   FiCalendar,
//   FiUser,
//   FiClock,
// } from "react-icons/fi";
// import { RiFlightTakeoffLine, RiBusLine, RiTrainLine } from "react-icons/ri";
// // import heroImage from "./assets/travel-hero.jpg"; // Replace with your high-quality image
// import parisImg from "../assets/paris/paris.jpg"; // Replace with your high-quality image

// const HomePage = () => {
//   const { user } = useContext(UserContext);
//   const [select, setSelect] = useState("");
//   const [isLoading, setIsLoading] = useState(true);
//   const navigate = useNavigate();

//   // Simulate loading
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 1200);
//     return () => clearTimeout(timer);
//   }, []);

//   if (isLoading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
//         <div className="flex flex-col items-center">
//           <motion.div
//             animate={{ rotate: 360 }}
//             transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
//             className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full"
//           />
//           <motion.p
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             className="mt-4 text-indigo-700 font-medium"
//           >
//             Preparing your travel experience...
//           </motion.p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100 overflow-hidden">
//       {/* Animated Background Elements */}
//       <div className="fixed inset-0 overflow-hidden pointer-events-none">
//         {[...Array(10)].map((_, i) => (
//           <motion.div
//             key={i}
//             initial={{
//               x: Math.random() * 100,
//               y: Math.random() * 100,
//               opacity: 0.1,
//             }}
//             animate={{
//               x: Math.random() * 100,
//               y: Math.random() * 100,
//               transition: {
//                 duration: 20 + Math.random() * 20,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               },
//             }}
//             className="absolute w-64 h-64 rounded-full bg-indigo-100 blur-xl"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Header */}
//       <motion.header
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.8, type: "spring" }}
//         className="flex justify-between items-center px-8 py-5 bg-white/90 backdrop-blur-md shadow-sm z-50"
//       >
//         <div className="flex items-center">
//           <FiCompass className="text-3xl text-indigo-600 mr-3" />
//           <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-400 bg-clip-text text-transparent tracking-tight">
//             transitHub
//           </h1>
//         </div>
//         <SideBar />
//       </motion.header>

//       {/* Hero Section */}
//       <main className="flex-grow flex flex-col items-center justify-center px-4 py-10 relative z-10">
//         <AnimatePresence>
//           {user && (
//             <motion.div
//               className="mb-8 text-center"
//               initial={{ opacity: 0, y: -20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4 }}
//             >
//               <h2 className="text-4xl font-bold text-gray-800">
//                 Welcome back, {user?.user?.name}{" "}
//                 <span className="wave">👋</span>
//               </h2>
//               <p className="text-lg text-gray-600 mt-3 max-w-lg">
//                 Where shall we take you today? Discover your next adventure.
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6 }}
//           className="flex gap-4 mb-12"
//         >
//           <motion.button
//             whileHover={{
//               y: -3,
//               boxShadow: "0 10px 25px -10px rgba(79, 70, 229, 0.4)",
//             }}
//             whileTap={{ scale: 0.97 }}
//             onClick={() => navigate("/mytrip")}
//             className="bg-gradient-to-r from-indigo-600 to-blue-500 hover:from-indigo-700 hover:to-blue-600 text-white px-8 py-4 rounded-xl text-sm font-medium transition-all shadow-lg flex items-center gap-2"
//           >
//             <FiMapPin className="text-lg" />
//             View My Journeys
//           </motion.button>
//           <motion.button
//             whileHover={{ y: -3 }}
//             whileTap={{ scale: 0.97 }}
//             onClick={() => navigate("/discover")}
//             className="bg-white border-2 border-indigo-100 hover:border-indigo-200 text-indigo-700 px-8 py-4 rounded-xl text-sm font-medium transition-all shadow-sm flex items-center gap-2"
//           >
//             <FiCompass className="text-lg" />
//             Discover Destinations
//           </motion.button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.8 }}
//           className="w-full max-w-5xl bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 space-y-10 relative overflow-hidden"
//         >
//           {/* Decorative elements */}
//           <div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-30"></div>
//           <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

//           <div className="relative z-10">
//             <h3 className="text-2xl font-semibold text-center text-gray-800 mb-2">
//               Begin Your Journey
//             </h3>
//             <p className="text-center text-gray-500 max-w-lg mx-auto">
//               Select your preferred travel mode and explore the world with
//               comfort
//             </p>

//             <div className="flex justify-center gap-8 mt-10 flex-wrap">
//               {[
//                 {
//                   label: "Flights",
//                   to: "/home/flight",
//                   type: "flight",
//                   icon: <RiFlightTakeoffLine className="text-3xl" />,
//                   color: "from-sky-500 to-blue-600",
//                 },
//                 {
//                   label: "Buses",
//                   to: "/home/Bus",
//                   type: "bus",
//                   icon: <RiBusLine className="text-3xl" />,
//                   color: "from-purple-500 to-indigo-600",
//                 },
//                 {
//                   label: "Trains",
//                   to: "/home/Train",
//                   type: "train",
//                   icon: <RiTrainLine className="text-3xl" />,
//                   color: "from-emerald-500 to-teal-600",
//                 },
//               ].map(({ label, to, type, icon, color }) => (
//                 <motion.div
//                   key={type}
//                   whileHover={{ y: -10 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                 >
//                   <Link
//                     to={to}
//                     onClick={() => setSelect(type)}
//                     className={`w-40 h-40 flex flex-col items-center justify-center rounded-2xl text-center p-6 transition-all cursor-pointer relative overflow-hidden group ${
//                       select === type
//                         ? `bg-gradient-to-br ${color} text-white shadow-lg`
//                         : "bg-white hover:bg-gray-50 border border-gray-100 shadow-md hover:shadow-lg"
//                     }`}
//                   >
//                     <div
//                       className={`mb-4 p-3 rounded-full ${
//                         select === type ? "bg-white/20" : "bg-indigo-50"
//                       }`}
//                     >
//                       {icon}
//                     </div>
//                     <span
//                       className={`text-lg font-semibold ${
//                         select === type ? "text-white" : "text-gray-700"
//                       }`}
//                     >
//                       {label}
//                     </span>
//                     {select === type && (
//                       <motion.div
//                         className="absolute inset-0 bg-white/10 pointer-events-none"
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         transition={{ duration: 0.3 }}
//                       />
//                     )}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Search Component */}
//             <div className="mt-12">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={select || "empty"}
//                   initial={{ opacity: 0, height: 0 }}
//                   animate={{ opacity: 1, height: "auto" }}
//                   exit={{ opacity: 0, height: 0 }}
//                   transition={{ duration: 0.3 }}
//                 >
//                   <Routes>
//                     <Route path="/flight" element={<FlightHomeSearch />} />
//                     <Route path="/Train" element={<TrainHomeSearch />} />
//                     <Route path="/Bus" element={<BusHomeSearch />} />
//                   </Routes>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </motion.div>

//         {/* Featured Destinations (Optional) */}
//         <motion.div
//           className="mt-16 w-full max-w-5xl"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1.2 }}
//         >
//           <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
//             Trending Destinations
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 name: "Bali, Indonesia",
//                 image:
//                   "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//               },
//               {
//                 name: "Paris,france",
//                 image:
//                   "https://plus.unsplash.com/premium_photo-1661919210043-fd847a58522d?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//               },
//               {
//                 name: "Tokyo, Japan",
//                 image:
//                   "https://plus.unsplash.com/premium_photo-1677829177642-30def98b0963?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//               },
//             ].map((destination, index) => (
//               <motion.div
//                 key={destination.name}
//                 whileHover={{ y: -10 }}
//                 className="relative rounded-2xl overflow-hidden shadow-lg h-48 group"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
//                 <img
//                   // src={`/assets/${destination.image}`}
//                   src={destination.image}
//                   // src="https://images.unsplash.com/photo-1595269560653-d00e473ed1bc"
//                   // src="https://images.unsplash.com/photo-1595269560653-d00e473ed1bc"
//                   // src={`../assets/paris/${destination.name}`}
//                   alt={destination.name}
//                   className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                 />

//                 <div className="absolute bottom-0 left-0 p-6 z-20">
//                   <h4 className="text-xl font-bold text-white">
//                     {destination.name}
//                   </h4>
//                   <p className="text-white/80 mt-1">Explore now</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </main>

//       {/* Footer */}
//       <motion.footer
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 1.4 }}
//         className="bg-white/90 backdrop-blur-md text-gray-500 text-center py-6 text-sm border-t border-gray-100 mt-16 relative z-10"
//       >
//         <div className="container mx-auto px-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-4 md:mb-0">
//               © {new Date().getFullYear()} transitHub. All rights reserved.
//             </div>
//             <div className="flex gap-6">
//               <a href="#" className="hover:text-indigo-600 transition-colors">
//                 Terms
//               </a>
//               <a href="#" className="hover:text-indigo-600 transition-colors">
//                 Privacy
//               </a>
//               <a href="#" className="hover:text-indigo-600 transition-colors">
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>
//       </motion.footer>
//     </div>
//   );
// };

// export default HomePage;

import React, { useContext, useState, useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { UserContext } from "../../context/UserContext";
import SideBar from "../components/common/SideBar";
import BusHomeSearch from "../features/homesearch/BusHomeSearch";
import FlightHomeSearch from "../features/homesearch/FlightHomeSearch";
import TrainHomeSearch from "../features/homesearch/TrainHomeSearch";
import {
  FiCompass,
  FiMapPin,
  FiCalendar,
  FiUser,
  FiClock,
  FiMenu,
} from "react-icons/fi";
import { RiFlightTakeoffLine, RiBusLine, RiTrainLine } from "react-icons/ri";

const HomePage = () => {
  const { user } = useContext(UserContext);
  const [select, setSelect] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-teal-50 to-cyan-100">
        <div className="flex flex-col items-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-16 h-16 border-4 border-teal-500 border-t-transparent rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-teal-700 font-medium"
          >
            Planning your journey...
          </motion.p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white shadow-md z-50"
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-2 rounded-lg mr-3">
                <FiCompass className="text-2xl text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">
                transit<span className="text-teal-500">Hub</span>
              </h1>
            </div>
            <SideBar />
          </div>
        </div>
      </motion.header>

      {/* Hero Section with Background Image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1488085061387-422e29b40080?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            filter: "brightness(0.7)",
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Explore the World
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-white/90 max-w-xl"
          >
            Discover new destinations and plan your journey with ease
          </motion.p>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-8 -mt-16 relative z-10">
        {/* User Welcome */}
        <AnimatePresence>
          {user && (
            <motion.div
              className="mb-6 bg-white p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <h2 className="text-xl font-semibold text-gray-800">
                Welcome back, {user?.user?.name}{" "}
                <span className="wave">👋</span>
              </h2>
              <p className="text-gray-600 mt-1">
                Ready for your next adventure?
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="bg-white rounded-xl shadow-xl overflow-hidden mb-10"
        >
          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-4 text-white">
            <h3 className="text-xl font-semibold">Find Your Way</h3>
            <p className="text-white/80 text-sm">
              Select your transportation method
            </p>
          </div>

          <div className="p-6">
            {/* Travel Mode Tabs */}
            <div className="flex overflow-x-auto gap-2 pb-4">
              {[
                {
                  label: "Flights",
                  to: "/home/flight",
                  type: "flight",
                  icon: <RiFlightTakeoffLine className="text-xl" />,
                },
                {
                  label: "Buses",
                  to: "/home/Bus",
                  type: "bus",
                  icon: <RiBusLine className="text-xl" />,
                },
                {
                  label: "Trains",
                  to: "/home/Train",
                  type: "train",
                  icon: <RiTrainLine className="text-xl" />,
                },
              ].map(({ label, to, type, icon }) => (
                <Link
                  key={type}
                  to={to}
                  onClick={() => setSelect(type)}
                  className={`flex items-center px-5 py-3 rounded-lg transition-all whitespace-nowrap ${
                    select === type
                      ? "bg-teal-500 text-white shadow-md"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                  }`}
                >
                  <span className="mr-2">{icon}</span>
                  <span className="font-medium">{label}</span>
                </Link>
              ))}
            </div>

            {/* Search Component */}
            <div className="mt-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={select || "empty"}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Routes>
                    <Route path="/flight" element={<FlightHomeSearch />} />
                    <Route path="/Train" element={<TrainHomeSearch />} />
                    <Route path="/Bus" element={<BusHomeSearch />} />
                  </Routes>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="grid grid-cols-2 gap-4 mb-10"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/mytrip")}
            className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-4 rounded-lg shadow-md flex items-center justify-center gap-3 transition-all border border-gray-100"
          >
            <FiMapPin className="text-teal-500 text-xl" />
            <span className="font-medium">My Journeys</span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => navigate("/discover")}
            className="bg-white hover:bg-gray-50 text-gray-800 px-6 py-4 rounded-lg shadow-md flex items-center justify-center gap-3 transition-all border border-gray-100"
          >
            <FiCompass className="text-teal-500 text-xl" />
            <span className="font-medium">Discover</span>
          </motion.button>
        </motion.div>

        {/* Featured Destinations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Popular Destinations
            </h3>
            <Link
              to="/discover"
              className="text-teal-500 hover:text-teal-600 text-sm font-medium flex items-center"
            >
              View all <FiMenu className="ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Bali",
                country: "Indonesia",
                tag: "Beach Paradise",
                image:
                  "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
              },
              {
                name: "Paris",
                country: "France",
                tag: "City of Love",
                image:
                  "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
              },
              {
                name: "Tokyo",
                country: "Japan",
                tag: "Urban Adventure",
                image:
                  "https://images.unsplash.com/photo-1505069446780-fbb25875c590",
              },
            ].map((destination) => (
              <motion.div
                key={destination.name}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl overflow-hidden shadow-md h-64 group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent/20 z-10"></div>
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 p-4 z-20 w-full">
                  <div className="bg-teal-500/20 text-white text-xs font-medium py-1 px-2 rounded-full inline-block mb-2 backdrop-blur-sm">
                    {destination.tag}
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    {destination.name}
                  </h4>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-white/80 text-sm">
                      {destination.country}
                    </p>
                    <button className="text-white bg-white/20 hover:bg-white/30 backdrop-blur-sm p-1 rounded-full">
                      <FiMapPin size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-1 rounded-md mr-2">
                <FiCompass className="text-sm text-white" />
              </div>
              <span className="text-gray-600 text-sm">
                © {new Date().getFullYear()} transitHub
              </span>
            </div>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-500 hover:text-teal-500 text-sm transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-teal-500 text-sm transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-teal-500 text-sm transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
