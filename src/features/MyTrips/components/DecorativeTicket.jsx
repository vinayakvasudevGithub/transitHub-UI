import React from "react";

const DecorativeTicket = () => {
  return (
    <div className="hidden md:block w-1/3">
      <div className="relative">
        <div className="absolute inset-0 bg-white bg-opacity-10 rounded-2xl transform -rotate-6"></div>
        <div className="absolute inset-0 bg-white bg-opacity-10 rounded-2xl transform rotate-3"></div>
        <div className="relative bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm p-6 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="h-3 w-3 rounded-full bg-teal-700 mr-2"></div>
              <span className="text-sm font-medium">TransitHub</span>
            </div>
            <div className="text-sm font-medium">Premium</div>
          </div>
          <div className="mb-4">
            <div className="text-sm mb-1">Next Trip</div>
            <div className="font-bold">Mumbai → Delhi</div>
            <div className="text-xs mt-1">April 20, 2025 • 10:30 AM</div>
          </div>
          <div className="bg-white bg-opacity-20 rounded-lg p-3">
            <div className="text-xs mb-2">Seat Details</div>
            <div className="flex justify-between items-center">
              <span className="font-bold">A12</span>
              <span className="text-xs">Window Seat</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecorativeTicket;
