import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResultForTrainBooking from "./components/ResultForTrainBooking";
import LeftSideBarForTrain from "./components/LeftSideBarForTrain";
import SearchBarForTrain from "./components/SearchBarForTrain";
import SortTrainData from "./components/SortTrainData";

const TrainResult = () => {
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
    <div className=" bg-gray-50">
      <div>transithub</div>
      <div className="sticky flex justify-center top-0 bg-yellow-100 p-1 ">
        <SearchBarForTrain
          from={from}
          to={to}
          FirstTrainData={FirstTrainData}
        />
      </div>
      <div className=" grid lg:grid-cols-4 gap-4  p-1">
        <div className="col-span-1 hidden lg:block">
          {/* <div className="col-span-1 "> */}
          <LeftSideBarForTrain
            TrainData={TrainData}
            from={from}
            to={to}
            originalTrains={originalTrains}
            setTrainData={setTrainData}
          />
        </div>
        <div className=" p-1 col-span-3">
          <SortTrainData
            from={from}
            to={to}
            TrainData={TrainData}
            originalTrains={originalTrains}
            setTrainData={setTrainData}
          />
          <ResultForTrainBooking from={from} to={to} TrainData={TrainData} />
        </div>
      </div>
    </div>
  );
};

export default TrainResult;
