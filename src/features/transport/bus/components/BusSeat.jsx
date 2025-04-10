// // import React, { useEffect, useState } from "react";
// // import { GiSteeringWheel } from "react-icons/gi";
// // import { useSelector } from "react-redux";
// // import seat2 from "../../../../assets/seat2.png";
// // import { bookedBuses } from "../../../../api/services/transport/busApi";
// // import Loading from "../../../../components/Loading";

// // const BusSeat = ({ busData, handleSelectBus }) => {
// //   const [selectedSeat, setSelectedSeat] = useState(null);
// //   const searchKey = useSelector((state) => state.bus.BusList);
// //   const lastSearch = searchKey?.[searchKey.length - 1];

// //   const [bookedDetails, setBookedDetails] = useState([]);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     const fetchBookedDetails = async () => {
// //       try {
// //         const data = await bookedBuses();
// //         setBookedDetails(data);
// //       } catch (err) {
// //         console.error("Error fetching booked details:", err);
// //         setError("Failed to fetch booked details. Please try again later.");
// //       }
// //     };

// //     fetchBookedDetails();
// //   }, []);

// //   // const bookedSeatNumbers = bookedDetails?.flatMap(
// //   //   (data) =>
// //   //     data.busdetails
// //   //       ?.filter(
// //   //         (busdetails) =>
// //   //           busdetails.departurecity === lastSearch.departureCity &&
// //   //           busdetails.arrivalcity === lastSearch.destinationCity
// //   //       )
// //   //       .map((busdetails) => busdetails.busseatnumber) || []
// //   // );

// //   // const bookedSeatNumbers = bookedDetails
// //   //   .filter((booking) =>
// //   //     booking.busdetails.some((bus) => bus.busnumber === data.busnumber)
// //   //   )
// //   //   .flatMap((booking) =>
// //   //     booking.busdetails
// //   //       .filter((bus) => bus.busnumber === data.busnumber)
// //   //       .map((bus) => bus.busseatnumber)
// //   //   );

// //   return (
// //     <div className="bg-gray-100 p-6 rounded-lg ">
// //       {error && (
// //         <p className="text-red-500 text-center bg-red-100 p-2 rounded-md mb-4">
// //           {error}
// //         </p>
// //       )}
// //       {busData.map((data) => {
// //         const bookedBusNumbers = bookedDetails.flatMap((booking) =>
// //           booking.busdetails.map((bus) => bus.busnumber)
// //         );
// //         // if (bookedBusNumbers.includes(data?.busnumber)) {
// //         //   console.log("yes");
// //         // }

// //         const bookedSeatNumbers = bookedDetails
// //           .filter((booking) =>
// //             booking.busdetails.some((bus) => bus.busnumber === data.busnumber)
// //           )
// //           .flatMap((booking) =>
// //             booking.busdetails
// //               .filter((bus) => bus.busnumber === data.busnumber)
// //               .map((bus) => bus.busseatnumber)
// //           );

// //         return (
// //           <div key={data._id} className="mb-8">
// //             <h2 className="text-2xl font-bold text-gray-800 mb-2">
// //               {data.busname}
// //             </h2>
// //             <p className="text-gray-600 mb-4">
// //               Total Seats: {data.seatdetails[0]?.seats.length}
// //             </p>

// //             <div className="flex justify-center">
// //               <div className="bg-white  border-gray-300 rounded-lg p-6 shadow-lg">
// //                 <div className="flex justify-end mb-4">
// //                   <GiSteeringWheel className="w-12 h-12 text-gray-600" />
// //                 </div>
// //                 {data.seatdetails.map((seatdetails) =>
// //                   seatdetails.seats.map((row, rowIndex) => (
// //                     <div
// //                       key={rowIndex}
// //                       className="flex space-x-[1px] space-y-[1px]"
// //                     >
// //                       {row.map((seat, colIndex) => (
// //                         <div key={colIndex} className="flex ">
// //                           {seat === 0 ? (
// //                             <div className="p-7"></div>
// //                           ) : (
// //                             <div
// //                               onClick={() => {
// //                                 if (!bookedSeatNumbers?.includes(seat)) {
// //                                   setSelectedSeat(seat);
// //                                   handleSelectBus(seat);
// //                                 }
// //                               }}
// //                               className={`p-2 text-center w-14 h-14 flex items-center justify-center border rounded-lg transition-all ${
// //                                 bookedSeatNumbers?.includes(seat)
// //                                   ? // bookedBusNumbers?.includes(data?.busnumber)
// //                                     // data?.busnumber === bok
// //                                     "bg-gray-300 cursor-not-allowed text-gray-500" // Booked seats
// //                                   : "hover:bg-blue-100 cursor-pointer text-gray-800" // Available seats
// //                               } ${
// //                                 selectedSeat === seat &&
// //                                 "bg-blue-500 text-white hover:bg-blue-600" // Selected seat
// //                               }`}
// //                             >
// //                               <div className="">
// //                                 <img src={seat2} alt="" className="w-6 h-6" />
// //                                 {/* <MdOutlineEventSeat className="w-6 h-6" /> */}
// //                                 <p className="text-xs ml-1">{seat}</p>
// //                               </div>
// //                             </div>
// //                           )}
// //                           {colIndex + 1 ===
// //                             parseInt(seatdetails.seatformation.split("+")) && (
// //                             <div className="p-5"></div>
// //                           )}
// //                         </div>
// //                       ))}
// //                     </div>
// //                   ))
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         );
// //       })}
// //     </div>
// //   );
// // };

// // export default BusSeat;

// import React, { useEffect, useState } from "react";
// import { GiSteeringWheel } from "react-icons/gi";
// import { useSelector } from "react-redux";
// import seat2 from "../../../../assets/seat2.png";
// import { bookedBuses } from "../../../../api/services/transport/busApi";
// import Loading from "../../../../components/Loading";

// const BusSeat = ({ busData, handleSelectBus }) => {
//   const [selectedSeat, setSelectedSeat] = useState(null);
//   const searchKey = useSelector((state) => state.bus.BusList);
//   const lastSearch = searchKey?.[searchKey.length - 1];

//   const [bookedDetails, setBookedDetails] = useState([]);
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(true); // 🔹 added loading state

//   useEffect(() => {
//     const fetchBookedDetails = async () => {
//       try {
//         const data = await bookedBuses();
//         setBookedDetails(data);
//       } catch (err) {
//         console.error("Error fetching booked details:", err);
//         setError("Failed to fetch booked details. Please try again later.");
//       } finally {
//         setLoading(false); // 🔹 loading complete
//       }
//     };

//     fetchBookedDetails();
//   }, []);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-64">
//         <Loading />
//       </div>
//     ); // 🔹 Show loading while fetching booked seats
//   }

//   return (
//     <div className="bg-gray-100 p-6 rounded-lg ">
//       {error && (
//         <p className="text-red-500 text-center bg-red-100 p-2 rounded-md mb-4">
//           {error}
//         </p>
//       )}
//       {busData.map((data) => {
//         const bookedBusNumbers = bookedDetails.flatMap((booking) =>
//           booking.busdetails.map((bus) => bus.busnumber)
//         );

//         const bookedSeatNumbers = bookedDetails
//           .filter((booking) =>
//             booking.busdetails.some((bus) => bus.busnumber === data.busnumber)
//           )
//           .flatMap((booking) =>
//             booking.busdetails
//               .filter((bus) => bus.busnumber === data.busnumber)
//               .map((bus) => bus.busseatnumber)
//           );

//         return (
//           <div key={data._id} className="mb-8">
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">
//               {data.busname}
//             </h2>
//             <p className="text-gray-600 mb-4">
//               Total Seats: {data.seatdetails[0]?.seats.length}
//             </p>

//             <div className="flex justify-center">
//               <div className="bg-white  border-gray-300 rounded-lg p-6 shadow-lg">
//                 <div className="flex justify-end mb-4">
//                   <GiSteeringWheel className="w-12 h-12 text-gray-600" />
//                 </div>
//                 {data.seatdetails.map((seatdetails) =>
//                   seatdetails.seats.map((row, rowIndex) => (
//                     <div
//                       key={rowIndex}
//                       className="flex space-x-[1px] space-y-[1px]"
//                     >
//                       {row.map((seat, colIndex) => (
//                         <div key={colIndex} className="flex ">
//                           {seat === 0 ? (
//                             <div className="p-7"></div>
//                           ) : (
//                             <div
//                               onClick={() => {
//                                 if (!bookedSeatNumbers?.includes(seat)) {
//                                   setSelectedSeat(seat);
//                                   handleSelectBus(seat);
//                                 }
//                               }}
//                               className={`p-2 text-center w-14 h-14 flex items-center justify-center border rounded-lg transition-all ${
//                                 bookedSeatNumbers?.includes(seat)
//                                   ? "bg-gray-300 cursor-not-allowed text-gray-500"
//                                   : "hover:bg-blue-100 cursor-pointer text-gray-800"
//                               } ${
//                                 selectedSeat === seat &&
//                                 "bg-blue-500 text-white hover:bg-blue-600"
//                               }`}
//                             >
//                               <div className="">
//                                 <img src={seat2} alt="" className="w-6 h-6" />
//                                 <p className="text-xs ml-1">{seat}</p>
//                               </div>
//                             </div>
//                           )}
//                           {colIndex + 1 ===
//                             parseInt(seatdetails.seatformation.split("+")) && (
//                             <div className="p-5"></div>
//                           )}
//                         </div>
//                       ))}
//                     </div>
//                   ))
//                 )}
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default BusSeat;

import React, { useEffect, useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { useSelector } from "react-redux";
import seat2 from "../../../../assets/seat2.png";
import { bookedBuses } from "../../../../api/services/transport/busApi";
import Loading from "../../../../components/Loading";

const BusSeat = ({ busData, handleSelectBus }) => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const searchKey = useSelector((state) => state.bus.BusList);
  const lastSearch = searchKey?.[searchKey.length - 1];

  const [bookedDetails, setBookedDetails] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookedDetails = async () => {
      try {
        setLoading(true);
        const data = await bookedBuses();
        setBookedDetails(data);
      } catch (err) {
        console.error("Error fetching booked details:", err);
        setError("Failed to fetch booked details. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookedDetails();
  }, []);

  if (loading) {
    return <Loading />;
  }

  // console.log(bookedDetails);

  return (
    <div className="bg-gray-100 p-6 rounded-lg ">
      {error && (
        <p className="text-red-500 text-center bg-red-100 p-2 rounded-md mb-4">
          {error}
        </p>
      )}
      {busData.map((data) => {
        const bookedBusNumbers = bookedDetails.flatMap((booking) =>
          booking.busdetails.map((bus) => bus.busnumber)
        );

        const bookedSeatNumbers = bookedDetails
          .filter((booking) =>
            booking.busdetails.some((bus) => bus.busnumber === data.busnumber)
          )
          .flatMap((booking) =>
            booking.busdetails
              .filter((bus) => bus.busnumber === data.busnumber)
              .map((bus) => bus.busseatnumber)
          );

        return (
          <div key={data._id} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {data.busname}
            </h2>
            <p className="text-gray-600 mb-4">
              Total Seats: {data.seatdetails[0]?.seats.length}
            </p>

            <div className="flex justify-center">
              <div className="bg-white  border-gray-300 rounded-lg p-6 shadow-lg">
                <div className="flex justify-end mb-4">
                  <GiSteeringWheel className="w-12 h-12 text-gray-600" />
                </div>
                {data.seatdetails.map((seatdetails) =>
                  seatdetails.seats.map((row, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="flex space-x-[1px] space-y-[1px]"
                    >
                      {row.map((seat, colIndex) => (
                        <div key={colIndex} className="flex ">
                          {seat === 0 ? (
                            <div className="p-7"></div>
                          ) : (
                            <div
                              onClick={() => {
                                if (!bookedSeatNumbers?.includes(seat)) {
                                  setSelectedSeat(seat);
                                  handleSelectBus(seat);
                                }
                              }}
                              className={`p-2 text-center w-14 h-14 flex items-center justify-center border rounded-lg transition-all ${
                                bookedSeatNumbers?.includes(seat)
                                  ? "bg-gray-300 cursor-not-allowed text-gray-500" // Booked seats
                                  : "hover:bg-blue-100 cursor-pointer text-gray-800" // Available seats
                              } ${
                                selectedSeat === seat &&
                                "bg-blue-500 text-white hover:bg-blue-600" // Selected seat
                              }`}
                            >
                              <div className="">
                                <img src={seat2} alt="" className="w-6 h-6" />
                                <p className="text-xs ml-1">{seat}</p>
                              </div>
                            </div>
                          )}
                          {colIndex + 1 ===
                            parseInt(seatdetails.seatformation.split("+")) && (
                            <div className="p-5"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BusSeat;
