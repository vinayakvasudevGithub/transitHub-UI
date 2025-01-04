import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResultForBusBokking from "./components/ResultForBusBokking";
import LeftSideBarForBus from "./components/LeftSideBarForBus";
import SearchBarForBus from "./components/SearchBarForBus";
import SortBusData from "./components/SortBusData";

const BusResult = () => {
  const searchKey = useSelector((state) => state.bus.buses);
  const from = searchKey[searchKey.length - 1].from;
  const to = searchKey[searchKey.length - 1].to;

  const [distance, setDistance] = useState();
  const [buses, setBuses] = useState([]);
  const [originalBuses, setOriginalBuses] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY_GOOGLE_MAP;

  useEffect(() => {
    axios
      .get(
        `https://maps.gomaps.pro/maps/api/distancematrix/json?destinations=${from}&origins=${to}&key=${apiKey}`
      )
      .then((response) => {
        const distanceText = response?.data?.rows[0].elements[0].distance.text;
        if (distanceText) {
          const numericDistance = parseFloat(
            distanceText.replace(/[^0-9.]/g, "")
          );
          setDistance(numericDistance);
        }
      })
      .catch((error) => {
        console.log("Error fetching distance:", error);
      });
  }, [from, to, apiKey]);

  useEffect(() => {
    axios
      .get(`http://localhost:4001/bus/search?from=${from}&to=${to}`)
      .then((response) => {
        setOriginalBuses(response.data); // Store the original fetched data
        setBuses(response.data);
      })
      .catch((err) => console.log("Error fetching buses", err));
  }, [from, to]);

  return (
    <div className="bg-red-500 p-1">
      <div>transithub</div>
      <div className="sticky flex justify-center top-0 bg-yellow-300 p-1 ">
        <SearchBarForBus from={from} to={to} />
      </div>
      <div className="grid lg:grid-cols-4 gap-1 mt-5 bg-green-500 p-1">
        <div className="col-span-1 hidden lg:block">
          {/* <div className="col-span-1 "> */}
          <LeftSideBarForBus
            from={from}
            to={to}
            originalBuses={originalBuses}
            setBuses={setBuses}
            busData={buses}
          />
        </div>
        <div className="col-span-3 space-y-1">
          <div className="bg-yellow-200 p-1 gap-1">
            <SortBusData originalBuses={originalBuses} setBuses={setBuses} />
          </div>
          <ResultForBusBokking
            from={from}
            to={to}
            distance={distance}
            busData={buses}
          />
        </div>
      </div>
    </div>
  );
};

export default BusResult;
