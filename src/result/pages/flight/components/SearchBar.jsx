import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Flightdetails } from "../../../../store/slice/FlightSlice";

const SearchBar = ({ FlightFrom, FlightTo, FirstFlightData }) => {
  // Initialize states
  const [searchFrom, setsearchFrom] = useState(FlightFrom || "");
  const [searchTo, setsearchTo] = useState(FlightTo || "");
  const [travelDate, setTravelDate] = useState(""); // State for date input
  const dispatch = useDispatch();

  const searchMore = (e) => {
    e.preventDefault();
    dispatch(
      Flightdetails({
        from: searchFrom ? searchFrom : FlightFrom,
        to: searchTo ? searchTo : FlightTo,
        date: travelDate, // Include date in dispatch
      })
    );
    window.location.reload();
  };

  // Fetch flight data
  const [inpsearch, setInpsearch] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4001/flight/")
      .then((response) => {
        setInpsearch(response.data);
      })
      .catch((err) => console.log("Error fetching flights", err));
  }, []);

  // Filtered options for departure and destination
  const filteredAirports = inpsearch.flatMap((flight) =>
    flight.airport.filter((airport) =>
      airport.city.toLowerCase().includes(searchFrom.toLowerCase())
    )
  );

  const filteredDestinations = inpsearch.flatMap((flight) =>
    flight.destination.filter((destination) =>
      destination.city.toLowerCase().includes(searchTo.toLowerCase())
    )
  );

  // Manage input box visibility
  const [inpBox, SetinpBox] = useState("");
  const InpBoxShow = (value) => {
    value === "from" && SetinpBox("from");
    value === "to" && SetinpBox("to");
  };

  // Local states for selected departure/destination details
  const [DepartureCityName, setDepartureCityName] = useState("");
  const [DepartureairportName, setDepartureairportName] = useState("");
  const [destinationAirportName, setdestinationAirportName] = useState("");
  const [destinationCityName, setdestinationCityName] = useState("");

  return (
    <div className="bg-white p-3 w-full shadow-sm">
      {/* <form onSubmit={searchMore} className=" gap-4 bg-red-100 p-1"> */}
      {FirstFlightData.map((data) => (
        <div className="sm:grid grid-cols-7 gap-1" key={data._id}>
          {/* Input box for departure city */}
          {data.airport.map((airport) => (
            <div className="col-span-2 " key={airport._id}>
              <p className="text-sm text-gray-600 ">From:</p>
              {inpBox === "from" ? (
                <div>
                  <input
                    className="w-full border rounded-md p-2 text-sm"
                    placeholder="Enter departure city"
                    onChange={(e) =>
                      setsearchFrom(e.target.value || DepartureCityName)
                    }
                  />
                  <div className="relative">
                    <div className="absolute bg-white border rounded-md shadow-md w-full max-h-40 overflow-y-auto z-50">
                      {filteredAirports.map((airport, index) => (
                        <p
                          key={index}
                          className="p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            setDepartureairportName(airport.name);
                            setDepartureCityName(airport.city);
                            setsearchFrom(airport.city);
                            SetinpBox("");
                          }}
                        >
                          {airport.city}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="p-2  border rounded-md cursor-pointer"
                  onClick={() => InpBoxShow("from")}
                >
                  <p className="text-sm font-medium">
                    {DepartureCityName || airport.city}
                  </p>
                  <p className="text-xs text-gray-500">
                    {DepartureairportName || airport.name}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Input box for destination city */}
          {data.destination.map((destination) => (
            <div className="col-span-2 " key={destination._id}>
              <p className="text-sm text-gray-600">To:</p>
              {inpBox === "to" ? (
                <div>
                  <input
                    className="w-full border rounded-md p-2 text-sm"
                    placeholder="Enter destination city"
                    onChange={(e) =>
                      setsearchTo(e.target.value || destinationCityName)
                    }
                  />
                  <div className="relative">
                    <div className="absolute bg-white border rounded-md shadow-md w-full max-h-40 overflow-y-auto z-50">
                      {filteredDestinations.map((destination, index) => (
                        <p
                          key={index}
                          className="p-2 cursor-pointer hover:bg-gray-100"
                          onClick={() => {
                            setdestinationAirportName(destination.name);
                            setdestinationCityName(destination.city);
                            setsearchTo(destination.city);
                            SetinpBox("");
                          }}
                        >
                          {destination.city}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="p-2 border rounded-md cursor-pointer"
                  onClick={() => InpBoxShow("to")}
                >
                  <p className="text-sm font-medium">
                    {destinationCityName || destination.city}
                  </p>
                  <p className="text-xs text-gray-500">
                    {destinationAirportName || destination.name}
                  </p>
                </div>
              )}
            </div>
          ))}

          {/* Date Input */}
          <div className="col-span-2 ">
            <p className="text-sm text-gray-600">Date:</p>
            <input
              type="date"
              className="w-full border rounded-md p-2 text-sm"
              value={travelDate}
              onChange={(e) => setTravelDate(e.target.value)}
            />
          </div>
          {/* Submit Button */}
          <div className=" flex justify-center">
            <button
              className="bg-blue-700 hover:bg-blue-800 p-3 text-white w-full rounded-lg"
              onClick={searchMore}
            >
              Search
            </button>
          </div>
        </div>
      ))}
      {/* </form> */}
    </div>
  );
};

export default SearchBar;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Flightdetails } from "../../../../store/slice/FlightSlice";

// const SearchBar = ({ FlightFrom, FlightTo, FirstFlightData }) => {
//   //to dispatch keywords to redux from input-------------------------------------------->>
//   const [searchFrom, setsearchFrom] = useState(FlightFrom || "");
//   const [searchTo, setsearchTo] = useState(FlightTo || "");
//   const dispatch = useDispatch();

//   const searchMore = (e) => {
//     e.preventDefault();
//     dispatch(
//       Flightdetails({
//         from: searchFrom ? searchFrom : FlightFrom,
//         to: searchTo ? searchTo : FlightTo,
//       }),
//       window.location.reload()
//     );
//   };

//   /////////get details to input box ------------------------------------------->>>

//   const [inpsearch, setInpsearch] = useState([]);
//   // const [mon, setmon] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4001/flight/")
//       .then((response) => {
//         setInpsearch(response.data);
//       })
//       .catch((err) => console.log("Error fetching flights", err));
//   }, []);

//   ///fetch departure details from inpsearch -------------------->>>>>>>>>

//   const filteredAirports = inpsearch.flatMap((flight) =>
//     flight.airport.filter((airport) =>
//       airport.city.toLowerCase().includes(searchFrom.toLowerCase())
//     )
//   );

//   /// fetch destination details from inpsearch  -------------------->>>>>

//   const filteredDestinations = inpsearch.flatMap((flight) =>
//     flight.destination.filter((destination) =>
//       destination.city.toLowerCase().includes(searchTo.toLowerCase())
//     )
//   );
//   //////hide ,add and show input box ------------------------------>>>>>>>>>>

//   const [inpBox, SetinpBox] = useState("");
//   const InpBoxShow = (value) => {
//     value === "from" && SetinpBox("from");
//     value === "to" && SetinpBox("to");
//   };

//   //to add departure city name to input box  ----------------------------->>>>>>>

//   const [DepartureCityName, setDepartureCityName] = useState("");
//   const [DepartureairportName, setDepartureairportName] = useState("");

//   /// to add destination city name to input box ----------------------------------->>>>>>

//   const [destinationAirportName, setdestinationAirportName] = useState("");
//   const [destinationCityName, setdestinationCityName] = useState("");

//   return (
//     <div className=" bg-white flex  border-neutral-950 border-[1px]">
//       <form action="" onSubmit={searchMore}>
//         {FirstFlightData.map((data) => (
//           <div className="flex" key={data._id}>
//             {/* input box from departure city------------------------------------------- */}
//             {data.airport.map((airport) => (
//               <div
//                 className=" border-r-[1px] border-neutral-950 p-1  "
//                 key={airport._id}
//               >
//                 <p className="text-xs">From:</p>

//                 {inpBox === "from" ? (
//                   <div className="font-bold">
//                     <input
//                       className="w-[10rem]"
//                       type="text"
//                       onChange={(e) =>
//                         setsearchFrom(e.target.value || DepartureCityName)
//                       }
//                     />

//                     <div className="relative w-[10rem]">
//                       <div className="bg-red-500 overflow-y-scroll h-[10rem] absolute z-50 top-0 left-0 w-full">
//                         {filteredAirports.map((airport, index) => (
//                           <p
//                             onClick={(e) => {
//                               setDepartureairportName(airport.name);
//                               setDepartureCityName(airport.city);
//                               setsearchFrom(airport.city);
//                               SetinpBox("");
//                             }}
//                             key={index}
//                           >
//                             {airport.city}
//                           </p>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 ) : (
//                   <p onClick={() => InpBoxShow("from")} className="font-bold">
//                     {DepartureCityName ? DepartureCityName : airport.city}
//                   </p>
//                 )}
//                 <p className="text-xs">
//                   {DepartureairportName ? DepartureairportName : airport.name}
//                 </p>
//               </div>
//             ))}
//             {/* input details for arrival city ------------------------------>>>>>>>>>>>>>>>  */}

//             {data.destination.map((destination) => (
//               <div
//                 className="border-neutral-950 border-r-[1px] p-1 "
//                 key={destination._id}
//               >
//                 <p className="text-xs">To</p>
//                 <div className="font-bold">
//                   {inpBox === "to" ? (
//                     <div>
//                       <input
//                         className="w-[10rem]"
//                         type="text"
//                         onChange={(e) =>
//                           setsearchTo(e.target.value || destinationCityName)
//                         }
//                       />
//                       <div className="relative w-[10rem]">
//                         <div className="bg-red-500 overflow-y-scroll h-[10rem] absolute z-50 top-0 left-0 w-full">
//                           {filteredDestinations.map((Destinations, index) => (
//                             <p
//                               onClick={(e) => {
//                                 setdestinationAirportName(Destinations.name);
//                                 setdestinationCityName(Destinations.city);
//                                 setsearchTo(Destinations.city);
//                                 SetinpBox("");
//                               }}
//                               key={index}
//                             >
//                               {Destinations.city}
//                             </p>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                   ) : (
//                     <p onClick={(e) => InpBoxShow("to")}>
//                       {destinationCityName
//                         ? destinationCityName
//                         : destination.city}
//                     </p>
//                   )}
//                 </div>
//                 <p className="text-xs">
//                   {destinationAirportName
//                     ? destinationAirportName
//                     : destination.name}
//                 </p>
//               </div>
//             ))}
//             <button type="submit">search</button>
//           </div>
//         ))}
//       </form>
//     </div>
//   );
// };

// export default SearchBar;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Flightdetails } from "../../../../store/slice/FlightSlice";

// const SearchBar = ({ FlightFrom, FlightTo, FirstFlightData }) => {
//   const [searchFrom, setsearchFrom] = useState(FlightFrom || "");
//   const [searchTo, setsearchTo] = useState(FlightTo || "");
//   const [travelDate, setTravelDate] = useState(""); // New state for the date input
//   const dispatch = useDispatch();

//   const searchMore = (e) => {
//     e.preventDefault();
//     dispatch(
//       Flightdetails({
//         from: searchFrom ? searchFrom : FlightFrom,
//         to: searchTo ? searchTo : FlightTo,
//         // date: travelDate, // Dispatching the selected date
//       })
//     );
//     window.location.reload();
//   };

//   const [inpsearch, setInpsearch] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4001/flight/")
//       .then((response) => {
//         setInpsearch(response.data);
//       })
//       .catch((err) => console.log("Error fetching flights", err));
//   }, []);

//   const filteredAirports = inpsearch.flatMap((flight) =>
//     flight.airport.filter((airport) =>
//       airport.city.toLowerCase().includes(searchFrom.toLowerCase())
//     )
//   );

//   const filteredDestinations = inpsearch.flatMap((flight) =>
//     flight.destination.filter((destination) =>
//       destination.city.toLowerCase().includes(searchTo.toLowerCase())
//     )
//   );

//   const [inpBox, SetinpBox] = useState("");
//   const InpBoxShow = (value) => {
//     value === "from" && SetinpBox("from");
//     value === "to" && SetinpBox("to");
//   };

//   const [DepartureCityName, setDepartureCityName] = useState("");
//   const [DepartureairportName, setDepartureairportName] = useState("");
//   const [destinationAirportName, setdestinationAirportName] = useState("");
//   const [destinationCityName, setdestinationCityName] = useState("");

//   return (
//     <div className="bg-white p-4 rounded-md shadow-md">
//       {/* <form onSubmit={searchMore} className="flex flex-col gap-4"> */}
//       {FirstFlightData.map((data) => (
//         <div className="flex gap-4" key={data._id}>
//           {/* Departure Input */}
//           {data.airport.map((airport) => (
//             <div className="flex-1" key={airport._id}>
//               <label className="text-sm font-medium text-gray-700">From:</label>
//               {inpBox === "from" ? (
//                 <div>
//                   <input
//                     type="text"
//                     className="w-full border rounded-md p-2 text-sm"
//                     placeholder="Enter departure city"
//                     onChange={(e) =>
//                       setsearchFrom(e.target.value || DepartureCityName)
//                     }
//                   />
//                   <div className="relative">
//                     <div className="absolute bg-white border rounded-md shadow-lg w-full max-h-40 overflow-y-auto z-50">
//                       {filteredAirports.map((airport, index) => (
//                         <p
//                           className="p-2 cursor-pointer hover:bg-gray-100"
//                           onClick={() => {
//                             setDepartureairportName(airport.name);
//                             setDepartureCityName(airport.city);
//                             setsearchFrom(airport.city);
//                             SetinpBox("");
//                           }}
//                           key={index}
//                         >
//                           {airport.city}
//                         </p>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div
//                   className="p-2 border rounded-md cursor-pointer"
//                   onClick={() => InpBoxShow("from")}
//                 >
//                   <p className="text-sm font-medium">
//                     {DepartureCityName || airport.city}
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     {DepartureairportName || airport.name}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* Destination Input */}
//           {data.destination.map((destination) => (
//             <div className="flex-1" key={destination._id}>
//               <label className="text-sm font-medium text-gray-700">To:</label>
//               {inpBox === "to" ? (
//                 <div>
//                   <input
//                     type="text"
//                     className="w-full border rounded-md p-2 text-sm"
//                     placeholder="Enter destination city"
//                     onChange={(e) =>
//                       setsearchTo(e.target.value || destinationCityName)
//                     }
//                   />
//                   <div className="relative">
//                     <div className="absolute bg-white border rounded-md shadow-lg w-full max-h-40 overflow-y-auto z-50">
//                       {filteredDestinations.map((Destinations, index) => (
//                         <p
//                           className="p-2 cursor-pointer hover:bg-gray-100"
//                           onClick={() => {
//                             setdestinationAirportName(Destinations.name);
//                             setdestinationCityName(Destinations.city);
//                             setsearchTo(Destinations.city);
//                             SetinpBox("");
//                           }}
//                           key={index}
//                         >
//                           {Destinations.city}
//                         </p>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               ) : (
//                 <div
//                   className="p-2 border rounded-md cursor-pointer"
//                   onClick={() => InpBoxShow("to")}
//                 >
//                   <p className="text-sm font-medium">
//                     {destinationCityName || destination.city}
//                   </p>
//                   <p className="text-xs text-gray-500">
//                     {destinationAirportName || destination.name}
//                   </p>
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* Date Input */}
//           <div className="flex-1">
//             <label className="text-sm font-medium text-gray-700">
//               Travel Date:
//             </label>
//             <input
//               type="date"
//               className="w-full border rounded-md p-2 text-sm"
//               value={travelDate}
//               onChange={(e) => setTravelDate(e.target.value)}
//             />
//           </div>
//         </div>
//       ))}

//       {/* Submit Button */}
//       <div className="flex justify-end">
//         <button
//           type="submit"
//           onClick={searchMore}
//           className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition"
//         >
//           Search
//         </button>
//       </div>
//       {/* </form> */}
//     </div>
//   );
// };

// export default SearchBar;
