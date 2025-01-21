import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosAirplane } from "react-icons/io";
import { RxDotsHorizontal } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";
import ToBookTicket from "./tobookticket/ToBookTicket";
import { useNavigate } from "react-router-dom";

const ResultsForBooking = ({ FlightFrom, FlightTo, FlightData }) => {
  const navigate = useNavigate();

  const handleNavigateToBookingPage = (id) => {
    navigate("/booking/flightTicket", { state: { id } });
  };

  return (
    <div className=" p-2 ">
      <p>
        Flight From {FlightFrom} to {FlightTo}
      </p>

      {FlightData.map((data) => (
        <div key={data._id} className="p-1    ">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 grid p-1">
            <div className=" sm:grid grid-cols-5  gap-1 p-1  ">
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

              <div className=" flex sm:justify-between space-x-7 col-span-3  p-1 gap-1">
                {data.airport.map((airport, index) => (
                  <div
                    key={index}
                    className="col-span-4 flex justify-end items-center"
                  >
                    <div className="col-span-4 text-center">
                      <h4 className="text-lg font-semibold text-gray-600">
                        Departure
                      </h4>
                      <p className="text-xl font-bold text-gray-800">
                        {airport?.departureTime || "N/A"}
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
                      <div className="col-span-4 text-center">
                        <h4 className="text-lg font-semibold text-gray-600">
                          Arrival
                        </h4>
                        <p className="text-xl font-bold text-gray-800">
                          {destination?.arrivalTime || "N/A"}
                        </p>
                        <p className="text-sm text-gray-500">{FlightTo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {data.prices.map((price) => (
                <div key={price._id} className="p-1 col-span-1 hidden sm:block">
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
            </div>
            <div className="  flex justify-end items-center ">
              <button
                onClick={(e) => handleNavigateToBookingPage(data._id)}
                className="shining-button bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none "
              >
                book
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ResultsForBooking;
