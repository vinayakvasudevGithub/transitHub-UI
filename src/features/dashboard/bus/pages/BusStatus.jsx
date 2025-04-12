import React from "react";
import UpcomingTrips from "../components/UpcomingTrips";
import Alerts from "../components/Alerts";
import Actions from "../components/Actions";

const BusStatus = ({ fleetData, bookingsData }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Left Column */}
      <div className="lg:w-2/3 space-y-6">
        {/* Fleet Status */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Fleet Status
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Bus ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Last Maintenance
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {fleetData.map((bus) => (
                  <tr key={bus.id}>
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
                      {bus.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {bus.route}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          bus.status === "active"
                            ? "bg-green-100 text-green-800"
                            : bus.status === "maintenance"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {bus.status.charAt(0).toUpperCase() +
                          bus.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                      {new Date(bus.lastMaintenance).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        Details
                      </button>
                      <button className="text-gray-600 hover:text-gray-900">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* <BusUsers /> */}
      </div>

      {/* Right Column */}
      <div className="lg:w-1/3 space-y-6">
        {/* Upcoming Trips */}
        <UpcomingTrips bookingsData={bookingsData} />
        {/* Alerts & Maintenance */}
        <Alerts />
        {/* Quick Actions */}
        {/* <Actions /> */}
      </div>
    </div>
  );
};

export default BusStatus;
