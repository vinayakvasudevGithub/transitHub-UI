import React, { useEffect } from "react";
import { useState } from "react";
import { BusDetails } from "../../../../store/slice/BusSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { PiArrowsLeftRightLight } from "react-icons/pi";
import { HiMiniArrowsUpDown } from "react-icons/hi2";

const SearchBarForBus = ({ from, to, busData }) => {
  const dispatch = useDispatch();

  const [searchFrom, setsearchFrom] = useState(from || "");
  const [searchTo, setsearchTo] = useState(to || "");

  const searchMore = (e) => {
    e.preventDefault();
    dispatch(
      BusDetails({
        from: searchFrom ? searchFrom : from,
        to: searchTo ? searchTo : to,
      }),
      window.location.reload()
    );
  };

  //to get city ddetails to dropdown ------------------------------->>>>>>>>>>>>>>

  const [Inpsearch, setInpsearch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/bus")
      .then((Response) => {
        setInpsearch(Response.data);
      })
      .catch((err) => console.log("error fetching buses", err));
  }, []);

  /////

  const filteredStations = Inpsearch.flatMap((bus) =>
    bus.stations.filter((stations) =>
      stations.city.toLowerCase().includes(searchFrom.toLowerCase())
    )
  );

  const filteredDestinations = Inpsearch.flatMap((bus) =>
    bus.stations.filter((stations) =>
      stations.city.toLowerCase().includes(searchTo.toLowerCase())
    )
  );

  // input box show and hide ------------------------------------------>>>>>>>>>>
  const [InpBox, setInpBox] = useState("");

  return (
    <>
      <div className=" bg-white col-span-6 grid grid-cols-1 sm:flex justify-between gap-1 p-2 w-full ">
        {/* From Input */}
        <div className="col-span-3 p-1 w-full">
          <h3 className="text-xs font-semibold text-gray-600 mb-1">From</h3>
          <div className="relative">
            <input
              type="text"
              value={searchFrom}
              className="bg-gray-100 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              placeholder="Enter origin"
              onChange={(e) => setsearchFrom(e.target.value)}
              onClick={(e) => setInpBox("from")}
            />
            {InpBox === "from" && (
              <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-50 w-full max-h-40 overflow-y-auto">
                {filteredStations.map((stations) => (
                  <p
                    key={stations._id}
                    className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-blue-100"
                    onClick={(e) => {
                      setsearchFrom(stations.city);
                      setInpBox("");
                    }}
                  >
                    {stations.city}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Arrow Icons */}
        <div className="col-span-1 flex justify-center items-center text-gray-500">
          <PiArrowsLeftRightLight className="hidden sm:block text-2xl" />
          <HiMiniArrowsUpDown className="block sm:hidden text-xl" />
        </div>

        {/* To Input */}
        <div className="col-span-3 p-1 w-full">
          <h3 className="text-xs font-semibold text-gray-600 mb-1">To</h3>
          <div className="relative">
            <input
              type="text"
              value={searchTo}
              className="bg-gray-100 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              placeholder="Enter destination"
              onChange={(e) => setsearchTo(e.target.value)}
              onClick={() => setInpBox("to")}
            />
            {InpBox === "to" && (
              <div className="absolute bg-white border border-gray-300 rounded-lg shadow-lg mt-2 z-50 w-full max-h-40 overflow-y-auto">
                {filteredDestinations.map((stations) => (
                  <p
                    key={stations._id}
                    className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-blue-100"
                    onClick={(e) => {
                      setsearchTo(stations.city);
                      setInpBox("");
                    }}
                  >
                    {stations.city}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Date Input */}
        <div className="col-span-3 p-1 w-full">
          <h3 className="text-xs font-semibold text-gray-600 mb-1">Date</h3>
          <input
            type="date"
            className="bg-gray-100 w-full p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
          />
        </div>

        {/* Search Button */}
        <div className="flex justify-center sm:w-[50%]">
          <button
            className="bg-blue-500 text-white  hover:bg-blue-600 font-semibold rounded-lg sm:w-full w-[25%] py-3 px-6 "
            onClick={searchMore}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default SearchBarForBus;
