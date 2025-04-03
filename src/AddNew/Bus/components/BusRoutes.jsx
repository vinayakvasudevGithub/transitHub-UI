// import React from "react";

// const BusRoutes = ({
//   BusData,
//   AddMoreStations,
//   handleStationChange,
//   handlePageChange,
//   isStationsFilled,
// }) => {
//   return (
//     <div>
//       <p className="bg-yellow-300 mt-4 ">stations</p>
//       {BusData.stations.map((stations, index) => (
//         <div key={index}>
//           <div className="">
//             <label>Station Name:</label>
//             <input
//               className="bg-red-300"
//               type="text"
//               name="station"
//               value={stations.station}
//               onChange={(e) => handleStationChange(index, e)}
//               required
//             />
//           </div>
//           <div>
//             <label>city : </label>
//             <input
//               className="bg-red-300"
//               type="text"
//               name="city"
//               value={stations.city}
//               onChange={(e) => handleStationChange(index, e)}
//               required
//             />
//           </div>
//           <div>
//             <label>district : </label>
//             <input
//               className="bg-red-300"
//               type="text"
//               name="district"
//               value={stations.district}
//               onChange={(e) => handleStationChange(index, e)}
//               required
//             />
//           </div>
//           <div>
//             <label>state : </label>
//             <input
//               className="bg-red-300"
//               type="text"
//               name="state"
//               value={stations.state}
//               onChange={(e) => handleStationChange(index, e)}
//               required
//             />
//           </div>
//           <div>
//             <label>arrivaltime : </label>
//             <input
//               className="bg-red-300"
//               type="time"
//               name="arrivaltime"
//               value={stations.arrivaltime}
//               onChange={(e) => handleStationChange(index, e)}
//               required
//             />
//           </div>
//           <div>
//             <label>departureTime : </label>
//             <input
//               className="bg-red-300"
//               type="time"
//               name="departureTime"
//               value={stations.departureTime}
//               onChange={(e) => handleStationChange(index, e)}
//               required
//             />
//           </div>
//         </div>
//       ))}
//       <button type="button" onClick={AddMoreStations}>
//         Add++
//       </button>
//       <button
//         className={!isStationsFilled ? "bg-red-500" : "bg-green-500"}
//         onClick={(e) => {
//           handlePageChange("SecondPage");
//         }}
//       >
//         next page
//       </button>
//     </div>
//   );
// };

// export default BusRoutes;
import React from "react";

const BusRoutes = ({
  BusData,
  AddMoreStations,
  handleStationChange,
  handlePageChange,
  isStationsFilled,
}) => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 rounded-t-lg">
        <h2 className="text-xl font-bold">Bus Stations</h2>
      </div>

      {/* Main Form */}
      <div className="p-6 bg-white rounded-b-lg shadow-sm space-y-6">
        {/* Stations List */}
        {BusData.stations.map((stations, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 rounded-lg space-y-4"
          >
            <h3 className="text-lg font-medium text-gray-800">
              Station #{index + 1}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Station Name
                </label>
                <input
                  type="text"
                  name="station"
                  value={stations.station}
                  onChange={(e) => handleStationChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={stations.city}
                  onChange={(e) => handleStationChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  District
                </label>
                <input
                  type="text"
                  name="district"
                  value={stations.district}
                  onChange={(e) => handleStationChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  State
                </label>
                <input
                  type="text"
                  name="state"
                  value={stations.state}
                  onChange={(e) => handleStationChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Arrival Time
                </label>
                <input
                  type="time"
                  name="arrivaltime"
                  value={stations.arrivaltime}
                  onChange={(e) => handleStationChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Departure Time
                </label>
                <input
                  type="time"
                  name="departureTime"
                  value={stations.departureTime}
                  onChange={(e) => handleStationChange(index, e)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={AddMoreStations}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md transition-colors"
          >
            + Add Station
          </button>

          <button
            type="button"
            onClick={(e) => handlePageChange("SecondPage")}
            disabled={!isStationsFilled}
            className={`px-6 py-2 rounded-md font-medium text-white ${
              isStationsFilled
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

export default BusRoutes;
