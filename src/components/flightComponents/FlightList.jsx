import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosAirplane } from "react-icons/io";
import { RxDotsHorizontal } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";
// import ToBookTicket from "./tobookticket/ToBookTicket";

import { useNavigate } from "react-router-dom";

const FlightList = ({ FlightFrom, FlightTo, FlightData }) => {
  const navigate = useNavigate();

  const handleNavigateToBookingPage = (id) => {
    navigate("/booking/flightTicket", { state: { id } });
  };

  return (
    <div className="space-y-2">
      {/* <p>
        Flight From {FlightFrom} to {FlightTo}
      </p> */}

      {FlightData.map((data) => (
        <div key={data._id} className="">
          <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 grid ">
            <div className="sm:grid grid-cols-5  gap-1 p-1 text-gray-600  ">
              <div className=" col-span-1 flex  items-center   p-1 sm:flex justify-between  ">
                <div className=" flex gap-2">
                  <img
                    className="size-12 "
                    src={`https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${data.airlineimagecode}.png?v=19&quot`}
                  ></img>
                  <div className="">
                    <p className="font-bold">{data.airline}</p>
                    <p className="text-xs text-gray-600">{data.flightNumber}</p>
                  </div>
                </div>
                <div className="sm:hidden">
                  {data.prices.map((price) => (
                    <div key={price._id} className="p-1 col-span-1">
                      <div className="flex justify-end">
                        <h2 className="text-xs font-semibold text-gray-600">
                          Starts at
                        </h2>
                      </div>
                      <div className="flex justify-end">
                        <p className="text-xl font-semibold">
                          ₹{price.ecconomy}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-sm flex sm:justify-between space-x-7 col-span-3  p-1 gap-1">
                {data.airport.map((airport, index) => (
                  <div
                    key={index}
                    className="col-span-4 flex justify-end text-sm items-center"
                  >
                    <div className="col-span-4 ">
                      <div className="flex items-center">
                        <p className="font-semibold text-lg text-gray-800">
                          {airport?.departureTime || "N/A"}
                        </p>
                        -<h4 className="font-semibold text-gray-600">Depart</h4>
                      </div>

                      {/* <p className="text-xl font-bold text-gray-800">
                        {airport?.departureTime || "N/A"}
                      </p> */}
                      <p className="font-semibold text-gray-800">
                        {airport?.name}
                      </p>
                      <p className="text-sm text-gray-500">{FlightFrom}</p>
                    </div>
                  </div>
                ))}

                <div className=" flex items-center">
                  <h2>Duration</h2>
                </div>
                {data.destination.map((destination, index) => (
                  <div key={index} className="l">
                    <div className="col-span-4 p-2 flex justify-start">
                      <div className="col-span-4">
                        <div className="flex items-center">
                          <p className="font-semibold text-lg text-gray-800">
                            {destination?.arrivalTime || "N/A"}
                          </p>
                          -<h4 className="">Arrive</h4>
                        </div>

                        <p className="font-semibold text-gray-800">
                          {destination?.name}
                        </p>
                        <p className=" text-gray-500">{FlightTo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-span-1">
                {data.prices.map((price) => (
                  <div key={price._id} className="p-1  hidden sm:block">
                    <div className="flex justify-end">
                      <h2 className="text-xs font-semibold text-gray-600">
                        Starts at
                      </h2>
                    </div>
                    <div className="flex justify-end">
                      <p className="text-xl font-semibold">₹{price.ecconomy}</p>
                    </div>
                  </div>
                ))}
                <div>
                  <div className="  flex justify-end items-center ">
                    <button
                      onClick={(e) => handleNavigateToBookingPage(data._id)}
                      className="w-full sm:w-[70%] bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg "
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="  flex justify-end items-center ">
              <button
                onClick={(e) => handleNavigateToBookingPage(data._id)}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-lg "
              >
                book
              </button>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FlightList;
