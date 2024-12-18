import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ResultForTrainBooking from "./components/ResultForTrainBooking";
import LeftSideBarForTrain from "./components/LeftSideBarForTrain";
import SearchBarForTrain from "./components/SearchBarForTrain";

const TrainResult = () => {
  const searchKey = useSelector((State) => State.train.trains);
  const from = searchKey[searchKey.length - 1].from;
  const to = searchKey[searchKey.length - 1].to;

  const [TrainData, setTrainData] = useState([]);
  const [FirstTrainData, setFirstTrainData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:4001/train/search?from=${from}&to=${to}`)
      .then((Response) => {
        setTrainData(Response.data);
        const FirstData = Response.data[0];
        setFirstTrainData(FirstData);
      })
      .catch((err) => console.log("trains", err));
  }, []);

  return (
    <div className="bg-red-200 ">
      <div>transithub</div>
      <div className="sticky flex justify-center top-0 bg-yellow-100 p-1 ">
        <SearchBarForTrain
          from={from}
          to={to}
          FirstTrainData={FirstTrainData}
        />
      </div>
      <div className=" gap-4 mt-5 bg-red-500 flex  p-1">
        <LeftSideBarForTrain />
        <ResultForTrainBooking from={from} to={to} TrainData={TrainData} />
      </div>
    </div>
  );
};

export default TrainResult;
