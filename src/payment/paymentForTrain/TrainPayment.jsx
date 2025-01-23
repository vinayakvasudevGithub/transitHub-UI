import axios from "axios";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const TrainPayment = () => {
  const location = useLocation();
  const bookingDetails = location?.state?.formData;
  const trainData = location?.state?.trainData;
  const departureStationDetails = location?.state?.departureStationDetails;
  const arrivalStationDetails = location?.state?.arrivalStationDetails;

  const [day, month, year] = departureStationDetails.departureDate.split("-");
  const formatedDepartureDate = new Date(
    `${year}-${month}-${day}`
  ).toLocaleDateString("en-us", { month: "short", day: "numeric" });

  return (
    <div>
      <div className="  grid sm:grid-cols-2 p-1  ">
        {trainData.map((data) => {
          return (
            <div
              key={data._id}
              //   className=" p-3 col-span-1 items-start flex justify-center  bg-green-300   "
              className=" p-3 col-span-1   bg-green-300   "
            >
              <div className="bg-red-50  uppercase  mt-2  grid lg:grid-cols-5   ">
                {/* div that includes all details on the left side of ticket -----------------------*/}
                <div className=" col-span-3 grid grid-rows-5 ">
                  {/* train name and number upper left position of  ticket  ------------------------------------------ */}
                  <div className=" grid grid-cols-11 bg-red-700 text-white ">
                    <div className=" col-span-5 flex justify-center items-center ">
                      <h1>{data.trainName}</h1>
                    </div>
                    <div className="col-span-5 flex justify-center items-center">
                      <h1>{data.trainNumber}</h1>
                    </div>
                    {/* middle top right radius */}
                    <div className=" col-span-1 flex justify-end items-start">
                      <div className="bg-white rounded-bl-full px-3 py-3"></div>
                    </div>
                  </div>
                  {/* all the user travel details */}
                  {bookingDetails.userDetails.map((user, index) => {
                    return (
                      <div
                        key={index}
                        className=" row-span-4 grid grid-cols-12  "
                      >
                        {/*  left radius */}
                        <div className="col-span-1  flex items-center  ">
                          <div className="bg-white p-3 rounded-r-full px-4 py-8"></div>
                        </div>
                        <div className="col-span-10  grid grid-rows-5  ">
                          {/* user name and travel class ------------------------------------------------ */}
                          <div className=" row-span-1 grid grid-cols-2 border-b-[2px] border-red-500 ">
                            {/* user name */}
                            <div>
                              <h2 className="text-xs font-semibold">
                                name of passenger
                              </h2>
                              <h1 className="text-xl text-red-900">
                                {user.name}
                              </h1>
                            </div>
                            {/* travel class */}
                            <div>
                              <h2 className="text-xs">travel class</h2>
                              <h1>ecconomy</h1>
                            </div>
                          </div>

                          {/* details that include travelling city and QR code  ---------------------------------*/}
                          <div className=" row-span-3 grid grid-cols-3 border-b-[2px] border-red-500">
                            {/* travel city names */}
                            <div className=" grid grid-rows-2  ">
                              <div>
                                <h2 className="text-xs">from</h2>
                                <h1>{departureStationDetails.city}</h1>
                              </div>
                              <div>
                                <h2 className="text-xs">to</h2>
                                <h1>{arrivalStationDetails.city}</h1>
                              </div>
                            </div>
                            {/* currently nothing soon add QR code */}
                            <div></div>
                            <div></div>
                          </div>

                          {/* date and arrival departure time ------------------------------------------------------  */}
                          <div className=" row-span-1 grid grid-cols-3 ">
                            {/* departure date  */}
                            <div className="border-r-[2px] border-red-500 flex justify-center items-center">
                              <div>
                                <h2 className="text-xs"> date</h2>
                                <h1>{formatedDepartureDate}</h1>
                              </div>
                            </div>
                            {/* departure time  */}
                            <div className="flex justify-center items-center border-r-[2px] border-red-500">
                              <div>
                                <h2 className="text-xs">departure</h2>
                                <h1 className="whitespace-nowrap ">
                                  {departureStationDetails.departureTime}
                                </h1>
                              </div>
                            </div>
                            {/* arrival time */}
                            <div className="flex justify-center items-center">
                              <div>
                                <h2 className="text-xs">arrival</h2>
                                <h1 className="whitespace-nowrap">
                                  {arrivalStationDetails.arrivalTime}
                                </h1>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* middle bootom left radius  */}
                        <div className="col-span-1  flex items-end justify-end">
                          <div className="bg-white rounded-tl-full px-3 py-3"></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {/* second ticket  ---------------------------------------------------------- */}
                <div className="col-span-2 lg:grid hidden ">
                  <div className=" h-full  grid grid-rows-5  ">
                    {/* train name  */}
                    <div className="row-span-1  grid grid-cols-12 bg-red-400 ">
                      <div className=" ">
                        <div className="bg-white px-3 py-3 rounded-br-full"></div>
                      </div>
                      <div className=" col-span-11 flex justify-center items-center">
                        <h1>{data.trainName}</h1>
                      </div>
                    </div>
                    {/* div that includes all the travel details --------------------------------------------------- */}
                    <div className="row-span-4  grid grid-cols-9    ">
                      {/* middle bottom left radius */}
                      <div className="col-span-1 flex justify-start  items-end">
                        <div className="bg-white rounded-tr-full px-3 py-3 "></div>
                      </div>
                      {/* user name */}
                      <div className="col-span-7 grid grid-rows-5 ">
                        {bookingDetails.userDetails.map((user, index) => {
                          return (
                            <div key={index} className=" ">
                              <h2 className="text-xs">name</h2>
                              <h1>{user.name}</h1>
                            </div>
                          );
                        })}

                        <div className=" row-span-3 grid grid-rows-2 ">
                          {/* from city */}
                          <div>
                            <h2 className="text-xs">from</h2>
                            <h1>{departureStationDetails.city}</h1>
                          </div>
                          {/* to city */}
                          <div>
                            <h2 className="text-xs">to</h2>
                            <h1>{arrivalStationDetails.city}</h1>
                          </div>
                        </div>
                        {/* ticket seat details  */}
                        <div className=" grid grid-cols-3">
                          <div className=" flex items-center">
                            <h1>train</h1>
                          </div>
                          <div className="flex items-center">
                            <h2>express</h2>
                          </div>
                          <div className=" flex items-center">
                            {/* <h2 className="text-xs">seat</h2> */}
                            <h1>A-12</h1>
                          </div>
                        </div>
                      </div>
                      {/* laft side radius */}
                      <div className="col-span-1 flex items-center justify-end  ">
                        <div className=" bg-white rounded-l-full px-4 py-8"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* </div> */}
            </div>
          );
        })}

        <div className="bg-yellow-200 p-2 col-span-1">mm</div>
      </div>
      <div className="bg-yellow-500">jj</div>
    </div>
  );
};

export default TrainPayment;
