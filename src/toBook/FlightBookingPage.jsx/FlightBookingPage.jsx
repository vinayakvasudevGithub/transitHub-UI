import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";

const FlightBookingPage = () => {
  const [flightData, setFlightData] = useState([]);
  const location = useLocation();
  const id = location.state?.id;

  useEffect(() => {
    axios
      .get(`http://localhost:4001/flight/${id}`)
      .then((Response) => {
        setFlightData([Response.data]);
      })
      .catch((error) => console.log("flight", error));
  }, []);
  //   const date = "2024-12-09"; // Example date
  //   const parsedDate = new Date(date); // Convert string to Date object

  //   const formattedDate = `${format(parsedDate, "MMMM")}, ${format(
  //     parsedDate,
  //     "EEEE"
  //   )}`;

  return (
    <div className="p-1">
      <p>flight booking page</p>
      {flightData.map((data) => (
        <div
          key={data._id}
          className="mt-5 bg-red-300 p-1 grid sm:grid-cols-2 gap-2"
        >
          <div className="bg-green-200 ">car</div>
          <div className="bg-yellow-200 p-1 ">
            {data.airport.map((airport) => (
              <div key={airport._id} className="bg-red-400 p-1">
                <div className=" text-xl font-bold flex bg-green-400 gap-2 ">
                  <h1>{airport.city}</h1>
                  {data.destination.map((destination) => (
                    <div key={destination._id}>{destination.city}</div>
                  ))}
                </div>
                <div className="text-sm">
                  {new Date(data.departureDate)
                    .toDateString()
                    .split(" ")
                    .slice(0, 3)
                    .join(" ")}
                </div>
              </div>
            ))}
            <div className="bg-blue-300 mt-2">hh</div>
          </div>
          <div>B</div>
        </div>
      ))}
    </div>
  );
};

export default FlightBookingPage;
