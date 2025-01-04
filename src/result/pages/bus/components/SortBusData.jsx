// import React, { useState } from "react";

// const SortBusData = ({ originalBuses, setBuses }) => {
//   const [sortPrice, setSortPrice] = useState(false);
//   const [sortArrivalTime, setSortArrivalTime] = useState(false);
//   const [sortDepartureTime, setSortDepartureTime] = useState(false);
//   const [sortDuration, setSortDuration] = useState(false);

//   const parseTime = (timeString) => {
//     const [hours, minutes] = timeString.split(":").map(Number);
//     return hours * 60 + minutes;
//   };

//   const sortBusDataByPrice = (busData) => {
//     const sortedBusData = busData.map((bus) => ({
//       ...bus,
//       ticketprices: bus.ticketprices.sort(
//         (a, b) => a.perkilometre - b.perkilometre
//       ),
//     }));

//     sortedBusData.sort((a, b) => {
//       const minA = Math.min(
//         ...a.ticketprices.map((ticket) => ticket.perkilometre)
//       );
//       const minB = Math.min(
//         ...b.ticketprices.map((ticket) => ticket.perkilometre)
//       );
//       return minA - minB;
//     });

//     return sortedBusData;
//   };

//   const sortDataByDepartureTime = (busData) => {
//     const sortedBusData = busData.map((bus) => ({
//       ...bus,
//       stations: bus.stations.sort(
//         (a, b) => parseTime(a.departureTime) - parseTime(b.departureTime)
//       ),
//     }));

//     sortedBusData.sort((a, b) => {
//       const minA = Math.min(
//         ...a.stations.map((station) => parseTime(station.departureTime))
//       );
//       const minB = Math.min(
//         ...b.stations.map((station) => parseTime(station.departureTime))
//       );
//       return minA - minB;
//     });

//     return sortedBusData;
//   };

//   const sortDataByArrivalTime = (busData) => {
//     const sortedBusData = busData.map((bus) => ({
//       ...bus,
//       stations: bus.stations.sort(
//         (a, b) => parseTime(a.arrivaltime) - parseTime(b.arrivaltime)
//       ),
//     }));

//     sortedBusData.sort((a, b) => {
//       const minA = Math.min(
//         ...a.stations.map((station) => parseTime(station.arrivaltime))
//       );
//       const minB = Math.min(
//         ...b.stations.map((station) => parseTime(station.arrivaltime))
//       );
//       return minA - minB;
//     });

//     return sortedBusData;
//   };

//   const sortDataByDuration = (busData) => {
//     const calculateDuration = (departureTime, arrivaltime) => {
//       const departureInMinutes = parseTime(departureTime);
//       const arrivalInMinutes = parseTime(arrivaltime);
//       return arrivalInMinutes - departureInMinutes;
//     };

//     const sortedBusData = busData.map((bus) => {
//       const duration = bus.stations.map((station) =>
//         calculateDuration(station.departureTime, station.arrivaltime)
//       );

//       return {
//         ...bus,
//         duration: duration.reduce((total, time) => total + time, 0),
//       };
//     });

//     sortedBusData.sort((a, b) => a.duration - b.duration);

//     return sortedBusData;
//   };

//   return (
//     <div>
//       <div className="bg-blue-300 col-span-6 p-1 flex justify-between">
//         <h1>SORT BY:</h1>
//         <button
//           onClick={() => {
//             setBuses(sortBusDataByPrice(originalBuses));
//             setSortPrice((prev) => !prev);
//           }}
//           className="bg-red-400 p-3"
//         >
//           Cheapest
//         </button>
//         <button
//           onClick={() => {
//             setBuses(sortDataByDepartureTime(originalBuses));
//             setSortDepartureTime((prev) => !prev);
//           }}
//           className="bg-red-400 p-3"
//         >
//           Departure
//         </button>
//         <button
//           onClick={() => {
//             setBuses(sortDataByDuration(originalBuses));
//             setSortDuration((prev) => !prev);
//           }}
//           className="bg-red-400 p-3"
//         >
//           Duration
//         </button>
//         <button
//           onClick={() => {
//             setBuses(sortDataByArrivalTime(originalBuses));
//             setSortArrivalTime((prev) => !prev);
//           }}
//           className="bg-red-400 p-3"
//         >
//           Arrival
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SortBusData;

import React, { useState } from "react";

const SortBusData = ({ originalBuses, setBuses }) => {
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
    <div>
      <div className="bg-blue-300 col-span-6 p-1 flex justify-between">
        <h1>SORT BY:</h1>
        <button
          onClick={() => {
            setBuses(sortBusDataByPrice(originalBuses));
            setSortPrice(true);
            setSortArrivalTime(false);
            setSortDepartureTime(false);
            setSortDuration(false);
          }}
          className={`p-3 ${sortPrice ? "bg-green-500" : "bg-red-400"}`}
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
          className={`p-3 ${sortDepartureTime ? "bg-green-500" : "bg-red-400"}`}
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
          className={`p-3 ${sortDuration ? "bg-green-500" : "bg-red-400"}`}
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
          className={`p-3 ${sortArrivalTime ? "bg-green-500" : "bg-red-400"}`}
        >
          Arrival
        </button>
      </div>
    </div>
  );
};

export default SortBusData;
