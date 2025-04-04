import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { tripInfo } from "../../store/slices/userTransport/trainUserSlice";
import { getAllTrains } from "../../api/services/transport/trainApi";
// import { getAllTrains } from "../../api/services/transport/trainApi";

const TrainHomeSearch = () => {
  const [departureCity, setDepartureCity] = useState("Kannur");
  const [destinationCity, setDestinationCity] = useState("Kozhikode");
  const [date, setDate] = useState(""); // New date state
  const [trainData, setTrainData] = useState([]);
  const [inpBox, setInpBox] = useState("");
  const [departureStation, setDepartureStation] = useState("");
  const [arrivalStation, setArrivalStation] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // trainClass;
  useEffect(() => {
    const fetchAllTrains = async () => {
      try {
        const data = await getAllTrains();
        setTrainData(data);
      } catch (error) {
        console.error("Error fetching train data");
      }
    };
    fetchAllTrains();
  }, []);

  const filteredStations = (input, field) => [
    ...new Map(
      trainData
        .flatMap((train) =>
          train.stations.filter((station) =>
            station.city.toLowerCase().includes(input.toLowerCase())
          )
        )
        .map((station) => [station[field], station])
    ).values(),
  ];

  const filteredFromStations = filteredStations(departureCity, "city");
  const filteredToStations = filteredStations(destinationCity, "city");

  const submit = (e) => {
    e.preventDefault();

    dispatch(
      tripInfo({
        departureCity,
        destinationCity,
        // date,
        // trainClass,
        // departureStation,
        // arrivalStation,
      })
    );
    navigate("/result/TrainResult");
  };

  return (
    <div className="bg-gray-200  p-4 rounded-lg">
      <form onSubmit={submit}>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* From Station */}
          <div>
            <h3 className="text-xs font-semibold mb-1">From</h3>
            <div
              className="bg-gray-100 cursor-pointer"
              onClick={() => setInpBox("from")}
            >
              <input
                type="text"
                value={departureCity}
                className="bg-gray-100 w-full p-2 rounded"
                onChange={(e) => setDepartureCity(e.target.value)}
              />
            </div>
            {inpBox === "from" && (
              <div className="relative">
                <div className="bg-white overflow-y-scroll h-40 absolute z-50 top-0 left-0 w-full animate-slide-down">
                  {filteredFromStations.map((station, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setDepartureCity(station.city);
                        setDepartureStation(station);
                        setInpBox("");
                      }}
                      className="p-2 hover:bg-gray-300 cursor-pointer"
                    >
                      <div className="flex justify-between">
                        <span className="font-bold">{station.city}</span>
                        <span>{station.stationCode}</span>
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {station.station}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="text-xs text-gray-600 truncate">
              {departureStation.station || ""}
            </div>
          </div>

          {/* To Station */}
          <div>
            <h3 className="text-xs font-semibold mb-1">To</h3>
            <div
              className="bg-gray-100 cursor-pointer"
              onClick={() => setInpBox("to")}
            >
              <input
                type="text"
                value={destinationCity}
                className="bg-gray-100 w-full p-2 rounded"
                onChange={(e) => setDestinationCity(e.target.value)}
              />
            </div>
            {inpBox === "to" && (
              <div className="relative">
                <div className="bg-white overflow-y-scroll h-40 absolute z-50 top-0 left-0 w-full animate-slide-down">
                  {filteredToStations.map((station, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setDestinationCity(station.city);
                        setArrivalStation(station);
                        setInpBox("");
                      }}
                      className="p-2 hover:bg-gray-300 cursor-pointer"
                    >
                      <div className="flex justify-between">
                        <span className="font-bold">{station.city}</span>
                        <span>{station.stationCode}</span>
                      </div>
                      <div className="text-xs text-gray-500 truncate">
                        {station.station}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="text-xs text-gray-600 truncate">
              {arrivalStation.station || ""}
            </div>
          </div>

          {/* Date Input */}
          <div>
            <h3 className="text-xs font-semibold mb-1">Date</h3>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-gray-100 p-2 rounded w-full"
              // required
            />
          </div>

          {/* Train Class */}
          <div>
            <h3 className="text-xs font-semibold mb-1">Class</h3>
            <select
              // value={trainClass}
              // onChange={(e) => setTrainClass(e.target.value)}
              className="bg-gray-100 p-2 rounded w-full"
            >
              <option value="SL">Sleeper (SL)</option>
              <option value="CC">Chair Car (CC)</option>
              <option value="AC1">AC First Class (AC1)</option>
              <option value="AC2">AC 2 Tier (AC2)</option>
              <option value="AC3">AC 3 Tier (AC3)</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
            >
              Search Trains
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TrainHomeSearch;
