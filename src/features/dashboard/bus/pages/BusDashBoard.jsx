// // // import React, { useEffect, useState } from "react";
// // // import { FiUsers, FiDollarSign, FiCalendar, FiClock } from "react-icons/fi";
// // // import DirectionsBus from "@mui/icons-material/DirectionsBus";
// // // import BusUsers from "./BusUsers";
// // // import Navbar from "../components/Navbar";
// // // import Sidebar from "../components/Sidebar";
// // // import { Routes, Route } from "react-router-dom";
// // // import BusStatus from "./BusStatus";
// // // import axios from "axios";
// // // import Loading from "../../../../components/Loading";
// // // import { motion } from "framer-motion";

// // // const BusDashBoard = () => {
// // //   const [sidebarOpen, setSidebarOpen] = useState(false);
// // //   const [profile, setProfile] = useState("");

// // //   useEffect(() => {
// // //     const fetchProfile = async () => {
// // //       try {
// // //         const res = await axios.get("http://localhost:2001/auth/profile", {
// // //           withCredentials: true,
// // //         });
// // //         setProfile(res.data);
// // //       } catch (error) {
// // //         console.error("Error fetching profile:", error);
// // //       }
// // //     };
// // //     fetchProfile();
// // //   }, []);

// // //   if (!profile) return <Loading />;

// // //   const { buses, busTickets } = profile;

// // //   const fleetData = [
// // //     { id: "BUS-001", route: "City A → City B", status: "active", seats: 45 },
// // //     { id: "BUS-002", route: "City A → City C", status: "active", seats: 52 },
// // //     {
// // //       id: "BUS-003",
// // //       route: "City B → City D",
// // //       status: "maintenance",
// // //       seats: 45,
// // //     },
// // //     { id: "BUS-004", route: "City C → City D", status: "inactive", seats: 52 },
// // //   ];

// // //   const bookingsData = [
// // //     {
// // //       id: "BK1001",
// // //       busId: "BUS-001",
// // //       date: "2023-06-15",
// // //       seats: 42,
// // //       revenue: 1890,
// // //       status: "completed",
// // //     },
// // //     {
// // //       id: "BK1002",
// // //       busId: "BUS-001",
// // //       date: "2023-06-16",
// // //       seats: 38,
// // //       revenue: 1710,
// // //       status: "completed",
// // //     },
// // //     {
// // //       id: "BK1003",
// // //       busId: "BUS-002",
// // //       date: "2023-06-15",
// // //       seats: 45,
// // //       revenue: 2025,
// // //       status: "completed",
// // //     },
// // //     {
// // //       id: "BK1004",
// // //       busId: "BUS-001",
// // //       date: "2023-06-17",
// // //       seats: 40,
// // //       revenue: 1800,
// // //       status: "upcoming",
// // //     },
// // //     {
// // //       id: "BK1005",
// // //       busId: "BUS-002",
// // //       date: "2023-06-17",
// // //       seats: 32,
// // //       revenue: 1440,
// // //       status: "upcoming",
// // //     },
// // //   ];

// // //   const calculateStats = () => {
// // //     const revenue = busTickets
// // //       .flatMap((ticket) => ticket.busdetails.map((details) => details.price))
// // //       .reduce((sum, price) => sum + price, 0);

// // //     const completedBookings = bookingsData.filter(
// // //       (b) => b.status === "completed"
// // //     );
// // //     const upcomingBookings = bookingsData.filter(
// // //       (b) => b.status === "upcoming"
// // //     );
// // //     const activeBuses = fleetData.filter((b) => b.status === "active").length;

// // //     const avgOccupancy =
// // //       completedBookings.length > 0
// // //         ? (
// // //             (completedBookings.reduce((sum, b) => sum + b.seats, 0) /
// // //               (completedBookings.length * fleetData[0].seats)) *
// // //             100
// // //           ).toFixed(1)
// // //         : 0;

// // //     return {
// // //       totalBuses: buses?.length,
// // //       activeBuses,
// // //       totalBookings: busTickets.length,
// // //       completedTrips: completedBookings.length,
// // //       upcomingTrips: upcomingBookings.length,
// // //       revenue,
// // //       avgOccupancy,
// // //     };
// // //   };

// // //   const stats = calculateStats();

// // //   return (
// // //     // <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
// // //     <div className="min-h-screen  bg-blue-100 ">
// // //       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
// // //       <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

// // //       {/* <main className="max-w-7xl mx-auto px-4 md:px-8 py-8"> */}
// // //       <main className=" mx-auto px-4 md:px-8 py-8 ">
// // //         <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>

// // //         <motion.div
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.6, ease: "easeOut" }}
// // //           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-6"
// // //         >
// // //           <StatCard
// // //             icon={<DirectionsBus className="text-2xl" />}
// // //             title="Total Buses"
// // //             value={stats.totalBuses}
// // //             change="+1"
// // //             changeType="positive"
// // //           />
// // //           <StatCard
// // //             icon={<DirectionsBus className="text-2xl text-red-500" />}
// // //             title="Total Bookings"
// // //             value={stats.totalBookings}
// // //             change={`${Math.round(
// // //               (stats.activeBuses / stats.totalBuses) * 100
// // //             )}%`}
// // //             changeType="neutral"
// // //           />
// // //           <StatCard
// // //             icon={<FiCalendar className="text-2xl text-blue-500" />}
// // //             title="Completed Trips"
// // //             value={stats.completedTrips}
// // //             change="+12%"
// // //             changeType="positive"
// // //           />
// // //           <StatCard
// // //             icon={<FiClock className="text-2xl text-yellow-500" />}
// // //             title="Upcoming Trips"
// // //             value={stats.upcomingTrips}
// // //             change="+2"
// // //             changeType="neutral"
// // //           />
// // //           <StatCard
// // //             icon={<FiDollarSign className="text-2xl text-green-500" />}
// // //             title="Total Revenue"
// // //             value={`$${stats.revenue.toLocaleString()}`}
// // //             change="+8.5%"
// // //             changeType="positive"
// // //           />
// // //           <StatCard
// // //             icon={<FiUsers className="text-2xl text-purple-500" />}
// // //             title="Avg Occupancy"
// // //             value={`${stats.avgOccupancy}%`}
// // //             change="-2.3%"
// // //             changeType="negative"
// // //           />
// // //         </motion.div>

// // //         <div className="mt-10">
// // //           <Routes>
// // //             <Route
// // //               path="/"
// // //               element={
// // //                 <BusStatus
// // //                   busData={buses}
// // //                   fleetData={fleetData}
// // //                   bookingsData={bookingsData}
// // //                 />
// // //               }
// // //             />
// // //             <Route
// // //               path="/users"
// // //               element={
// // //                 <BusUsers
// // //                   busTickets={busTickets}
// // //                   fleetData={fleetData}
// // //                   bookingsData={bookingsData}
// // //                 />
// // //               }
// // //             />
// // //           </Routes>
// // //         </div>
// // //       </main>
// // //     </div>
// // //   );
// // // };

// // // const StatCard = ({ icon, title, value, change, changeType }) => {
// // //   const changeColor = {
// // //     positive: "text-green-600 bg-green-100",
// // //     negative: "text-red-600 bg-red-100",
// // //     neutral: "text-blue-600 bg-blue-100",
// // //   };

// // //   return (
// // //     <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-5 flex flex-col justify-between h-full">
// // //       <div className="flex items-center justify-between">
// // //         <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-3 rounded-xl text-gray-700 text-2xl shadow-inner">
// // //           {icon}
// // //         </div>
// // //         <span
// // //           className={`text-xs px-2 py-1 rounded-full font-medium ${changeColor[changeType]}`}
// // //         >
// // //           {change}
// // //         </span>
// // //       </div>
// // //       <div className="mt-6">
// // //         <h3 className="text-sm font-semibold text-gray-500 tracking-wide">
// // //           {title}
// // //         </h3>
// // //         <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default BusDashBoard;

// // import React, { useEffect, useState } from "react";
// // import {
// //   FiUsers,
// //   FiDollarSign,
// //   FiCalendar,
// //   FiClock,
// //   FiTrendingUp,
// //   FiAlertCircle,
// //   FiMap,
// //   FiBarChart2,
// //   FiInfo,
// // } from "react-icons/fi";
// // import {
// //   DirectionsBus,
// //   Engineering,
// //   LocalAtm,
// //   EventAvailable,
// //   Person,
// // } from "@mui/icons-material";
// // import BusUsers from "./BusUsers";
// // import Navbar from "../components/Navbar";
// // import Sidebar from "../components/Sidebar";
// // import { Routes, Route } from "react-router-dom";
// // import BusStatus from "./BusStatus";
// // import axios from "axios";
// // import Loading from "../../../../components/Loading";
// // import { motion } from "framer-motion";
// // // import { Tooltip } from "@mui/material";
// // // import BusRevenueChart from "./BusRevenueChart";
// // // import BusOccupancyChart from "./BusOccupancyChart";

// // const BusDashBoard = () => {
// //   const [sidebarOpen, setSidebarOpen] = useState(false);
// //   const [profile, setProfile] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [timeRange, setTimeRange] = useState("week");

// //   useEffect(() => {
// //     const fetchProfile = async () => {
// //       try {
// //         setLoading(true);
// //         const res = await axios.get("http://localhost:2001/auth/profile", {
// //           withCredentials: true,
// //         });
// //         setProfile(res.data);
// //       } catch (error) {
// //         console.error("Error fetching profile:", error);
// //         setError("Failed to load dashboard data");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchProfile();
// //   }, []);

// //   if (loading) return <Loading />;
// //   if (error)
// //     return <div className="text-red-500 text-center mt-10">{error}</div>;
// //   if (!profile)
// //     return <div className="text-center mt-10">No data available</div>;

// //   const { buses = [], busTickets = [] } = profile;

// //   const calculateStats = () => {
// //     // Calculate total revenue from all tickets
// //     const totalRevenue = busTickets.reduce(
// //       (sum, ticket) => sum + (ticket.busdetails?.[0]?.price || 0),
// //       0
// //     );
// //     // FiInfo
// //     // Group tickets by bus
// //     const busStats = buses.map((bus) => {
// //       const busTicketsForBus = busTickets.filter(
// //         (ticket) => ticket.busdetails?.[0]?.busnumber === bus.busnumber
// //       );

// //       const revenue = busTicketsForBus.reduce(
// //         (sum, ticket) => sum + (ticket.busdetails?.[0]?.price || 0),
// //         0
// //       );

// //       const occupiedSeats = busTicketsForBus.length;
// //       const totalSeats = bus.seatdetails?.[0]?.totalseats || 0;
// //       const occupancyRate =
// //         totalSeats > 0 ? Math.round((occupiedSeats / totalSeats) * 100) : 0;

// //       return {
// //         busId: bus._id,
// //         busNumber: bus.busnumber,
// //         busName: bus.busname,
// //         revenue,
// //         occupiedSeats,
// //         totalSeats,
// //         occupancyRate,
// //       };
// //     });

// //     // Calculate overall stats
// //     const totalSeats = buses.reduce(
// //       (sum, bus) => sum + (bus.seatdetails?.[0]?.totalseats || 0),
// //       0
// //     );

// //     const occupiedSeats = busTickets.length;
// //     const overallOccupancyRate =
// //       totalSeats > 0 ? Math.round((occupiedSeats / totalSeats) * 100) : 0;

// //     // Calculate recent activity (last 7 days)
// //     const oneWeekAgo = new Date();
// //     oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

// //     const recentTickets = busTickets.filter((ticket) => {
// //       const ticketDate = new Date(ticket.createdAt);
// //       return ticketDate > oneWeekAgo;
// //     });

// //     const recentRevenue = recentTickets.reduce(
// //       (sum, ticket) => sum + (ticket.busdetails?.[0]?.price || 0),
// //       0
// //     );

// //     const revenueChange =
// //       busTickets.length > 0
// //         ? ((recentRevenue / (totalRevenue - recentRevenue)) * 100).toFixed(1)
// //         : 0;

// //     return {
// //       totalBuses: buses.length,
// //       activeBuses: buses.length, // Assuming all are active in this simplified version
// //       totalBookings: busTickets.length,
// //       totalRevenue,
// //       recentRevenue,
// //       revenueChange,
// //       overallOccupancyRate,
// //       busStats,
// //       recentTickets: recentTickets.length,
// //     };
// //   };

// //   const stats = calculateStats();

// //   // Prepare data for charts
// //   const prepareChartData = () => {
// //     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// //     const today = new Date();

// //     const dailyData = days.map((day, index) => {
// //       const date = new Date(today);
// //       date.setDate(today.getDate() - (6 - index));

// //       const dayTickets = busTickets.filter((ticket) => {
// //         const ticketDate = new Date(ticket.createdAt);
// //         return (
// //           ticketDate.getDate() === date.getDate() &&
// //           ticketDate.getMonth() === date.getMonth() &&
// //           ticketDate.getFullYear() === date.getFullYear()
// //         );
// //       });

// //       const revenue = dayTickets.reduce(
// //         (sum, ticket) => sum + (ticket.busdetails?.[0]?.price || 0),
// //         0
// //       );

// //       return {
// //         day,
// //         revenue,
// //         bookings: dayTickets.length,
// //       };
// //     });

// //     return dailyData;
// //   };

// //   const chartData = prepareChartData();

// //   return (
// //     <div className="min-h-screen bg-gray-50">
// //       <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
// //       <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

// //       <main className="mx-auto px-4 md:px-6 py-6 lg:px-8 max-w-7xl">
// //         <div className="flex justify-between items-center mb-6">
// //           <h1 className="text-2xl font-bold text-gray-800">Bus Dashboard</h1>
// //           <div className="flex space-x-2">
// //             <button
// //               onClick={() => setTimeRange("week")}
// //               className={`px-3 py-1 text-sm rounded-md ${
// //                 timeRange === "week"
// //                   ? "bg-blue-600 text-white"
// //                   : "bg-white text-gray-700"
// //               }`}
// //             >
// //               Week
// //             </button>
// //             <button
// //               onClick={() => setTimeRange("month")}
// //               className={`px-3 py-1 text-sm rounded-md ${
// //                 timeRange === "month"
// //                   ? "bg-blue-600 text-white"
// //                   : "bg-white text-gray-700"
// //               }`}
// //             >
// //               Month
// //             </button>
// //             <button
// //               onClick={() => setTimeRange("year")}
// //               className={`px-3 py-1 text-sm rounded-md ${
// //                 timeRange === "year"
// //                   ? "bg-blue-600 text-white"
// //                   : "bg-white text-gray-700"
// //               }`}
// //             >
// //               Year
// //             </button>
// //           </div>
// //         </div>

// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.6, ease: "easeOut" }}
// //           className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-8"
// //         >
// //           <StatCard
// //             icon={<DirectionsBus className="text-2xl text-blue-600" />}
// //             title="Total Buses"
// //             value={stats.totalBuses}
// //             description="Active in fleet"
// //             trend={stats.totalBuses > 0 ? "positive" : "neutral"}
// //           />
// //           <StatCard
// //             icon={<EventAvailable className="text-2xl text-green-600" />}
// //             title="Total Bookings"
// //             value={stats.totalBookings}
// //             description={`${stats.recentTickets} this week`}
// //             trend={stats.recentTickets > 0 ? "positive" : "neutral"}
// //           />
// //           <StatCard
// //             icon={<LocalAtm className="text-2xl text-purple-600" />}
// //             title="Total Revenue"
// //             value={`₹${stats.totalRevenue.toLocaleString()}`}
// //             description={`₹${stats.recentRevenue.toLocaleString()} this week`}
// //             trend={stats.revenueChange > 0 ? "positive" : "negative"}
// //             trendValue={`${stats.revenueChange}%`}
// //           />
// //           <StatCard
// //             icon={<FiBarChart2 className="text-2xl text-amber-600" />}
// //             title="Occupancy Rate"
// //             value={`${stats.overallOccupancyRate}%`}
// //             description="Average seat utilization"
// //             trend={stats.overallOccupancyRate > 50 ? "positive" : "negative"}
// //           />
// //         </motion.div>

// //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
// //           <div className="bg-white p-5 rounded-xl shadow">
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="font-semibold text-lg">Revenue Overview</h3>
// //               {/* <Tooltip title="Revenue generated from ticket sales"> */}
// //               <FiInfo className="text-gray-400" />
// //               {/* </Tooltip> */}
// //             </div>
// //             {/* <BusRevenueChart data={chartData} /> */}
// //           </div>
// //           <div className="bg-white p-5 rounded-xl shadow">
// //             <div className="flex justify-between items-center mb-4">
// //               <h3 className="font-semibold text-lg">Occupancy Rate</h3>
// //               {/* <Tooltip title="Seat utilization across all buses"> */}
// //               <FiInfo className="text-gray-400" />
// //               {/* </Tooltip> */}
// //             </div>
// //             {/* <BusOccupancyChart busStats={stats.busStats} /> */}
// //           </div>
// //         </div>

// //         <div className="mt-6">
// //           <Routes>
// //             <Route
// //               path="/"
// //               element={<BusStatus busData={buses} busTickets={busTickets} />}
// //             />
// //             <Route
// //               path="/users"
// //               element={<BusUsers busTickets={busTickets} buses={buses} />}
// //             />
// //           </Routes>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // const StatCard = ({ icon, title, value, description, trend, trendValue }) => {
// //   const trendColors = {
// //     positive: "text-green-600 bg-green-50",
// //     negative: "text-red-600 bg-red-50",
// //     neutral: "text-blue-600 bg-blue-50",
// //   };

// //   const trendIcons = {
// //     positive: <FiTrendingUp className="inline" />,
// //     negative: <FiTrendingUp className="inline transform rotate-180" />,
// //     neutral: <FiBarChart2 className="inline" />,
// //   };

// //   return (
// //     <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all p-5">
// //       <div className="flex items-center justify-between">
// //         <div className="p-3 rounded-lg bg-gray-50 text-gray-700">{icon}</div>
// //         {trend && (
// //           <span
// //             className={`text-xs px-2 py-1 rounded-full font-medium ${trendColors[trend]}`}
// //           >
// //             {trendIcons[trend]} {trendValue || ""}
// //           </span>
// //         )}
// //       </div>
// //       <div className="mt-4">
// //         <h3 className="text-sm font-medium text-gray-500">{title}</h3>
// //         <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
// //         {description && (
// //           <p className="text-xs text-gray-500 mt-2">{description}</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default BusDashBoard;

// import React, { useEffect, useState, useMemo } from "react";
// import {
//   FiUsers,
//   FiDollarSign,
//   FiCalendar,
//   FiClock,
//   FiTrendingUp,
//   FiTrendingDown,
// } from "react-icons/fi";
// import DirectionsBus from "@mui/icons-material/DirectionsBus";
// import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
// import { Routes, Route, NavLink, useLocation } from "react-router-dom";
// import axios from "axios";
// import { motion } from "framer-motion";

// // Components
// import BusUsers from "./BusUsers";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
// import BusStatus from "./BusStatus";
// import Loading from "../../../../components/Loading";

// const BusDashBoard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const [profile, setProfile] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const location = useLocation();

//   useEffect(() => {
//     const fetchProfile = async () => {
//       setIsLoading(true);
//       try {
//         const res = await axios.get("http://localhost:2001/auth/profile", {
//           withCredentials: true,
//         });
//         setProfile(res.data);
//         setError(null);
//       } catch (error) {
//         console.error("Error fetching profile:", error);
//         setError("Failed to load dashboard data. Please try again later.");
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProfile();
//   }, []);

//   const fleetData = useMemo(
//     () => [
//       { id: "BUS-001", route: "City A → City B", status: "active", seats: 45 },
//       { id: "BUS-002", route: "City A → City C", status: "active", seats: 52 },
//       {
//         id: "BUS-003",
//         route: "City B → City D",
//         status: "maintenance",
//         seats: 45,
//       },
//       {
//         id: "BUS-004",
//         route: "City C → City D",
//         status: "inactive",
//         seats: 52,
//       },
//     ],
//     []
//   );

//   const bookingsData = useMemo(
//     () => [
//       {
//         id: "BK1001",
//         busId: "BUS-001",
//         date: "2023-06-15",
//         seats: 42,
//         revenue: 1890,
//         status: "completed",
//       },
//       {
//         id: "BK1002",
//         busId: "BUS-001",
//         date: "2023-06-16",
//         seats: 38,
//         revenue: 1710,
//         status: "completed",
//       },
//       {
//         id: "BK1003",
//         busId: "BUS-002",
//         date: "2023-06-15",
//         seats: 45,
//         revenue: 2025,
//         status: "completed",
//       },
//       {
//         id: "BK1004",
//         busId: "BUS-001",
//         date: "2023-06-17",
//         seats: 40,
//         revenue: 1800,
//         status: "upcoming",
//       },
//       {
//         id: "BK1005",
//         busId: "BUS-002",
//         date: "2023-06-17",
//         seats: 32,
//         revenue: 1440,
//         status: "upcoming",
//       },
//     ],
//     []
//   );

//   const stats = useMemo(() => {
//     if (!profile || !profile.buses || !profile.busTickets) {
//       return {
//         totalBuses: 0,
//         activeBuses: 0,
//         totalBookings: 0,
//         completedTrips: 0,
//         upcomingTrips: 0,
//         revenue: 0,
//         avgOccupancy: 0,
//         totalSeats: 0,
//         bookedSeats: 0,
//       };
//     }

//     const { buses, busTickets } = profile;

//     // Calculate total revenue from tickets
//     const revenue = busTickets
//       .flatMap((ticket) => ticket.busdetails.map((details) => details.price))
//       .reduce((sum, price) => sum + price, 0);

//     // Calculate active buses
//     // const activeBuses = fleetData.filter((b) => b.status === "active").length;

//     // Calculate trips
//     // const completedBookings = bookingsData.filter(
//     //   (b) => b.status === "completed"
//     // );
//     // const upcomingBookings = bookingsData.filter(
//     //   (b) => b.status === "upcoming"
//     // );

//     // Calculate total seats and booked seats for occupancy
//     const totalSeats = buses.reduce((sum, bus) => {
//       return sum + (bus.seatdetails[0]?.totalseats || 0);
//     }, 0);

//     const bookedSeats = busTickets.length;

//     // Calculate average occupancy
//     const avgOccupancy =
//       totalSeats > 0 ? ((bookedSeats / totalSeats) * 100).toFixed(1) : 0;

//     return {
//       totalBuses: buses.length,
//       // activeBuses,
//       totalBookings: busTickets.length,
//       // completedTrips: completedBookings.length,
//       // upcomingTrips: upcomingBookings.length,
//       revenue,
//       avgOccupancy,
//       totalSeats,
//       bookedSeats,
//     };
//   }, [profile]);
//   // }, [profile, fleetData, bookingsData]);

//   if (isLoading) return <Loading />;
//   if (error)
//     return (
//       <div className="flex justify-center items-center h-screen bg-red-50 text-red-600 p-4">
//         {error}
//       </div>
//     );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
//       {/* <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}
//       <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//       {/* <main className="lg:ml-64 px-4 md:px-8 py-8"> */}
//       <main className=" px-4 md:px-8 py-8">
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold text-gray-800">Bus Dashboard</h1>
//           <p className="text-gray-600 mt-1">
//             Manage your fleet, track bookings, and monitor performance
//           </p>
//         </div>

//         {/* Navigation Tabs */}
//         <div className="mb-6 flex border-b border-gray-200">
//           <NavLink
//             to="/dashboard"
//             end
//             className={({ isActive }) =>
//               `px-4 py-2 mr-2 font-medium text-sm transition-colors ${
//                 isActive
//                   ? "text-blue-600 border-b-2 border-blue-600"
//                   : "text-gray-600 hover:text-blue-600"
//               }`
//             }
//           >
//             Overview
//           </NavLink>
//           <NavLink
//             to="/dashboard/users"
//             className={({ isActive }) =>
//               `px-4 py-2 mr-2 font-medium text-sm transition-colors ${
//                 isActive
//                   ? "text-blue-600 border-b-2 border-blue-600"
//                   : "text-gray-600 hover:text-blue-600"
//               }`
//             }
//           >
//             Users & Bookings
//           </NavLink>
//         </div>

//         {location.pathname === "/dashboard" && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8"
//           >
//             <StatCard
//               icon={<DirectionsBus className="text-2xl" />}
//               title="Fleet Size"
//               value={stats.totalBuses}
//               change={"+1"}
//               changeType="positive"
//               description="Total buses in fleet"
//             />
//             <StatCard
//               icon={<FiUsers className="text-2xl" />}
//               title="Bookings"
//               value={stats.totalBookings}
//               change={"+2"}
//               changeType="positive"
//               description="Total ticket bookings"
//             />
//             <StatCard
//               icon={<FiDollarSign className="text-2xl" />}
//               title="Revenue"
//               value={`$${stats.revenue.toLocaleString()}`}
//               change={"+8.5%"}
//               changeType="positive"
//               description="Total revenue generated"
//             />
//             <StatCard
//               icon={<AirlineSeatReclineNormalIcon className="text-2xl" />}
//               title="Occupancy"
//               value={`${stats.avgOccupancy}%`}
//               change={stats.avgOccupancy > 80 ? "+5.2%" : "-2.3%"}
//               changeType={stats.avgOccupancy > 80 ? "positive" : "negative"}
//               description={`${stats.bookedSeats}/${stats.totalSeats} seats booked`}
//             />
//           </motion.div>
//         )}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//         >
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <BusStatus
//                   busData={profile.buses}
//                   fleetData={fleetData}
//                   bookingsData={bookingsData}
//                 />
//               }
//             />
//             <Route
//               path="/users"
//               element={
//                 <BusUsers
//                   busTickets={profile.busTickets}
//                   fleetData={fleetData}
//                   bookingsData={bookingsData}
//                 />
//               }
//             />
//           </Routes>
//         </motion.div>
//       </main>
//     </div>
//   );
// };

// const StatCard = ({ icon, title, value, change, changeType, description }) => {
//   const changeColor = {
//     positive: "text-green-600 bg-green-50",
//     negative: "text-red-600 bg-red-50",
//     neutral: "text-blue-600 bg-blue-50",
//   };

//   const TrendIcon = changeType === "positive" ? FiTrendingUp : FiTrendingDown;

//   return (
//     <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col h-full border border-gray-100">
//       <div className="flex items-center justify-between mb-3">
//         <div className="bg-blue-50 p-3 rounded-lg text-blue-600">{icon}</div>
//         <span
//           className={`text-xs px-2 py-1 rounded-full font-medium flex items-center ${changeColor[changeType]}`}
//         >
//           <TrendIcon className="mr-1 h-3 w-3" />
//           {change}
//         </span>
//       </div>
//       <h3 className="text-sm font-medium text-gray-500">{title}</h3>
//       <p className="text-2xl font-bold text-gray-900 mt-1 mb-2">{value}</p>
//       <p className="text-xs text-gray-500 mt-auto">{description}</p>
//     </div>
//   );
// };

// export default BusDashBoard;

import React, { useEffect, useState, useMemo } from "react";
import {
  FiUsers,
  FiDollarSign,
  FiCalendar,
  FiClock,
  FiTrendingUp,
  FiTrendingDown,
} from "react-icons/fi";
import DirectionsBus from "@mui/icons-material/DirectionsBus";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import { Routes, Route, NavLink, useLocation } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

// Components
import BusUsers from "./BusUsers";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import BusStatus from "./BusStatus";
import Loading from "../../../../components/Loading";

const BusDashBoard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchProfile = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get("http://localhost:2001/auth/profile", {
          withCredentials: true,
        });
        setProfile(res.data);
        setError(null);
      } catch (error) {
        console.error("Error fetching profile:", error);
        setError("Failed to load dashboard data. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const fleetData = useMemo(
    () => [
      { id: "BUS-001", route: "City A → City B", status: "active", seats: 45 },
      { id: "BUS-002", route: "City A → City C", status: "active", seats: 52 },
      {
        id: "BUS-003",
        route: "City B → City D",
        status: "maintenance",
        seats: 45,
      },
      {
        id: "BUS-004",
        route: "City C → City D",
        status: "inactive",
        seats: 52,
      },
    ],
    []
  );

  const bookingsData = useMemo(
    () => [
      {
        id: "BK1001",
        busId: "BUS-001",
        date: "2023-06-15",
        seats: 42,
        revenue: 1890,
        status: "completed",
      },
      {
        id: "BK1002",
        busId: "BUS-001",
        date: "2023-06-16",
        seats: 38,
        revenue: 1710,
        status: "completed",
      },
      {
        id: "BK1003",
        busId: "BUS-002",
        date: "2023-06-15",
        seats: 45,
        revenue: 2025,
        status: "completed",
      },
      {
        id: "BK1004",
        busId: "BUS-001",
        date: "2023-06-17",
        seats: 40,
        revenue: 1800,
        status: "upcoming",
      },
      {
        id: "BK1005",
        busId: "BUS-002",
        date: "2023-06-17",
        seats: 32,
        revenue: 1440,
        status: "upcoming",
      },
    ],
    []
  );

  const stats = useMemo(() => {
    if (!profile || !profile.buses || !profile.busTickets) {
      return {
        totalBuses: 0,
        activeBuses: 0,
        totalBookings: 0,
        completedTrips: 0,
        upcomingTrips: 0,
        revenue: 0,
        avgOccupancy: 0,
        totalSeats: 0,
        bookedSeats: 0,
      };
    }

    const { buses, busTickets } = profile;

    // Calculate total revenue from tickets
    const revenue = busTickets
      .flatMap((ticket) => ticket.busdetails.map((details) => details.price))
      .reduce((sum, price) => sum + price, 0);

    // Calculate total seats and booked seats for occupancy
    const totalSeats = buses.reduce((sum, bus) => {
      return sum + (bus.seatdetails[0]?.totalseats || 0);
    }, 0);

    const bookedSeats = busTickets.length;

    // Calculate average occupancy
    const avgOccupancy =
      totalSeats > 0 ? ((bookedSeats / totalSeats) * 100).toFixed(1) : 0;

    return {
      totalBuses: buses.length,
      totalBookings: busTickets.length,
      revenue,
      avgOccupancy,
      totalSeats,
      bookedSeats,
    };
  }, [profile]);

  if (isLoading) return <Loading />;
  if (error)
    return (
      <div className="flex justify-center items-center h-screen bg-white text-red-600 p-4">
        {error}
      </div>
    );

  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> */}

      <main className="px-4 md:px-8 py-8 max-w-7xl mx-auto">
        {/* Header with gradient accent */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <h1 className="text-3xl font-bold text-gray-800">Bus Dashboard</h1>
          <p className="text-gray-600 mt-1">
            Manage your fleet, track bookings, and monitor performance
          </p>
        </div>

        {/* Navigation Tabs with gradient indicator */}
        <div className="mb-8 flex border-b border-gray-200">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `px-4 py-3 mr-2 font-medium text-sm transition-colors relative ${
                isActive ? "text-teal-600" : "text-gray-600 hover:text-teal-600"
              }`
            }
          >
            Overview
            {location.pathname === "/dashboard" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"
                layoutId="navIndicator"
              />
            )}
          </NavLink>
          <NavLink
            to="/dashboard/users"
            className={({ isActive }) =>
              `px-4 py-3 mr-2 font-medium text-sm transition-colors relative ${
                isActive ? "text-teal-600" : "text-gray-600 hover:text-teal-600"
              }`
            }
          >
            Users & Bookings
            {location.pathname === "/dashboard/users" && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 to-cyan-500"
                layoutId="navIndicator"
              />
            )}
          </NavLink>
        </div>

        {location.pathname === "/dashboard" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
          >
            <StatCard
              icon={<DirectionsBus className="text-2xl text-teal-600" />}
              title="Fleet Size"
              value={stats.totalBuses}
              change={"+1"}
              changeType="positive"
              description="Total buses in fleet"
            />
            <StatCard
              icon={<FiUsers className="text-2xl text-cyan-600" />}
              title="Bookings"
              value={stats.totalBookings}
              change={"+2"}
              changeType="positive"
              description="Total ticket bookings"
            />
            <StatCard
              icon={<FiDollarSign className="text-2xl text-teal-500" />}
              title="Revenue"
              value={`₹${stats.revenue.toLocaleString()}`}
              change={"+8.5%"}
              changeType="positive"
              description="Total revenue generated"
            />
            <StatCard
              icon={
                <AirlineSeatReclineNormalIcon className="text-2xl text-cyan-500" />
              }
              title="Occupancy"
              value={`${stats.avgOccupancy}%`}
              change={stats.avgOccupancy > 80 ? "+5.2%" : "-2.3%"}
              changeType={stats.avgOccupancy > 80 ? "positive" : "negative"}
              description={`${stats.bookedSeats}/${stats.totalSeats} seats booked`}
            />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <BusStatus
                  busData={profile.buses}
                  fleetData={fleetData}
                  bookingsData={bookingsData}
                />
              }
            />
            <Route
              path="/users"
              element={
                <BusUsers
                  busTickets={profile.busTickets}
                  fleetData={fleetData}
                  bookingsData={bookingsData}
                />
              }
            />
          </Routes>
        </motion.div>
      </main>
    </div>
  );
};

const StatCard = ({ icon, title, value, change, changeType, description }) => {
  const changeColor = {
    positive: "text-green-600 bg-green-50",
    negative: "text-red-600 bg-red-50",
    neutral: "text-blue-600 bg-blue-50",
  };

  const TrendIcon = changeType === "positive" ? FiTrendingUp : FiTrendingDown;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5 flex flex-col h-full border border-gray-100">
      <div className="flex items-center justify-between mb-3">
        <div className="p-3 rounded-lg bg-gradient-to-br from-teal-50 to-cyan-50">
          {icon}
        </div>
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium flex items-center ${changeColor[changeType]}`}
        >
          <TrendIcon className="mr-1 h-3 w-3" />
          {change}
        </span>
      </div>
      <h3 className="text-sm font-medium text-gray-500">{title}</h3>
      <p className="text-2xl font-bold text-gray-900 mt-1 mb-2">{value}</p>
      <p className="text-xs text-gray-500 mt-auto">{description}</p>
    </div>
  );
};

export default BusDashBoard;
