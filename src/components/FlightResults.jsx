import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FlightSortingBar from "./transport/flightComponents/FlightSortingBar";
import FlightFilterBar from "./transport/flightComponents/FlightFilterBar";
import FlightList from "./transport/flightComponents/FlightList";
import FlightSearchBar from "./transport/flightComponents/FlightSearchBar";
import { searchFlights } from "../api/services/transport/flightApi";

const FlightResults = () => {
  const searchKey = useSelector((State) => State.flight.FlightList);
  const departureCity = searchKey[searchKey.length - 1].departureCity;
  const destinationCity = searchKey[searchKey.length - 1].destinationCity;
  const [originalFlights, setOriginalFlights] = useState([]);
  const [flight, setFlight] = useState([]);
  const [FirstFlightData, setFirstFlightData] = useState([]);
  const [loading, setLoading] = useState(true);
  // from;
  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const data = await searchFlights(departureCity, destinationCity);
        setFlight(data);
        setOriginalFlights(data);
        const firstData = data[0];
        setFirstFlightData([firstData]);
      } catch (error) {
        console.error("failed to fetch flights");
      } finally {
        setLoading(false);
      }
    };
    fetchFlights();
  }, [departureCity, destinationCity]);

  if (loading) return <p>Loading flights....</p>;
  if (!flight.length) return <p>No flights available....</p>;

  return (
    <div className="p-2 bg-gray-200 ">
      <div className="sticky flex justify-center top-0 p-1 ">
        <FlightSearchBar
          flight={flight}
          FlightFrom={departureCity}
          FlightTo={departureCity}
          FlightData={flight}
          FirstFlightData={FirstFlightData}
        />
      </div>
      <div className="grid lg:grid-cols-4 gap-2  p-1">
        <div className="col-span-1 hidden lg:block">
          {/* <div className="col-span-1 "> */}
          <FlightFilterBar
            originalFlights={originalFlights}
            setFlight={setFlight}
            from={departureCity}
            to={destinationCity}
            FlightData={flight}
          />
        </div>
        <div className="col-span-3 space-y-3">
          <div>
            <FlightSortingBar
              flight={flight}
              originalFlights={originalFlights}
              setFlight={setFlight}
            />
          </div>
          <div>
            <FlightList
              FlightFrom={departureCity}
              FlightTo={destinationCity}
              FlightData={flight}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightResults;

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// // import FlightList from "./flightComponents/FlightList";
// // import FlightSearchBar from "./flightComponents/FlightSearchBar";
// // import FlightFilterBar from "./flightComponents/FlightFilterBar";
// // import FlightSortingBar from "./flightComponents/FlightSortingBar";
// // import FlightList from "./transport/flightComponents/FlightList";
// import FlightSortingBar from "./transport/flightComponents/FlightSortingBar";
// import FlightFilterBar from "./transport/flightComponents/FlightFilterBar";
// import FlightList from "./transport/flightComponents/FlightList";
// import FlightSearchBar from "./transport/flightComponents/FlightSearchBar";
// // import { searchFlights } from "../api/flightApi";
// import { searchFlights } from "../api/services/transport/flightApi";

// const FlightResults = () => {
//   const searchKey = useSelector((State) => State.flight.flights);
//   const from = searchKey[searchKey.length - 1].from;
//   const to = searchKey[searchKey.length - 1].to;
//   const [originalFlights, setOriginalFlights] = useState([]);
//   const [flight, setFlight] = useState([]);
//   const [FirstFlightData, setFirstFlightData] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchFlights = async () => {
//       try {
//         const data = await searchFlights(from, to);
//         setFlight(data);
//         setOriginalFlights(data);
//         const firstData = data[0];
//         setFirstFlightData([firstData]);
//       } catch (error) {
//         console.error("failed to fetch flights");
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchFlights();
//   }, [from, to]);

//   if (loading) return <p>Loading flights....</p>;
//   if (!flight.length) return <p>No flights available....</p>;

//   return (
//     <div className="p-2 bg-gray-200 ">
//       <div className="sticky flex justify-center top-0 p-1 ">
//         <FlightSearchBar
//           flight={flight}
//           FlightFrom={from}
//           FlightTo={to}
//           FlightData={flight}
//           FirstFlightData={FirstFlightData}
//         />
//       </div>
//       <div className="grid lg:grid-cols-4 gap-2  p-1">
//         <div className="col-span-1 hidden lg:block">
//           {/* <div className="col-span-1 "> */}
//           <FlightFilterBar
//             originalFlights={originalFlights}
//             setFlight={setFlight}
//             from={from}
//             to={to}
//             FlightData={flight}
//           />
//         </div>
//         <div className="col-span-3 space-y-3">
//           <div>
//             <FlightSortingBar
//               flight={flight}
//               originalFlights={originalFlights}
//               setFlight={setFlight}
//             />
//           </div>
//           <div>
//             <FlightList FlightFrom={from} FlightTo={to} FlightData={flight} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FlightResults;
