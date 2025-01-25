import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResultForTrainBooking = ({ from, to, TrainData }) => {
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

export default ResultForTrainBooking;
