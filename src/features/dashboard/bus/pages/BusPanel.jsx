const BusPanel = ({ buses }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Your Buses ({buses.length})</h2>

        {buses.length === 0 ? (
          <p className="text-gray-500">No buses found</p>
        ) : (
          <div className="space-y-6">
            {buses.map((bus) => (
              <div
                key={bus._id}
                className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{bus.busname}</h3>
                  <span
                    className={`px-3 py-1 rounded-full text-sm ${
                      bus.AC === "YES"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {bus.AC === "YES" ? "AC" : "Non-AC"}
                  </span>
                </div>
                <p className="text-gray-600 mb-2">
                  Bus Number: {bus.busnumber}
                </p>

                {/* Stations */}
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Stations:</h4>
                  <div className="space-y-2">
                    {bus.stations.map((station, index) => (
                      <div
                        key={station._id}
                        className="pl-4 border-l-2 border-blue-200"
                      >
                        <p className="font-medium">
                          {station.station} ({station.city})
                        </p>
                        <p className="text-sm text-gray-500">
                          Arrival: {station.arrivaltime} | Departure:{" "}
                          {station.departureTime}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seats */}
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Seat Configuration:</h4>
                  <p>Total Seats: {bus.seatdetails[0]?.totalseats}</p>
                  <p>Seat Formation: {bus.seatdetails[0]?.seatformation}</p>
                </div>

                {/* Ticket Prices */}
                <div>
                  <h4 className="font-medium mb-2">Pricing:</h4>
                  <p>Minimum Fare: ₹{bus.ticketprices[0]?.minimumfare}</p>
                  <p>Per Kilometer: ₹{bus.ticketprices[0]?.perkilometre}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BusPanel;
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Loading from "../../../../components/Loading";

// const BusPanel = ({ buses }) => {
//   // const [profile, setProfile] = useState(null);
//   // const [loading, setLoading] = useState(true);
//   // const [error, setError] = useState(null);

//   // useEffect(() => {
//   //   const source = axios.CancelToken.source();

//   //   const fetchProfile = async () => {
//   //     try {
//   //       const response = await axios.get("http://localhost:2001/auth/profile", {
//   //         withCredentials: true,
//   //         cancelToken: source.token,
//   //       });

//   //       setProfile(response.data);
//   //     } catch (err) {
//   //       if (!axios.isCancel(err)) {
//   //         setError(
//   //           err.response?.data?.message ||
//   //             err.message ||
//   //             "Failed to fetch profile"
//   //         );
//   //         console.error("Profile fetch error:", err);
//   //       }
//   //     } finally {
//   //       if (!source.token.reason) {
//   //         setLoading(false);
//   //       }
//   //     }
//   //   };

//   //   fetchProfile();

//   //   return () => {
//   //     source.cancel("Component unmounted, request canceled");
//   //   };
//   // }, []);

//   // if (loading) return <Loading />;

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="bg-white rounded-lg shadow-md p-6">
//         <h2 className="text-2xl font-bold mb-4">Your Buses ({buses.length})</h2>

//         {buses.length === 0 ? (
//           <p className="text-gray-500">No buses found</p>
//         ) : (
//           <div className="space-y-6">
//             {buses.map((bus) => (
//               <div
//                 key={bus._id}
//                 className="border rounded-lg p-4 hover:shadow-lg transition-shadow"
//               >
//                 <div className="flex justify-between items-start mb-2">
//                   <h3 className="text-xl font-semibold">{bus.busname}</h3>
//                   <span
//                     className={`px-3 py-1 rounded-full text-sm ${
//                       bus.AC === "YES"
//                         ? "bg-blue-100 text-blue-800"
//                         : "bg-gray-100 text-gray-800"
//                     }`}
//                   >
//                     {bus.AC === "YES" ? "AC" : "Non-AC"}
//                   </span>
//                 </div>
//                 <p className="text-gray-600 mb-2">
//                   Bus Number: {bus.busnumber}
//                 </p>

//                 {/* Stations */}
//                 <div className="mb-4">
//                   <h4 className="font-medium mb-2">Stations:</h4>
//                   <div className="space-y-2">
//                     {bus.stations.map((station, index) => (
//                       <div
//                         key={station._id}
//                         className="pl-4 border-l-2 border-blue-200"
//                       >
//                         <p className="font-medium">
//                           {station.station} ({station.city})
//                         </p>
//                         <p className="text-sm text-gray-500">
//                           Arrival: {station.arrivaltime} | Departure:{" "}
//                           {station.departureTime}
//                         </p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Seats */}
//                 <div className="mb-4">
//                   <h4 className="font-medium mb-2">Seat Configuration:</h4>
//                   <p>Total Seats: {bus.seatdetails[0]?.totalseats}</p>
//                   <p>Seat Formation: {bus.seatdetails[0]?.seatformation}</p>
//                 </div>

//                 {/* Ticket Prices */}
//                 <div>
//                   <h4 className="font-medium mb-2">Pricing:</h4>
//                   <p>Minimum Fare: ₹{bus.ticketprices[0]?.minimumfare}</p>
//                   <p>Per Kilometer: ₹{bus.ticketprices[0]?.perkilometre}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default BusPanel;
