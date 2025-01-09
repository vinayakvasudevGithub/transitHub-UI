import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResultsForBooking from "./components/ResultsForBooking";
import LeftSideBar from "./components/LeftSideBar";
import SearchBar from "./components/SearchBar";
import SortFlightData from "./components/SortFlightData";
import axios from "axios";

const FlightResult = () => {
  const searchKey = useSelector((State) => State.flight.flights);
  const from = searchKey[searchKey.length - 1].from;
  const to = searchKey[searchKey.length - 1].to;

  const [originalFlights, setOriginalFlights] = useState([]);
  const [flight, setFlight] = useState([]);
  const [FirstFlightData, setFirstFlightData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4001/flight/search?from=${from}&to=${to}`)
      .then((response) => {
        setFlight(response.data);
        setOriginalFlights(response.data);
        const firstData = response.data[0];
        setFirstFlightData([firstData]);
      })
      .catch((err) => console.log("flight", err));
  }, [from, to]);

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
      <div className="grid lg:grid-cols-4 gap-2 bg-red-800  p-2">
        {/* <div className="col-span-1 hidden lg:block"> */}
        <div className="col-span-1 ">
          <LeftSideBar />
        </div>
        <div className="col-span-3">
          <SortFlightData
            originalFlights={originalFlights}
            setFlight={setFlight}
          />
          <ResultsForBooking
            FlightFrom={from}
            FlightTo={to}
            FlightData={flight}
          />
        </div>
      </div>
    </div>
  );
};

export default FlightResult;
