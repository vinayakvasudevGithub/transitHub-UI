import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TrainSearchBar from "./trainComponents/TrainSearchBar";
import TrainFilterBar from "./trainComponents/TrainFilterBar";
import TrainList from "./trainComponents/TrainList";
import TrainSortingBar from "./trainComponents/TrainSortingBar";

const TrainResults = () => {
  const searchKey = useSelector((State) => State.train.trains);
  const from = searchKey[searchKey.length - 1].from;
  const to = searchKey[searchKey.length - 1].to;

  const [originalTrains, setOriginalTrains] = useState([]);
  const [TrainData, setTrainData] = useState([]);
  const [FirstTrainData, setFirstTrainData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4001/train/search?from=${from}&to=${to}`)
      .then((Response) => {
        setTrainData(Response.data);
        setOriginalTrains(Response.data);
        const FirstData = Response.data[0];
        setFirstTrainData(FirstData);
      })
      .catch((err) => console.log("trains", err));
  }, []);

  return (
    <div className=" bg-gray-100 p-3">
      <div className="sticky flex justify-center top-0   ">
        <TrainSearchBar from={from} to={to} FirstTrainData={FirstTrainData} />
      </div>
      <div className=" grid lg:grid-cols-4 gap-4  p-1">
        <div className="col-span-1 hidden lg:block">
          {/* <div className="col-span-1 "> */}
          <TrainFilterBar
            TrainData={TrainData}
            from={from}
            to={to}
            originalTrains={originalTrains}
            setTrainData={setTrainData}
          />
        </div>
        <div className=" p-1 col-span-3">
          <TrainSortingBar
            from={from}
            to={to}
            TrainData={TrainData}
            originalTrains={originalTrains}
            setTrainData={setTrainData}
          />
          <TrainList from={from} to={to} TrainData={TrainData} />
        </div>
      </div>
    </div>
  );
};

export default TrainResults;
