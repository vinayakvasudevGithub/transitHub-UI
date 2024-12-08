import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResultsForBooking from "./components/ResultsForBooking";
import LeftSideBar from "./components/LeftSideBar";
import SearchBar from "./components/SearchBar";
import axios from "axios";

const FlightResult = () => {
  //to get departure city and arrival city
  const searchKey = useSelector((State) => State.flight.flights);
  const from = searchKey[searchKey.length - 1].from;
  const to = searchKey[searchKey.length - 1].to;

  //to get all the flight details to pass components
  const [flight, setFlight] = useState([]);
  const [FirstFlightData, setFirstFlightData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4001/flight/search?from=${from}&to=${to}`)
      .then((response) => {
        setFlight(response.data);
        const firstData = response.data[0];
        setFirstFlightData([firstData]);
      })
      .catch((err) => console.log("flight", err));
  }, []);

  return (
    <div className="bg-gray-200 p-2">
      <div className="flex  bg-red-500 ">transithub</div>

      <div className="sticky flex justify-center top-0 bg-yellow-300 p-1  ">
        <SearchBar
          FlightFrom={from}
          FlightTo={to}
          FlightData={flight}
          FirstFlightData={FirstFlightData}
        />
      </div>
      <div className="flex  gap-4 mt-5 bg-red-800  p-2">
        <LeftSideBar />
        <ResultsForBooking
          FlightFrom={from}
          FlightTo={to}
          FlightData={flight}
        />
      </div>
    </div>
  );
};

export default FlightResult;
