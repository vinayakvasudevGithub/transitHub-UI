// // import React, { useEffect, useState } from "react";
// // import { useSelector } from "react-redux";
// // import { busRouteMap } from "../../../../api/services/utilities/mapApi";
// // import BusSearch from "../components/BusSearch";
// // import BusFilter from "../components/BusFilter";
// // import BusSort from "../components/BusSort";
// // import BusCard from "../components/BusCard";
// // import { searchBuses } from "../../../../api/services/transport/busApi";
// // import Loading from "../../../../components/Loading";

// // const BusListingPage = () => {
// //   const searchKey = useSelector((state) => state.bus.BusList);
// //   const from = searchKey[searchKey.length - 1].departureCity;
// //   const to = searchKey[searchKey.length - 1].destinationCity;
// //   const [buses, setBuses] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [distance, setDistance] = useState();
// //   const [originalBuses, setOriginalBuses] = useState([]);

// //   useEffect(() => {
// //     const fetchMapData = async () => {
// //       try {
// //         const data = await busRouteMap(from, to);
// //         const distanceText = data.rows[0].elements[0].distance.text;
// //         if (distanceText) {
// //           const numericDistance = parseFloat(
// //             distanceText.replace(/[^0-9.]/g, "")
// //           );
// //           setDistance(numericDistance);
// //         }
// //       } catch (error) {
// //         console.error("Error fetching map data:", error);
// //       }
// //     };

// //     fetchMapData();
// //   }, [from, to]);

// //   useEffect(() => {
// //     const fetchBuses = async () => {
// //       try {
// //         const data = await searchBuses(from, to);
// //         setOriginalBuses(data);
// //         setBuses(data);
// //       } catch (error) {
// //         console.error("failed to fetch buses");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };
// //     fetchBuses();
// //   }, [from, to]);

// //   // if (loading) return <p>Loading buses....</p>;
// //   // if (!buses.length) return <p>No buses available....</p>;

// //   if (loading) {
// //     return <Loading />;
// //   }

// //   return (
// //     <div className=" bg-gray-200 p-4  min-h-screen">
// //       {/* <div className=" sm:sticky top-0 bg-gradient-to-b from-gray-800 to-black rounded-lg shadow-xl border border-gray-700  p-1 "> */}
// //       <div className="  top-0 bg-gradient-to-b  ">
// //         <div className=" p-1 ">
// //           <BusSearch from={from} to={to} />
// //         </div>
// //       </div>
// //       <div className="grid lg:grid-cols-4 gap-3">
// //         <div className="col-span-1 hidden lg:block p-1">
// //           {/* <div className="col-span-1 "> */}
// //           <BusFilter
// //             from={from}
// //             to={to}
// //             originalBuses={originalBuses}
// //             setBuses={setBuses}
// //             busData={buses}
// //           />
// //         </div>
// //         <div className="col-span-3">
// //           <div className="p-1">
// //             <BusSort
// //               originalBuses={originalBuses}
// //               setBuses={setBuses}
// //               buses={buses}
// //             />
// //           </div>
// //           <div>
// //             <BusCard from={from} to={to} distance={distance} busData={buses} />
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default BusListingPage;

// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { busRouteMap } from "../../../../api/services/utilities/mapApi";
// import BusSearch from "../components/BusSearch";
// import BusFilter from "../components/BusFilter";
// import BusSort from "../components/BusSort";
// import BusCard from "../components/BusCard";
// import { searchBuses } from "../../../../api/services/transport/busApi";
// import Loading from "../../../../components/Loading";

// const BusListingPage = () => {
//   const searchKey = useSelector((state) => state.bus.BusList);
//   const from = searchKey[searchKey.length - 1].departureCity;
//   const to = searchKey[searchKey.length - 1].destinationCity;
//   const [buses, setBuses] = useState([]);
//   const [loading, setLoading] = useState(true); // 🔹 loading state
//   const [distance, setDistance] = useState();
//   const [originalBuses, setOriginalBuses] = useState([]);

//   useEffect(() => {
//     const fetchMapData = async () => {
//       try {
//         const data = await busRouteMap(from, to);
//         const distanceText = data.rows[0].elements[0].distance.text;
//         if (distanceText) {
//           const numericDistance = parseFloat(
//             distanceText.replace(/[^0-9.]/g, "")
//           );
//           setDistance(numericDistance);
//         }
//       } catch (error) {
//         console.error("Error fetching map data:", error);
//       }
//     };

//     fetchMapData();
//   }, [from, to]);

//   useEffect(() => {
//     const fetchBuses = async () => {
//       try {
//         const data = await searchBuses(from, to);
//         setOriginalBuses(data);
//         setBuses(data);
//       } catch (error) {
//         console.error("failed to fetch buses");
//       } finally {
//         setLoading(false); // 🔹 stop loading
//       }
//     };
//     fetchBuses();
//   }, [from, to]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center min-h-screen">
//         <Loading />
//       </div>
//     ); // 🔹 show loader before rendering rest
//   }

//   return (
//     <div className=" bg-gray-200 p-4  min-h-screen">
//       <div className="  top-0 bg-gradient-to-b  ">
//         <div className=" p-1 ">
//           <BusSearch from={from} to={to} />
//         </div>
//       </div>
//       <div className="grid lg:grid-cols-4 gap-3">
//         <div className="col-span-1 hidden lg:block p-1">
//           <BusFilter
//             from={from}
//             to={to}
//             originalBuses={originalBuses}
//             setBuses={setBuses}
//             busData={buses}
//           />
//         </div>
//         <div className="col-span-3">
//           <div className="p-1">
//             <BusSort
//               originalBuses={originalBuses}
//               setBuses={setBuses}
//               buses={buses}
//             />
//           </div>
//           <div>
//             <BusCard from={from} to={to} distance={distance} busData={buses} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusListingPage;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { busRouteMap } from "../../../../api/services/utilities/mapApi";
import BusSearch from "../components/BusSearch";
import BusFilter from "../components/BusFilter";
import BusSort from "../components/BusSort";
import BusCard from "../components/BusCard";
import { searchBuses } from "../../../../api/services/transport/busApi";
import Loading from "../../../../components/Loading";

const BusListingPage = () => {
  const searchKey = useSelector((state) => state.bus.BusList);
  const from = searchKey[searchKey.length - 1].departureCity;
  const to = searchKey[searchKey.length - 1].destinationCity;
  const [buses, setBuses] = useState([]);
  const [mapLoading, setMapLoading] = useState(true); // Loading for map data
  const [busLoading, setBusLoading] = useState(true); // Loading for bus data
  const [distance, setDistance] = useState();
  const [originalBuses, setOriginalBuses] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        setMapLoading(true);
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
        setError("Failed to load distance information");
      } finally {
        setMapLoading(false);
      }
    };

    fetchMapData();
  }, [from, to]);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        setBusLoading(true);
        const data = await searchBuses(from, to);
        setOriginalBuses(data);
        setBuses(data);
      } catch (error) {
        console.error("Failed to fetch buses");
        setError("Failed to load bus information");
      } finally {
        setBusLoading(false);
      }
    };
    fetchBuses();
  }, [from, to]);

  // Show loading if either map or bus data is still loading
  if (mapLoading || busLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loading />
      </div>
    );
  }

  // Show error message if there was an error
  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 p-4 min-h-screen">
      <div className="top-0 bg-gradient-to-b">
        <div className="p-1">
          <BusSearch from={from} to={to} />
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-3">
        <div className="col-span-1 hidden lg:block p-1">
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
