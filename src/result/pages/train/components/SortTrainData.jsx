import React from "react";

const SortTrainData = ({ originalTrains, setTrainData }) => {
  const parseTime = (timeString) => {
    const [hours, minutes] = timeString.split(":").map(Number);
    return hours * 60 + minutes;
  };

  const sortDeparture = (trainData) => {
    const sortedData = [...trainData].sort((a, b) => {
      const minA = Math.min(
        ...a.stations.map((station) => parseTime(station.departureTime))
      );
      const minB = Math.min(
        ...b.stations.map((station) => parseTime(station.departureTime))
      );
      return minA - minB;
    });
    return sortedData;
  };

  const sortArrival = (trainData) => {
    const sortedData = [...trainData].sort((a, b) => {
      const minA = Math.min(
        ...a.stations.map((station) => parseTime(station.arrivalTime))
      );
      const minB = Math.min(
        ...b.stations.map((station) => parseTime(station.arrivalTime))
      );
      return minA - minB;
    });
    return sortedData;
  };

  const sortDuration = (trainData) => {
    const sortedData = [...trainData].map((train) => {
      const firstStation = train.stations[0];
      const lastStation = train.stations[train.stations.length - 1];
      const duration =
        parseTime(lastStation.arrivalTime) -
        parseTime(firstStation.departureTime);
      return { ...train, duration };
    });
    sortedData.sort((a, b) => a.duration - b.duration);
    return sortedData;
  };

  return (
    <div>
      <div className="flex justify-between bg-green-400 p-2">
        <button
          className="bg-yellow-200"
          onClick={() => {
            setTrainData(sortDeparture(originalTrains));
          }}
        >
          Departure
        </button>
        <button
          className="bg-yellow-200"
          onClick={() => {
            setTrainData(sortArrival(originalTrains));
          }}
        >
          Arrival
        </button>
        <button
          className="bg-yellow-200"
          onClick={() => {
            setTrainData(sortDuration(originalTrains));
          }}
        >
          Duration
        </button>
      </div>
    </div>
  );
};

export default SortTrainData;
