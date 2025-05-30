import React from "react";

const BusInfo = ({
  BusData,
  handleBusInfoChange,
  handlePriceChange,
  isBusInfoFilled,
  isTicketpriceFilled,
  handlePageChange,
}) => {
  const BusAndTicketFilled = isBusInfoFilled && isTicketpriceFilled;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Bus Details</h2>
      </div>

      {/* Main Form */}
      <div className="p-6 bg-white rounded-b-lg shadow-sm space-y-6">
        {/* Bus Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Bus Name
            </label>
            <input
              type="text"
              name="busname"
              value={BusData.busname}
              onChange={handleBusInfoChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Bus Number
            </label>
            <input
              type="text"
              name="busnumber"
              value={BusData.busnumber}
              onChange={handleBusInfoChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Bus Type
            </label>
            <input
              type="text"
              name="bustype"
              value={BusData.bustype}
              onChange={handleBusInfoChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Air Conditioned
            </label>
            <input
              type="text"
              name="AC"
              value={BusData.AC}
              onChange={handleBusInfoChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Fare Details Section */}
        {BusData.ticketprices.map((ticketprices, index) => (
          <div
            key={index}
            className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg space-y-4"
          >
            <h3 className="text-lg font-medium text-yellow-800">
              Bus Fare Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-yellow-700">
                  Minimum Fare (₹)
                </label>
                <input
                  type="number"
                  name="minimumfare"
                  value={ticketprices.minimumfare}
                  onChange={(e) => handlePriceChange(index, e)}
                  className="w-full p-2 border border-yellow-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-yellow-700">
                  Fare Per Kilometre (₹)
                </label>
                <input
                  type="number"
                  name="perkilometre"
                  value={ticketprices.perkilometre}
                  onChange={(e) => handlePriceChange(index, e)}
                  className="w-full p-2 border border-yellow-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Button */}
        <div className="flex justify-end pt-4">
          <button
            type="button"
            onClick={(e) => handlePageChange("firstPage")}
            disabled={!BusAndTicketFilled}
            className={`px-6 py-2 rounded-md font-medium text-white ${
              BusAndTicketFilled
                ? "bg-green-600 hover:bg-green-700"
                : "bg-gray-400 cursor-not-allowed"
            } transition-colors`}
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusInfo;
