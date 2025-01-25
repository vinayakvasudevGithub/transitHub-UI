// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { GiSteeringWheel } from "react-icons/gi";
// import { MdOutlineEventSeat } from "react-icons/md";
// import { useSelector } from "react-redux";

// const ForBookingSeats = ({ busData, handleSelectBus }) => {
//   const [selectedSeat, setSelectedSeat] = useState();
//   const searchKey = useSelector((State) => State.bus.buses);
//   const lastSearch = searchKey?.[searchKey.length - 1];

//   const [BookedDetails, setBookedDetails] = useState();
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBookedDetails = async () => {
//       try {
//         const response = await axios.get("http://localhost:4001/busticket");
//         setBookedDetails(response.data);
//       } catch (err) {
//         console.error("Error fetching booked details:", err);
//         setError("Failed to fetch booked details. Please try again later.");
//       }
//     };

//     fetchBookedDetails();
//   }, []);

//   const bookedSeatNumber = BookedDetails?.flatMap(
//     (data) =>
//       data.busdetails?.map(
//         (busdetails) =>
//           busdetails.departurecity === lastSearch.from &&
//           busdetails.arrivalcity === lastSearch.to &&
//           busdetails.busseatnumber
//       ) || []
//   );

//   console.log(selectedSeat);
//   // console.log(bookedSeatNumber);

//   return (
//     <div className="bg-green-300">
//       {error && <p className="text-red-500">{error}</p>}{" "}
//       {/* Display error if any */}
//       {busData.map((data) => (
//         <div key={data._id}>
//           <p>Bus Name: {data.busname}</p>
//           <p>Total Seats: {data.seatdetails[0]?.seats.length}</p>

//           <div className="flex justify-center">
//             <div className="bg-white border border-red-300">
//               <div className="flex justify-end">
//                 <GiSteeringWheel className="w-[51px] h-[75px]" />
//               </div>
//               {data.seatdetails.map((seatdetails) =>
//                 seatdetails.seats.map((row, rowIndex) => (
//                   <div key={rowIndex} className="flex">
//                     {row.map((seat, colIndex) => (
//                       <div key={colIndex} className="flex">
//                         {seat === 0 ? (
//                           <div className="p-7"></div>
//                         ) : (
//                           <div
//                             onClick={() => {
//                               !bookedSeatNumber?.includes(seat) &&
//                                 setSelectedSeat(!selectedSeat ? seat : false);
//                               !bookedSeatNumber?.includes(seat) &&
//                                 handleSelectBus(seat);
//                             }}
//                             className={`p-2  ${
//                               bookedSeatNumber?.includes(seat)
//                                 ? "bg-gray-400 cursor-not-allowed" // Disabled look for booked seats
//                                 : "hover:bg-red-300 cursor-pointer " // Interactive style for available seats
//                             } ${
//                               selectedSeat === seat && "bg-fuchsia-400"
//                             } text-center w-14 h-13 flex  items-center justify-center border`}
//                           >
//                             <MdOutlineEventSeat
//                               className={`w-[3rem] h-[3rem] ${
//                                 bookedSeatNumber?.includes(seat)
//                                   ? "text-gray-500"
//                                   : "text-black"
//                               }`}
//                             />
//                             <p className="text-xs">{seat}</p>
//                           </div>
//                         )}
//                         {colIndex + 1 ===
//                           parseInt(seatdetails.seatformation.split("+")) && (
//                           <div className="p-5"></div>
//                         )}
//                       </div>
//                     ))}
//                   </div>
//                 ))
//               )}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ForBookingSeats;

import axios from "axios";
import React, { useEffect, useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { MdOutlineEventSeat } from "react-icons/md";
import { useSelector } from "react-redux";
import seatImage from "../../../../../assets/seat.png";

const ForBookingSeats = ({ busData, handleSelectBus }) => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const searchKey = useSelector((state) => state.bus.buses);
  const lastSearch = searchKey?.[searchKey.length - 1];

  const [bookedDetails, setBookedDetails] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookedDetails = async () => {
      try {
        const response = await axios.get("http://localhost:4001/busticket");
        setBookedDetails(response.data);
      } catch (err) {
        console.error("Error fetching booked details:", err);
        setError("Failed to fetch booked details. Please try again later.");
      }
    };

    fetchBookedDetails();
  }, []);

  const bookedSeatNumbers = bookedDetails?.flatMap(
    (data) =>
      data.busdetails
        ?.filter(
          (busdetails) =>
            busdetails.departurecity === lastSearch.from &&
            busdetails.arrivalcity === lastSearch.to
        )
        .map((busdetails) => busdetails.busseatnumber) || []
  );

  return (
    <div className="bg-gray-100 p-6 rounded-lg ">
      {error && (
        <p className="text-red-500 text-center bg-red-100 p-2 rounded-md mb-4">
          {error}
        </p>
      )}
      {busData.map((data) => (
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
                              <img src={seatImage} alt="" className="w-6 h-6" />
                              {/* <MdOutlineEventSeat className="w-6 h-6" /> */}
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
      ))}
    </div>
  );
};

export default ForBookingSeats;
