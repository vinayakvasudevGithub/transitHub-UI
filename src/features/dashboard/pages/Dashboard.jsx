// import {
//   ArrowUpIcon,
//   ArrowDownIcon,
//   UserGroupIcon,
//   ShoppingCartIcon,
//   CurrencyDollarIcon,
// } from "@heroicons/react/24/outline";
// import StatsCard from "../components/StatsCard";
// import Chart from "../components/Chart";
// import DataTable from "../components/DataTable";
// import { useEffect, useState } from "react";
// import { bookedBuses } from "../../../api/services/transport/busApi";
// import axios from "axios";
// import { profile } from "../../../api/services/auth/authApi";

// const Dashboard = () => {
//   // const [bookedDetails, setBookedDetails] = useState([]);
//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const res = await bookedBuses();
//   //       setBookedDetails(res);
//   //     } catch (error) {}
//   //   };
//   //   fetchData();
//   // }, []);

//   const [admin, setAdmin] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await profile();
//         setAdmin(res);
//       } catch (error) {}
//     };
//     fetchData();
//   }, []);

//   const revenue =
//     admin?.busTickets
//       ?.flatMap((ticket) => ticket.busdetails.map((bus) => bus.price))
//       ?.reduce((sum, price) => sum + price, 0) || 0;

//   // const revenue = bookedDetails
//   //   .flatMap((ticket) => ticket.busdetails.map((bus) => bus.price))
//   //   .reduce((sum, price) => sum + price, 0);

//   const recentOrders = [
//     {
//       id: "#1234",
//       customer: "John Smith",
//       date: "2023-05-15",
//       amount: "$125.00",
//       status: "Delivered",
//     },
//     {
//       id: "#1235",
//       customer: "Sarah Johnson",
//       date: "2023-05-14",
//       amount: "$89.00",
//       status: "Processing",
//     },
//     {
//       id: "#1236",
//       customer: "Michael Brown",
//       date: "2023-05-14",
//       amount: "$235.00",
//       status: "Shipped",
//     },
//     {
//       id: "#1237",
//       customer: "Emily Davis",
//       date: "2023-05-13",
//       amount: "$56.00",
//       status: "Delivered",
//     },
//     {
//       id: "#1238",
//       customer: "Robert Wilson",
//       date: "2023-05-12",
//       amount: "$178.00",
//       status: "Processing",
//     },
//   ];

//   // console.log(bookedDetails.length);

//   return (
//     <div className="space-y-6">
//       <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         <StatsCard
//           title="Total Revenue"
//           value={revenue}
//           change="12"
//           trend="up"
//           icon={CurrencyDollarIcon}
//         />
//         <StatsCard
//           title="Total Bookings"
//           value={admin?.busTickets?.length}
//           change="8"
//           trend="up"
//           icon={ShoppingCartIcon}
//         />
//         <StatsCard
//           title="New Customers"
//           value="246"
//           change="4"
//           trend="up"
//           icon={UserGroupIcon}
//         />
//         <StatsCard
//           title="Return Rate"
//           value="3.2%"
//           change="0.5"
//           trend="down"
//           icon={ArrowDownIcon}
//         />
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-lg font-medium text-gray-900 mb-4">
//             Sales Overview
//           </h2>
//           <Chart type="line" />
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h2 className="text-lg font-medium text-gray-900 mb-4">
//             Revenue Sources
//           </h2>
//           <Chart type="bar" />
//         </div>
//       </div>

//       {/* Recent Orders */}
//       <div className="bg-white p-6 rounded-lg shadow">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-medium text-gray-900">Recent Orders</h2>
//           <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
//             View all
//           </button>
//         </div>

//         <DataTable data={recentOrders} />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import { useState } from "react";
import {
  FiUsers,
  FiUser,
  FiMapPin,
  FiCalendar,
  FiClock,
  FiCreditCard,
  FiSearch,
} from "react-icons/fi";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock user data
  const users = [
    {
      id: "USR001",
      name: "John Doe",
      phone: "+1 (555) 123-4567",
      email: "john@example.com",
      bookings: [
        {
          busId: "BUS-101",
          route: "New York → Boston",
          date: "2023-06-15",
          seat: "A4",
          status: "completed",
        },
        {
          busId: "BUS-101",
          route: "Boston → New York",
          date: "2023-06-20",
          seat: "B2",
          status: "upcoming",
        },
      ],
      loyaltyPoints: 450,
    },
    {
      id: "USR002",
      name: "Jane Smith",
      phone: "+1 (555) 987-6543",
      email: "jane@example.com",
      bookings: [
        {
          busId: "BUS-102",
          route: "Chicago → Detroit",
          date: "2023-06-18",
          seat: "C3",
          status: "completed",
        },
      ],
      loyaltyPoints: 120,
    },
  ];

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BusTrack Pro</h1>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">Admin Dashboard</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Passenger Tracking
            </h2>
            <p className="text-gray-600">
              Monitor user bookings and travel history
            </p>
          </div>
          <div className="relative mt-4 md:mt-0">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            icon={<FiUsers className="text-2xl" />}
            title="Total Passengers"
            value={users.length}
          />
          <StatCard
            icon={<FiUser className="text-2xl text-green-500" />}
            title="Active Today"
            value={
              users.filter((u) =>
                u.bookings.some(
                  (b) => b.date === new Date().toISOString().split("T")[0]
                )
              ).length
            }
          />
          <StatCard
            icon={<FiCreditCard className="text-2xl text-blue-500" />}
            title="Avg. Bookings"
            value={(
              users.reduce((sum, user) => sum + user.bookings.length, 0) /
              users.length
            ).toFixed(1)}
          />
          <StatCard
            icon={<FiMapPin className="text-2xl text-purple-500" />}
            title="Routes Used"
            value={
              [...new Set(users.flatMap((u) => u.bookings.map((b) => b.route)))]
                .length
            }
          />
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    User
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bookings
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Loyalty
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                          <FiUser className="text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            ID: {user.id}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{user.email}</div>
                      <div className="text-sm text-gray-500">{user.phone}</div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        {user.bookings.map((booking, index) => (
                          <div key={index} className="text-sm">
                            <span
                              className={`inline-block w-2 h-2 rounded-full mr-2 ${
                                booking.status === "completed"
                                  ? "bg-green-500"
                                  : "bg-yellow-500"
                              }`}
                            ></span>
                            {booking.route} ({booking.date})
                          </div>
                        ))}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {user.loyaltyPoints} pts
                      </div>
                      <div className="text-xs text-gray-500">
                        {user.loyaltyPoints >= 500
                          ? "Gold Member"
                          : "Regular Member"}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        Message
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

// StatCard Component
const StatCard = ({ icon, title, value }) => (
  <div className="bg-white rounded-lg shadow-sm p-4">
    <div className="flex items-center">
      <div className="bg-gray-100 p-2 rounded-lg text-gray-600">{icon}</div>
      <div className="ml-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-xl font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  </div>
);

export default Dashboard;

// import React, { useState } from "react";
// import {
//   // FiBus,
//   FiUsers,
//   FiDollarSign,
//   FiMap,
//   FiCalendar,
//   FiClock,
//   FiPieChart,
//   FiTrendingUp,
//   FiAlertTriangle,
// } from "react-icons/fi";
// import DirectionsBus from "@mui/icons-material/DirectionsBus";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("overview");
//   const [timeRange, setTimeRange] = useState("week");

//   // Sample data
//   const fleetData = [
//     {
//       id: "BUS-001",
//       route: "City A → City B",
//       status: "active",
//       seats: 45,
//       lastMaintenance: "2023-05-20",
//     },
//     {
//       id: "BUS-002",
//       route: "City A → City C",
//       status: "active",
//       seats: 52,
//       lastMaintenance: "2023-05-15",
//     },
//     {
//       id: "BUS-003",
//       route: "City B → City D",
//       status: "maintenance",
//       seats: 45,
//       lastMaintenance: "2023-06-01",
//     },
//     {
//       id: "BUS-004",
//       route: "City C → City D",
//       status: "inactive",
//       seats: 52,
//       lastMaintenance: "2023-04-10",
//     },
//   ];

//   const bookingsData = [
//     {
//       id: "BK1001",
//       busId: "BUS-001",
//       date: "2023-06-15",
//       seats: 42,
//       revenue: 1890,
//       status: "completed",
//     },
//     {
//       id: "BK1002",
//       busId: "BUS-001",
//       date: "2023-06-16",
//       seats: 38,
//       revenue: 1710,
//       status: "completed",
//     },
//     {
//       id: "BK1003",
//       busId: "BUS-002",
//       date: "2023-06-15",
//       seats: 45,
//       revenue: 2025,
//       status: "completed",
//     },
//     {
//       id: "BK1004",
//       busId: "BUS-001",
//       date: "2023-06-17",
//       seats: 40,
//       revenue: 1800,
//       status: "upcoming",
//     },
//     {
//       id: "BK1005",
//       busId: "BUS-002",
//       date: "2023-06-17",
//       seats: 32,
//       revenue: 1440,
//       status: "upcoming",
//     },
//   ];

//   const revenueData = {
//     week: [1200, 1900, 1500, 2100, 1800, 2400, 2200],
//     month: [15000, 18000, 22000, 19500],
//     year: [125000, 145000, 165000, 185000, 205000, 225000],
//   };

//   const calculateStats = () => {
//     const completedBookings = bookingsData.filter(
//       (b) => b.status === "completed"
//     );
//     const upcomingBookings = bookingsData.filter(
//       (b) => b.status === "upcoming"
//     );
//     const activeBuses = fleetData.filter((b) => b.status === "active").length;

//     const totalRevenue = completedBookings.reduce(
//       (sum, b) => sum + b.revenue,
//       0
//     );
//     const avgOccupancy =
//       completedBookings.length > 0
//         ? (
//             (completedBookings.reduce((sum, b) => sum + b.seats, 0) /
//               (completedBookings.length * fleetData[0].seats)) *
//             100
//           ).toFixed(1)
//         : 0;

//     return {
//       totalBuses: fleetData.length,
//       activeBuses,
//       completedTrips: completedBookings.length,
//       upcomingTrips: upcomingBookings.length,
//       totalRevenue,
//       avgOccupancy,
//     };
//   };

//   const stats = calculateStats();

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       {/* <DirectionsBus style={{ fontSize: "24px" }} /> */}
//       <header className="bg-blue-800 text-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             {/* <FiBus className="text-2xl" /> */}
//             <h1 className="text-2xl font-bold">BusFleet Pro</h1>
//           </div>
//           <div className="flex items-center space-x-4">
//             <div className="hidden md:block bg-blue-700 px-3 py-1 rounded-full text-sm">
//               Owner Dashboard
//             </div>
//             <button className="flex items-center space-x-1 bg-blue-700 px-3 py-1 rounded-lg">
//               <FiUsers className="text-lg" />
//               <span>Account</span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto p-4 md:p-6">
//         {/* Dashboard Header */}
//         <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">Fleet Overview</h2>
//             <p className="text-gray-600">
//               Monitor your buses, bookings, and revenue
//             </p>
//           </div>
//           <div className="mt-3 md:mt-0 flex items-center space-x-2">
//             <select
//               className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm"
//               value={timeRange}
//               onChange={(e) => setTimeRange(e.target.value)}
//             >
//               <option value="day">Today</option>
//               <option value="week">This Week</option>
//               <option value="month">This Month</option>
//               <option value="year">This Year</option>
//             </select>
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
//           <StatCard
//             icon={<DirectionsBus className="text-2xl" />}
//             title="Total Buses"
//             value={stats.totalBuses}
//             change="+1"
//             changeType="positive"
//           />
//           <StatCard
//             icon={<DirectionsBus className="text-2xl text-green-500" />}
//             title="Active Buses"
//             value={stats.activeBuses}
//             change={`${Math.round(
//               (stats.activeBuses / stats.totalBuses) * 100
//             )}%`}
//             changeType="neutral"
//           />
//           <StatCard
//             icon={<FiCalendar className="text-2xl text-blue-500" />}
//             title="Completed Trips"
//             value={stats.completedTrips}
//             change="+12%"
//             changeType="positive"
//           />
//           <StatCard
//             icon={<FiClock className="text-2xl text-yellow-500" />}
//             title="Upcoming Trips"
//             value={stats.upcomingTrips}
//             change="+2"
//             changeType="neutral"
//           />
//           <StatCard
//             icon={<FiDollarSign className="text-2xl text-green-500" />}
//             title="Total Revenue"
//             value={`$${stats.totalRevenue.toLocaleString()}`}
//             change="+8.5%"
//             changeType="positive"
//           />
//           <StatCard
//             icon={<FiUsers className="text-2xl text-purple-500" />}
//             title="Avg Occupancy"
//             value={`${stats.avgOccupancy}%`}
//             change="-2.3%"
//             changeType="negative"
//           />
//         </div>

//         {/* Main Content Area */}
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Left Column */}
//           <div className="lg:w-2/3 space-y-6">
//             {/* Revenue Chart */}
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <div className="flex justify-between items-center mb-4">
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   Revenue Overview
//                 </h3>
//                 <div className="flex space-x-2">
//                   <button
//                     className={`px-3 py-1 text-sm rounded-lg ${
//                       timeRange === "week"
//                         ? "bg-blue-100 text-blue-800"
//                         : "bg-gray-100 text-gray-800"
//                     }`}
//                     onClick={() => setTimeRange("week")}
//                   >
//                     Week
//                   </button>
//                   <button
//                     className={`px-3 py-1 text-sm rounded-lg ${
//                       timeRange === "month"
//                         ? "bg-blue-100 text-blue-800"
//                         : "bg-gray-100 text-gray-800"
//                     }`}
//                     onClick={() => setTimeRange("month")}
//                   >
//                     Month
//                   </button>
//                   <button
//                     className={`px-3 py-1 text-sm rounded-lg ${
//                       timeRange === "year"
//                         ? "bg-blue-100 text-blue-800"
//                         : "bg-gray-100 text-gray-800"
//                     }`}
//                     onClick={() => setTimeRange("year")}
//                   >
//                     Year
//                   </button>
//                 </div>
//               </div>
//               <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
//                 {/* Chart would be implemented with a library like Chart.js */}
//                 <div className="text-center text-gray-400">
//                   <FiTrendingUp className="text-4xl mx-auto mb-2" />
//                   <p>Revenue chart visualization</p>
//                   <p className="text-sm">(Would show data for {timeRange})</p>
//                 </div>
//               </div>
//             </div>

//             {/* Fleet Status */}
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                 Fleet Status
//               </h3>
//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-gray-50">
//                     <tr>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Bus ID
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Route
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Status
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Last Maintenance
//                       </th>
//                       <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                         Actions
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {fleetData.map((bus) => (
//                       <tr key={bus.id}>
//                         <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                           {bus.id}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-gray-500">
//                           {bus.route}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <span
//                             className={`px-2 py-1 text-xs rounded-full ${
//                               bus.status === "active"
//                                 ? "bg-green-100 text-green-800"
//                                 : bus.status === "maintenance"
//                                 ? "bg-yellow-100 text-yellow-800"
//                                 : "bg-red-100 text-red-800"
//                             }`}
//                           >
//                             {bus.status.charAt(0).toUpperCase() +
//                               bus.status.slice(1)}
//                           </span>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-gray-500">
//                           {new Date(bus.lastMaintenance).toLocaleDateString()}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           <button className="text-blue-600 hover:text-blue-900 mr-3">
//                             Details
//                           </button>
//                           <button className="text-gray-600 hover:text-gray-900">
//                             Edit
//                           </button>
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="lg:w-1/3 space-y-6">
//             {/* Upcoming Trips */}
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                 Upcoming Trips
//               </h3>
//               <div className="space-y-4">
//                 {bookingsData
//                   .filter((b) => b.status === "upcoming")
//                   .map((booking) => (
//                     <div
//                       key={booking.id}
//                       className="border-l-4 border-blue-500 pl-4 py-2"
//                     >
//                       <div className="flex justify-between items-start">
//                         <div>
//                           <h4 className="font-medium text-gray-800">
//                             {booking.busId}
//                           </h4>
//                           <p className="text-sm text-gray-500">
//                             {new Date(booking.date).toLocaleDateString(
//                               "en-US",
//                               {
//                                 weekday: "short",
//                                 month: "short",
//                                 day: "numeric",
//                               }
//                             )}
//                           </p>
//                         </div>
//                         <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
//                           {booking.seats} seats
//                         </span>
//                       </div>
//                       <div className="mt-1 flex justify-between items-center">
//                         <span className="text-sm font-medium text-gray-700">
//                           ${booking.revenue}
//                         </span>
//                         <button className="text-blue-600 text-sm hover:text-blue-800">
//                           View
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 {bookingsData.filter((b) => b.status === "upcoming").length ===
//                   0 && (
//                   <div className="text-center py-4 text-gray-400">
//                     <FiCalendar className="mx-auto text-2xl mb-2" />
//                     <p>No upcoming trips scheduled</p>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Alerts & Maintenance */}
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
//                 <FiAlertTriangle className="text-yellow-500 mr-2" />
//                 Alerts & Maintenance
//               </h3>
//               <div className="space-y-3">
//                 <div className="p-3 bg-red-50 rounded-lg flex items-start">
//                   <div className="bg-red-100 p-2 rounded-full mr-3">
//                     <FiAlertTriangle className="text-red-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">
//                       BUS-003 Requires Service
//                     </h4>
//                     <p className="text-sm text-gray-600">
//                       Engine check needed before next trip
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">
//                       Reported: 2 days ago
//                     </p>
//                   </div>
//                 </div>
//                 <div className="p-3 bg-yellow-50 rounded-lg flex items-start">
//                   <div className="bg-yellow-100 p-2 rounded-full mr-3">
//                     <FiAlertTriangle className="text-yellow-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">
//                       BUS-004 Maintenance Due
//                     </h4>
//                     <p className="text-sm text-gray-600">
//                       Scheduled maintenance overdue by 7 days
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">
//                       Due: 2023-05-30
//                     </p>
//                   </div>
//                 </div>
//                 <div className="p-3 bg-blue-50 rounded-lg flex items-start">
//                   <div className="bg-blue-100 p-2 rounded-full mr-3">
//                     <FiAlertTriangle className="text-blue-500" />
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-800">
//                       BUS-001 Insurance Renewal
//                     </h4>
//                     <p className="text-sm text-gray-600">
//                       Insurance expires in 15 days
//                     </p>
//                     <p className="text-xs text-gray-500 mt-1">
//                       Expires: 2023-06-30
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Quick Actions */}
//             <div className="bg-white rounded-xl shadow-md p-6">
//               <h3 className="text-lg font-semibold text-gray-800 mb-4">
//                 Quick Actions
//               </h3>
//               <div className="grid grid-cols-2 gap-3">
//                 <button className="bg-blue-100 text-blue-800 p-3 rounded-lg flex flex-col items-center hover:bg-blue-200 transition-colors">
//                   {/* <FiBus className="text-xl mb-1" /> */}
//                   <span className="text-sm">Add New Bus</span>
//                 </button>
//                 <button className="bg-green-100 text-green-800 p-3 rounded-lg flex flex-col items-center hover:bg-green-200 transition-colors">
//                   <FiCalendar className="text-xl mb-1" />
//                   <span className="text-sm">Schedule Trip</span>
//                 </button>
//                 <button className="bg-purple-100 text-purple-800 p-3 rounded-lg flex flex-col items-center hover:bg-purple-200 transition-colors">
//                   <FiUsers className="text-xl mb-1" />
//                   <span className="text-sm">Manage Staff</span>
//                 </button>
//                 <button className="bg-yellow-100 text-yellow-800 p-3 rounded-lg flex flex-col items-center hover:bg-yellow-200 transition-colors">
//                   <FiDollarSign className="text-xl mb-1" />
//                   <span className="text-sm">Generate Report</span>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// // StatCard Component
// const StatCard = ({ icon, title, value, change, changeType }) => {
//   const changeColor = {
//     positive: "text-green-600 bg-green-100",
//     negative: "text-red-600 bg-red-100",
//     neutral: "text-gray-600 bg-gray-100",
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-sm p-4">
//       <div className="flex items-center justify-between">
//         <div className="bg-gray-100 p-2 rounded-lg text-gray-600">{icon}</div>
//         <span
//           className={`text-xs px-2 py-1 rounded-full ${changeColor[changeType]}`}
//         >
//           {change}
//         </span>
//       </div>
//       <div className="mt-4">
//         <h3 className="text-sm font-medium text-gray-500">{title}</h3>
//         <p className="text-xl font-semibold text-gray-800 mt-1">{value}</p>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useState } from "react";
// import {
//   FiSearch,
//   FiUser,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiCreditCard,
//   FiArrowRight,
// } from "react-icons/fi";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("upcoming");
//   const [searchQuery, setSearchQuery] = useState("");

//   // Sample data
//   const upcomingBookings = [
//     {
//       id: "BK12345",
//       route: "New York to Boston",
//       date: "2023-06-15",
//       time: "08:30 AM",
//       seats: ["A4", "A5"],
//       status: "Confirmed",
//       price: "$45.00",
//       departure: "NY Port Authority",
//       arrival: "Boston South Station",
//     },
//     {
//       id: "BK12346",
//       route: "Boston to Philadelphia",
//       date: "2023-06-20",
//       time: "02:15 PM",
//       seats: ["B2"],
//       status: "Confirmed",
//       price: "$38.50",
//       departure: "Boston South Station",
//       arrival: "Philly 30th St Station",
//     },
//   ];

//   const pastBookings = [
//     {
//       id: "BK12344",
//       route: "New York to Washington DC",
//       date: "2023-05-10",
//       time: "07:00 AM",
//       seats: ["C3", "C4"],
//       status: "Completed",
//       price: "$52.00",
//       departure: "NY Port Authority",
//       arrival: "Washington Union Station",
//     },
//   ];

//   const filteredBookings = [...upcomingBookings, ...pastBookings].filter(
//     (booking) =>
//       booking.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       booking.id.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-blue-600 text-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">BusTrack</h1>
//           <div className="flex items-center space-x-4">
//             <button className="flex items-center space-x-1">
//               <FiUser className="text-lg" />
//               <span>My Account</span>
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto p-4 md:p-6">
//         {/* Dashboard Header */}
//         <div className="mb-8">
//           <h2 className="text-3xl font-bold text-gray-800 mb-2">My Bookings</h2>
//           <p className="text-gray-600">
//             View and manage your upcoming and past bus bookings
//           </p>
//         </div>

//         {/* Search and Filter */}
//         <div className="bg-white rounded-lg shadow-md p-4 mb-6">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
//             <div className="relative flex-grow">
//               <FiSearch className="absolute left-3 top-3 text-gray-400" />
//               <input
//                 type="text"
//                 placeholder="Search by booking ID or route..."
//                 className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//             <div className="flex space-x-2">
//               <button
//                 className={`px-4 py-2 rounded-lg ${
//                   activeTab === "upcoming"
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-700"
//                 }`}
//                 onClick={() => setActiveTab("upcoming")}
//               >
//                 Upcoming
//               </button>
//               <button
//                 className={`px-4 py-2 rounded-lg ${
//                   activeTab === "past"
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-700"
//                 }`}
//                 onClick={() => setActiveTab("past")}
//               >
//                 Past
//               </button>
//               <button
//                 className={`px-4 py-2 rounded-lg ${
//                   activeTab === "all"
//                     ? "bg-blue-600 text-white"
//                     : "bg-gray-200 text-gray-700"
//                 }`}
//                 onClick={() => setActiveTab("all")}
//               >
//                 All
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Bookings List */}
//         <div className="space-y-6">
//           {(activeTab === "upcoming"
//             ? upcomingBookings
//             : activeTab === "past"
//             ? pastBookings
//             : filteredBookings
//           ).map((booking) => (
//             <div
//               key={booking.id}
//               className="bg-white rounded-xl shadow-md overflow-hidden"
//             >
//               <div className="p-6">
//                 <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
//                   {/* Booking Info */}
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between mb-2">
//                       <h3 className="text-xl font-semibold text-gray-800">
//                         {booking.route}
//                       </h3>
//                       <span
//                         className={`px-3 py-1 rounded-full text-sm font-medium ${
//                           booking.status === "Confirmed"
//                             ? "bg-green-100 text-green-800"
//                             : booking.status === "Completed"
//                             ? "bg-blue-100 text-blue-800"
//                             : "bg-yellow-100 text-yellow-800"
//                         }`}
//                       >
//                         {booking.status}
//                       </span>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
//                       <div className="flex items-center text-gray-600">
//                         <FiCalendar className="mr-2 text-blue-500" />
//                         <span>
//                           {new Date(booking.date).toLocaleDateString("en-US", {
//                             weekday: "short",
//                             year: "numeric",
//                             month: "short",
//                             day: "numeric",
//                           })}
//                         </span>
//                       </div>
//                       <div className="flex items-center text-gray-600">
//                         <FiClock className="mr-2 text-blue-500" />
//                         <span>{booking.time}</span>
//                       </div>
//                       <div className="flex items-center text-gray-600">
//                         <FiMapPin className="mr-2 text-blue-500" />
//                         <span>
//                           {booking.seats.length} seat
//                           {booking.seats.length > 1 ? "s" : ""} (
//                           {booking.seats.join(", ")})
//                         </span>
//                       </div>
//                       <div className="flex items-center text-gray-600">
//                         <FiCreditCard className="mr-2 text-blue-500" />
//                         <span className="font-medium">{booking.price}</span>
//                       </div>
//                     </div>

//                     <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-gray-500">
//                       <span className="flex items-center">
//                         <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
//                         {booking.departure}
//                       </span>
//                       <FiArrowRight className="hidden sm:block text-gray-400" />
//                       <span className="flex items-center">
//                         <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
//                         {booking.arrival}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Actions */}
//                   <div className="flex flex-col space-y-2 min-w-[150px]">
//                     <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
//                       View Details
//                     </button>
//                     {booking.status === "Confirmed" && (
//                       <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
//                         Cancel
//                       </button>
//                     )}
//                     <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
//                       Download Ticket
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Booking ID */}
//               <div className="bg-gray-50 px-6 py-3 border-t border-gray-200">
//                 <span className="text-sm text-gray-500">
//                   Booking ID: {booking.id}
//                 </span>
//               </div>
//             </div>
//           ))}

//           {((activeTab === "upcoming" && upcomingBookings.length === 0) ||
//             (activeTab === "past" && pastBookings.length === 0) ||
//             (activeTab === "all" && filteredBookings.length === 0)) && (
//             <div className="bg-white rounded-xl shadow-md p-8 text-center">
//               <div className="text-gray-400 mb-4">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-16 w-16 mx-auto"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={1}
//                     d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
//                   />
//                 </svg>
//               </div>
//               <h3 className="text-xl font-medium text-gray-700 mb-2">
//                 No bookings found
//               </h3>
//               <p className="text-gray-500">
//                 {activeTab === "upcoming"
//                   ? "You don't have any upcoming trips."
//                   : activeTab === "past"
//                   ? "Your past trips will appear here."
//                   : "No bookings match your search."}
//               </p>
//             </div>
//           )}
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-100 border-t border-gray-200 py-6 mt-8">
//         <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
//           <p>© 2023 BusTrack. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Dashboard;
