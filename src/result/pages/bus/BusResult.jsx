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

  const [distance, setDistance] = useState();

  const apiKey = import.meta.env.VITE_API_KEY_GOOGLE_MAP;
  useEffect(() => {
    axios
      .get(
        `https://maps.gomaps.pro/maps/api/distancematrix/json?destinations=${from.toUpperCase()}&origins=${to.toUpperCase()}&key=${apiKey}`
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

  // console.log(distance);

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

  const combinedTicketFare = Buses.reduce((acc, bus) => {
    bus?.ticketprices?.forEach((ticketprice) => {
      acc.minimumfare = ticketprice?.minimumfare;
      acc.perkilometre = ticketprice?.perkilometre;
    });
    return acc;
  }, {});

  const totalTicketFare =
    combinedTicketFare.minimumfare + distance * combinedTicketFare.perkilometre;

  return (
    <div className="bg-red-500 p-1">
      {/* {console.log(process.env.VITE_API_KEY_GOOGLE_MAP)} */}
      <div>transithub</div>
      <div className="sticky flex justify-center top-0 bg-yellow-300 p-1 ">
        <SearchBarForBus from={from} to={to} />
      </div>
      <div className=" grid lg:grid-cols-4 gap-1 mt-5 bg-green-500  p-1">
        <div className="col-span-1 hidden lg:block ">
          <LeftSideBarForBus />
        </div>
        <div className="col-span-3">
          <ResultForBusBokking
            from={from}
            to={to}
            distance={distance}
            busData={Buses}
          />
        </div>
      </div>
    </div>
  );
};

export default BusResult;
