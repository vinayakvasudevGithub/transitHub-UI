// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { BusDetails } from "../../../store/slice/BusSlice";

// const Bus = () => {
//   const [From, setFrom] = useState("");
//   const [To, setTo] = useState("");
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   // console.log(From);

//   const results = (e) => {
//     e.preventDefault();
//     dispatch(
//       BusDetails({
//         from: From,
//         to: To,
//       })
//     );
//     // setFrom("");
//     navigate("/result/BusResult");
//   };

//   return (
//     <div className="bg-green-400 flex justify-center">
//       <form action="" onSubmit={results}>
//         <div className="">
//           <div className="mt-2">
//             {/* <input type="text" onChange={(e) => setFrom(e.target.value)} /> */}
//             <input type="text" onChange={(e) => setFrom(e.target.value)} />
//           </div>
//           <div className="mt-2">
//             <input type="text" onChange={(e) => setTo(e.target.value)} />
//           </div>
//           <button className="bg-red-300 mt-2">search bus</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Bus;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BusDetails } from "../../../store/slice/BusSlice";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Bus = () => {
  const [from, setFrom] = useState("Kannur");
  const [to, setTo] = useState("Mukkam");
  const [travelDate, setTravelDate] = useState(new Date());
  const [inpSearch, setInpSearch] = useState([]);
  const [inpBox, setInpBox] = useState("");
  const [departureBusStop, setDepartureBusStop] = useState("Delhi Bus Stand");
  const [arrivalBusStop, setArrivalBusStop] = useState("Mumbai Bus Stand");
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
      .get("http://localhost:4001/bus/")
      .then((response) => {
        setInpSearch(response.data);
      })
      .catch(() => {
        console.error("Error fetching buses");
        alert("Failed to fetch bus data. Please try again later.");
      });
  }, []);

  const filteredBusStops = [
    ...new Map(
      inpSearch
        .flatMap((bus) =>
          bus.stations.filter((stop) =>
            stop.city.toLowerCase().includes(from.toLowerCase())
          )
        )
        .map((stop) => [stop.city, stop])
    ).values(),
  ];

  const filteredDestinations = [
    ...new Map(
      inpSearch
        .flatMap((bus) =>
          bus.stations.filter((stop) =>
            stop.city.toLowerCase().includes(to.toLowerCase())
          )
        )
        .map((stop) => [stop.city, stop])
    ).values(),
  ];

  const results = (e) => {
    e.preventDefault();
    dispatch(
      BusDetails({
        from,
        to,
        // travelDate,
      })
    );
    navigate("/result/BusResult");
  };

  return (
    <div className="bg-white shadow-custom-shadow p-4">
      <form onSubmit={results}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Departure City */}
          <div>
            <h3 className="text-xs font-semibold mb-1">From</h3>

            <div
              className="bg-gray-100 cursor-pointer"
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
                <div className="bg-white overflow-y-scroll h-40 absolute z-50 top-0 left-0 w-full animate-slide-down">
                  {filteredBusStops.map((stations, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setFrom(stations.city);
                        setInpBox("");
                      }}
                      className="p-2 hover:bg-gray-300 cursor-pointer"
                    >
                      <div className="flex justify-between">
                        <span className="font-bold">{stations.city}</span>,{" "}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Arrival City */}
          <div>
            <h3 className="text-xs font-semibold mb-1">To</h3>
            <div
              className="bg-gray-100 cursor-pointer"
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
                  {filteredDestinations.map((stations, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setTo(stations.city);
                        setInpBox("");
                      }}
                      className="p-2 hover:bg-gray-300 cursor-pointer"
                    >
                      <div className="flex justify-between">
                        <span className="font-bold">{stations.city}</span>,{" "}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
            >
              Search Buses
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Bus;
