import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { searchBuses } from "../api/busApi";
import BusFliterBar from "./busComponents/BusFliterBar";
import BusList from "./busComponents/BusList";
import BusSortingBar from "./busComponents/BusSortingBar";
import BusSearchBar from "./busComponents/BusSearchBar";
import { busRouteMap } from "../api/mapApi";

const BusResults = () => {
  const searchKey = useSelector((state) => state.bus.buses);
  const from = searchKey[searchKey.length - 1].from;
  const to = searchKey[searchKey.length - 1].to;
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

  if (loading) return <p>Loading buses....</p>;
  if (!buses.length) return <p>No buses available....</p>;

  return (
    <div className=" bg-gray-200 p-4  min-h-screen">
      {/* <div className=" sm:sticky top-0 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl border border-gray-700  p-1 "> */}
      <div className="  top-0 bg-gradient-to-b  ">
        <div className=" p-1 ">
          <BusSearchBar from={from} to={to} />
        </div>
        {/* <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 rounded-lg shadow-md"> */}
        {/* <div className="flex justify-end p-1   ">
          <h2 className="text-2xl font-semibold uppercase">
            Bus from {from} to {to}
          </h2>
          --
          <p className="text-lg mt-1">Distance: {distance} km</p>
        </div> */}
      </div>
      <div className="grid lg:grid-cols-4 gap-3">
        <div className="col-span-1 hidden lg:block p-1">
          {/* <div className="col-span-1 "> */}
          <BusFliterBar
            from={from}
            to={to}
            originalBuses={originalBuses}
            setBuses={setBuses}
            busData={buses}
          />
        </div>
        <div className="col-span-3">
          <div className="p-1">
            <BusSortingBar
              originalBuses={originalBuses}
              setBuses={setBuses}
              buses={buses}
            />
          </div>
          <div>
            <BusList from={from} to={to} distance={distance} busData={buses} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusResults;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { getAllBuses } from "../api/busApi";
// import BusFliterBar from "./busComponents/BusFliterBar";
// import BusList from "./busComponents/BusList";
// import BusSortingBar from "./busComponents/BusSortingBar";
// import BusSearchBar from "./busComponents/BusSearchBar";

// const BusResults = () => {
//   const searchKey = useSelector((state) => state.bus.buses);
//   const from = searchKey[searchKey.length - 1].from;
//   const to = searchKey[searchKey.length - 1].to;
//   const [buses, setBuses] = useState([]);
//   const [distance, setDistance] = useState();
//   const [originalBuses, setOriginalBuses] = useState([]);

//   const apiKey = import.meta.env.VITE_API_KEY_GOOGLE_MAP;
//   // console.log(apiKey);
//   useEffect(() => {
//     axios
//       .get(
//         `https://maps.gomaps.pro/maps/api/distancematrix/json?destinations=${from.toUpperCase()}&origins=${to.toUpperCase()}&key=${apiKey}`
//       )
//       .then((response) => {
//         console.log(response?.data);
//         const distanceText = response?.data?.rows[0].elements[0].distance.text;
//         if (distanceText) {
//           const numericDistance = parseFloat(
//             distanceText.replace(/[^0-9.]/g, "")
//           );
//           setDistance(numericDistance);
//         }
//       })
//       .catch((error) => {
//         console.log("Error fetching distance:", error);
//       });
//   }, [from, to, apiKey]);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:4001/bus/search?from=${from}&to=${to}`)
//       .then((response) => {
//         setOriginalBuses(response.data); // Store the original fetched data
//         setBuses(response.data);
//       })
//       .catch((err) => console.log("Error fetching buses", err));
//   }, [from, to]);

//   return (
//     <div className=" bg-gray-200 p-4  min-h-screen">
//       {/* <div className=" sm:sticky top-0 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl border border-gray-700  p-1 "> */}
//       <div className="  top-0 bg-gradient-to-b  ">
//         <div className=" p-1 ">
//           <BusSearchBar from={from} to={to} />
//         </div>
//         {/* <div className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-6 rounded-lg shadow-md"> */}
//         {/* <div className="flex justify-end p-1   ">
//           <h2 className="text-2xl font-semibold uppercase">
//             Bus from {from} to {to}
//           </h2>
//           --
//           <p className="text-lg mt-1">Distance: {distance} km</p>
//         </div> */}
//       </div>
//       <div className="grid lg:grid-cols-4 gap-3">
//         <div className="col-span-1 hidden lg:block p-1">
//           {/* <div className="col-span-1 "> */}
//           <BusFliterBar
//             from={from}
//             to={to}
//             originalBuses={originalBuses}
//             setBuses={setBuses}
//             busData={buses}
//           />
//         </div>
//         <div className="col-span-3">
//           <div className="p-1">
//             <BusSortingBar
//               originalBuses={originalBuses}
//               setBuses={setBuses}
//               buses={buses}
//             />
//           </div>
//           <div>
//             <BusList from={from} to={to} distance={distance} busData={buses} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusResults;
