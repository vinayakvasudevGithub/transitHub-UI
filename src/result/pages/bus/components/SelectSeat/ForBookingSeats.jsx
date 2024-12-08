import axios from "axios";
import React, { useEffect, useState } from "react";
import { GiSteeringWheel } from "react-icons/gi";
import { MdOutlineEventSeat } from "react-icons/md";
import { useSelector } from "react-redux";

const ForBookingSeats = ({ busData, handleSelectBus }) => {
  const searchKey = useSelector((State) => State.bus.buses);
  const lastSearch = searchKey?.[searchKey.length - 1];

  const [BookedDetails, setBookedDetails] = useState();
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

  const bookedSeatNumber = BookedDetails?.flatMap(
    (data) =>
      data.busdetails?.map(
        (busdetails) =>
          busdetails.departurecity === lastSearch.from &&
          busdetails.arrivalcity === lastSearch.to &&
          busdetails.busseatnumber
      ) || []
  );

  console.log(bookedSeatNumber);

  return (
    <div className="bg-green-300">
      {error && <p className="text-red-500">{error}</p>}{" "}
      {/* Display error if any */}
      {busData.map((data) => (
        <div key={data._id}>
          <p>Bus Name: {data.busname}</p>
          <p>Total Seats: {data.seatdetails[0]?.seats.length}</p>

          <div className="flex justify-center">
            <div className="bg-white border border-red-300">
              <div className="flex justify-end">
                <GiSteeringWheel className="w-[51px] h-[75px]" />
              </div>
              {data.seatdetails.map((seatdetails) =>
                seatdetails.seats.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex">
                    {row.map((seat, colIndex) => (
                      <div key={colIndex} className="flex">
                        {seat === 0 ? (
                          <div className="p-7"></div>
                        ) : (
                          <div
                            onClick={() => {
                              !bookedSeatNumber?.includes(seat) &&
                                handleSelectBus(seat);
                            }}
                            className={`p-2 ${
                              bookedSeatNumber?.includes(seat)
                                ? "bg-gray-400 cursor-not-allowed" // Disabled look for booked seats
                                : "hover:bg-red-300 cursor-pointer" // Interactive style for available seats
                            } text-center w-14 h-13 flex items-center justify-center border`}
                          >
                            <MdOutlineEventSeat
                              className={`w-[3rem] h-[3rem] ${
                                bookedSeatNumber?.includes(seat)
                                  ? "text-gray-500"
                                  : "text-black"
                              }`}
                            />
                            <p className="text-xs">{seat}</p>
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
