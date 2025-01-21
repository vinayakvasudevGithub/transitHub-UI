// import React, { useState } from "react";

// const SortFlightData = ({ originalFlights, setFlight }) => {
//   const [sortPrice, setSortPrice] = useState(false);
//   const [sortArrivalTime, setSortArrivalTime] = useState(false);
//   const [sortDepartureTime, setSortDepartureTime] = useState(false);
//   const [sortDuration, setSortDuration] = useState(false);

//   const parseTime = (timeString) => {
//     const [hours, minutes] = timeString.split(":").map(Number);
//     return hours * 60 + minutes;
//   };

//   const sortFlightDataByPrice = (flightData) => {
//     const sortedData = [...flightData].sort((a, b) => {
//       const minA = Math.min(...a.prices.map((price) => price.ecconomy));
//       const minB = Math.min(...b.prices.map((price) => price.ecconomy));
//       return minA - minB;
//     });
//     return sortedData;
//   };

//   const sortDataByDepartureTime = (flightData) => {
//     const sortedData = [...flightData].sort((a, b) => {
//       const minA = Math.min(
//         ...a.airport.map((airport) => parseTime(airport.departureTime))
//       );
//       const minB = Math.min(
//         ...b.airport.map((airport) => parseTime(airport.departureTime))
//       );
//       return minA - minB;
//     });
//     return sortedData;
//   };

//   const sortDataByArrivalTime = (flightData) => {
//     const sortedData = [...flightData].sort((a, b) => {
//       const minA = Math.min(
//         ...a.destination.map((destination) =>
//           parseTime(destination.arrivalTime)
//         )
//       );
//       const minB = Math.min(
//         ...b.destination.map((destination) =>
//           parseTime(destination.arrivalTime)
//         )
//       );
//       return minA - minB;
//     });
//     return sortedData;
//   };

//   const sortDataByDuration = (flightData) => {
//     const sortedData = [...flightData].sort((a, b) => {
//       // Calculate duration for flight A
//       const durationA =
//         a.destination[0] && a.airport[0]
//           ? parseTime(a.destination[0].arrivalTime) -
//             parseTime(a.airport[0].departureTime)
//           : Number.MAX_SAFE_INTEGER; // Handle missing data gracefully

//       // Calculate duration for flight B
//       const durationB =
//         b.destination[0] && b.airport[0]
//           ? parseTime(b.destination[0].arrivalTime) -
//             parseTime(b.airport[0].departureTime)
//           : Number.MAX_SAFE_INTEGER;

//       // Compare durations
//       return durationA - durationB;
//     });

//     return sortedData;
//   };

//   return (
//     <div className="bg-yellow-300 p-1">
//       <div className="flex  bg-green-200 p-1">
//         <button
//           className="bg-red-400"
//           onClick={() => {
//             setFlight(sortFlightDataByPrice(originalFlights));
//           }}
//         >
//           Cheapest
//         </button>
//         <button
//           className="bg-red-300"
//           onClick={() => {
//             setFlight(sortDataByDepartureTime(originalFlights));
//           }}
//         >
//           Departure
//         </button>
//         <button
//           className="bg-red-300"
//           onClick={() => {
//             setFlight(sortDataByArrivalTime(originalFlights));
//           }}
//         >
//           Arrival
//         </button>
//         <button
//           className="bg-red-300"
//           onClick={() => setFlight(sortDataByDuration(originalFlights))}
//         >
//           Duration
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SortFlightData;

import React, { useState } from "react";

const SortFlightData = ({ originalFlights, setFlight, flight }) => {
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
      const durationA =
        a.destination[0] && a.airport[0]
          ? parseTime(a.destination[0].arrivalTime) -
            parseTime(a.airport[0].departureTime)
          : Number.MAX_SAFE_INTEGER;

      const durationB =
        b.destination[0] && b.airport[0]
          ? parseTime(b.destination[0].arrivalTime) -
            parseTime(b.airport[0].departureTime)
          : Number.MAX_SAFE_INTEGER;

      return durationA - durationB;
    });

    return sortedData;
  };

  return (
    <div className="flex items-center p-4 bg-white rounded-lg shadow-md">
      {/* Sort By Title */}
      <h1 className="text-lg font-semibold text-gray-700 mr-4">SORT BY:</h1>

      {/* Sort Buttons */}
      <div className="flex gap-2">
        <button
          onClick={() => {
            setFlight(sortFlightDataByPrice(originalFlights));
            setSortPrice(true);
            setSortArrivalTime(false);
            setSortDepartureTime(false);
            setSortDuration(false);
          }}
          className={`rounded-lg font-medium transition-all duration-300 ease-in-out ${
            sortPrice
              ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          Cheapest
        </button>

        <button
          onClick={() => {
            setFlight(sortDataByDepartureTime(originalFlights));
            setSortPrice(false);
            setSortArrivalTime(false);
            setSortDepartureTime(true);
            setSortDuration(false);
          }}
          className={`rounded-lg font-medium transition-all duration-300 ease-in-out ${
            sortDepartureTime
              ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          Departure
        </button>

        <button
          onClick={() => {
            setFlight(sortDataByDuration(originalFlights));
            setSortPrice(false);
            setSortArrivalTime(false);
            setSortDepartureTime(false);
            setSortDuration(true);
          }}
          className={`rounded-lg font-medium transition-all duration-300 ease-in-out ${
            sortDuration
              ? "bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          Duration
        </button>

        <button
          onClick={() => {
            setFlight(sortDataByArrivalTime(originalFlights));
            setSortPrice(false);
            setSortArrivalTime(true);
            setSortDepartureTime(false);
            setSortDuration(false);
          }}
          className={`rounded-lg font-medium transition-all duration-300 ease-in-out ${
            sortArrivalTime
              ? "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-blue-100"
          }`}
        >
          Arrival
        </button>
      </div>

      {/* Showing Flights Text */}
      <div className="ml-auto text-sm text-gray-600 font-medium">
        <span>Showing {flight.length} Flights on this route</span>
      </div>
    </div>
  );
};

export default SortFlightData;
