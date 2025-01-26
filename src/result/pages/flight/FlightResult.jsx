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
    <div className="p-2 bg-gray-200 ">
      <div className="sticky flex justify-center top-0 p-1 ">
        <SearchBar
          flight={flight}
          FlightFrom={from}
          FlightTo={to}
          FlightData={flight}
          FirstFlightData={FirstFlightData}
        />
      </div>
      <div className="grid lg:grid-cols-4 gap-2  p-1">
        <div className="col-span-1 hidden lg:block">
          {/* <div className="col-span-1 "> */}
          <LeftSideBar
            originalFlights={originalFlights}
            setFlight={setFlight}
            from={from}
            to={to}
            FlightData={flight}
          />
        </div>
        <div className="col-span-3 space-y-3">
          <div>
            <SortFlightData
              flight={flight}
              originalFlights={originalFlights}
              setFlight={setFlight}
            />
          </div>
          <div>
            <ResultsForBooking
              FlightFrom={from}
              FlightTo={to}
              FlightData={flight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightResult;
