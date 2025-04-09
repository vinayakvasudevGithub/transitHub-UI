import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import busImg from "../../../../assets/bus.png";
import { tripDetails } from "../../../../store/slices/userTransport/busUserSlice";
import BusSeat from "./BusSeat";

const BusCard = ({ from, to, distance, busData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [activeBusId, setActiveBusId] = useState(null);
  const [isBookingDetailsComplete, setIsBookingDetailsComplete] =
    useState(false);

  const handleSelectBus = (
    busSeatNumber,
    busName,
    busType,
    arrivalTime,
    departureTime
  ) => {
    console.log("busSeatNumber", busSeatNumber);
    console.log("busName", busName);
    console.log("busType", busType);
    console.log("arrivalTime", arrivalTime);
    console.log("departureTime", departureTime);
    if (busSeatNumber && busName && busType && arrivalTime && departureTime) {
      console.log(busSeatNumber);
      setIsBookingDetailsComplete(true);
      dispatch(
        tripDetails({
          busSeatNumber,
          busName,
          busType,
          arrivalTime,
          departureTime,
        })
      );
    }
  };

  // console.log(busSeatNumber);

  const handleNavigateToConfirmBookingPage = () => {
    if (isBookingDetailsComplete) {
      navigate("/book/bus");
    }
  };

  return (
    <div className="">
      {/* Header */}

      {/* Bus Data */}
      {busData.length === 0 ? (
        <p>No buses available for the selected route.</p>
      ) : (
        busData.map((bus) => {
          const departure = bus.stations.find(
            (station) => station.city.toLowerCase() === from.toLowerCase()
          );
          const arrival = bus.stations.find(
            (station) => station.city.toLowerCase() === to.toLowerCase()
          );

          // Calculate duration
          const duration =
            departure && arrival
              ? (() => {
                  const departureTime = new Date(
                    `1970-01-01T${departure.departureTime}`
                  );
                  const arrivalTime = new Date(
                    `1970-01-01T${arrival.arrivaltime}`
                  );
                  const diffInMinutes = Math.abs(
                    (arrivalTime - departureTime) / (1000 * 60)
                  );
                  const hours = Math.floor(diffInMinutes / 60);
                  const minutes = diffInMinutes % 60;
                  return `${hours}h ${minutes}m`;
                })()
              : "N/A";

          return (
            <div key={bus._id} className="p-1 ">
              {/* Bus Info */}
              <div className="p-2 bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className=" sm:grid grid-cols-5  ">
                  {/* <div className=" bg-red-300 p-2  col-span-4 sm:grid grid-cols-4 border-b    "> */}
                  <div className="col-span-4 border-r  ">
                    <div className="sm:grid grid-cols-4 p-1 ">
                      <div className=" flex gap-3 ">
                        <div className="flex justify-center items-center">
                          <img src={busImg} className="w-13 h-10" alt="" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-800 ">
                            {bus.busname}
                          </h3>
                          <p className="text-sm  text-gray-600">
                            {bus.bustype}
                          </p>
                          {/* <p className="text-sm  text-gray-600">Live Tracking</p> */}
                        </div>
                      </div>
                      <div className="col-span-3 sm:grid grid-cols-12 flex justify-start ">
                        {/* Journey Info */}
                        {/* Departure */}
                        <div className="col-span-4 flex justify-end ">
                          <div className="col-span-4 text-center text-gray-600">
                            <h4 className="  text-gray-600 text-xs">Depart</h4>
                            <p className="font-semibold text-lg text-gray-800">
                              {departure?.departureTime || "N/A"}
                            </p>
                            <p className="text-xs text-gray-500">
                              {departure.station}
                            </p>
                          </div>
                        </div>

                        {/* Duration */}
                        <div className="col-span-4 flex flex-col items-center justify-center">
                          <span className="text-sm text-gray-700 bg-gray-100 px-2 py-1 rounded-full shadow">
                            {duration}
                          </span>
                        </div>

                        {/* Arrival */}
                        <div className=" col-span-4  flex justify-start  ">
                          <div className="col-span-4 text-center text-gray-600">
                            <h4 className=" font-semibold text-xs text-gray-600">
                              Arrival
                            </h4>
                            <p className="font-semibold text-lg text-gray-800">
                              {arrival?.arrivaltime || "N/A"}
                            </p>
                            <p className="text-xs text-gray-500 ">
                              {arrival.station}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border-t-2 grid">
                      <div>k</div>
                      {/* <div>h</div> */}
                    </div>
                  </div>

                  <div className="col-span-1 ">
                    <div className="p-1 ">
                      <div className="flex justify-end ">
                        <h2 className="text-xs font-semibold text-gray-600">
                          Starts at
                        </h2>
                      </div>
                      <div className="flex justify-end">
                        {bus.ticketprices.map((ticket) => {
                          const ticketFare =
                            ticket.minimumfare + distance * ticket.perkilometre;
                          return (
                            <p
                              key={ticket._id}
                              className="text-xl font-semibold"
                            >
                              ₹{ticketFare.toFixed(2)}
                            </p>
                          );
                        })}
                      </div>
                      <div className="  flex justify-center items-center  ">
                        <div className="grid bg-gray-100 rounded-lg w-full p-1  ">
                          <button
                            onClick={() =>
                              setActiveBusId((prevId) =>
                                prevId === bus._id ? null : bus._id
                              )
                            }
                            // className="bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold px-6 py-2 rounded-lg shadow hover:from-blue-700 hover:to-blue-600 transition-all duration-300"
                            className=" bg-blue-500  text-white  hover:bg-blue-600  font-bold py-2 px-6 rounded-lg shadow-lg   "
                          >
                            {activeBusId === bus._id ? "Close" : "Select"}
                          </button>
                          <div className="flex justify-center items-center">
                            <h3 className="text-xs">Available Seats</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  {/* Animated Dropdown for Seats */}
                  <div
                    className={`transition-all duration-200 ease-in-out overflow-hidden ${
                      activeBusId === bus._id ? " p-4" : "max-h-0 p-0"
                    }  rounded`}
                    style={{
                      maxHeight: activeBusId === bus._id ? "" : "0",
                    }}
                  >
                    {activeBusId === bus._id && (
                      <BusSeat
                        busData={[bus]}
                        handleSelectBus={(busSeatNumber) =>
                          handleSelectBus(
                            busSeatNumber,
                            bus.busname,
                            bus.bustype,
                            arrival?.arrivaltime,
                            departure?.departureTime
                          )
                        }
                      />
                    )}

                    <div className="text-right mt-4">
                      <button
                        onClick={handleNavigateToConfirmBookingPage}
                        className={`px-6 py-2 rounded-lg font-semibold ${
                          isBookingDetailsComplete
                            ? "bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600"
                            : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        } transition-all duration-300`}
                        disabled={!isBookingDetailsComplete}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default BusCard;
