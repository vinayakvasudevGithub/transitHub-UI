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

// const BusUsers = ({ busTickets }) => {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Transform busTickets data into user format
//   const transformToUsers = (tickets) => {
//     const userMap = {};

//     tickets.forEach((ticket) => {
//       const userInfo = ticket.userDetails[0];
//       const userId = userInfo._id;

//       if (!userMap[userId]) {
//         userMap[userId] = {
//           id: userId,
//           name: userInfo.name,
//           phone: userInfo.mobile,
//           email: userInfo.email,
//           bookings: [],
//           loyaltyPoints: Math.floor(Math.random() * 1000), // Random points for demo
//         };
//       }

//       ticket.busdetails.forEach((bus) => {
//         userMap[userId].bookings.push({
//           busId: bus._id,
//           route: `${bus.departurecity} → ${bus.arrivalcity}`,
//           date: new Date(ticket.createdAt).toISOString().split("T")[0],
//           seat: bus.busseatnumber,
//           status:
//             new Date(bus.departureTime) > new Date() ? "upcoming" : "completed",
//           price: bus.price,
//         });
//       });
//     });

//     return Object.values(userMap);
//   };

//   const users = transformToUsers(busTickets);

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       user.phone.includes(searchTerm)
//   );

//   return (
//     <div className="bg-white rounded-xl shadow-md">
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
//               (users.length || 1)
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
//                             ID: {user.id.slice(-6)}
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
//                             {booking.route} ({booking.date}) - Seat{" "}
//                             {booking.seat} (₹{booking.price})
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
//                           : user.loyaltyPoints >= 200
//                           ? "Silver Member"
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

// // StatCard Component remains the same
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

// export default BusUsers;

import { useState, useEffect } from "react";
import {
  FiUsers,
  FiUser,
  FiMapPin,
  FiCreditCard,
  FiSearch,
  FiArrowRight,
  FiMail,
  FiPhone,
  FiStar,
  FiCheckCircle,
  FiClock,
} from "react-icons/fi";
import { motion } from "framer-motion";

const BusUsers = ({ busTickets }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Transform busTickets data into user format
  const transformToUsers = (tickets) => {
    const userMap = {};

    tickets.forEach((ticket) => {
      const userInfo = ticket.userDetails[0];
      const userId = userInfo._id;

      if (!userMap[userId]) {
        userMap[userId] = {
          id: userId,
          name: userInfo.name,
          phone: userInfo.mobile,
          email: userInfo.email,
          gender: userInfo.gender,
          age: userInfo.age,
          bookings: [],
          loyaltyPoints: Math.floor(Math.random() * 1000),
          lastBooking: ticket.createdAt,
        };
      }

      ticket.busdetails.forEach((bus) => {
        userMap[userId].bookings.push({
          busId: bus._id,
          route: `${bus.departurecity} → ${bus.arrivalcity}`,
          date: new Date(ticket.createdAt).toLocaleDateString(),
          departureTime: bus.departureTime,
          seat: bus.busseatnumber,
          status:
            new Date(bus.departureTime) > new Date() ? "upcoming" : "completed",
          price: bus.price,
          busName: bus.busname,
          busNumber: bus.busnumber,
        });
      });
    });

    return Object.values(userMap);
  };

  const users = transformToUsers(busTickets);

  const filteredUsers = users
    .filter((user) =>
      activeTab === "all"
        ? true
        : activeTab === "active"
        ? user.bookings.some((b) => b.status === "upcoming")
        : activeTab === "premium"
        ? user.loyaltyPoints >= 500
        : true
    )
    .filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.phone.includes(searchTerm)
    );

  const totalRevenue = users.reduce(
    (sum, user) =>
      sum + user.bookings.reduce((bookSum, book) => bookSum + book.price, 0),
    0
  );

  const upcomingTrips = users.reduce(
    (sum, user) =>
      sum + user.bookings.filter((b) => b.status === "upcoming").length,
    0
  );

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="loader animate-spin rounded-full border-t-4 border-blue-500 border-solid h-12 w-12"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">
              Passenger Dashboard
            </h1>
            <p className="text-gray-600 mt-2">
              Manage and track all passenger activities
            </p>
          </div>
          <div className="relative mt-4 md:mt-0 w-full md:w-64">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search passengers..."
              className="pl-10 pr-4 py-2 w-full border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard
            icon={<FiUsers className="text-2xl text-blue-600" />}
            title="Total Passengers"
            value={users.length}
            change="+12%"
            isPositive={true}
            bgColor="bg-blue-50"
          />
          <StatCard
            icon={<FiCreditCard className="text-2xl text-green-600" />}
            title="Total Revenue"
            value={`₹${totalRevenue.toLocaleString()}`}
            change="+18%"
            isPositive={true}
            bgColor="bg-green-50"
          />
          <StatCard
            icon={<FiClock className="text-2xl text-amber-600" />}
            title="Upcoming Trips"
            value={upcomingTrips}
            change="+5%"
            isPositive={true}
            bgColor="bg-amber-50"
          />
          <StatCard
            icon={<FiStar className="text-2xl text-purple-600" />}
            title="Premium Members"
            value={users.filter((u) => u.loyaltyPoints >= 500).length}
            change="+8%"
            isPositive={true}
            bgColor="bg-purple-50"
          />
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6 border-b border-gray-200">
          {["all", "active", "premium"].map((tab) => (
            <button
              key={tab}
              className={`px-4 py-2 font-medium text-sm capitalize transition-colors duration-200 ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Passenger
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Recent Trips
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Loyalty Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredUsers.map((user) => (
                  <motion.tr
                    key={user.id}
                    whileHover={{ backgroundColor: "rgba(243, 244, 246, 0.5)" }}
                    className="transition-colors duration-150"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div
                          className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center ${
                            user.gender === "Male"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-pink-100 text-pink-600"
                          }`}
                        >
                          <FiUser className="text-lg" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-semibold text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {user.age} years • {user.gender}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-col space-y-1">
                        <div className="flex items-center text-sm text-gray-900">
                          <FiMail className="mr-2 text-gray-400" />
                          {user.email}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <FiPhone className="mr-2 text-gray-400" />
                          {user.phone}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="space-y-2">
                        {user.bookings.slice(0, 2).map((booking, index) => (
                          <div
                            key={index}
                            className="flex items-center text-sm"
                          >
                            <span
                              className={`inline-flex items-center justify-center h-5 w-5 rounded-full mr-2 ${
                                booking.status === "completed"
                                  ? "bg-green-100 text-green-600"
                                  : "bg-yellow-100 text-yellow-600"
                              }`}
                            >
                              {booking.status === "completed" ? (
                                <FiCheckCircle className="h-3 w-3" />
                              ) : (
                                <FiClock className="h-3 w-3" />
                              )}
                            </span>
                            <div>
                              <div className="font-medium">
                                {booking.busName} ({booking.busNumber})
                              </div>
                              <div className="text-xs text-gray-500">
                                {booking.route} • {booking.date} • Seat{" "}
                                {booking.seat}
                              </div>
                            </div>
                          </div>
                        ))}
                        {user.bookings.length > 2 && (
                          <div className="text-xs text-blue-600 font-medium">
                            +{user.bookings.length - 2} more trips
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div
                          className={`h-2 w-24 rounded-full mr-2 overflow-hidden ${
                            user.loyaltyPoints >= 500
                              ? "bg-gradient-to-r from-yellow-400 to-yellow-600"
                              : user.loyaltyPoints >= 200
                              ? "bg-gradient-to-r from-gray-400 to-gray-600"
                              : "bg-gray-200"
                          }`}
                        >
                          <div
                            className="h-full bg-gray-100"
                            style={{
                              width: `${
                                100 - Math.min(user.loyaltyPoints / 10, 100)
                              }%`,
                            }}
                          ></div>
                        </div>
                        <span
                          className={`text-xs font-medium ${
                            user.loyaltyPoints >= 500
                              ? "text-yellow-600"
                              : user.loyaltyPoints >= 200
                              ? "text-gray-600"
                              : "text-gray-400"
                          }`}
                        >
                          {user.loyaltyPoints >= 500
                            ? "Gold"
                            : user.loyaltyPoints >= 200
                            ? "Silver"
                            : "Regular"}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {user.loyaltyPoints} points
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3 px-3 py-1 rounded-md bg-blue-50 hover:bg-blue-100 transition-colors">
                        View
                      </button>
                      <button className="text-gray-600 hover:text-gray-900 px-3 py-1 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors">
                        Message
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {filteredUsers.length === 0 && (
            <div className="p-12 text-center">
              <div className="mx-auto h-24 w-24 text-gray-400">
                <FiUser className="w-full h-full" />
              </div>
              <h3 className="mt-2 text-lg font-medium text-gray-900">
                No passengers found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                {searchTerm
                  ? "Try adjusting your search query"
                  : activeTab !== "all"
                  ? `No ${activeTab} passengers`
                  : "No passenger data available"}
              </p>
            </div>
          )}

          {/* Pagination would go here */}
        </motion.div>
      </motion.div>
    </div>
  );
};

const StatCard = ({ icon, title, value, change, isPositive, bgColor }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className={`${bgColor} p-5 rounded-xl shadow-sm border border-gray-100`}
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500">{title}</p>
        <p className="mt-1 text-2xl font-semibold text-gray-900">{value}</p>
      </div>
      <div className="p-3 rounded-lg bg-white shadow-xs">{icon}</div>
    </div>
    {change && (
      <p
        className={`mt-2 text-xs font-medium ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {change} from last month
      </p>
    )}
  </motion.div>
);

export default BusUsers;
