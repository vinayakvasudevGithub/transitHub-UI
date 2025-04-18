// import React from "react";
// import UpcomingTrips from "../components/UpcomingTrips";
// import Alerts from "../components/Alerts";
// import Actions from "../components/Actions";

// const BusStatus = ({ busData, fleetData, bookingsData }) => {
//   // const data = busData.map((d) => d.busdetails.map((det) => det.busname));
//   // console.log(data);
//   return (
//     <div className="flex flex-col lg:flex-row gap-6">
//       <div className=" space-y-6">
//         {/* Fleet Status */}
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <h3 className="text-lg font-semibold text-gray-800 mb-4">
//             Fleet Status
//           </h3>
//           <div className="overflow-x-auto">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Bus Number
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Bus Name
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Type
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Route
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Seats
//                   </th>
//                   <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                     Actions
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="bg-white divide-y divide-gray-200">
//                 {busData.map((bus) => (
//                   <tr key={bus._id}>
//                     <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">
//                       {bus.busnumber}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-gray-500">
//                       {bus.busname}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-gray-500">
//                       {bus.bustype} {bus.AC === "YES" ? "(AC)" : ""}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex flex-col">
//                         {bus.stations.map((station, index) => (
//                           <span key={station._id} className="text-sm">
//                             {index + 1}. {station.station} (
//                             {station.departureTime})
//                           </span>
//                         ))}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-gray-500">
//                       {bus.seatdetails?.[0]?.totalseats || "N/A"} seats
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                       <button className="text-blue-600 hover:text-blue-900 mr-3">
//                         View Seats
//                       </button>
//                       <button className="text-gray-600 hover:text-gray-900">
//                         Edit
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//       {/* Right Column */}
//       {/* <div className="lg:w-1/3 space-y-6">
//         <UpcomingTrips bookingsData={bookingsData} />
//         <Alerts />
//       </div> */}
//     </div>
//   );
// };

// export default BusStatus;

import React from "react";
import UpcomingTrips from "../components/UpcomingTrips";
import Alerts from "../components/Alerts";

const BusStatus = ({ busData, fleetData, bookingsData }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 ">
      {/* Left - Fleet Table */}
      <div className="flex-1 space-y-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">
            Fleet Overview
          </h2>
          <div className="overflow-x-auto rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Bus No.
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Route
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Seats
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100 text-sm">
                {busData?.map((bus) => (
                  <tr key={bus._id}>
                    <td className="px-4 py-4 font-medium text-gray-900">
                      {bus.busnumber}
                    </td>
                    <td className="px-4 py-4 text-gray-700">{bus.busname}</td>
                    <td className="px-4 py-4">
                      <span className="inline-block px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                        {bus.bustype}{" "}
                        {bus.AC === "YES" && <span className="ml-1">(AC)</span>}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-gray-600">
                      <div className="flex flex-col">
                        {bus.stations.map((station, idx) => (
                          <span key={station._id} className="text-sm">
                            {idx + 1}. {station.station} (
                            {station.departureTime})
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-gray-600">
                      {bus.seatdetails?.[0]?.totalseats || "N/A"}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-semibold 
                        ${
                          bus.status === "active"
                            ? "bg-green-100 text-green-700"
                            : "bg-gray-200 text-gray-600"
                        }`}
                      >
                        {bus.status || "Inactive"}
                      </span>
                    </td>
                    <td className="px-4 py-4 flex gap-2">
                      <button className="text-blue-600 hover:underline text-sm">
                        View Seats
                      </button>
                      <button className="text-gray-600 hover:underline text-sm">
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {busData.length === 0 && (
              <p className="text-center py-4 text-gray-500">
                No buses available.
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Right Column (Sidebar) */}
      {/* <div className="lg:w-1/3 space-y-6">
        <UpcomingTrips bookingsData={bookingsData} />
        <Alerts />
      </div> */}
    </div>
  );
};

export default BusStatus;
