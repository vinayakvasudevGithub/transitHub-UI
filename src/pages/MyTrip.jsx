// import React, { useContext } from "react";
// import BusTrip from "../features/MyTrips/BusTrip";
// import { UserContext } from "../../context/UserContext";
// import FlyTrip from "../features/MyTrips/FlyTrip";

// const MyTrip = () => {
//   const { user } = useContext(UserContext);
//   return (
//     <div>
//       <div className="text-center mb-10">
//         <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//           Welcome, {user?.user?.name}!
//         </h1>
//         <h2 className="mt-2 text-xl font-semibold text-gray-600">
//           Your Bookings
//         </h2>
//       </div>
//       <BusTrip />
//       <FlyTrip />
//     </div>
//   );
// };

// export default MyTrip;

import React, { useContext, useState } from "react";
// import BusTrip from "../features/MyTrips/BusTrip";
import { UserContext } from "../../context/UserContext";
import FlyTrip from "../features/MyTrips/FlyTrip";
import BusTrip from "../features/MyTrips/bus/pages/BusTrip";

const MyTrip = () => {
  const { user } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("bus");

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-8 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Welcome, {user?.user?.name || "Traveler"}!
        </h1>
        <p className="mt-2 text-lg text-indigo-100">
          Manage your travel bookings all in one place
        </p>
      </div> */}

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex border-b">
          <button
            className={`flex-1 py-4 px-6 text-center font-medium text-lg transition-colors duration-200 ${
              activeTab === "bus"
                ? "bg-indigo-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("bus")}
          >
            <div className="flex items-center justify-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7v8a2 2 0 002 2h6M5 17h13a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span>Bus Trips</span>
            </div>
          </button>
          <button
            className={`flex-1 py-4 px-6 text-center font-medium text-lg transition-colors duration-200 ${
              activeTab === "flight"
                ? "bg-indigo-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
            onClick={() => setActiveTab("flight")}
          >
            <div className="flex items-center justify-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 12h14M5 12a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v3a2 2 0 01-2 2M5 12a2 2 0 00-2 2v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                />
              </svg>
              <span>Flight Trips</span>
            </div>
          </button>
        </div>

        <div className="p-6">
          {activeTab === "bus" ? (
            <div className="animate-fade-in">
              {/* <BusTrip /> */}
              <BusTrip />
            </div>
          ) : (
            <div className="animate-fade-in">
              <FlyTrip />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyTrip;
