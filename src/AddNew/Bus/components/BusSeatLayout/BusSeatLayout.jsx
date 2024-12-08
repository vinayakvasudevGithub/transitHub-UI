import React, { useEffect, useState } from "react";

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
      <div className="mt-2 flex gap-6">
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
      </div>
      <div className="flex justify-center">
        <div className="bg-white grid-flow-row p-1">
          <div className="flex justify-end">
            <div className="bg-red-300 p-[2.5px]">Driver</div>
          </div>
          {seatPattern.map((row, rowIndex) => (
            <div key={rowIndex} className="flex gap-1 mb-1 mt-1">
              {row.map((seat, colIndex) => (
                <div key={colIndex} className="flex">
                  <div
                    onClick={() => addAndRemoveSeat(seat)}
                    className={`p-2 text-center w-10 h-10 flex items-center justify-center ${
                      seat === 0 ? "bg-gray-400" : "bg-red-300"
                    }`}
                  >
                    {seat === 0 ? "X" : seat}
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
