import React from "react";

const FareOptions = ({
  handlePrices,
  handleSeats,
  handleTravelclass,
  flightData,
}) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Travel Class & Pricing
      </h2>

      {/* Travel Class Selection */}
      <div className="mb-6 p-4 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-medium mb-3 text-gray-700">
          Select Travel Class
        </h3>
        <div className="flex flex-wrap gap-4">
          {flightData.travelclass.map((travelclass, index) => (
            <div key={index} className="space-y-2">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id={`economy-${index}`}
                  name="travelClass"
                  value="economy"
                  checked={travelclass === "economy"}
                  onChange={() => handleTravelclass(index, "economy")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor={`economy-${index}`}
                  className="text-sm font-medium text-gray-700"
                >
                  Economy
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id={`premiumEconomy-${index}`}
                  name="travelClass"
                  value="premiumEconomy"
                  checked={travelclass === "premiumEconomy"}
                  onChange={() => handleTravelclass(index, "premiumEconomy")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor={`premiumEconomy-${index}`}
                  className="text-sm font-medium text-gray-700"
                >
                  Premium Economy
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id={`business-${index}`}
                  name="travelClass"
                  value="business"
                  checked={travelclass === "business"}
                  onChange={() => handleTravelclass(index, "business")}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor={`business-${index}`}
                  className="text-sm font-medium text-gray-700"
                >
                  Business
                </label>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Available Seats */}
      <div className="mb-6 p-4 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-medium mb-3 text-gray-700">
          Available Seats
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {flightData.seats.map((seats, index) => (
            <React.Fragment key={index}>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Economy Seats
                </label>
                <input
                  type="number"
                  name="economy"
                  value={seats.economy}
                  onChange={(e) => handleSeats(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Premium Economy Seats
                </label>
                <input
                  type="number"
                  name="premiumEconomy"
                  value={seats.premiumEconomy}
                  onChange={(e) => handleSeats(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Seats
                </label>
                <input
                  type="number"
                  name="business"
                  value={seats.business}
                  onChange={(e) => handleSeats(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="p-4 border border-gray-200 rounded-lg">
        <h3 className="text-lg font-medium mb-3 text-gray-700">Pricing</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {flightData.prices.map((prices, index) => (
            <React.Fragment key={index}>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Economy Price ($)
                </label>
                <input
                  type="number"
                  name="economy"
                  value={prices.economy}
                  onChange={(e) => handlePrices(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Premium Economy Price ($)
                </label>
                <input
                  type="number"
                  name="premiumEconomy"
                  value={prices.premiumEconomy}
                  onChange={(e) => handlePrices(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                  step="0.01"
                />
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Business Price ($)
                </label>
                <input
                  type="number"
                  name="business"
                  value={prices.business}
                  onChange={(e) => handlePrices(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  min="0"
                  step="0.01"
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FareOptions;
