// import React from "react";

// const TrainSearchBar = () => {
//   return <div>TrainSearchBar</div>;
// };

// export default TrainSearchBar;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { TrainDetails } from "../../../../store/slice/TrainSlice";
// import { TrainDetails } from "../../../store/slice/TrainSlice";
import { TrainDetails } from "../../../store/slice/TrainSlice";
// import { TrainSlice } from "../../../store/slice/TrainSlice";
import axios from "axios";
import { getAllTrains } from "../../../api/services/transport/trainApi";

const TrainSearchBar = ({ from, to, FirstTrainData }) => {
  const [InputBox, setInputBox] = useState();
  const [SearchFrom, SetSearchFrom] = useState(from || "");
  const [SearchTo, SetSearchTo] = useState(to || "");
  const [selectedDate, setSelectedDate] = useState(""); // State for Date
  const [selectedClass, setSelectedClass] = useState(""); // State for Class
  const dispatch = useDispatch();

  const searchMore = (e) => {
    e.preventDefault();
    dispatch(
      TrainDetails({
        from: SearchFrom,
        to: SearchTo,
        // date: selectedDate,
        // class: selectedClass, // Include class and date in the action
      })
    );
    window.location.reload();
  };

  //------------------------

  const [Inpsearch, SetInpsearch] = useState([]);

  useEffect(() => {
    const fetchAllTrains = async () => {
      try {
        const data = await getAllTrains();
        SetInpsearch(data);
      } catch (error) {
        console.error("Error fetching train data");
      }
    };
    fetchAllTrains();
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4001/train")
  //     .then((Response) => {
  //       SetInpsearch(Response.data);
  //     })
  //     .catch((err) => console.log("error on fetching train", err));
  // }, []);

  const filteredStations = Inpsearch.flatMap((train) =>
    train.stations.filter((stations) =>
      stations.city.toLowerCase().includes(SearchFrom.toLowerCase())
    )
  );

  const filteredDestinations = Inpsearch.flatMap((train) =>
    train.stations.filter((stations) =>
      stations.city.toLowerCase().includes(SearchTo.toLowerCase())
    )
  );

  return (
    <div className="bg-white border-neutral-950  p-4 w-full  ">
      <form action="" onSubmit={searchMore}>
        <div className=" p-1 gap-5 grid sm:grid-cols-5 ">
          {/* From Field */}
          <div className="flex flex-col ">
            <label className="text-xs text-gray-600 mb-1">From</label>
            <div className="relative">
              <input
                type="text"
                value={SearchFrom}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => SetSearchFrom(e.target.value)}
                onClick={() => setInputBox("from")}
                placeholder="Search from"
              />
              {InputBox === "from" && (
                <div className="bg-white shadow-lg max-h-40 overflow-y-scroll absolute top-full left-0 w-full mt-1 z-50">
                  {filteredStations.map((stations) => (
                    <p
                      key={stations._id}
                      onClick={() => {
                        SetSearchFrom(stations.city);
                        setInputBox("");
                      }}
                      className="px-3 py-2 hover:bg-blue-200 cursor-pointer"
                    >
                      {stations.city}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* To Field */}
          <div className="flex flex-col ">
            <label className="text-xs text-gray-600 mb-1">To</label>
            <div className="relative">
              <input
                type="text"
                value={SearchTo}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => SetSearchTo(e.target.value)}
                onClick={() => setInputBox("to")}
                placeholder="Search to"
              />
              {InputBox === "to" && (
                <div className="bg-white shadow-lg max-h-40 overflow-y-scroll absolute top-full left-0 w-full mt-1 z-50">
                  {filteredDestinations.map((stations) => (
                    <p
                      key={stations._id}
                      onClick={() => {
                        SetSearchTo(stations.city);
                        setInputBox("");
                      }}
                      className="px-3 py-2 hover:bg-blue-200 cursor-pointer"
                    >
                      {stations.city}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Date Field */}
          <div className="flex flex-col ">
            <label className="text-xs text-gray-600 mb-1">Date</label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Class Field */}
          <div className="flex justify-center items-center flex-col ">
            <label className="text-xs text-gray-600 mb-1">Class</label>
            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Select Class</option>
              <option value="SL">SL</option>
              <option value="CC">CC</option>
              <option value="AC1">AC1</option>
              <option value="AC2">AC2</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center items-end ">
            <button className="bg-blue-500 text-white px-4 py-[10px] rounded-md hover:bg-blue-600 transition-all">
              Search
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TrainSearchBar;
