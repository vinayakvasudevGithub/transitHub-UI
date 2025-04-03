import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TrainList = ({ from, to, TrainData }) => {
  const navigate = useNavigate();
  const [popUp, setPopUp] = useState("");

  // Calculate time duration
  const calculateDuration = (departureTime, arrivalTime) => {
    const [depHours, depMinutes] = departureTime.split(":").map(Number);
    const [arrHours, arrMinutes] = arrivalTime.split(":").map(Number);

    const depTotalMinutes = depHours * 60 + depMinutes;
    const arrTotalMinutes = arrHours * 60 + arrMinutes;

    const durationMinutes =
      arrTotalMinutes >= depTotalMinutes
        ? arrTotalMinutes - depTotalMinutes
        : arrTotalMinutes + (24 * 60 - depTotalMinutes); // Handle overnight journeys

    const hours = Math.floor(durationMinutes / 60);
    const minutes = durationMinutes % 60;

    return `${hours}h ${minutes}m`;
  };

  const handleNavigateToBookingPage = (classId, trainId) => {
    navigate("/booking/trainTicket", { state: { classId, trainId } });
  };

  return (
    <div className=" min-h-screen  ">
      {/* <div className="max-w-5xl mx-auto"> */}
      {/* <div className=""> */}
      {/* <p className="text-xl font-semibold text-gray-700 mb-4">
          Trains from <span className="text-blue-500">{from}</span> to{" "}
          <span className="text-blue-500">{to}</span>
        </p> */}
      {TrainData.map((data) => (
        <div
          onClick={() => (!popUp ? setPopUp(data._id) : setPopUp(null))}
          key={data._id}
          className={`p-4  bg-white mt-4  shadow-md cursor-pointer transition-transform duration-300 ease-in-out ${
            popUp === data._id ? "hover:scale-[1.03]" : "hover:scale-[1.02]"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
            {/* Train Name and Number */}
            <div className="sm:col-span-3 flex items-center justify-start">
              <div className="grid">
                <h3 className="text-lg font-bold text-gray-800">
                  {data.trainName}
                </h3>
                <h3 className="text-sm font-semibold text-gray-600">
                  {data.category}
                </h3>
                <h3 className="text-sm text-red-700">{data.trainNumber}</h3>
              </div>
            </div>

            {/* From and To Stations with Date, Time, and Duration */}
            <div className="sm:col-span-7 flex justify-between items-center text-sm text-gray-600">
              <div className="flex flex-col items-start">
                {data.stations
                  .filter((station) => station.city === from)
                  .map((station) => (
                    <div key={station._id}>
                      <p>
                        <span className="font-semibold text-lg text-gray-800">
                          {station.departureTime}
                        </span>{" "}
                        - Depart
                      </p>
                      <p>
                        <span className="font-semibold text-gray-800">
                          {station.station}
                        </span>{" "}
                        ({station.stationCode})
                      </p>
                      <p>{station.departureDate}</p>
                    </div>
                  ))}
              </div>
              <div className="text-gray-400">
                {data.stations
                  .filter((station) => station.city === to)
                  .map((station) => (
                    <div
                      key={station}
                      className="text-green-600 font-semibold "
                    >
                      <span>
                        {calculateDuration(
                          data.stations.find((station) => station.city === from)
                            .departureTime,
                          station.arrivalTime
                        )}
                      </span>
                    </div>
                  ))}
              </div>

              <div className="flex flex-col items-end">
                {data.stations
                  .filter((station) => station.city === to)
                  .map((station) => (
                    <div key={station._id}>
                      <p>
                        <span className="font-semibold text-lg text-gray-800">
                          {station.arrivalTime}
                        </span>{" "}
                        - Arrive
                      </p>
                      <p>
                        <span className="font-semibold text-gray-800">
                          {station.station}
                        </span>{" "}
                        ({station.stationCode})
                      </p>
                      <p>{station.arrivalDate}</p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Book Button */}
            <div className="sm:col-span-2 flex justify-end">
              <button className="  text-white px-4 py-2 rounded-md bg-blue-700 hover:bg-blue-800 transition-all">
                Book Now
              </button>
            </div>
          </div>

          {/* Dropdown for Classes */}

          <div
            className={`bg-gray-100 overflow-hidden transition-all duration-300 ease-in-out ${
              popUp === data._id ? "mt-2 p-1  opacity-100" : "h-0 opacity-0"
            }  overflow-x-auto  flex  border rounded-lg scrollbar`}
          >
            <div className="flex w-[20rem] gap-4">
              {data?.classes.map((classItem) => (
                <div
                  onClick={() =>
                    handleNavigateToBookingPage(classItem._id, data._id)
                  }
                  key={classItem._id}
                  className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 p-4 min-w-[10rem] flex flex-col"
                >
                  {/* Class Info */}
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-bold text-gray-800">
                      {classItem.classType}
                    </h2>
                    <h2 className="text-md font-semibold text-green-600">
                      {classItem.basicFare} INR
                    </h2>
                  </div>

                  {/* Availability Info */}
                  <div className="text-sm text-gray-500">
                    <h4>Available: gg</h4>
                  </div>

                  {/* Hover effect for interaction */}
                  <div className="mt-4 text-center text-blue-600 hover:text-blue-700">
                    <span className="font-semibold">Book Now</span>
                  </div>
                </div>
              ))}
            </div>

            {/* <div className="flex w-[20rem] gap-1">
                {data?.classes.map((classes) => (
                  <div
                    onClick={(e) =>
                      handleNavigateToBookingPage(classes._id, data._id)
                    }
                    key={classes._id}
                    className="bg-white items-center p-1 min-w-[10rem]" // Ensure consistent width
                  >
                    <div className="flex space-x-2">
                      <h2 className="text-ms font-bold">{classes.classType}</h2>
                      <h2>{classes.basicFare}</h2>
                    </div>
                    <div>
                      <h4 className="text-sm">Available: gg</h4>
                    </div>
                  </div>
                ))}
              </div> */}
          </div>
        </div>
      ))}
    </div>
    // </div>
  );
};

export default TrainList;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { FaTrain, FaClock, FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";

// const TrainList = ({ from, to, TrainData }) => {
//   const navigate = useNavigate();
//   const [expandedTrain, setExpandedTrain] = useState(null);

//   const calculateDuration = (departureTime, arrivalTime) => {
//     const [depHours, depMinutes] = departureTime.split(":").map(Number);
//     const [arrHours, arrMinutes] = arrivalTime.split(":").map(Number);

//     const depTotalMinutes = depHours * 60 + depMinutes;
//     const arrTotalMinutes = arrHours * 60 + arrMinutes;

//     const durationMinutes =
//       arrTotalMinutes >= depTotalMinutes
//         ? arrTotalMinutes - depTotalMinutes
//         : arrTotalMinutes + (24 * 60 - depTotalMinutes);

//     const hours = Math.floor(durationMinutes / 60);
//     const minutes = durationMinutes % 60;

//     return `${hours}h ${minutes}m`;
//   };

//   const handleNavigateToBookingPage = (classId, trainId) => {
//     navigate("/booking/trainTicket", { state: { classId, trainId } });
//   };

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-6">
//       <h1 className="text-2xl font-bold text-gray-800 mb-6">
//         Trains from <span className="text-blue-600">{from}</span> to{" "}
//         <span className="text-blue-600">{to}</span>
//       </h1>

//       <div className="space-y-4">
//         {TrainData.map((train) => (
//           <div
//             key={train._id}
//             className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-md"
//           >
//             {/* Train Header */}
//             <div
//               className="p-5 cursor-pointer"
//               onClick={() => setExpandedTrain(expandedTrain === train._id ? null : train._id)}
//             >
//               <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
//                 {/* Train Info */}
//                 <div className="flex items-center gap-4">
//                   <div className="bg-blue-100 p-3 rounded-full">
//                     <FaTrain className="text-blue-600 text-xl" />
//                   </div>
//                   <div>
//                     <h2 className="text-lg font-bold text-gray-800">{train.trainName}</h2>
//                     <div className="flex items-center gap-2 text-sm text-gray-600">
//                       <span>{train.trainNumber}</span>
//                       <span>•</span>
//                       <span>{train.category}</span>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Schedule Info */}
//                 <div className="grid grid-cols-3 gap-4 items-center">
//                   {train.stations
//                     .filter((station) => station.city === from)
//                     .map((station) => (
//                       <div key={station._id} className="text-center">
//                         <p className="text-xl font-bold text-gray-800">{station.departureTime}</p>
//                         <p className="text-sm text-gray-600">{station.stationCode}</p>
//                       </div>
//                     ))}

//                   <div className="flex flex-col items-center">
//                     <div className="flex items-center text-gray-500">
//                       <FaClock className="mr-1" />
//                       <span className="text-sm font-medium">
//                         {calculateDuration(
//                           train.stations.find((s) => s.city === from).departureTime,
//                           train.stations.find((s) => s.city === to).arrivalTime
//                         )}
//                       </span>
//                     </div>
//                     <div className="w-full h-px bg-gray-300 my-2"></div>
//                     <FaArrowRight className="text-gray-400" />
//                   </div>

//                   {train.stations
//                     .filter((station) => station.city === to)
//                     .map((station) => (
//                       <div key={station._id} className="text-center">
//                         <p className="text-xl font-bold text-gray-800">{station.arrivalTime}</p>
//                         <p className="text-sm text-gray-600">{station.stationCode}</p>
//                       </div>
//                     ))}
//                 </div>

//                 {/* Expand Button */}
//                 <div className="flex items-center justify-end">
//                   <button className="text-blue-600 hover:text-blue-800 transition-colors">
//                     {expandedTrain === train._id ? (
//                       <FaChevronUp className="text-lg" />
//                     ) : (
//                       <FaChevronDown className="text-lg" />
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Expanded Content */}
//             <div
//               className={`transition-all duration-300 overflow-hidden ${
//                 expandedTrain === train._id ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
//               }`}
//             >
//               <div className="border-t border-gray-200 p-5">
//                 <h3 className="text-md font-semibold text-gray-700 mb-4">Available Classes</h3>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//                   {train.classes.map((classItem) => (
//                     <div
//                       key={classItem._id}
//                       onClick={() => handleNavigateToBookingPage(classItem._id, train._id)}
//                       className="border border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:shadow-md transition-all cursor-pointer"
//                     >
//                       <div className="flex justify-between items-start mb-2">
//                         <h4 className="font-bold text-gray-800">{classItem.classType}</h4>
//                         <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
//                           Available
//                         </span>
//                       </div>
//                       <p className="text-2xl font-bold text-gray-900 mb-2">
//                         ₹{classItem.basicFare}
//                       </p>
//                       <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors">
//                         Book Now
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrainList;
