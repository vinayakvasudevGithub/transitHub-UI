import React from "react";

const StatusCard = ({ bookedTickets, filteredTickets }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-indigo-100 rounded-lg mr-4">
            <svg
              className="h-6 w-6 text-indigo-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">Total Trips</h3>
            <p className="text-2xl font-bold text-gray-900">
              {bookedTickets.length}
            </p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Lifetime journeys with TransitHub
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-green-100 rounded-lg mr-4">
            <svg
              className="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">Upcoming</h3>
            <p className="text-2xl font-bold text-gray-900">
              {filteredTickets.length}
            </p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Trips scheduled in your calendar
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-blue-100 rounded-lg mr-4">
            <svg
              className="h-6 w-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">On Time</h3>
            <p className="text-2xl font-bold text-gray-900">100%</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Perfect on-time arrival record
        </div>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 transition-all hover:shadow-md">
        <div className="flex items-center mb-4">
          <div className="p-2 bg-yellow-100 rounded-lg mr-4">
            <svg
              className="h-6 w-6 text-yellow-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              ></path>
            </svg>
          </div>
          <div>
            <h3 className="text-gray-500 text-sm font-medium">Savings</h3>
            <p className="text-2xl font-bold text-gray-900">₹2,450</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          Total saved with loyalty program
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
