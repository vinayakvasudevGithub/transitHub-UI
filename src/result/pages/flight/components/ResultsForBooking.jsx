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
    <div className=" bg-yellow-200  p-2 ">
      <p>
        Flight From {FlightFrom} to {FlightTo}
      </p>

      {FlightData.map((data) => (
        <div
          key={data._id}
          className=" pb-4 p-2 bg-white mt-3 shadow-[0px_2px_5px_0px_rgba(0,0,0,0.10)] 
              cursor-pointer z-10 transition-all duration-100 ease-in
              hover:scale-[1.01] hover:shadow-300 hover:duration-100
              hover:ease-out border border-neutral-200 "
        >
          <div className="grid sm:grid-cols-12  bg-blue-300 gap-1 p-1">
            <div className="bg-green-400 col-span-2 flex justify-between items-center ">
              <img
                className="h-6 "
                src={`https://imgak.mmtcdn.com/flights/assets/media/dt/common/icons/${data.airlineimagecode}.png?v=19&quot`}
              ></img>
              <p className="flex text-2xl">{data.airline}</p>
            </div>

            <div className="bg-yellow-300 flex justify-between col-span-6  p-1 gap-1">
              {data.airport.map((airport, index) => (
                <div
                  key={index}
                  className="tabular-nums flex items-center text-3xl bg-red-400"
                >
                  {airport?.departureTime}
                </div>
              ))}

              <div className=" flex items-center">
                <FaRegCircle className="w-2" /> <RxDotsHorizontal />{" "}
                <RxDotsHorizontal /> <IoIosAirplane /> <RxDotsHorizontal />{" "}
                <RxDotsHorizontal /> <FaRegCircle className="w-2" />{" "}
              </div>
              {data.destination.map((destination, index) => (
                <div key={index} className="flex items-center text-3xl">
                  {destination?.arrivalTime}
                </div>
              ))}
            </div>
            {data.prices.map((price) => (
              <div
                className="col-span-2 flex  justify-between bg-red-500"
                key={price._id}
              >
                {price.ecconomy}
              </div>
            ))}
            <div className=" flex justify-end bg-yellow-300 p-3">
              <button onClick={(e) => handleNavigateToBookingPage(data._id)}>
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
