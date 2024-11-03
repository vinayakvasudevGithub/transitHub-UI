import React, { useState, useEffect } from "react";
import { MdEventSeat } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { MdOutlineEventSeat } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const ForBookingSeats = ({ busData, detailsToBook }) => {
  const navigate = useNavigate();
  const handleSeatBook = (seat) => {
    navigate("/booking/busTicket", { state: { seat, busData } });
  };

  return (
    <div className="bg-green-300">
      <div onClick={(e) => detailsToBook("vinayak")}>detailsToBook</div>
      {busData.map((data) => (
        <div key={data._id}>
          {data.seatdetails.map((seatdetails) => (
            <div key={seatdetails._id}>
              <p>bus name : {data.busname}</p>
              <p className="">total seats : {seatdetails.seats.length}</p>
            </div>
          ))}

          <div className=" flex justify-center">
            <div className="bg-white grid-flow-row mt-1 mb-1 border border-red-300 ">
              <div className="flex justify-end">
                <div className=" p-[2.5px]">
                  <GiSteeringWheel className="w-[51px] h-[75px]" />
                </div>
              </div>
              {data.seatdetails.map((seatdetails) =>
                seatdetails.seats.map((row, rowIndex) => (
                  <div key={rowIndex} className="flex ">
                    {row.map((seat, colIndex) => (
                      <div key={colIndex} className="flex  ">
                        {seat === 0 ? (
                          <div className="p-7"></div>
                        ) : (
                          <div
                            onClick={(e) => handleSeatBook(seat)}
                            className="p-2  hover:bg-red-300 text-center w-14 h-13 flex items-center justify-center border"
                          >
                            <div>
                              <MdOutlineEventSeat className="w-[3rem] h-[3rem] text-black " />
                              <div>
                                <p className="text-xs ">{seat}</p>
                              </div>
                            </div>
                          </div>
                        )}
                        {colIndex + 1 ===
                          parseInt(seatdetails.seatformation.split("+")) && (
                          <div className="p-5"></div>
                        )}
                      </div>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ForBookingSeats;
