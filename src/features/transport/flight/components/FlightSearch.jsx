// import React from 'react'

// const FlightSearch = () => {
//   return (
//     <div>FlightSearch</div>
//   )
// }

// export default FlightSearch

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

// import { tripInfo } from "../../../store/slices/userTransport/flightUserSlice";
// import { getAllFlights } from "../../../api/services/transport/flightApi";
import { tripInfo } from "../../../../store/slices/userTransport/flightUserSlice";
import { getAllFlights } from "../../../../api/services/transport/flightApi";

const FlightSearch = ({ FlightFrom, FlightTo, FirstFlightData }) => {
  const [searchFrom, setsearchFrom] = useState(FlightFrom || "");
  const [searchTo, setsearchTo] = useState(FlightTo || "");
  const [travelDate, setTravelDate] = useState(""); // State for date input
  const dispatch = useDispatch();

  const searchMore = (e) => {
    e.preventDefault();
    dispatch(
      tripInfo({
        departureCity: searchFrom ? searchFrom : FlightFrom,
        destinationCity: searchTo ? searchTo : FlightTo,
        // date: travelDate, // Include date in dispatch
      })
    );
    window.location.reload();
  };

  // Fetch flight data
  const [inpsearch, setInpsearch] = useState([]);
  useEffect(() => {
    const fetchAllFlights = async () => {
      try {
        const data = await getAllFlights();
        setInpsearch(data);
      } catch (error) {
        console.error("Error fetching flights");
      }
    };
    fetchAllFlights();
  }, []);

  // Filtered options for departure and destination
  const filteredAirports = inpsearch.flatMap((flight) =>
    flight.airport.filter((airport) =>
      airport.city.toLowerCase().includes(searchFrom.toLowerCase())
    )
  );

  const filteredDestinations = inpsearch.flatMap((flight) =>
    flight.destination.filter((destination) =>
      destination.city.toLowerCase().includes(searchTo.toLowerCase())
    )
  );

  // Manage input box visibility
  const [inpBox, SetinpBox] = useState("");
  const InpBoxShow = (value) => {
    value === "from" && SetinpBox("from");
    value === "to" && SetinpBox("to");
  };

  // Local states for selected departure/destination details
  const [DepartureCityName, setDepartureCityName] = useState("");
  const [DepartureairportName, setDepartureairportName] = useState("");
  const [destinationAirportName, setdestinationAirportName] = useState("");
  const [destinationCityName, setdestinationCityName] = useState("");

  return (
    <div className="bg-white p-3 w-full shadow-sm">
      {/* <form onSubmit={searchMore} className=" gap-4 bg-red-100 p-1"> */}
      {FirstFlightData.map((data) => (
        <div className="sm:grid grid-cols-7 gap-1" key={data._id}>
          {/* Input box for departure city */}
          {data.airport.map((airport) => (
            <div className="col-span-2 " key={airport._id}>
              <p className="text-sm text-gray-600 ">From:</p>
              {inpBox === "from" ? (
                <div>
                  <input
                    className="w-full border rounded-md p-2 text-sm"
                    placeholder="Enter departure city"
                    onChange={(e) =>
                      setsearchFrom(e.target.value || DepartureCityName)
                    }
                  />
                  <div className="relative">
                    <div className="absolute bg-white border rounded-md shadow-md w-full max-h-40 overflow-y-auto z-50">
                      {filteredAirports.map((airport, index) => (
                        <p
                          key={index}
                          className="p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            setDepartureairportName(airport.name);
                            setDepartureCityName(airport.city);
                            setsearchFrom(airport.city);
                            SetinpBox("");
                          }}
                        >
                          {airport.city}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="p-2  border rounded-md cursor-pointer"
                  onClick={() => InpBoxShow("from")}
                >
                  <p className="text-sm font-medium">
                    {DepartureCityName || airport.city}
                  </p>
                  <p className="text-xs text-gray-500">
                    {DepartureairportName || airport.name}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Input box for destination city */}
          {data.destination.map((destination) => (
            <div className="col-span-2 " key={destination._id}>
              <p className="text-sm text-gray-600">To:</p>
              {inpBox === "to" ? (
                <div>
                  <input
                    className="w-full border rounded-md p-2 text-sm"
                    placeholder="Enter destination city"
                    onChange={(e) =>
                      setsearchTo(e.target.value || destinationCityName)
                    }
                  />
                  <div className="relative">
                    <div className="absolute bg-white border rounded-md shadow-md w-full max-h-40 overflow-y-auto z-50">
                      {filteredDestinations.map((destination, index) => (
                        <p
                          key={index}
                          className="p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            setdestinationAirportName(destination.name);
                            setdestinationCityName(destination.city);
                            setsearchTo(destination.city);
                            SetinpBox("");
                          }}
                        >
                          {destination.city}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="p-2 border rounded-md cursor-pointer"
                  onClick={() => InpBoxShow("to")}
                >
                  <p className="text-sm font-medium">
                    {destinationCityName || destination.city}
                  </p>
                  <p className="text-xs text-gray-500">
                    {destinationAirportName || destination.name}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Date Input */}
          <div className="col-span-2 ">
            <p className="text-sm text-gray-600">Date:</p>
            <input
              type="date"
              className="w-full border rounded-md p-2 text-sm"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
            />
          </div>
          {/* Submit Button */}
          <div className=" flex justify-center">
            <button
              className="bg-blue-700 hover:bg-blue-800 p-3 text-white w-full rounded-lg"
              onClick={searchMore}
            >
              Search
            </button>
          </div>
        </div>
      ))}
      {/* </form> */}
    </div>
  );
};

export default FlightSearch;
