import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResultForBusBokking from "./components/ResultForBusBokking";
import LeftSideBarForBus from "./components/LeftSideBarForBus";
import SearchBarForBus from "./components/SearchBarForBus";

const BusResult = () => {
  const searchKey = useSelector((State) => State.bus.buses);
  const from = searchKey[searchKey.length - 1].from;
  const to = searchKey[searchKey.length - 1].to;

  const [Buses, setBuses] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4001/bus/search?from=${from}&to=${to}`)
      .then((response) => {
        const busData = response.data;
        const matchingBuses = [];

        busData.forEach((bus) => {
          const hasFromStation = bus.stations.some(
            (station) => station.city === from
          );
          const hasToStation = bus.stations.some(
            (station) => station.city === to
          );
          hasFromStation && hasToStation && matchingBuses.push(bus);
        });
        setBuses(matchingBuses);
      })
      .catch((err) => console.log("Error fetching buses", err));
  }, [from, to]);

  return (
    <div className="bg-red-200">
      <div>transithub</div>
      <div className="sticky flex justify-center top-0 bg-yellow-300 p-1 ">
        <SearchBarForBus from={from} to={to} />
      </div>
      <div className="flex  gap-4 mt-5 bg-red-400  p-1">
        <LeftSideBarForBus />
        <ResultForBusBokking from={from} to={to} busData={Buses} />
      </div>
    </div>
  );
};

export default BusResult;
