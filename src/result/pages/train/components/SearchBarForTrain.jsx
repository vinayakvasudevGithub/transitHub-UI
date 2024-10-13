import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TrainDetails } from "../../../../store/slice/TrainSlice";
import axios from "axios";

const SearchBarForTrain = ({ from, to, FirstTrainData }) => {
  const [InputBox, setInputBox] = useState();

  const [SearchFrom, SetSearchFrom] = useState("");
  const [SearchTo, SetSearchTo] = useState("");
  const dispatch = useDispatch();

  const searchMore = (e) => {
    e.preventDefault();
    dispatch(
      TrainDetails({
        from: SearchFrom,
        to: SearchTo,
      }),
      window.location.reload()
    );
  };

  //------------------------

  const [Inpsearch, SetInpsearch] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001/train")
      .then((Response) => {
        SetInpsearch(Response.data);
      })
      .catch((err) => console.log("error on fetching train", err));
  }, []);

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
    <div className="bg-white border-neutral-950 border-[1px]">
      <form action="" onSubmit={searchMore}>
        <div className="flex p-1 gap-4">
          <div>
            <p className="text-xs">form</p>
            <div>
              {InputBox === "from" ? (
                <div>
                  <input
                    type="text"
                    className="w-[10rem]"
                    onChange={(e) => SetSearchFrom(e.target.value)}
                  />
                  <div className="relative w-[10rem] bg-blue-400 p-2">
                    <div className="bg-red-500 overflow-y-scroll h-[10rem] absolute z-50 top-0 left-0 w-full">
                      {filteredStations.map((stations) => (
                        <p
                          key={stations._id}
                          onClick={(e) => {
                            SetSearchFrom(stations.city);
                            setInputBox("");
                          }}
                        >
                          {stations.city}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p
                    onClick={(e) => {
                      setInputBox("from");
                    }}
                  >
                    {SearchFrom ? SearchFrom : from}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div>
            <p className="text-xs">To</p>
            <div>
              {InputBox === "to" ? (
                <div>
                  <input
                    type="text"
                    className="w-[10rem]"
                    onChange={(e) => SetSearchTo(e.target.value)}
                  />
                  <div className="relative w-[10rem] bg-blue-400 p-2">
                    <div className="bg-red-500 overflow-y-scroll h-[10rem] absolute z-50 top-0 left-0 w-full">
                      {filteredDestinations.map((stations) => (
                        <p
                          key={stations._id}
                          onClick={(e) => {
                            SetSearchTo(stations.city);
                            setInputBox("");
                          }}
                        >
                          {stations.city}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <p
                    onClick={(e) => {
                      setInputBox("to");
                    }}
                  >
                    {SearchTo ? SearchTo : to}
                  </p>
                </div>
              )}
            </div>
          </div>
          <button className="bg-red-500">search</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBarForTrain;
