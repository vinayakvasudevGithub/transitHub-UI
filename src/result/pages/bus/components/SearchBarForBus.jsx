import React, { useEffect } from "react";
import { useState } from "react";
import { BusDetails } from "../../../../store/slice/BusSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const SearchBarForBus = ({ from, to, busData }) => {
  const dispatch = useDispatch();

  const [searchFrom, setsearchFrom] = useState("");
  const [searchTo, setsearchTo] = useState("");

  const searchMore = (e) => {
    e.preventDefault();
    dispatch(
      BusDetails({
        from: searchFrom,
        to: searchTo,
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
  const InpBoxShow = (value) => {
    value === "from" && setInpBox("from");
    value === "to" && setInpBox("to");
  };

  // const [DepartureCity, setDepartureCity] = useState("");
  // const [ArrivalCity, setArrivalCity] = useState("");

  return (
    <div className="bg-white flex border-neutral-950 border-[1px]">
      <form action="" onSubmit={searchMore}>
        <div className="flex p-1 gap-4">
          <div>
            <p className="text-xs">from</p>
            <div>
              {InpBox === "from" ? (
                <div>
                  <input
                    type="text"
                    className="bg-red-200 w-[10rem]"
                    onChange={(e) => setsearchFrom(e.target.value)}
                  />
                  <div className="relative w-[10rem] bg-blue-400 p-2">
                    <div className="bg-red-500 overflow-y-scroll h-[10rem] absolute z-50 top-0 left-0 w-full">
                      {filteredStations.map((stations) => (
                        <p
                          key={stations._id}
                          onClick={(e) => {
                            // setDepartureCity(stations.city);
                            setsearchFrom(stations.city);
                            setInpBox("");
                          }}
                        >
                          {stations.city}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  className="font-bold text-xl"
                  onClick={(e) => InpBoxShow("from")}
                >
                  <div>{searchFrom ? searchFrom : from}</div>
                </div>
              )}
            </div>
          </div>
          <div>
            <p className="text-xs">to</p>
            <div>
              {InpBox === "to" ? (
                <div>
                  <input
                    type="text"
                    className="bg-green-200 w-[10rem]"
                    onChange={(e) => setsearchTo(e.target.value)}
                  />
                  <div className="relative w-[10rem] bg-blue-400 p-2">
                    <div className="bg-red-500 overflow-y-scroll h-[10rem] absolute z-50 top-0 left-0 w-full">
                      {filteredDestinations.map((stations) => (
                        <p
                          key={stations._id}
                          onClick={(e) => {
                            // setArrivalCity(stations.city);
                            setsearchTo(stations.city);
                            setInpBox("");
                          }}
                        >
                          {stations.city}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <p
                  className="font-bold text-xl"
                  onClick={(e) => InpBoxShow("to")}
                >
                  {searchTo ? searchTo : to}
                </p>
              )}
            </div>
          </div>
          <button className="bg-red-500" onClick={searchMore}>
            search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBarForBus;
