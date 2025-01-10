import React, { useState } from "react";
import Flight from "./pages/flight/Flight";
import Bus from "./pages/bus/Bus";
import Train from "./pages/train/Train";
import { Link, Route, Routes } from "react-router-dom";
// import Menu from "../AddNew/Menu";

const PageCombine = () => {
  return (
    <div className="bg-gray-200 p-5 h-screen  ">
      <div className="flex justify-center  mt-[8rem] p-2 ">
        <div className="bg-white flex  space-x-6  ">
          <div className="">
            <Link className="" to={"/flight"}>
              <img
                className="w-[6rem] "
                src="https://edge.ixigo.com/st/vimaan/_next/static/media/flight.f515b25a.svg"
                alt=""
              />
              <div className=" flex justify-center items-center">
                <h1>Flights</h1>
              </div>
            </Link>
          </div>
          <div className="">
            <Link className="" to={"/Train"}>
              <img
                className="w-[6rem]"
                src="https://images.ixigo.com/image/upload/trains/trains/d59e0e79f7d5d31a6dcb048f96c2dd6b-umlsp.png"
                alt=""
              />
              <div className="flex justify-center items-center">
                <h1>Trains</h1>
              </div>
            </Link>
          </div>
          <div>
            <Link className="" to={"/Bus"}>
              <img
                className="w-[6rem]"
                src="https://images.ixigo.com/image/upload/trains/trains/6219365fbe7fdb49d5fa346457de8190-decie.png"
                alt=""
              />
              <div className="flex justify-center items-center">
                <h1>Buses</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <Routes>
        <Route path="/flight" element={<Flight />} />
        <Route path="/Train" element={<Train />} />
        <Route path="/Bus" element={<Bus />} />
      </Routes>
    </div>
  );
};

export default PageCombine;
