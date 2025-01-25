// // import React from "react";

// // const SortTrainData = ({ originalTrains, setTrainData }) => {
// //   const parseTime = (timeString) => {
// //     const [hours, minutes] = timeString.split(":").map(Number);
// //     return hours * 60 + minutes;
// //   };

// //   const sortDeparture = (trainData) => {
// //     const sortedData = [...trainData].sort((a, b) => {
// //       const minA = Math.min(
// //         ...a.stations.map((station) => parseTime(station.departureTime))
// //       );
// //       const minB = Math.min(
// //         ...b.stations.map((station) => parseTime(station.departureTime))
// //       );
// //       return minA - minB;
// //     });
// //     return sortedData;
// //   };

// //   const sortArrival = (trainData) => {
// //     const sortedData = [...trainData].sort((a, b) => {
// //       const minA = Math.min(
// //         ...a.stations.map((station) => parseTime(station.arrivalTime))
// //       );
// //       const minB = Math.min(
// //         ...b.stations.map((station) => parseTime(station.arrivalTime))
// //       );
// //       return minA - minB;
// //     });
// //     return sortedData;
// //   };

// //   const sortDuration = (trainData) => {
// //     const sortedData = [...trainData].map((train) => {
// //       const firstStation = train.stations[0];
// //       const lastStation = train.stations[train.stations.length - 1];
// //       const duration =
// //         parseTime(lastStation.arrivalTime) -
// //         parseTime(firstStation.departureTime);
// //       return { ...train, duration };
// //     });
// //     sortedData.sort((a, b) => a.duration - b.duration);
// //     return sortedData;
// //   };

// //   return (
// //     <div>
// //       <div className="flex gap-1 bg-green-400 p-2">
// //         <button
// //           className="bg-yellow-200 rounded-lg "
// //           onClick={() => {
// //             setTrainData(sortDeparture(originalTrains));
// //           }}
// //         >
// //           Departure
// //         </button>
// //         <button
// //           className="bg-yellow-200"
// //           onClick={() => {
// //             setTrainData(sortArrival(originalTrains));
// //           }}
// //         >
// //           Arrival
// //         </button>
// //         <button
// //           className="bg-yellow-200"
// //           onClick={() => {
// //             setTrainData(sortDuration(originalTrains));
// //           }}
// //         >
// //           Duration
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SortTrainData;

// import React, { useState } from "react";

// const SortTrainData = ({ originalTrains, setTrainData, trains, from, to }) => {
//   const [sortDepartureActive, setSortDepartureActive] = useState(false);
//   const [sortArrivalActive, setSortArrivalActive] = useState(false);
//   const [sortDurationActive, setSortDurationActive] = useState(false);

//   const parseTime = (timeString) => {
//     const [hours, minutes] = timeString.split(":").map(Number);
//     return hours * 60 + minutes;
//   };

//   const sortDeparture = (trainData) => {
//     const sortedData = [...trainData].sort((a, b) => {
//       const minA = Math.min(
//         ...a.stations.map((station) => parseTime(station.departureTime))
//       );
//       const minB = Math.min(
//         ...b.stations.map((station) => parseTime(station.departureTime))
//       );
//       return minA - minB;
//     });
//     return sortedData;
//   };

//   const sortArrival = (trainData) => {
//     const sortedData = [...trainData].sort((a, b) => {
//       const minA = Math.min(
//         ...a.stations.map((station) => parseTime(station.arrivalTime))
//       );
//       const minB = Math.min(
//         ...b.stations.map((station) => parseTime(station.arrivalTime))
//       );
//       return minA - minB;
//     });
//     return sortedData;
//   };

//   const sortDuration = (trainData) => {
//     const sortedData = [...trainData].map((train) => {
//       const firstStation = train.stations.filter(
//         (station) => station.city.toLowerCase() === from.toLowerCase()
//       );
//       console.log(firstStation);
//       const lastStation = train.stations.filter(
//         (station) => station.city.toLowerCase() === to.toLowerCase()
//       );

//       const duration =
//         parseTime(lastStation.arrivalTime) -
//         parseTime(firstStation.departureTime);

//       return { ...train, duration };
//     });
//     sortedData.sort((a, b) => a.duration - b.duration);
//     return sortedData;
//   };

//   return (
//     <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
//       {/* Sort By Title */}
//       <h1 className="text-lg font-semibold text-gray-700 mr-4">SORT BY:</h1>

//       {/* Sort Buttons */}
//       <div className="flex gap-2">
//         <button
//           onClick={() => {
//             setTrainData(sortDeparture(originalTrains));
//             setSortDepartureActive(true);
//             setSortArrivalActive(false);
//             setSortDurationActive(false);
//           }}
//           className={`rounded-lg font-medium transition-all duration-300 ease-in-out ${
//             sortDepartureActive
//               ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white shadow-md"
//               : "bg-gray-100 text-gray-700 hover:bg-blue-100"
//           }`}
//         >
//           Departure
//         </button>

//         <button
//           onClick={() => {
//             setTrainData(sortArrival(originalTrains));
//             setSortDepartureActive(false);
//             setSortArrivalActive(true);
//             setSortDurationActive(false);
//           }}
//           className={`rounded-lg font-medium transition-all duration-300 ease-in-out ${
//             sortArrivalActive
//               ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md"
//               : "bg-gray-100 text-gray-700 hover:bg-blue-100"
//           }`}
//         >
//           Arrival
//         </button>

//         <button
//           onClick={() => {
//             setTrainData(sortDuration(originalTrains));
//             setSortDepartureActive(false);
//             setSortArrivalActive(false);
//             setSortDurationActive(true);
//           }}
//           className={`rounded-lg font-medium transition-all duration-300 ease-in-out ${
//             sortDurationActive
//               ? "bg-gradient-to-r from-green-500 to-blue-400 text-white shadow-md"
//               : "bg-gray-100 text-gray-700 hover:bg-blue-100"
//           }`}
//         >
//           Duration
//         </button>
//       </div>

//       {/* Showing Trains Text */}
//       {/* <div className="ml-auto text-sm text-gray-600 font-medium">
//         <span>Showing {trains.length} Trains on this route</span>
//       </div> */}
//     </div>
//   );
// };

// export default SortTrainData;

import React, { useState } from "react";

const SortTrainData = ({
  originalTrains,
  setTrainData,
  TrainData,
  from,
  to,
}) => {
  const [sortDepartureActive, setSortDepartureActive] = useState(false);
  const [sortArrivalActive, setSortArrivalActive] = useState(false);
  const [sortDurationActive, setSortDurationActive] = useState(false);

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
      // Find the first station matching the "from" city
      const firstStation = train.stations.find(
        (station) => station.city.toLowerCase() === from.toLowerCase()
      );

      // Find the last station matching the "to" city
      const lastStation = train.stations.find(
        (station) => station.city.toLowerCase() === to.toLowerCase()
      );

      // Ensure both first and last stations are found before calculating the duration
      if (firstStation && lastStation) {
        // Parse the departure and arrival times for the duration calculation
        const departureTime = parseTime(firstStation.departureTime); // Time when the train departs the "from" station
        const arrivalTime = parseTime(lastStation.arrivalTime); // Time when the train arrives at the "to" station

        // Calculate the duration in minutes
        const duration = arrivalTime - departureTime;

        console.log(duration);

        // Return train with calculated duration
        return { ...train, duration };
      }

      // If no valid stations, set a high duration (infinity or a large number)
      return { ...train, duration: Infinity };
    });

    // Sort trains by duration (ascending)

    sortedData.sort((a, b) => a.duration - b.duration);
    return sortedData;
  };

  return (
    <div className="flex items-center justify-between p-4 bg-white  shadow-md">
      {/* Sort By Title */}
      <div className="flex gap-2">
        <h1 className="text-lg font-semibold text-gray-700 mr-4">SORT BY:</h1>

        {/* Sort Buttons */}

        <button
          onClick={() => {
            setTrainData(sortDeparture(originalTrains));
            setSortDepartureActive(true);
            setSortArrivalActive(false);
            setSortDurationActive(false);
          }}
          className={`rounded-lg font-medium transition-all duration-300 ease-in-out ${
            sortDepartureActive
              ? "bg-blue-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          Departure
        </button>

        <button
          onClick={() => {
            setTrainData(sortArrival(originalTrains));
            setSortDepartureActive(false);
            setSortArrivalActive(true);
            setSortDurationActive(false);
          }}
          className={`rounded-lg font-medium transition-all duration-300 ease-in-out ${
            sortArrivalActive
              ? "bg-blue-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          Arrival
        </button>

        <button
          onClick={() => {
            setTrainData(sortDuration(originalTrains));
            setSortDepartureActive(false);
            setSortArrivalActive(false);
            setSortDurationActive(true);
          }}
          className={`rounded-lg font-medium transition-all duration-300 ease-in-out ${
            sortDurationActive
              ? "bg-blue-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          Duration
        </button>
      </div>
      <div className="ml-auto text-sm text-gray-600 font-medium">
        <span>Showing {TrainData.length} Trains on this route</span>
      </div>
    </div>
  );
};

export default SortTrainData;
