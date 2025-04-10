// import React from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";
// import { Button } from "@/components/ui/button";

// const data = [
//   { date: "Apr 1", bookings: 20 },
//   { date: "Apr 2", bookings: 35 },
//   { date: "Apr 3", bookings: 45 },
//   { date: "Apr 4", bookings: 30 },
//   { date: "Apr 5", bookings: 50 },
// ];

// const OwnerDashboard = () => {
//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-3xl font-bold">Owner Dashboard</h1>

//       {/* KPIs */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
//         <Card>
//           <CardContent className="p-4">
//             <p className="text-gray-600">Total Bookings</p>
//             <p className="text-2xl font-bold">1,230</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-4">
//             <p className="text-gray-600">Revenue</p>
//             <p className="text-2xl font-bold">₹ 2,45,000</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-4">
//             <p className="text-gray-600">Active Buses</p>
//             <p className="text-2xl font-bold">42</p>
//           </CardContent>
//         </Card>
//         <Card>
//           <CardContent className="p-4">
//             <p className="text-gray-600">Total Users</p>
//             <p className="text-2xl font-bold">856</p>
//           </CardContent>
//         </Card>
//       </div>

//       {/* Bookings Chart */}
//       <Card>
//         <CardContent className="p-6">
//           <h2 className="text-xl font-semibold mb-4">Booking Trends</h2>
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={data}>
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Line
//                 type="monotone"
//                 dataKey="bookings"
//                 stroke="#4F46E5"
//                 strokeWidth={3}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>

//       {/* Recent Bookings Table */}
//       <Card>
//         <CardContent className="p-6">
//           <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
//           <div className="overflow-auto">
//             <table className="min-w-full text-sm text-left">
//               <thead>
//                 <tr className="bg-gray-100">
//                   <th className="p-2">User</th>
//                   <th className="p-2">Bus</th>
//                   <th className="p-2">Date</th>
//                   <th className="p-2">Time</th>
//                   <th className="p-2">Amount</th>
//                   <th className="p-2">Status</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td className="p-2">John</td>
//                   <td className="p-2">ABC Travels</td>
//                   <td className="p-2">09-Apr</td>
//                   <td className="p-2">10:00 AM</td>
//                   <td className="p-2">₹500</td>
//                   <td className="p-2 text-green-600">Confirmed</td>
//                 </tr>
//                 <tr>
//                   <td className="p-2">Mary</td>
//                   <td className="p-2">XYZ Express</td>
//                   <td className="p-2">09-Apr</td>
//                   <td className="p-2">12:30 PM</td>
//                   <td className="p-2">₹700</td>
//                   <td className="p-2 text-yellow-600">Pending</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </CardContent>
//       </Card>

//       {/* Refresh Button */}
//       <div className="flex justify-end">
//         <Button onClick={() => window.location.reload()}>Refresh</Button>
//       </div>
//     </div>
//   );
// };

// export default OwnerDashboard;

// import React from "react";

// const OwnerDashboard = () => {
//   return <div>OwnerDashboard</div>;
// };

// export default OwnerDashboard;

import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import axios from "axios";

function OwnerDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profile, setProfile] = useState("");
  const [busTicket, setBusTicket] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:2001/auth/profile", {
          withCredentials: true,
        });
        setProfile(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:2001/busticket", {
          withCredentials: true,
        });
        setBusTicket(response.data);
      } catch (error) {}
    };
    fetchData();
  }, []);

  const { user, buses } = profile;
  // console.log(user);
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Navbar */}
        <Navbar
          user={user}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default OwnerDashboard;

// import { useState } from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Sidebar from "./components/Sidebar";
// import Navbar from "./components/Navbar";
// import Dashboard from "./pages/Dashboard";
// import Products from "./pages/Products";
// import Users from "./pages/Users";
// import Settings from "./pages/Settings";

// function OwnerDashboard() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <BrowserRouter
//       future={{
//         v7_relativeSplatPath: true,
//       }}
//     >
//       <div className="flex h-screen bg-gray-100">
//         {/* Sidebar */}
//         <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//         {/* Content area */}
//         <div className="flex-1 flex flex-col overflow-hidden">
//           {/* Navbar */}
//           <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//           {/* Main content */}
//           <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-gray-50">
//             <Routes>
//               <Route path="/" element={<Dashboard />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/users" element={<Users />} />
//               <Route path="/settings" element={<Settings />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default OwnerDashboard;
