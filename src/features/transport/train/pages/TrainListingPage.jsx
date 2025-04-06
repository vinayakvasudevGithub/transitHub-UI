import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { searchTrains } from "../../../../api/services/transport/trainApi";
import TrainSearch from "../components/TrainSearch";
import TrainFilter from "../components/TrainFilter";
import TrainSort from "../components/TrainSort";
import TrainCard from "../components/TrainCard";
import Loading from "../../../../components/Loading";

const TrainListingPage = () => {
  const searchKey = useSelector((State) => State.train.TrainList);
  const from = searchKey[searchKey.length - 1].departureCity;
  const to = searchKey[searchKey.length - 1].destinationCity;

  const [originalTrains, setOriginalTrains] = useState([]);
  const [TrainData, setTrainData] = useState([]);
  const [FirstTrainData, setFirstTrainData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrains = async () => {
      try {
        const data = await searchTrains(from, to);
        setOriginalTrains(data);
        setTrainData(data);
      } catch (error) {
        console.error("failed to fetch trains");
      } finally {
        setLoading(false);
      }
    };
    fetchTrains();
  }, [from, to]);

  // if (loading) return <p>Loading trains....</p>;
  // if (!TrainData.length) return <p>No trains available....</p>;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className=" bg-gray-100 p-3">
      <div className="sticky flex justify-center top-0   ">
        <TrainSearch from={from} to={to} FirstTrainData={FirstTrainData} />
      </div>
      <div className=" grid lg:grid-cols-4 gap-4  p-1">
        <div className="col-span-1 hidden lg:block">
          {/* <div className="col-span-1 "> */}
          <TrainFilter
            TrainData={TrainData}
            from={from}
            to={to}
            originalTrains={originalTrains}
            setTrainData={setTrainData}
          />
        </div>
        <div className=" p-1 col-span-3">
          <TrainSort
            from={from}
            to={to}
            TrainData={TrainData}
            originalTrains={originalTrains}
            setTrainData={setTrainData}
          />
          <TrainCard from={from} to={to} TrainData={TrainData} />
        </div>
      </div>
    </div>
  );
};

export default TrainListingPage;
