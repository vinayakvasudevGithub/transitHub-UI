import React, { useState } from "react";

const BusSortingBar = ({ originalBuses, setBuses, buses }) => {
  const [sortPrice, setSortPrice] = useState(false);
  const [sortArrivalTime, setSortArrivalTime] = useState(false);
  const [sortDepartureTime, setSortDepartureTime] = useState(false);
  const [sortDuration, setSortDuration] = useState(false);

  const parseTime = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const sortBusDataByPrice = (busData) => {
    const sortedBusData = [...busData].sort((a, b) => {
      const minA = Math.min(
        ...a.ticketprices.map((ticket) => ticket.perkilometre)
      );
      const minB = Math.min(
        ...b.ticketprices.map((ticket) => ticket.perkilometre)
      );
      return minA - minB;
    });
    return sortedBusData;
  };

  const sortDataByDepartureTime = (busData) => {
    const sortedBusData = [...busData].sort((a, b) => {
      const minA = Math.min(
        ...a.stations.map((station) => parseTime(station.departureTime))
      );
      const minB = Math.min(
        ...b.stations.map((station) => parseTime(station.departureTime))
      );
      return minA - minB;
    });
    return sortedBusData;
  };

  const sortDataByArrivalTime = (busData) => {
    const sortedBusData = [...busData].sort((a, b) => {
      const minA = Math.min(
        ...a.stations.map((station) => parseTime(station.arrivaltime))
      );
      const minB = Math.min(
        ...b.stations.map((station) => parseTime(station.arrivaltime))
      );
      return minA - minB;
    });
    return sortedBusData;
  };

  const sortDataByDuration = (busData) => {
    const sortedBusData = [...busData].map((bus) => {
      const firstStation = bus.stations[0];
      const lastStation = bus.stations[bus.stations.length - 1];
      const duration =
        parseTime(lastStation.arrivaltime) -
        parseTime(firstStation.departureTime);
      return { ...bus, duration };
    });

    sortedBusData.sort((a, b) => a.duration - b.duration);
    return sortedBusData;
  };

  return (
    <div className="flex items-center p-4 bg-white  shadow-md">
      {/* Sort By Title */}
      <h1 className="text-lg font-semibold text-gray-700 mr-4">SORT BY:</h1>

      {/* Sort Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => {
            setBuses(sortBusDataByPrice(originalBuses));
            setSortPrice(true);
            setSortArrivalTime(false);
            setSortDepartureTime(false);
            setSortDuration(false);
          }}
          className={`rounded-lg  font-medium transition-all duration-300 ease-in-out ${
            sortPrice
              ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          Cheapest
        </button>

        <button
          onClick={() => {
            setBuses(sortDataByDepartureTime(originalBuses));
            setSortPrice(false);
            setSortArrivalTime(false);
            setSortDepartureTime(true);
            setSortDuration(false);
          }}
          className={`rounded-lg  font-medium transition-all duration-300 ease-in-out ${
            sortDepartureTime
              ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          Departure
        </button>

        <button
          onClick={() => {
            setBuses(sortDataByDuration(originalBuses));
            setSortPrice(false);
            setSortArrivalTime(false);
            setSortDepartureTime(false);
            setSortDuration(true);
          }}
          className={`rounded-lg  font-medium transition-all duration-300 ease-in-out ${
            sortDuration
              ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          Duration
        </button>

        <button
          onClick={() => {
            setBuses(sortDataByArrivalTime(originalBuses));
            setSortPrice(false);
            setSortArrivalTime(true);
            setSortDepartureTime(false);
            setSortDuration(false);
          }}
          className={`rounded-lg  font-medium transition-all duration-300 ease-in-out ${
            sortArrivalTime
              ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          Arrival
        </button>
      </div>

      {/* Showing Buses Text */}
      <div className="ml-auto text-sm text-gray-600 font-medium">
        <span>Showing {buses.length} Buses on this route</span>
      </div>
    </div>
  );
};

export default BusSortingBar;
