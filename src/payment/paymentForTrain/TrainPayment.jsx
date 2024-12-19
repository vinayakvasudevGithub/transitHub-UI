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
    <div className="  ">
      <div className="  grid sm:grid-cols-2 p-1  ">
        {trainData.map((data) => {
          return (
            <div
              key={data._id}
              className=" p-2 col-span-1 items-start flex justify-center   "
            >
              <div className=" bg-yellow-200 grid lg:grid-cols-11  relative   uppercase col-span-4  ">
                <div className="col-span-7 flex">
                  {/* left radius */}
                  {/* <div className="bg-red-400 flex items-center justify-end "> */}
                  <div className=" grid grid-rows-3  ">
                    <div className=" ">
                      <div className="pb-12 bg-red-300"></div>
                    </div>
                    <div className="flex items-center ">
                      <div className="bg-white rounded-r-full px-3 py-5 "></div>
                    </div>
                    <div></div>
                  </div>
                  {/* right side user details */}
                  <div className="   ">
                    {/* train name and train number */}
                    <div className="bg-red-300 grid grid-cols-6 py-3  ">
                      <div className=" col-span-3 ">
                        <h1 className="whitespace-nowrap">{data.trainName}</h1>
                      </div>
                      <div></div>
                      <div className=" col-span-2">{data.trainNumber}</div>
                    </div>
                    {bookingDetails.userDetails.map((user, index) => {
                      return (
                        <div key={index} className="  grid grid-cols-6 ">
                          <div className=" p-1 col-span-2 ">
                            <h3 className="text-xs whitespace-nowrap">
                              NAME OF PASSENGER
                            </h3>
                            <h1>{user.name}</h1>
                          </div>
                          <div className="col-span-2 "></div>
                          <div className=" col-span-2">
                            <h3 className="text-xs">travel class</h3>
                            <h1>ecconomy</h1>
                          </div>
                        </div>
                      );
                    })}
                    <div className=" grid grid-cols-3">
                      <div className="">
                        <div>
                          <h4 className="text-xs">from</h4>
                          <h1>{departureStationDetails.city}</h1>
                        </div>
                        <div>
                          <h4 className="text-xs">to</h4>
                          <h1>{arrivalStationDetails.city}</h1>
                        </div>
                      </div>
                      <div>q</div>
                      <div>q</div>
                    </div>
                    <div className=" grid grid-cols-4">
                      <div className="">
                        <h4 className="text-xs">date</h4>
                        {/* <h1 className="text-sm whitespace-nowrap overflow-hidden "> */}
                        <h1 className=" ">{formatedDepartureDate}</h1>
                      </div>
                      <div>
                        <h4 className="text-xs">departure</h4>
                        <h1 className="whitespace-nowrap">
                          {departureStationDetails.departureTime}
                        </h1>
                      </div>

                      <div className=" ">
                        <h4 className="text-xs">arrival</h4>
                        <h1 className="whitespace-nowrap">
                          {arrivalStationDetails.arrivalTime}
                        </h1>
                      </div>
                      <div className=" "></div>
                    </div>
                  </div>
                  <div className="grid ">
                    {/* top radius on left side */}
                    <div className="  flex items-start  justify-end ">
                      <div className="bg-red-300 pb-8">
                        <div className="bg-white rounded-bl-full px-2 py-2"></div>
                      </div>
                    </div>

                    {/* bottom radius on left side */}
                    <div className=" flex items-end  justify-end ">
                      <div className=" pt-6">
                        <div className="bg-white rounded-tl-full px-2 py-2"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-4 lg:grid hidden   ">
                  <div className="   flex  col-span-2  h-full ">
                    <div className=" grid ">
                      {/* top radius on rightside */}
                      <div className=" flex items-start justify-start">
                        <div className="bg-red-300 pb-8">
                          <div className="bg-white p-2 rounded-br-full"></div>
                        </div>
                      </div>
                      {/* botton radius on right side */}
                      <div className=" flex items-end justify-start">
                        <div className="bg-white p-2 rounded-tr-full"></div>
                      </div>
                    </div>
                    <div className="  col-span-2 w-full  relative lg:grid ">
                      <div className=" ">
                        <div className="bg-red-300 py-3">
                          <h1 className="  whitespace-nowrap ">
                            {data.trainName}
                          </h1>
                        </div>
                      </div>
                      <div className="">bb</div>
                    </div>
                    {/* right side radius */}
                    <div className=" flex items-center justify-start">
                      <div className="bg-white px-3 py-5 rounded-l-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div className="bg-yellow-200 p-2 col-span-1">mm</div>
      </div>
    </div>
  );
};

export default TrainPayment;
