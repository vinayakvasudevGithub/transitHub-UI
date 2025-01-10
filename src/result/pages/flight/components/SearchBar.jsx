import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Flightdetails } from "../../../../store/slice/FlightSlice";

const SearchBar = ({ FirstFlightData }) => {
  //to dispatch keywords to redux from input-------------------------------------------->>
  const [searchFrom, setsearchFrom] = useState("");
  const [searchTo, setsearchTo] = useState("");
  const dispatch = useDispatch();

  const searchMore = (e) => {
    e.preventDefault();
    dispatch(
      Flightdetails({
        from: searchFrom,
        to: searchTo,
      }),
      window.location.reload()
    );
  };

  /////////get details to input box ------------------------------------------->>>

  const [inpsearch, setInpsearch] = useState([]);
  // const [mon, setmon] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/flight/")
      .then((response) => {
        setInpsearch(response.data);
      })
      .catch((err) => console.log("Error fetching flights", err));
  }, []);

  ///fetch departure details from inpsearch -------------------->>>>>>>>>

  const filteredAirports = inpsearch.flatMap((flight) =>
    flight.airport.filter((airport) =>
      airport.city.toLowerCase().includes(searchFrom.toLowerCase())
    )
  );

  /// fetch destination details from inpsearch  -------------------->>>>>

  const filteredDestinations = inpsearch.flatMap((flight) =>
    flight.destination.filter((destination) =>
      destination.city.toLowerCase().includes(searchTo.toLowerCase())
    )
  );
  //////hide ,add and show input box ------------------------------>>>>>>>>>>

  const [inpBox, SetinpBox] = useState("");
  const InpBoxShow = (value) => {
    value === "from" && SetinpBox("from");
    value === "to" && SetinpBox("to");
  };

  //to add departure city name to input box  ----------------------------->>>>>>>

  const [DepartureCityName, setDepartureCityName] = useState("");
  const [DepartureairportName, setDepartureairportName] = useState("");

  /// to add destination city name to input box ----------------------------------->>>>>>

  const [destinationAirportName, setdestinationAirportName] = useState("");
  const [destinationCityName, setdestinationCityName] = useState("");

  return (
    <div className=" bg-white flex  border-neutral-950 border-[1px]">
      <form action="" onSubmit={searchMore}>
        {FirstFlightData.map((data) => (
          <div className="flex" key={data._id}>
            {/* input box from departure city------------------------------------------- */}
            {data.airport.map((airport) => (
              <div
                className=" border-r-[1px] border-neutral-950 p-1  "
                key={airport._id}
              >
                <p className="text-xs">From:</p>

                {inpBox === "from" ? (
                  <div className="font-bold">
                    <input
                      className="w-[10rem]"
                      type="text"
                      onChange={(e) =>
                        setsearchFrom(e.target.value || DepartureCityName)
                      }
                    />

                    <div className="relative w-[10rem]">
                      <div className="bg-red-500 overflow-y-scroll h-[10rem] absolute z-50 top-0 left-0 w-full">
                        {filteredAirports.map((airport, index) => (
                          <p
                            onClick={(e) => {
                              setDepartureairportName(airport.name);
                              setDepartureCityName(airport.city);
                              setsearchFrom(airport.city);
                              SetinpBox("");
                            }}
                            key={index}
                          >
                            {airport.city}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p onClick={() => InpBoxShow("from")} className="font-bold">
                    {DepartureCityName ? DepartureCityName : airport.city}
                  </p>
                )}
                <p className="text-xs">
                  {DepartureairportName ? DepartureairportName : airport.name}
                </p>
              </div>
            ))}
            {/* input details for arrival city ------------------------------>>>>>>>>>>>>>>>  */}

            {data.destination.map((destination) => (
              <div
                className="border-neutral-950 border-r-[1px] p-1 "
                key={destination._id}
              >
                <p className="text-xs">To</p>
                <div className="font-bold">
                  {inpBox === "to" ? (
                    <div>
                      <input
                        className="w-[10rem]"
                        type="text"
                        onChange={(e) =>
                          setsearchTo(e.target.value || destinationCityName)
                        }
                      />
                      <div className="relative w-[10rem]">
                        <div className="bg-red-500 overflow-y-scroll h-[10rem] absolute z-50 top-0 left-0 w-full">
                          {filteredDestinations.map((Destinations, index) => (
                            <p
                              onClick={(e) => {
                                setdestinationAirportName(Destinations.name);
                                setdestinationCityName(Destinations.city);
                                setsearchTo(Destinations.city);
                                SetinpBox("");
                              }}
                              key={index}
                            >
                              {Destinations.city}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p onClick={(e) => InpBoxShow("to")}>
                      {destinationCityName
                        ? destinationCityName
                        : destination.city}
                    </p>
                  )}
                </div>
                <p className="text-xs">
                  {destinationAirportName
                    ? destinationAirportName
                    : destination.name}
                </p>
              </div>
            ))}
            <button type="submit">search</button>
          </div>
        ))}
      </form>
    </div>
  );
};

export default SearchBar;
