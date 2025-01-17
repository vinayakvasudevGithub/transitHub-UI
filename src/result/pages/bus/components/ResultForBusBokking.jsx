// import React, { useState } from "react";
// import ForBookingSeats from "./SelectSeat/ForBookingSeats";
// import { BusBookingDetails } from "../../../../store/BookingSlice/BusBookingSlice";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const ResultForBusBooking = ({ from, to, distance, busData }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [activeBusId, setActiveBusId] = useState(null);
//   const [isBookingDetailsComplete, setIsBookingDetailsComplete] =
//     useState(false);

//   const handleSelectBus = (
//     busSeatNumber,
//     busName,
//     busType,
//     arrivalTime,
//     departureTime
//   ) => {
//     if (busSeatNumber && busName && busType && arrivalTime && departureTime) {
//       setIsBookingDetailsComplete(true);
//       dispatch(
//         BusBookingDetails({
//           busSeatNumber,
//           busName,
//           busType,
//           arrivalTime,
//           departureTime,
//         })
//       );
//     }
//   };

//   const handleNavigateToConfirmBookingPage = () => {
//     if (isBookingDetailsComplete) {
//       navigate("/booking/busTicket");
//     }
//   };

//   return (
//     <div className=" p-4">
//       {/* Header */}

//       <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 rounded-lg shadow-md">
//         <h2 className="text-3xl font-semibold uppercase">
//           Bus from {from} to {to}
//         </h2>
//         <p className="text-lg mt-2">Distance: {distance} km</p>
//       </div>

//       {/* Bus Data */}
//       {busData.length === 0 ? (
//         <p>No buses available for the selected route.</p>
//       ) : (
//         busData.map((bus) => {
//           const departure = bus.stations.find(
//             (station) => station.city.toLowerCase() === from.toLowerCase()
//           );
//           const arrival = bus.stations.find(
//             (station) => station.city.toLowerCase() === to.toLowerCase()
//           );

//           // Calculate duration
//           const duration =
//             departure && arrival
//               ? (() => {
//                   const departureTime = new Date(
//                     `1970-01-01T${departure.departureTime}`
//                   );
//                   const arrivalTime = new Date(
//                     `1970-01-01T${arrival.arrivaltime}`
//                   );
//                   const diffInMinutes = Math.abs(
//                     (arrivalTime - departureTime) / (1000 * 60)
//                   );
//                   const hours = Math.floor(diffInMinutes / 60);
//                   const minutes = diffInMinutes % 60;
//                   return `${hours}h ${minutes}m`;
//                 })()
//               : "N/A";

//           return (
//             <div key={bus._id} className=" p-1 ">
//               {/* Bus Info */}

//               <div className="bg-white rounded-lg shadow-lg  hover:shadow-xl transition-shadow duration-300  ">
//                 <div className=" sm:grid grid-cols-8 border-b-2  ">
//                   <div className=" p-4 flex justify-between items-center">
//                     <div>
//                       <h3 className="text-xl font-bold text-gray-800">
//                         {bus.busname}
//                       </h3>
//                       <p className="text-sm text-gray-500">{bus.bustype}</p>
//                     </div>
//                   </div>
//                   {/* </div> */}
//                   <div className="col-span-6 grid grid-cols-12  ">
//                     {/* Journey Info */}
//                     {/* Departure */}
//                     <div className="col-span-4 flex justify-end items-center ">
//                       <div className="col-span-4 text-center">
//                         <h4 className="text-lg font-semibold text-gray-600">
//                           Departure
//                         </h4>
//                         <p className="text-xl font-bold text-gray-800">
//                           {departure?.departureTime || "N/A"}
//                         </p>
//                         <p className="text-sm text-gray-500">{from}</p>
//                       </div>
//                     </div>

//                     {/* Duration */}
//                     <div className="col-span-4 flex flex-col items-center justify-center">
//                       <span className="text-gray-700 bg-gray-100 px-4 py-2 rounded-full shadow">
//                         {duration}
//                       </span>
//                     </div>

//                     {/* Arrival */}
//                     <div className="col-span-4  p-2  flex justify-start border-r-2 ">
//                       <div className="col-span-4 text-center">
//                         <h4 className="text-lg font-semibold text-gray-600">
//                           Arrival
//                         </h4>
//                         <p className="text-xl font-bold text-gray-800">
//                           {arrival?.arrivaltime || "N/A"}
//                         </p>
//                         <p className="text-sm text-gray-500">{to}</p>
//                       </div>
//                     </div>
//                   </div>
//                   {/* Ticket Price */}
//                   <div className=" p-1 col-span-1   ">
//                     <div className=" flex justify-end">
//                       <h2 className="text-xs font-semibold text-gray-600">
//                         Starts at
//                       </h2>
//                     </div>
//                     <div className="flex justify-end">
//                       {bus.ticketprices.map((ticket) => {
//                         const ticketFare =
//                           ticket.minimumfare + distance * ticket.perkilometre;
//                         return (
//                           <p
//                             key={ticket._id}
//                             className="text-xl font-semibold "
//                           >
//                             ₹{ticketFare.toFixed(2)}
//                           </p>
//                         );
//                       })}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="  p-1 ">
//                   <div className="text-right col-span-1">
//                     <button
//                       onClick={() =>
//                         setActiveBusId((prevId) =>
//                           prevId === bus._id ? null : bus._id
//                         )
//                       }
//                       className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
//                     >
//                       {activeBusId === bus._id ? "Close Seats" : "Select Seats"}
//                     </button>
//                   </div>

//                   {activeBusId === bus._id && (
//                     <div className=" bg-gray-100 p-4 rounded">
//                       <ForBookingSeats
//                         busData={[bus]}
//                         handleSelectBus={(busSeatNumber) =>
//                           handleSelectBus(
//                             busSeatNumber,
//                             bus.busname,
//                             bus.bustype,
//                             arrival?.arrivaltime || "N/A",
//                             departure?.departureTime || "N/A"
//                           )
//                         }
//                       />

//                       <div className="text-right mt-4">
//                         <button
//                           onClick={handleNavigateToConfirmBookingPage}
//                           className={`px-6 py-2 rounded-lg font-semibold ${
//                             isBookingDetailsComplete
//                               ? "bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600"
//                               : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                           } transition-all duration-300`}
//                           disabled={!isBookingDetailsComplete}
//                         >
//                           Continue
//                         </button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           );
//         })
//       )}
//     </div>
//   );
// };

// export default ResultForBusBooking;

import React, { useState } from "react";
import ForBookingSeats from "./SelectSeat/ForBookingSeats";
import { BusBookingDetails } from "../../../../store/BookingSlice/BusBookingSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ResultForBusBooking = ({ from, to, distance, busData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeBusId, setActiveBusId] = useState(null);
  const [isBookingDetailsComplete, setIsBookingDetailsComplete] =
    useState(false);

  const handleSelectBus = (
    busSeatNumber,
    busName,
    busType,
    arrivalTime,
    departureTime
  ) => {
    if (busSeatNumber && busName && busType && arrivalTime && departureTime) {
      setIsBookingDetailsComplete(true);
      dispatch(
        BusBookingDetails({
          busSeatNumber,
          busName,
          busType,
          arrivalTime,
          departureTime,
        })
      );
    }
  };

  const handleNavigateToConfirmBookingPage = () => {
    if (isBookingDetailsComplete) {
      navigate("/booking/busTicket");
    }
  };

  return (
    <div className="p-4">
      {/* Header */}

      {/* Bus Data */}
      {busData.length === 0 ? (
        <p>No buses available for the selected route.</p>
      ) : (
        busData.map((bus) => {
          const departure = bus.stations.find(
            (station) => station.city.toLowerCase() === from.toLowerCase()
          );
          const arrival = bus.stations.find(
            (station) => station.city.toLowerCase() === to.toLowerCase()
          );

          // Calculate duration
          const duration =
            departure && arrival
              ? (() => {
                  const departureTime = new Date(
                    `1970-01-01T${departure.departureTime}`
                  );
                  const arrivalTime = new Date(
                    `1970-01-01T${arrival.arrivaltime}`
                  );
                  const diffInMinutes = Math.abs(
                    (arrivalTime - departureTime) / (1000 * 60)
                  );
                  const hours = Math.floor(diffInMinutes / 60);
                  const minutes = diffInMinutes % 60;
                  return `${hours}h ${minutes}m`;
                })()
              : "N/A";

          return (
            <div key={bus._id} className="p-1 ">
              {/* Bus Info */}
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="sm:grid grid-cols-8 border-b-2">
                  <div className="p-4 flex justify-between items-center">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {bus.busname}
                      </h3>
                      <p className="text-sm text-gray-500">{bus.bustype}</p>
                    </div>
                  </div>

                  <div className="col-span-6 grid grid-cols-12">
                    {/* Journey Info */}
                    {/* Departure */}
                    <div className="col-span-4 flex justify-end items-center">
                      <div className="col-span-4 text-center">
                        <h4 className="text-lg font-semibold text-gray-600">
                          Departure
                        </h4>
                        <p className="text-xl font-bold text-gray-800">
                          {departure?.departureTime || "N/A"}
                        </p>
                        <p className="text-sm text-gray-500">{from}</p>
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="col-span-4 flex flex-col items-center justify-center">
                      <span className="text-gray-700 bg-gray-100 px-4 py-2 rounded-full shadow">
                        {duration}
                      </span>
                    </div>

                    {/* Arrival */}
                    <div className="col-span-4 p-2 flex justify-start border-r-2">
                      <div className="col-span-4 text-center">
                        <h4 className="text-lg font-semibold text-gray-600">
                          Arrival
                        </h4>
                        <p className="text-xl font-bold text-gray-800">
                          {arrival?.arrivaltime || "N/A"}
                        </p>
                        <p className="text-sm text-gray-500">{to}</p>
                      </div>
                    </div>
                  </div>

                  {/* Ticket Price */}
                  <div className="p-1 col-span-1">
                    <div className="flex justify-end">
                      <h2 className="text-xs font-semibold text-gray-600">
                        Starts at
                      </h2>
                    </div>
                    <div className="flex justify-end">
                      {bus.ticketprices.map((ticket) => {
                        const ticketFare =
                          ticket.minimumfare + distance * ticket.perkilometre;
                        return (
                          <p key={ticket._id} className="text-xl font-semibold">
                            ₹{ticketFare.toFixed(2)}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="p-1  ">
                  <div className=" flex justify-end">
                    <div className="grid bg-yellow-200 p-1 rounded-lg">
                      <button
                        onClick={() =>
                          setActiveBusId((prevId) =>
                            prevId === bus._id ? null : bus._id
                          )
                        }
                        // className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
                        className="shining-button bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none "
                      >
                        {activeBusId === bus._id
                          ? "Close Seats"
                          : "Select Seats"}
                      </button>
                      <div className="flex justify-center items-center">
                        <h3 className="text-xs">Available Seats</h3>
                      </div>
                    </div>
                  </div>

                  {/* Animated Dropdown for Seats */}
                  <div
                    className={`transition-all duration-200 ease-in-out overflow-hidden ${
                      activeBusId === bus._id
                        ? "max-h-[500px] p-4"
                        : "max-h-0 p-0"
                    } bg-gray-100 rounded mt-4`}
                    style={{
                      maxHeight: activeBusId === bus._id ? "500px" : "0",
                    }}
                  >
                    {activeBusId === bus._id && (
                      <ForBookingSeats
                        busData={[bus]}
                        handleSelectBus={(busSeatNumber) =>
                          handleSelectBus(
                            busSeatNumber,
                            bus.busname,
                            bus.bustype,
                            arrival?.arrivaltime || "N/A",
                            departure?.departureTime || "N/A"
                          )
                        }
                      />
                    )}

                    <div className="text-right mt-4">
                      <button
                        onClick={handleNavigateToConfirmBookingPage}
                        className={`px-6 py-2 rounded-lg font-semibold ${
                          isBookingDetailsComplete
                            ? "bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        } transition-all duration-300`}
                        disabled={!isBookingDetailsComplete}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default ResultForBusBooking;

// import React, { useState } from "react";
// import ForBookingSeats from "./SelectSeat/ForBookingSeats";
// import { BusBookingDetails } from "../../../../store/BookingSlice/BusBookingSlice";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

// const ResultForBusBooking = ({ from, to, distance, busData }) => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [activeBusId, setActiveBusId] = useState(null);
//   const [isBookingDetailsComplete, setIsBookingDetailsComplete] =
//     useState(false);

//   const handleSelectBus = (
//     busSeatNumber,
//     busName,
//     busType,
//     arrivalTime,
//     departureTime
//   ) => {
//     if (busSeatNumber && busName && busType && arrivalTime && departureTime) {
//       setIsBookingDetailsComplete(true);
//       dispatch(
//         BusBookingDetails({
//           busSeatNumber,
//           busName,
//           busType,
//           arrivalTime,
//           departureTime,
//         })
//       );
//     }
//   };

//   const handleNavigateToConfirmBookingPage = () => {
//     if (isBookingDetailsComplete) {
//       navigate("/booking/busTicket");
//     }
//   };

//   return (
//     <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-200 min-h-screen">
//       {/* Header */}
// <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 rounded-lg shadow-md">
//   <h2 className="text-3xl font-semibold uppercase">
//     Bus from {from} to {to}
//   </h2>
//   <p className="text-lg mt-2">Distance: {distance} km</p>
// </div>

//       {/* Bus Data */}
//       <div className="mt-6 space-y-6 ">
//         {busData.length === 0 ? (
//           <p className="text-center text-gray-500 text-xl">
//             No buses available for the selected route.
//           </p>
//         ) : (
//           busData.map((bus) => {
//             const departure = bus.stations.find(
//               (station) => station.city.toLowerCase() === from.toLowerCase()
//             );
//             const arrival = bus.stations.find(
//               (station) => station.city.toLowerCase() === to.toLowerCase()
//             );

//             // Calculate duration
//             const duration =
//               departure && arrival
//                 ? (() => {
//                     const departureTime = new Date(
//                       `1970-01-01T${departure.departureTime}`
//                     );
//                     const arrivalTime = new Date(
//                       `1970-01-01T${arrival.arrivaltime}`
//                     );
//                     const diffInMinutes = Math.abs(
//                       (arrivalTime - departureTime) / (1000 * 60)
//                     );
//                     const hours = Math.floor(diffInMinutes / 60);
//                     const minutes = diffInMinutes % 60;
//                     return `${hours}h ${minutes}m`;
//                   })()
//                 : "N/A";

//             return (
//               <div
//                 key={bus._id}
//                 className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
//               >
//                 {/* Bus Info */}
//                 <div className="flex justify-between items-center">
//                   <div>
// <h3 className="text-xl font-bold text-gray-800">
//   {bus.busname}
// </h3>
//                     <p className="text-sm text-gray-500">{bus.bustype}</p>
//                   </div>
// <div className="text-right">
//   {bus.ticketprices.map((ticket) => {
//     const ticketFare =
//       ticket.minimumfare + distance * ticket.perkilometre;
//     return (
//       <p
//         key={ticket._id}
//         className="text-xl font-semibold text-blue-600"
//       >
//         ₹{ticketFare.toFixed(2)}
//       </p>
//     );
//   })}
// </div>
//                 </div>

//                 {/* Journey Info */}
//                 <div className="grid grid-cols-12 gap-4 mt-6">
//                   {/* Departure */}
// <div className="col-span-4 text-center">
//   <h4 className="text-lg font-semibold text-gray-600">
//     Departure
//   </h4>
//   <p className="text-xl font-bold text-gray-800">
//     {departure?.departureTime || "N/A"}
//   </p>
//   <p className="text-sm text-gray-500">{from}</p>
// </div>

//                   {/* Duration */}
// <div className="col-span-4 flex flex-col items-center justify-center">
//   <span className="text-gray-700 bg-gray-100 px-4 py-2 rounded-full shadow">
//     {duration}
//   </span>
// </div>

//                   {/* Arrival */}
// <div className="col-span-4 text-center">
//   <h4 className="text-lg font-semibold text-gray-600">
//     Arrival
//   </h4>
//   <p className="text-xl font-bold text-gray-800">
//     {arrival?.arrivaltime || "N/A"}
//   </p>
//   <p className="text-sm text-gray-500">{to}</p>
// </div>
//                 </div>

//                 {/* Select Seats */}
//                 <div className="mt-6 text-right">
// <button
//   onClick={() =>
//     setActiveBusId((prevId) =>
//       prevId === bus._id ? null : bus._id
//     )
//   }
//   className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
// >
//   {activeBusId === bus._id ? "Close Seats" : "Select Seats"}
// </button>
//                 </div>

//                 {/* Seat Selection */}
//                 {activeBusId === bus._id && (
//                   <div className="mt-6 bg-gray-100 rounded-lg p-6 shadow">
//                     <ForBookingSeats
//                       busData={[bus]}
//                       handleSelectBus={(busSeatNumber) =>
//                         handleSelectBus(
//                           busSeatNumber,
//                           bus.busname,
//                           bus.bustype,
//                           arrival?.arrivaltime || "N/A",
//                           departure?.departureTime || "N/A"
//                         )
//                       }
//                     />

//                     {/* Continue Button */}
//                     <div className="text-right mt-4">
// <button
//   onClick={handleNavigateToConfirmBookingPage}
//   className={`px-6 py-2 rounded-lg font-semibold ${
//     isBookingDetailsComplete
//       ? "bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600"
//       : "bg-gray-300 text-gray-500 cursor-not-allowed"
//   } transition-all duration-300`}
//   disabled={!isBookingDetailsComplete}
// >
//   Continue
// </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })
//         )}
//       </div>
//     </div>
//   );
// };

// export default ResultForBusBooking;
