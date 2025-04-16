import React from "react";
import { FiCreditCard, FiWifi, FiCoffee, FiMap } from "react-icons/fi";

const DecorativeTicket = () => {
  return (
    <div className="hidden md:block w-1/3">
      <div className="relative mx-auto max-w-sm">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-teal-800 to-cyan-600 opacity-10 rounded-2xl transform -rotate-6 scale-105"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-700 to-cyan-500 opacity-10 rounded-2xl transform rotate-3 scale-105"></div>

        {/* Main ticket container */}
        <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 p-6 rounded-2xl shadow-xl overflow-hidden border border-slate-700">
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full opacity-10 transform translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full opacity-10 transform -translate-x-16 translate-y-16"></div>

          {/* Top header section */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <div className="h-6 w-6 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 flex items-center justify-center shadow-lg mr-2">
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>
              <span className="text-white font-bold tracking-wider">
                TRANSITHUB
              </span>
            </div>
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg">
              PREMIUM
            </div>
          </div>

          {/* Journey details */}
          <div className="mb-6">
            <div className="text-gray-400 text-xs mb-1">YOUR NEXT JOURNEY</div>
            <div className="flex items-center mb-3">
              <div className="text-white font-bold text-xl">Mumbai</div>
              <div className="mx-2 text-gray-500">→</div>
              <div className="text-white font-bold text-xl">Delhi</div>
            </div>
            <div className="text-gray-400 text-xs flex items-center">
              <FiMap className="mr-1" />
              April 20, 2025 • 10:30 AM
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute left-0 w-2 h-4 bg-slate-800 -ml-6 rounded-r-full"></div>
            <div className="absolute right-0 w-2 h-4 bg-slate-800 -mr-6 rounded-l-full"></div>
            <div className="border-t border-dashed border-gray-600"></div>
          </div>

          {/* Seat details */}
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-4 shadow-inner mb-4">
            <div className="text-gray-400 text-xs uppercase tracking-wider mb-2">
              Seat Details
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-white font-bold text-2xl mr-2">A12</span>
                <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-xs text-white px-2 py-1 rounded-md">
                  Window
                </span>
              </div>
              <div className="bg-slate-900 text-white font-mono text-sm py-1 px-3 rounded-lg">
                BUSINESS
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex justify-between">
            <div className="flex items-center text-gray-400 text-xs">
              <FiWifi className="mr-1" /> WiFi
            </div>
            <div className="flex items-center text-gray-400 text-xs">
              <FiCoffee className="mr-1" /> Refreshments
            </div>
            <div className="flex items-center text-gray-400 text-xs">
              <FiCreditCard className="mr-1" /> Cashless
            </div>
          </div>

          {/* QR code (decorative) */}
          <div className="absolute top-4 right-4 w-6 h-6 grid grid-cols-3 grid-rows-3 gap-0.5 opacity-30">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className={`bg-white ${
                  Math.random() > 0.5 ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Bottom shine effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-gradient-to-t from-white to-transparent opacity-10 rounded-b-2xl"></div>
      </div>
    </div>
  );
};

export default DecorativeTicket;
