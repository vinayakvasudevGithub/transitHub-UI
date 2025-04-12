// import React from 'react'

// const BusUsers = () => {
//   return (
//     <div>BusUsers</div>
//   )
// }

// export default BusUsers

// import React from "react";

// const BusPanel = () => {
//   return <div>BusPanel</div>;
// };

// export default BusPanel;

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

const BusUsers = () => {
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
    <div className="bg-white rounded-xl shadow-md ">
      {/* Header */}
      {/* <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BusTrack Pro</h1>
          <div className="flex items-center space-x-4">
            <span className="hidden md:inline">Admin Dashboard</span>
          </div>
        </div>
      </header> */}

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

export default BusUsers;
