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
