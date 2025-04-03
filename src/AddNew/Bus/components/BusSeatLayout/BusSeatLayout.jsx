import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus, FaChair } from "react-icons/fa";

const BusSeatLayout = ({ seatFormation, totalSeats, BusData, SetBusData }) => {
  const [leftSeats, rightSeats] = seatFormation.split("+");

  const [column, setColumn] = useState(
    parseInt(leftSeats) + parseInt(rightSeats)
  );
  const [row, setRow] = useState(5);

  const [seatPattern, setSeatPattern] = useState(
    generateSeats(row, parseInt(leftSeats), parseInt(rightSeats))
  );

  // console.log(BusData);

  // Function to generate seats
  function generateSeats(rowCount, leftSeatsCount, rightSeatsCount) {
    const seats = [];
    for (let i = 0; i < rowCount; i++) {
      const rowLetter = String.fromCharCode(65 + i); // A, B, C, etc.
      const cols = [];
      for (let j = 1; j <= leftSeatsCount + rightSeatsCount; j++) {
        cols.push(`${rowLetter}-${j}`);
      }
      seats.push(cols);
    }
    return seats;
  }

  // Function to update BusData with seatPattern
  const updateBusDataSeats = (newSeatPattern) => {
    SetBusData((prevData) => ({
      ...prevData,
      seatdetails: [
        {
          ...prevData.seatdetails[0],
          seats: newSeatPattern, // Update seats array in BusData
        },
      ],
    }));
  };

  // Function to handle adding/removing seats
  const addAndRemoveSeat = (seatNum) => {
    const updatedSeats = seatPattern.map((row) =>
      row.map((seat) => (seat === seatNum ? 0 : seat))
    );
    setSeatPattern(updatedSeats);
    updateBusDataSeats(updatedSeats); // Update BusData with the modified seat pattern
  };

  // Effect to regenerate seats and update BusData when seatFormation or row changes
  useEffect(() => {
    const parsedLeftSeats = parseInt(leftSeats);
    const parsedRightSeats = parseInt(rightSeats);
    const newSeatPattern = generateSeats(
      row,
      parsedLeftSeats,
      parsedRightSeats
    );
    setColumn(parsedLeftSeats + parsedRightSeats); // Update column count
    setSeatPattern(newSeatPattern); // Regenerate seats
    updateBusDataSeats(newSeatPattern); // Update BusData with the new seat pattern
  }, [seatFormation, row]);

  return (
    <div>
      <div className="flex items-center justify-between bg-gray-100 p-3 rounded-lg mb-4">
        <div className="flex items-center gap-2">
          <FaChair className="text-blue-600" />
          <span className="font-medium text-gray-700">Rows: {row}</span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.preventDefault();
              setRow(row + 1);
            }}
            className="flex items-center gap-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <FaPlus className="text-sm" />
            <span>Add</span>
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              if (row > 1) setRow(row - 1);
            }}
            className={`flex items-center gap-1 px-3 py-2 rounded-md transition-colors ${
              row <= 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-red-600 text-white hover:bg-red-700"
            }`}
            disabled={row <= 1}
          >
            <FaMinus className="text-sm" />
            <span>Remove</span>
          </button>
        </div>
      </div>

      {/* <div className="mt-2 flex justify-center gap-6  ">
        Row: {row}
        <button
          onClick={(e) => {
            e.preventDefault();
            setRow(row + 1);
          }}
          className="bg-blue-400"
        >
          Increment Row +
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (row > 1) {
              setRow(row - 1);
            }
          }}
          className="bg-red-400"
        >
          Decrement Row -
        </button>
      </div> */}
      <div className="flex justify-center ">
        <div className="bg-white  border-gray-300 rounded-lg p-6 shadow-lg">
          <div className="flex justify-end">
            <div className="bg-red-300 p-[2.5px]">Driver</div>
          </div>
          {seatPattern.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1 mb-1 mt-1">
              {row.map((seat, colIndex) => (
                <div key={colIndex} className="flex">
                  <div
                    onClick={() => addAndRemoveSeat(seat)}
                    className={`p-2 text-center w-14 h-14  flex items-center justify-center  rounded-lg  ${
                      seat === 0
                        ? ""
                        : "hover:bg-gray-100 cursor-pointer text-gray-800 border"
                    }`}
                  >
                    {seat === 0 ? " " : seat}
                  </div>
                  {colIndex + 1 === parseInt(leftSeats) && (
                    <div className="p-5"></div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusSeatLayout;

// import React, { useEffect, useState } from "react";
// import { FaBus, FaChair, FaUserAlt, FaPlus, FaMinus } from "react-icons/fa";

// const BusSeatLayout = ({ seatFormation, totalSeats, BusData, SetBusData }) => {
//   const [leftSeats, rightSeats] = seatFormation.split("+").map(Number);
//   const [rows, setRows] = useState(5);
//   const totalColumns = leftSeats + rightSeats;

//   // Generate seat pattern
//   const generateSeats = (rowCount, leftCount, rightCount) => {
//     return Array.from({ length: rowCount }, (_, rowIdx) => {
//       const rowLetter = String.fromCharCode(65 + rowIdx);
//       return [
//         ...Array.from(
//           { length: leftCount },
//           (_, colIdx) => `${rowLetter}-L${colIdx + 1}`
//         ),
//         ...Array.from(
//           { length: rightCount },
//           (_, colIdx) => `${rowLetter}-R${colIdx + 1}`
//         ),
//       ];
//     });
//   };

//   const [seatPattern, setSeatPattern] = useState(() =>
//     generateSeats(rows, leftSeats, rightSeats)
//   );

//   // Update BusData with seats
//   const updateBusData = (pattern) => {
//     SetBusData((prev) => ({
//       ...prev,
//       seatdetails: [
//         {
//           ...prev.seatdetails[0],
//           seats: pattern,
//         },
//       ],
//     }));
//   };

//   // Toggle seat selection
//   const toggleSeat = (seatId) => {
//     const newPattern = seatPattern.map((row) =>
//       row.map((seat) => (seat === seatId ? 0 : seat))
//     );
//     setSeatPattern(newPattern);
//     updateBusData(newPattern);
//   };

//   // Regenerate when rows or formation changes
//   useEffect(() => {
//     const newPattern = generateSeats(rows, leftSeats, rightSeats);
//     setSeatPattern(newPattern);
//     updateBusData(newPattern);
//   }, [rows, seatFormation]);

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg">
//       {/* Header */}
//       <div className="flex items-center gap-3 mb-6">
//         <FaBus className="text-blue-600 text-2xl" />
//         <div>
//           <h2 className="text-2xl font-bold text-gray-800">
//             Seat Configuration
//           </h2>
//           <p className="text-gray-500">
//             {rows} rows × {totalColumns} seats ({leftSeats}+{rightSeats}{" "}
//             formation)
//           </p>
//         </div>
//       </div>

//       {/* Controls */}
//       <div className="bg-gray-50 p-4 rounded-lg mb-6">
//         <div className="flex items-center justify-between">
//           <div>
//             <h3 className="font-medium text-gray-700">Adjust Rows</h3>
//             <p className="text-sm text-gray-500">Current: {rows} rows</p>
//           </div>
//           <div className="flex gap-2">
//             <button
//               onClick={() => setRows((r) => Math.max(1, r - 1))}
//               disabled={rows <= 1}
//               className="p-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 disabled:opacity-50 transition-all"
//             >
//               <FaMinus />
//             </button>
//             <button
//               onClick={() => setRows((r) => r + 1)}
//               className="p-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-all"
//             >
//               <FaPlus />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Seat Map */}
//       <div className="relative">
//         {/* Bus Front */}
//         <div className="flex justify-center mb-4">
//           <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center gap-2">
//             <FaUserAlt />
//             <span>Driver Cabin</span>
//           </div>
//         </div>

//         {/* Seats */}
//         <div className="space-y-4">
//           {seatPattern.map((row, rowIndex) => (
//             <div key={rowIndex} className="flex justify-center gap-6">
//               {/* Left Seats */}
//               <div className="flex gap-2">
//                 {row.slice(0, leftSeats).map((seat, seatIndex) => (
//                   <SeatButton
//                     key={`${rowIndex}-L${seatIndex}`}
//                     seat={seat}
//                     onClick={() => toggleSeat(seat)}
//                   />
//                 ))}
//               </div>

//               {/* Aisle */}
//               <div className="w-16 flex items-center justify-center">
//                 <div className="h-8 w-full bg-gray-100 rounded-md"></div>
//               </div>

//               {/* Right Seats */}
//               <div className="flex gap-2">
//                 {row.slice(leftSeats).map((seat, seatIndex) => (
//                   <SeatButton
//                     key={`${rowIndex}-R${seatIndex}`}
//                     seat={seat}
//                     onClick={() => toggleSeat(seat)}
//                   />
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Wheel Indicators */}
//         <div className="flex justify-between mt-6 px-8">
//           <div className="w-12 h-12 rounded-full border-4 border-gray-300 flex items-center justify-center">
//             <span className="text-xs text-gray-500">Front</span>
//           </div>
//           <div className="w-12 h-12 rounded-full border-4 border-gray-300 flex items-center justify-center">
//             <span className="text-xs text-gray-500">Rear</span>
//           </div>
//         </div>
//       </div>

//       {/* Legend */}
//       <div className="mt-8 grid grid-cols-2 gap-4">
//         <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
//           <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center text-white">
//             <FaChair />
//           </div>
//           <div>
//             <h4 className="font-medium">Available Seat</h4>
//             <p className="text-sm text-gray-500">Click to select</p>
//           </div>
//         </div>
//         <div className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg">
//           <div className="w-8 h-8 bg-gray-400 rounded-md flex items-center justify-center text-white">
//             <FaChair />
//           </div>
//           <div>
//             <h4 className="font-medium">Booked Seat</h4>
//             <p className="text-sm text-gray-500">Already reserved</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SeatButton = ({ seat, onClick }) => (
//   <button
//     onClick={() => onClick(seat)}
//     className={`w-12 h-12 flex items-center justify-center rounded-lg transition-all
//       ${
//         seat === 0
//           ? "bg-gray-400 text-white cursor-not-allowed"
//           : "bg-green-500 text-white hover:bg-green-600 shadow-md hover:shadow-lg"
//       }`}
//     disabled={seat === 0}
//   >
//     {seat === 0 ? (
//       <FaChair className="text-lg" />
//     ) : (
//       <span className="font-medium">
//         {seat.split("-")[1].replace("L", "").replace("R", "")}
//       </span>
//     )}
//   </button>
// );

// export default BusSeatLayout;
