import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { Flightdetails } from "../../../store/slice/FlightSlice";
// import { Flightdetails } from "../../store/slice/FlightSlice";
import { tripInfo } from "../../store/slices/userTransport/flightUserSlice";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAllFlights } from "../../api/services/transport/flightApi";
// import { getAllBuses } from "../../api/busApi";

const FlightHomeSearch = () => {
  const [departureCity, setDepartureCity] = useState("Mumbai");
  const [destinationCity, setDestinationCity] = useState("Chennai");
  const [travelDate, setTravelDate] = useState(new Date());
  const [flightClass, setFlightClass] = useState("Economy");
  const [inpSearch, setInpSearch] = useState([]);
  const [inpBox, setInpBox] = useState("");
  const [departureAirport, setDepartureAirport] = useState(
    "Kannur international airport"
  );
  const [arrivalAirport, setArrivalAirport] = useState(
    "Kochi international airport"
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Debounce function for performance optimization
  const debounce = (func, delay) => {
    let timeout;
    return (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), delay);
    };
  };

  const handleFromChange = debounce((value) => setDepartureCity(value), 0);
  const handleToChange = debounce((value) => setDestinationCity(value), 0);

  useEffect(() => {
    const fetchAllFlights = async () => {
      try {
        const data = await getAllFlights();
        setInpSearch(data);
      } catch (error) {
        console.error("Error fetching flights");
      }
    };
    fetchAllFlights();
    // axios
    //   .get("http://localhost:2001/flight/")
    //   .then((response) => {
    //     setInpSearch(response.data);
    //   })
    //   .catch(() => {
    //     console.error("Error fetching flights");
    //     alert("Failed to fetch flightddd data. Please try again later.");
    //   });
  }, []);

  const filteredAirports = [
    ...new Map(
      inpSearch
        .flatMap((flight) =>
          flight.airport.filter((airport) =>
            airport.city.toLowerCase().includes(departureCity.toLowerCase())
          )
        )
        .map((airport) => [airport.city, airport])
    ).values(),
  ];

  const filteredDestinations = [
    ...new Map(
      inpSearch
        .flatMap((flight) =>
          flight.destination.filter((destination) =>
            destination.city
              .toLowerCase()
              .includes(destinationCity.toLowerCase())
          )
        )
        .map((destination) => [destination.city, destination])
    ).values(),
  ];

  const results = (e) => {
    e.preventDefault();
    dispatch(
      tripInfo({
        departureCity,
        destinationCity,
        // travelDate,
        // flightClass,
      })
    );
    navigate("/result/FlightResult");
  };

  return (
    <div
      className="  bg-gray-200  p-4 rounded-lg"
      // style="box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1);"
    >
      <form onSubmit={results}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Departure City */}
          <div>
            <h3 className="text-xs font-semibold mb-1">From</h3>

            <div
              className="bg-gray-100  cursor-pointer"
              onClick={() => setInpBox("from")}
            >
              <input
                type="text"
                value={departureCity}
                className="bg-gray-100 w-full p-2 rounded"
                onChange={(e) => handleFromChange(e.target.value)}
              />
            </div>
            {inpBox === "from" && (
              <div className="relative">
                <div className="bg-white overflow-y-scroll  h-40 absolute z-40 top-0 left-0 w-full animate-slide-down ">
                  {filteredAirports.map((airport, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setDepartureCity(airport.city);
                        setDepartureAirport(airport.name);
                        setInpBox("");
                      }}
                      className="p-2 hover:bg-gray-300 cursor-pointer"
                    >
                      <div className="flex justify-between">
                        <span className="font-bold">{airport.city}</span>,{" "}
                        {airport.country}
                        <span>{airport.code}</span>
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {airport.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="text-xs text-gray-600 truncate">
              {departureAirport}
            </div>
          </div>

          {/* Arrival City */}
          <div>
            <h3 className="text-xs font-semibold mb-1">To</h3>
            <div className=""></div>
            <div
              className="bg-gray-100  cursor-pointer"
              onClick={() => setInpBox("to")}
            >
              <input
                type="text"
                value={destinationCity}
                className="bg-gray-100 w-full p-2 rounded"
                onChange={(e) => handleToChange(e.target.value)}
              />
            </div>
            {inpBox === "to" && (
              <div className="relative">
                <div className="bg-gray-200 overflow-y-scroll h-40 absolute z-50 top-0 left-0 w-full animate-slide-down">
                  {filteredDestinations.map((destination, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setDestinationCity(destination.city);
                        setArrivalAirport(destination.name);
                        setInpBox("");
                      }}
                      className="p-2 hover:bg-gray-300 cursor-pointer"
                    >
                      <div className="flex justify-between">
                        <span className="font-bold">{destination.city}</span>,{" "}
                        {destination.country}
                        <span>{destination.code}</span>
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {destination.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="text-xs text-gray-600 truncate">
              {arrivalAirport}
            </div>
          </div>

          {/* Date Picker */}
          <div>
            <h3 className="text-xs font-semibold mb-1">Date</h3>
            <DatePicker
              selected={travelDate}
              onChange={(date) => setTravelDate(date)}
              className="bg-gray-100 p-2 rounded w-full"
            />
          </div>

          {/* Flight Class */}
          <div>
            <h3 className="text-xs font-semibold mb-1">Class</h3>
            <select
              value={flightClass}
              onChange={(e) => setFlightClass(e.target.value)}
              className="bg-gray-100 p-2 rounded w-full"
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
              <option value="First">First Class</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
            >
              Search Flights
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FlightHomeSearch;

// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// // import { Flightdetails } from "../../../store/slice/FlightSlice";
// import { Flightdetails } from "../../store/slice/FlightSlice";
// import axios from "axios";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { getAllFlights } from "../../api/services/transport/flightApi";
// // import { getAllBuses } from "../../api/busApi";

// const FlightHomeSearch = () => {
//   const [from, setFrom] = useState("Mumbai");
//   const [to, setTo] = useState("Chennai");
//   const [travelDate, setTravelDate] = useState(new Date());
//   const [flightClass, setFlightClass] = useState("Economy");
//   const [inpSearch, setInpSearch] = useState([]);
//   const [inpBox, setInpBox] = useState("");
//   const [departureAirport, setDepartureAirport] = useState(
//     "Kannur international airport"
//   );
//   const [arrivalAirport, setArrivalAirport] = useState(
//     "Kochi international airport"
//   );
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Debounce function for performance optimization
//   const debounce = (func, delay) => {
//     let timeout;
//     return (...args) => {
//       clearTimeout(timeout);
//       timeout = setTimeout(() => func(...args), delay);
//     };
//   };

//   const handleFromChange = debounce((value) => setFrom(value), 0);
//   const handleToChange = debounce((value) => setTo(value), 0);

//   useEffect(() => {
//     const fetchAllFlights = async () => {
//       try {
//         const data = await getAllFlights();
//         setInpSearch(data);
//       } catch (error) {
//         console.error("Error fetching flights");
//       }
//     };
//     fetchAllFlights();
//     // axios
//     //   .get("http://localhost:2001/flight/")
//     //   .then((response) => {
//     //     setInpSearch(response.data);
//     //   })
//     //   .catch(() => {
//     //     console.error("Error fetching flights");
//     //     alert("Failed to fetch flightddd data. Please try again later.");
//     //   });
//   }, []);

//   const filteredAirports = [
//     ...new Map(
//       inpSearch
//         .flatMap((flight) =>
//           flight.airport.filter((airport) =>
//             airport.city.toLowerCase().includes(from.toLowerCase())
//           )
//         )
//         .map((airport) => [airport.city, airport])
//     ).values(),
//   ];

//   const filteredDestinations = [
//     ...new Map(
//       inpSearch
//         .flatMap((flight) =>
//           flight.destination.filter((destination) =>
//             destination.city.toLowerCase().includes(to.toLowerCase())
//           )
//         )
//         .map((destination) => [destination.city, destination])
//     ).values(),
//   ];

//   const results = (e) => {
//     e.preventDefault();
//     dispatch(
//       Flightdetails({
//         from,
//         to,
//         // travelDate,
//         flightClass,
//       })
//     );
//     navigate("/result/FlightResult");
//   };

//   return (
//     <div
//       className="  bg-gray-200  p-4 rounded-lg"
//       // style="box-shadow: inset 0 4px 6px rgba(0, 0, 0, 0.1);"
//     >
//       <form onSubmit={results}>
//         <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
//           {/* Departure City */}
//           <div>
//             <h3 className="text-xs font-semibold mb-1">From</h3>

//             <div
//               className="bg-gray-100  cursor-pointer"
//               onClick={() => setInpBox("from")}
//             >
//               <input
//                 type="text"
//                 value={from}
//                 className="bg-gray-100 w-full p-2 rounded"
//                 onChange={(e) => handleFromChange(e.target.value)}
//               />
//             </div>
//             {inpBox === "from" && (
//               <div className="relative">
//                 <div className="bg-white overflow-y-scroll  h-40 absolute z-40 top-0 left-0 w-full animate-slide-down ">
//                   {filteredAirports.map((airport, index) => (
//                     <div
//                       key={index}
//                       onClick={() => {
//                         setFrom(airport.city);
//                         setDepartureAirport(airport.name);
//                         setInpBox("");
//                       }}
//                       className="p-2 hover:bg-gray-300 cursor-pointer"
//                     >
//                       <div className="flex justify-between">
//                         <span className="font-bold">{airport.city}</span>,{" "}
//                         {airport.country}
//                         <span>{airport.code}</span>
//                       </div>
//                       <div className="text-xs text-gray-500 truncate">
//                         {airport.name}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//             <div className="text-xs text-gray-600 truncate">
//               {departureAirport}
//             </div>
//           </div>

//           {/* Arrival City */}
//           <div>
//             <h3 className="text-xs font-semibold mb-1">To</h3>
//             <div className=""></div>
//             <div
//               className="bg-gray-100  cursor-pointer"
//               onClick={() => setInpBox("to")}
//             >
//               <input
//                 type="text"
//                 value={to}
//                 className="bg-gray-100 w-full p-2 rounded"
//                 onChange={(e) => handleToChange(e.target.value)}
//               />
//             </div>
//             {inpBox === "to" && (
//               <div className="relative">
//                 <div className="bg-gray-200 overflow-y-scroll h-40 absolute z-50 top-0 left-0 w-full animate-slide-down">
//                   {filteredDestinations.map((destination, index) => (
//                     <div
//                       key={index}
//                       onClick={() => {
//                         setTo(destination.city);
//                         setArrivalAirport(destination.name);
//                         setInpBox("");
//                       }}
//                       className="p-2 hover:bg-gray-300 cursor-pointer"
//                     >
//                       <div className="flex justify-between">
//                         <span className="font-bold">{destination.city}</span>,{" "}
//                         {destination.country}
//                         <span>{destination.code}</span>
//                       </div>
//                       <div className="text-xs text-gray-500 truncate">
//                         {destination.name}
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//             <div className="text-xs text-gray-600 truncate">
//               {arrivalAirport}
//             </div>
//           </div>

//           {/* Date Picker */}
//           <div>
//             <h3 className="text-xs font-semibold mb-1">Date</h3>
//             <DatePicker
//               selected={travelDate}
//               onChange={(date) => setTravelDate(date)}
//               className="bg-gray-100 p-2 rounded w-full"
//             />
//           </div>

//           {/* Flight Class */}
//           <div>
//             <h3 className="text-xs font-semibold mb-1">Class</h3>
//             <select
//               value={flightClass}
//               onChange={(e) => setFlightClass(e.target.value)}
//               className="bg-gray-100 p-2 rounded w-full"
//             >
//               <option value="Economy">Economy</option>
//               <option value="Business">Business</option>
//               <option value="First">First Class</option>
//             </select>
//           </div>

//           {/* Search Button */}
//           <div className="flex justify-center items-center">
//             <button
//               type="submit"
//               className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
//             >
//               Search Flights
//             </button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default FlightHomeSearch;
