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

//   const filteredAirports = [inpSearch.flatMap((flight) =>
//     flight.airport.filter((airport) =>
//       airport.city.toLowerCase().includes(from.toLowerCase())
//     )
//   ).map((airport)=>[airport.city,airport])]

//   const filteredDestinations = inpSearch.flatMap((flight) =>
//     flight.destination.filter((destination) =>
//       destination.city.toLowerCase().includes(to.toLowerCase())
//     )
//   );

//   const [inpBox, setInpBox] = useState("");
//   const inputBoxShow = (value) => {
//     value === "from" ? setInpBox("from") : setInpBox("to");
//   };

//   const [departureCity, setDepartureCity] = useState();

//   return (
//     <div className="bg-white shadow-custom-shadow p-2 ">
//       <form onSubmit={results} className="">
//         {/* all the searching input is inside this div */}
//         <div className="grid sm:grid-cols-5 bg-red-100  border p-1 space-x-2">
//           {/* to search departurecity */}
//           {inpBox === "from" ? (
//             // this shows up after click the departure city bar
//             <div className="bg-red-400 p-2 col-span-1 relative ">
//               <input
//                 type="text"
//                 className="bg-blue-100 w-full"
//                 onChange={(e) => {
//                   setFrom(e.target.value);
//                 }}
//               />
//               {/* this assist to show city details */}
//               <div className="relative">
//                 <div className="bg-red-500 overflow-y-scroll h-[10rem] absolute z-50 top-0 left-0 w-full">
//                   {filteredAirports.map((airport, index) => (
//                     <div
//                       key={index}
//                       onClick={() => {
//                         setFrom(airport.city);
//                         setInpBox("");
//                       }}
//                     >
//                       {airport.city}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ) : (
//             //departure
//             //click here to get input to search
//             <div
//               className="bg-green-300 col-span-1"
//               onClick={() => setInpBox("from")}
//             >
//               <h1>{from}</h1>
//             </div>
//           )}
//           {/* arrival city */}
//           {inpBox === "to" ? (
//             // this shows up after click the departure city bar
//             <div className="">
//               <input
//                 className="bg-red-50"
//                 value={to}
//                 onChange={(e) => setTo(e.target.value)}
//               />
//               {/* this assist to show city details */}
//               <div className="relative w-[11rem]">
//                 <div className="bg-red-500 overflow-y-scroll h-[10rem] absolute z-50 top-0 left-0 w-full">
//                   {filteredDestinations.map((destination, index) => (
//                     <div
//                       key={index}
//                       onClick={() => {
//                         setTo(destination.city);
//                         setInpBox("");
//                       }}
//                     >
//                       {destination.city}
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ) : (
//             // arrival details
//             //click here to get input to search
//             <div
//               onClick={() => {
//                 setInpBox("to");
//               }}
//             >
//               {to}
//             </div>
//           )}

//           <div>date</div>
//           <div>class</div>

//           <button className="bg-red-500  " type="submit">
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

const Flight = () => {
  const [from, setFrom] = useState("Kannur");
  const [to, setTo] = useState("Kochi");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const results = (e) => {
    e.preventDefault();
    dispatch(
      Flightdetails({
        from: from,
        to: to,
      })
    );
    navigate("/result/FlightResult");
  };

  const [inpSearch, setInpSearch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/flight/")
      .then((response) => {
        setInpSearch(response.data);
      })
      .catch((err) => console.log("Error fetching Flights", err));
  }, []);

  // Filter airports and remove duplicates
  const filteredAirports = [
    ...new Map(
      inpSearch
        .flatMap((flight) =>
          flight.airport.filter((airport) =>
            airport.city.toLowerCase().includes(from.toLowerCase())
          )
        )
        .map((airport) => [airport.city, airport]) // Use city as the key
    ).values(),
  ];

  // Filter destinations and remove duplicates
  const filteredDestinations = [
    ...new Map(
      inpSearch
        .flatMap((flight) =>
          flight.destination.filter((destination) =>
            destination.city.toLowerCase().includes(to.toLowerCase())
          )
        )
        .map((destination) => [destination.city, destination]) // Use city as the key
    ).values(),
  ];

  const [inpBox, setInpBox] = useState("");

  const [departureAirport, setDepartureAirport] = useState(
    "Kannur international airport"
  );
  const [arrivalAirport, setArrivalAirport] = useState(
    "Kochi international airport"
  );
  // const inputBoxShow = (value) => {
  //   value === "from" ? setInpBox("from") : setInpBox("to");
  // };

  return (
    <div className="bg-white shadow-custom-shadow p-2">
      <form onSubmit={results} className="">
        <div className="grid sm:grid-cols-5 bg-red-100 border p-1 space-x-2">
          {/* Departure City */}
          <div>
            <div>
              <h3 className="text-xs">From</h3>
            </div>
            {inpBox === "from" ? (
              <div className=" col-span-1 relative bg-green-400 p-1">
                <input
                  type="text"
                  value={from}
                  className="bg-blue-100 w-full"
                  onChange={(e) => {
                    setFrom(e.target.value);
                  }}
                />
                <div className="relative">
                  <div className="bg-red-500 overflow-y-scroll p-1 h-[10rem] absolute z-50 top-0 left-0 w-full">
                    {filteredAirports.map((airport, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setFrom(airport.city);
                          setDepartureAirport(airport.name);

                          setInpBox("");
                        }}
                        className="bg-green-200 grid"
                      >
                        <div className="grid grid-cols-2">
                          <div className="flex">
                            <h2 className="font-bold">{airport.city}</h2>,
                            <h3 className="font-semibold">{airport.country}</h3>
                          </div>
                          <div className="flex justify-end">{airport.code}</div>
                        </div>
                        <div>
                          <h3 className="text-xs truncate w-full">
                            {airport.name}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div
                className="bg-green-300 p-1 col-span-1"
                onClick={() => {
                  setInpBox("from");
                }}
              >
                <div>
                  <h1>{from}</h1>
                </div>
              </div>
            )}
            <div>
              <h2 className="truncate w-full">{departureAirport}</h2>
            </div>
          </div>
          {/* Arrival City */}
          <div>
            <div>
              <h3 className="text-xs">To</h3>
            </div>
            {inpBox === "to" ? (
              <div className=" bg-red-200 p-1 ">
                <input
                  className="bg-red-50 w-full"
                  value={to}
                  onChange={(e) => setTo(e.target.value)}
                />
                <div className="relative">
                  <div className="bg-red-500 p-1 overflow-y-scroll h-[10rem] absolute z-50 top-0 left-0 w-full">
                    {filteredDestinations.map((destination, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setTo(destination.city);
                          setArrivalAirport(destination.name);
                          setInpBox("");
                        }}
                        className="bg-blue-200"
                      >
                        <div className="grid grid-cols-2">
                          <div className="flex">
                            <h2 className="font-bold">{destination.city}</h2>,
                            <h2 className="">{destination.country}</h2>
                          </div>
                          <div className="flex justify-end">
                            {destination.code}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xs truncate w-full">
                            {destination.name}
                          </h3>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-1 bg-blue-400" onClick={() => setInpBox("to")}>
                <div>
                  <h2>{to}</h2>
                  {/* <h3 className="truncate w-full">{arrivalAirport}</h3> */}
                </div>
              </div>
            )}
            <div>
              <h3 className="truncate w-full">{arrivalAirport}</h3>
            </div>
          </div>
          <div>date</div>
          <div>class</div>
          <button className="bg-red-500" type="submit">
            flight search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Flight;
