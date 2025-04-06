import React from "react";

const FlightInfo = ({ handleFlightInfoChange, flightData }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Flight Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Airline */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Airline
          </label>
          <input
            name="airline"
            value={flightData.airline}
            onChange={handleFlightInfoChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., Delta Airlines"
          />
        </div>

        {/* Airline Image Code (Dropdown) */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Airline Code
          </label>
          <select
            name="airlineimagecode"
            value={flightData.airlineimagecode}
            onChange={handleFlightInfoChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">Select airline code</option>
            <option value="DL">DL (Delta)</option>
            <option value="AA">AA (American)</option>
            <option value="UA">UA (United)</option>
            <option value="BA">BA (British Airways)</option>
            <option value="LH">LH (Lufthansa)</option>
          </select>
        </div>

        {/* Flight Number */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Flight Number
          </label>
          <input
            name="flightNumber"
            value={flightData.flightNumber}
            onChange={handleFlightInfoChange}
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., DL1234"
          />
        </div>

        {/* Aircraft */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Aircraft
          </label>
          <input
            name="aircraft"
            value={flightData.aircraft}
            onChange={handleFlightInfoChange}
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="e.g., Boeing 737"
          />
        </div>
      </div>
    </div>
  );
};

export default FlightInfo;
