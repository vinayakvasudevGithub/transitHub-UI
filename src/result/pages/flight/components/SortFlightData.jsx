import React, { useState } from "react";

const SortFlightData = ({ originalFlights, setFlight }) => {
  const [sortPrice, setSortPrice] = useState(false);
  const [sortArrivalTime, setSortArrivalTime] = useState(false);
  const [sortDepartureTime, setSortDepartureTime] = useState(false);
  const [sortDuration, setSortDuration] = useState(false);

  const parseTime = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const sortFlightDataByPrice = (flightData) => {
    const sortedData = [...flightData].sort((a, b) => {
      const minA = Math.min(...a.prices.map((price) => price.ecconomy));
      const minB = Math.min(...b.prices.map((price) => price.ecconomy));
      return minA - minB;
    });
    return sortedData;
  };

  const sortDataByDepartureTime = (flightData) => {
    const sortedData = [...flightData].sort((a, b) => {
      const minA = Math.min(
        ...a.airport.map((airport) => parseTime(airport.departureTime))
      );
      const minB = Math.min(
        ...b.airport.map((airport) => parseTime(airport.departureTime))
      );
      return minA - minB;
    });
    return sortedData;
  };

  const sortDataByArrivalTime = (flightData) => {
    const sortedData = [...flightData].sort((a, b) => {
      const minA = Math.min(
        ...a.destination.map((destination) =>
          parseTime(destination.arrivalTime)
        )
      );
      const minB = Math.min(
        ...b.destination.map((destination) =>
          parseTime(destination.arrivalTime)
        )
      );
      return minA - minB;
    });
    return sortedData;
  };

  const sortDataByDuration = (flightData) => {
    const sortedData = [...flightData].sort((a, b) => {
      // Calculate duration for flight A
      const durationA =
        a.destination[0] && a.airport[0]
          ? parseTime(a.destination[0].arrivalTime) -
            parseTime(a.airport[0].departureTime)
          : Number.MAX_SAFE_INTEGER; // Handle missing data gracefully

      // Calculate duration for flight B
      const durationB =
        b.destination[0] && b.airport[0]
          ? parseTime(b.destination[0].arrivalTime) -
            parseTime(b.airport[0].departureTime)
          : Number.MAX_SAFE_INTEGER;

      // Compare durations
      return durationA - durationB;
    });

    return sortedData;
  };

  return (
    <div className="bg-yellow-300 p-1">
      <div className="flex justify-between bg-green-200 p-1">
        <button
          className="bg-red-400"
          onClick={() => {
            setFlight(sortFlightDataByPrice(originalFlights));
          }}
        >
          Cheapest
        </button>
        <button
          className="bg-red-300"
          onClick={() => {
            setFlight(sortDataByDepartureTime(originalFlights));
          }}
        >
          Departure
        </button>
        <button
          className="bg-red-300"
          onClick={() => {
            setFlight(sortDataByArrivalTime(originalFlights));
          }}
        >
          Arrival
        </button>
        <button
          className="bg-red-300"
          onClick={() => setFlight(sortDataByDuration(originalFlights))}
        >
          Duration
        </button>
      </div>
    </div>
  );
};

export default SortFlightData;
