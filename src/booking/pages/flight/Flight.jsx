// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Flightdetails } from "../../../store/slice/FlightSlice";
// import axios from "axios";

// const Flight = () => {
//   const [from, setFrom] = useState("Kannur");
//   const [to, setTo] = useState("Kochi");
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const results = (e) => {
//     e.preventDefault();
//     dispatch(
//       Flightdetails({
//         from: from,
//         to: to,
//       })
//     );
//     navigate("/result/FlightResult");
//   };

//   const [inpSearch, setInpSearch] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4001/flight/")
//       .then((response) => {
//         setInpSearch(response.data);
//       })
//       .catch((err) => console.log("Error fetching Flights", err));
//   }, []);

//   // Filter airports and remove duplicates
//   const filteredAirports = [
//     ...new Map(
//       inpSearch
//         .flatMap((flight) =>
//           flight.airport.filter((airport) =>
//             airport.city.toLowerCase().includes(from.toLowerCase())
//           )
//         )
//         .map((airport) => [airport.city, airport]) // Use city as the key
//     ).values(),
//   ];

//   // Filter destinations and remove duplicates
//   const filteredDestinations = [
//     ...new Map(
//       inpSearch
//         .flatMap((flight) =>
//           flight.destination.filter((destination) =>
//             destination.city.toLowerCase().includes(to.toLowerCase())
//           )
//         )
//         .map((destination) => [destination.city, destination]) // Use city as the key
//     ).values(),
//   ];

//   const [inpBox, setInpBox] = useState("");

//   const [departureAirport, setDepartureAirport] = useState(
//     "Kannur international airport"
//   );
//   const [arrivalAirport, setArrivalAirport] = useState(
//     "Kochi international airport"
//   );
//   // const inputBoxShow = (value) => {
//   //   value === "from" ? setInpBox("from") : setInpBox("to");
//   // };

//   return (
//     <div className="bg-white shadow-custom-shadow p-2">
//       <form onSubmit={results} className="">
//         <div className="grid sm:grid-cols-5 bg-red-100 border p-1 space-x-2">
//           {/* Departure City */}
//           <div>
//             <div>
//               <h3 className="text-xs">From</h3>
//             </div>
//             {inpBox === "from" ? (
//               <div className=" col-span-1 relative bg-green-400 p-1">
//                 <input
//                   type="text"
//                   value={from}
//                   className="bg-blue-100 w-full"
//                   onChange={(e) => {
//                     setFrom(e.target.value);
//                   }}
//                 />
//                 <div className="relative">
//                   <div className="bg-red-500 overflow-y-scroll p-1 h-[10rem] absolute z-50 top-0 left-0 w-full">
//                     {filteredAirports.map((airport, index) => (
//                       <div
//                         key={index}
//                         onClick={() => {
//                           setFrom(airport.city);
//                           setDepartureAirport(airport.name);

//                           setInpBox("");
//                         }}
//                         className="bg-green-200 grid"
//                       >
//                         <div className="grid grid-cols-2">
//                           <div className="flex">
//                             <h2 className="font-bold">{airport.city}</h2>,
//                             <h3 className="font-semibold">{airport.country}</h3>
//                           </div>
//                           <div className="flex justify-end">{airport.code}</div>
//                         </div>
//                         <div>
//                           <h3 className="text-xs truncate w-full">
//                             {airport.name}
//                           </h3>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div
//                 className="bg-green-300 p-1 col-span-1"
//                 onClick={() => {
//                   setInpBox("from");
//                 }}
//               >
//                 <div>
//                   <h1>{from}</h1>
//                 </div>
//               </div>
//             )}
//             <div>
//               <h2 className="truncate w-full">{departureAirport}</h2>
//             </div>
//           </div>
//           {/* Arrival City */}
//           <div>
//             <div>
//               <h3 className="text-xs">To</h3>
//             </div>
//             {inpBox === "to" ? (
//               <div className=" bg-red-200 p-1 ">
//                 <input
//                   className="bg-red-50 w-full"
//                   value={to}
//                   onChange={(e) => setTo(e.target.value)}
//                 />
//                 <div className="relative">
//                   <div className="bg-red-500 p-1 overflow-y-scroll h-[10rem] absolute z-50 top-0 left-0 w-full">
//                     {filteredDestinations.map((destination, index) => (
//                       <div
//                         key={index}
//                         onClick={() => {
//                           setTo(destination.city);
//                           setArrivalAirport(destination.name);
//                           setInpBox("");
//                         }}
//                         className="bg-blue-200"
//                       >
//                         <div className="grid grid-cols-2">
//                           <div className="flex">
//                             <h2 className="font-bold">{destination.city}</h2>,
//                             <h2 className="">{destination.country}</h2>
//                           </div>
//                           <div className="flex justify-end">
//                             {destination.code}
//                           </div>
//                         </div>
//                         <div>
//                           <h3 className="text-xs truncate w-full">
//                             {destination.name}
//                           </h3>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="p-1 bg-blue-400" onClick={() => setInpBox("to")}>
//                 <div>
//                   <h2>{to}</h2>
//                   {/* <h3 className="truncate w-full">{arrivalAirport}</h3> */}
//                 </div>
//               </div>
//             )}
//             <div>
//               <h3 className="truncate w-full">{arrivalAirport}</h3>
//             </div>
//           </div>
//           <div>date</div>
//           <div>class</div>
//           <button className="bg-red-500" type="submit">
//             flight search
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Flight;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Flightdetails } from "../../../store/slice/FlightSlice";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Flight = () => {
  const [from, setFrom] = useState("Mumbai");
  const [to, setTo] = useState("Chennai");
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

  const handleFromChange = debounce((value) => setFrom(value), 0);
  const handleToChange = debounce((value) => setTo(value), 0);

  useEffect(() => {
    axios
      .get("http://localhost:4001/flight/")
      .then((response) => {
        setInpSearch(response.data);
      })
      .catch(() => {
        console.error("Error fetching flights");
        alert("Failed to fetch flight data. Please try again later.");
      });
  }, []);

  const filteredAirports = [
    ...new Map(
      inpSearch
        .flatMap((flight) =>
          flight.airport.filter((airport) =>
            airport.city.toLowerCase().includes(from.toLowerCase())
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
            destination.city.toLowerCase().includes(to.toLowerCase())
          )
        )
        .map((destination) => [destination.city, destination])
    ).values(),
  ];

  const results = (e) => {
    e.preventDefault();
    dispatch(
      Flightdetails({
        from,
        to,
        // travelDate,
        flightClass,
      })
    );
    navigate("/result/FlightResult");
  };

  return (
    <div className="bg-white shadow-custom-shadow p-4">
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
                value={from}
                className="bg-gray-100 w-full p-2 rounded"
                onChange={(e) => handleFromChange(e.target.value)}
              />
            </div>
            {inpBox === "from" && (
              <div className="relative">
                <div className="bg-white overflow-y-scroll  h-40 absolute z-50 top-0 left-0 w-full animate-slide-down ">
                  {filteredAirports.map((airport, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setFrom(airport.city);
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
                value={to}
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
                        setTo(destination.city);
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
          <div className="flex items-end">
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

export default Flight;
