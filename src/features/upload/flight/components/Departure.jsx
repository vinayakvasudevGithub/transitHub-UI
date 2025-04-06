import React from "react";

const Departure = ({
  handleDepartureAirport,
  handleFlightInfoChange,
  flightData,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Departure Airport Details
      </h2>

      {/* Airport Fields */}
      {flightData.airport.map((airport, index) => (
        <div
          key={index}
          className="mb-6 p-4 border border-gray-200 rounded-lg bg-blue-50"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Airport Code */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Airport Code (IATA)
              </label>
              <input
                type="text"
                name="code"
                value={airport.Code}
                onChange={(e) => handleDepartureAirport(index, e)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., LAX"
              />
            </div>

            {/* Airport Name */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Airport Name
              </label>
              <input
                type="text"
                name="name"
                value={airport.name}
                onChange={(e) => handleDepartureAirport(index, e)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Los Angeles International Airport"
              />
            </div>

            {/* City */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                type="text"
                name="city"
                value={airport.city}
                onChange={(e) => handleDepartureAirport(index, e)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., Los Angeles"
              />
            </div>

            {/* Country */}
            <div className="mb-3">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country
              </label>
              <input
                type="text"
                name="country"
                value={airport.country}
                onChange={(e) => handleDepartureAirport(index, e)}
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., United States"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Departure Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {/* Departure Date */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Departure Date
          </label>
          <input
            type="date"
            name="departureDate"
            value={flightData.departureDate}
            onChange={handleFlightInfoChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Departure Time */}
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Departure Time
          </label>
          <input
            type="time"
            name="departureDateTime"
            value={flightData.departureDateTime}
            onChange={handleFlightInfoChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Departure;
