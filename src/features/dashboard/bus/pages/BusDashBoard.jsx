// // import React from "react";

// // const BusPanel = () => {
// //   return <div>BusPanel</div>;
// // };

// // export default BusPanel;

// import { useState } from "react";
// import {
//   FiUsers,
//   FiUser,
//   FiMapPin,
//   FiCalendar,
//   FiClock,
//   FiCreditCard,
//   FiSearch,
// } from "react-icons/fi";

// const BusDashBoard = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Mock user data
//   const users = [
//     {
//       id: "USR001",
//       name: "John Doe",
//       phone: "+1 (555) 123-4567",
//       email: "john@example.com",
//       bookings: [
//         {
//           busId: "BUS-101",
//           route: "New York → Boston",
//           date: "2023-06-15",
//           seat: "A4",
//           status: "completed",
//         },
//         {
//           busId: "BUS-101",
//           route: "Boston → New York",
//           date: "2023-06-20",
//           seat: "B2",
//           status: "upcoming",
//         },
//       ],
//       loyaltyPoints: 450,
//     },
//     {
//       id: "USR002",
//       name: "Jane Smith",
//       phone: "+1 (555) 987-6543",
//       email: "jane@example.com",
//       bookings: [
//         {
//           busId: "BUS-102",
//           route: "Chicago → Detroit",
//           date: "2023-06-18",
//           seat: "C3",
//           status: "completed",
//         },
//       ],
//       loyaltyPoints: 120,
//     },
//   ];

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.phone.includes(searchTerm)
//   );

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-blue-600 text-white p-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">BusTrack Pro</h1>
//           <div className="flex items-center space-x-4">
//             <span className="hidden md:inline">Admin Dashboard</span>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto p-4 md:p-6">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
//           <div>
//             <h2 className="text-2xl font-bold text-gray-800">
//               Passenger Tracking
//             </h2>
//             <p className="text-gray-600">
//               Monitor user bookings and travel history
//             </p>
//           </div>
//           <div className="relative mt-4 md:mt-0">
//             <FiSearch className="absolute left-3 top-3 text-gray-400" />
//             <input
//               type="text"
//               placeholder="Search users..."
//               className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <StatCard
//             icon={<FiUsers className="text-2xl" />}
//             title="Total Passengers"
//             value={users.length}
//           />
//           <StatCard
//             icon={<FiUser className="text-2xl text-green-500" />}
//             title="Active Today"
//             value={
//               users.filter((u) =>
//                 u.bookings.some(
//                   (b) => b.date === new Date().toISOString().split("T")[0]
//                 )
//               ).length
//             }
//           />
//           <StatCard
//             icon={<FiCreditCard className="text-2xl text-blue-500" />}
//             title="Avg. Bookings"
//             value={(
//               users.reduce((sum, user) => sum + user.bookings.length, 0) /
//               users.length
//             ).toFixed(1)}
//           />
//           <StatCard
//             icon={<FiMapPin className="text-2xl text-purple-500" />}
//             title="Routes Used"
//             value={
//               [...new Set(users.flatMap((u) => u.bookings.map((b) => b.route)))]
//                 .length
//             }
//           />
//         </div>

//         {/* Users Table */}
//         <div className="bg-white rounded-xl shadow-md overflow-hidden">
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     User
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Contact
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Bookings
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Loyalty
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {filteredUsers.map((user) => (
//                   <tr key={user.id}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
//                           <FiUser className="text-blue-600" />
//                         </div>
//                         <div className="ml-4">
//                           <div className="text-sm font-medium text-gray-900">
//                             {user.name}
//                           </div>
//                           <div className="text-sm text-gray-500">
//                             ID: {user.id}
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">{user.email}</div>
//                       <div className="text-sm text-gray-500">{user.phone}</div>
//                     </td>
//                     <td className="px-6 py-4">
//                       <div className="space-y-2">
//                         {user.bookings.map((booking, index) => (
//                           <div key={index} className="text-sm">
//                             <span
//                               className={`inline-block w-2 h-2 rounded-full mr-2 ${
//                                 booking.status === "completed"
//                                   ? "bg-green-500"
//                                   : "bg-yellow-500"
//                               }`}
//                             ></span>
//                             {booking.route} ({booking.date})
//                           </div>
//                         ))}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">
//                         {user.loyaltyPoints} pts
//                       </div>
//                       <div className="text-xs text-gray-500">
//                         {user.loyaltyPoints >= 500
//                           ? "Gold Member"
//                           : "Regular Member"}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       <button className="text-blue-600 hover:text-blue-900 mr-3">
//                         View
//                       </button>
//                       <button className="text-gray-600 hover:text-gray-900">
//                         Message
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// // StatCard Component
// const StatCard = ({ icon, title, value }) => (
//   <div className="bg-white rounded-lg shadow-sm p-4">
//     <div className="flex items-center">
//       <div className="bg-gray-100 p-2 rounded-lg text-gray-600">{icon}</div>
//       <div className="ml-4">
//         <h3 className="text-sm font-medium text-gray-500">{title}</h3>
//         <p className="text-xl font-semibold text-gray-800">{value}</p>
//       </div>
//     </div>
//   </div>
// );

// export default BusDashBoard;

import React, { useState } from "react";
import {
  // FiBus,
  FiUsers,
  FiDollarSign,
  FiMap,
  FiCalendar,
  FiClock,
  FiPieChart,
  FiTrendingUp,
  FiAlertTriangle,
} from "react-icons/fi";
import DirectionsBus from "@mui/icons-material/DirectionsBus";
import BusUsers from "./BusUsers";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { Routes, Route } from "react-router-dom";
import BusStatus from "./BusStatus";
import Actions from "../components/Actions";

const BusDashBoard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [timeRange, setTimeRange] = useState("week");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // Sample data
  const fleetData = [
    {
      id: "BUS-001",
      route: "City A → City B",
      status: "active",
      seats: 45,
      lastMaintenance: "2023-05-20",
    },
    {
      id: "BUS-002",
      route: "City A → City C",
      status: "active",
      seats: 52,
      lastMaintenance: "2023-05-15",
    },
    {
      id: "BUS-003",
      route: "City B → City D",
      status: "maintenance",
      seats: 45,
      lastMaintenance: "2023-06-01",
    },
    {
      id: "BUS-004",
      route: "City C → City D",
      status: "inactive",
      seats: 52,
      lastMaintenance: "2023-04-10",
    },
  ];

  const bookingsData = [
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
  ];

  const revenueData = {
    week: [1200, 1900, 1500, 2100, 1800, 2400, 2200],
    month: [15000, 18000, 22000, 19500],
    year: [125000, 145000, 165000, 185000, 205000, 225000],
  };

  const calculateStats = () => {
    const completedBookings = bookingsData.filter(
      (b) => b.status === "completed"
    );
    const upcomingBookings = bookingsData.filter(
      (b) => b.status === "upcoming"
    );
    const activeBuses = fleetData.filter((b) => b.status === "active").length;

    const totalRevenue = completedBookings.reduce(
      (sum, b) => sum + b.revenue,
      0
    );
    const avgOccupancy =
      completedBookings.length > 0
        ? (
            (completedBookings.reduce((sum, b) => sum + b.seats, 0) /
              (completedBookings.length * fleetData[0].seats)) *
            100
          ).toFixed(1)
        : 0;

    return {
      totalBuses: fleetData.length,
      activeBuses,
      completedTrips: completedBookings.length,
      upcomingTrips: upcomingBookings.length,
      totalRevenue,
      avgOccupancy,
    };
  };

  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Navbar
        // user={user}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      <main className="container mx-auto p-4 md:p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
          <StatCard
            icon={<DirectionsBus className="text-2xl" />}
            title="Total Buses"
            value={stats.totalBuses}
            change="+1"
            changeType="positive"
          />
          <StatCard
            icon={<DirectionsBus className="text-2xl text-green-500" />}
            title="Active Buses"
            value={stats.activeBuses}
            change={`${Math.round(
              (stats.activeBuses / stats.totalBuses) * 100
            )}%`}
            changeType="neutral"
          />
          <StatCard
            icon={<FiCalendar className="text-2xl text-blue-500" />}
            title="Completed Trips"
            value={stats.completedTrips}
            change="+12%"
            changeType="positive"
          />
          <StatCard
            icon={<FiClock className="text-2xl text-yellow-500" />}
            title="Upcoming Trips"
            value={stats.upcomingTrips}
            change="+2"
            changeType="neutral"
          />
          <StatCard
            icon={<FiDollarSign className="text-2xl text-green-500" />}
            title="Total Revenue"
            value={`$${stats.totalRevenue.toLocaleString()}`}
            change="+8.5%"
            changeType="positive"
          />
          <StatCard
            icon={<FiUsers className="text-2xl text-purple-500" />}
            title="Avg Occupancy"
            value={`${stats.avgOccupancy}%`}
            change="-2.3%"
            changeType="negative"
          />
        </div>

        {/* Main Content Area */}
        <div>
          <Actions />
        </div>
        <div className="mt-5">
          <Routes>
            <Route
              path="/"
              element={
                <BusStatus fleetData={fleetData} bookingsData={bookingsData} />
              }
            />
            <Route
              path="/users"
              element={
                <BusUsers fleetData={fleetData} bookingsData={bookingsData} />
              }
            />
          </Routes>
        </div>

        {/* <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-2/3 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Fleet Status
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Bus ID
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Route
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Last Maintenance
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {fleetData.map((bus) => (
                      <tr key={bus.id}>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                          {bus.id}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {bus.route}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span
                            className={`px-2 py-1 text-xs rounded-full ${
                              bus.status === "active"
                                ? "bg-green-100 text-green-800"
                                : bus.status === "maintenance"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                            }`}
                          >
                            {bus.status.charAt(0).toUpperCase() +
                              bus.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {new Date(bus.lastMaintenance).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-blue-600 hover:text-blue-900 mr-3">
                            Details
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="lg:w-1/3 space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Upcoming Trips
              </h3>
              <div className="space-y-4">
                {bookingsData
                  .filter((b) => b.status === "upcoming")
                  .map((booking) => (
                    <div
                      key={booking.id}
                      className="border-l-4 border-blue-500 pl-4 py-2"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-medium text-gray-800">
                            {booking.busId}
                          </h4>
                          <p className="text-sm text-gray-500">
                            {new Date(booking.date).toLocaleDateString(
                              "en-US",
                              {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              }
                            )}
                          </p>
                        </div>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                          {booking.seats} seats
                        </span>
                      </div>
                      <div className="mt-1 flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          ${booking.revenue}
                        </span>
                        <button className="text-blue-600 text-sm hover:text-blue-800">
                          View
                        </button>
                      </div>
                    </div>
                  ))}
                {bookingsData.filter((b) => b.status === "upcoming").length ===
                  0 && (
                  <div className="text-center py-4 text-gray-400">
                    <FiCalendar className="mx-auto text-2xl mb-2" />
                    <p>No upcoming trips scheduled</p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                <FiAlertTriangle className="text-yellow-500 mr-2" />
                Alerts & Maintenance
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-red-50 rounded-lg flex items-start">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <FiAlertTriangle className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      BUS-003 Requires Service
                    </h4>
                    <p className="text-sm text-gray-600">
                      Engine check needed before next trip
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Reported: 2 days ago
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg flex items-start">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <FiAlertTriangle className="text-yellow-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      BUS-004 Maintenance Due
                    </h4>
                    <p className="text-sm text-gray-600">
                      Scheduled maintenance overdue by 7 days
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Due: 2023-05-30
                    </p>
                  </div>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <FiAlertTriangle className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">
                      BUS-001 Insurance Renewal
                    </h4>
                    <p className="text-sm text-gray-600">
                      Insurance expires in 15 days
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Expires: 2023-06-30
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-blue-100 text-blue-800 p-3 rounded-lg flex flex-col items-center hover:bg-blue-200 transition-colors">
                  <span className="text-sm">Add New Bus</span>
                </button>
                <button className="bg-green-100 text-green-800 p-3 rounded-lg flex flex-col items-center hover:bg-green-200 transition-colors">
                  <FiCalendar className="text-xl mb-1" />
                  <span className="text-sm">Schedule Trip</span>
                </button>
                <button className="bg-purple-100 text-purple-800 p-3 rounded-lg flex flex-col items-center hover:bg-purple-200 transition-colors">
                  <FiUsers className="text-xl mb-1" />
                  <span className="text-sm">Manage Staff</span>
                </button>
                <button className="bg-yellow-100 text-yellow-800 p-3 rounded-lg flex flex-col items-center hover:bg-yellow-200 transition-colors">
                  <FiDollarSign className="text-xl mb-1" />
                  <span className="text-sm">Generate Report</span>
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
};

// StatCard Component
const StatCard = ({ icon, title, value, change, changeType }) => {
  const changeColor = {
    positive: "text-green-600 bg-green-100",
    negative: "text-red-600 bg-red-100",
    neutral: "text-gray-600 bg-gray-100",
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="flex items-center justify-between">
        <div className="bg-gray-100 p-2 rounded-lg text-gray-600">{icon}</div>
        <span
          className={`text-xs px-2 py-1 rounded-full ${changeColor[changeType]}`}
        >
          {change}
        </span>
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className="text-xl font-semibold text-gray-800 mt-1">{value}</p>
      </div>
    </div>
  );
};

export default BusDashBoard;
