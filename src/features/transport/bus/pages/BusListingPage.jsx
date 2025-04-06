import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { busRouteMap } from "../../../../api/services/utilities/mapApi";
import BusSearch from "../components/BusSearch";
import BusFilter from "../components/BusFilter";
import BusSort from "../components/BusSort";
import BusCard from "../components/BusCard";
import { searchBuses } from "../../../../api/services/transport/busApi";

const BusListingPage = () => {
  const searchKey = useSelector((state) => state.bus.BusList);
  const from = searchKey[searchKey.length - 1].departureCity;
  const to = searchKey[searchKey.length - 1].destinationCity;
  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [distance, setDistance] = useState();
  const [originalBuses, setOriginalBuses] = useState([]);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const data = await busRouteMap(from, to);
        const distanceText = data.rows[0].elements[0].distance.text;
        if (distanceText) {
          const numericDistance = parseFloat(
            distanceText.replace(/[^0-9.]/g, "")
          );
          setDistance(numericDistance);
        }
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    };

    fetchMapData();
  }, [from, to]);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        const data = await searchBuses(from, to);
        setOriginalBuses(data);
        setBuses(data);
      } catch (error) {
        console.error("failed to fetch buses");
      } finally {
        setLoading(false);
      }
    };
    fetchBuses();
  }, [from, to]);

  // if (loading) return <p>Loading buses....</p>;
  // if (!buses.length) return <p>No buses available....</p>;

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className=" bg-gray-200 p-4  min-h-screen">
      {/* <div className=" sm:sticky top-0 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl border border-gray-700  p-1 "> */}
      <div className="  top-0 bg-gradient-to-b  ">
        <div className=" p-1 ">
          <BusSearch from={from} to={to} />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-3">
        <div className="col-span-1 hidden lg:block p-1">
          {/* <div className="col-span-1 "> */}
          <BusFilter
            from={from}
            to={to}
            originalBuses={originalBuses}
            setBuses={setBuses}
            busData={buses}
          />
        </div>
        <div className="col-span-3">
          <div className="p-1">
            <BusSort
              originalBuses={originalBuses}
              setBuses={setBuses}
              buses={buses}
            />
          </div>
          <div>
            <BusCard from={from} to={to} distance={distance} busData={buses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusListingPage;
