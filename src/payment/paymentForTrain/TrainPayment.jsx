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
              <div className="bg-yellow-200 mt-2  grid lg:grid-cols-5   ">
                {/* div that includes all details on the left side of ticket -----------------------*/}
                <div className=" col-span-3 grid grid-rows-5 ">
                  {/* train name and number upper left position of  ticket  ------------------------------------------ */}
                  <div className=" grid grid-cols-11 bg-red-400  ">
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
                        <div className="col-span-10  grid grid-rows-5 ">
                          {/* user name and travel class ------------------------------------------------ */}
                          <div className=" row-span-1 grid grid-cols-2 ">
                            {/* user name */}
                            <div>
                              <h2 className="text-xs">name</h2>
                              <h1>{user.name}</h1>
                            </div>
                            {/* travel class */}
                            <div>
                              <h2 className="text-xs">travel class</h2>
                              <h1>ecconomy</h1>
                            </div>
                          </div>

                          {/* details that include travelling city and QR code  ---------------------------------*/}
                          <div className=" row-span-3 grid grid-cols-3 ">
                            {/* travel city names */}
                            <div className=" grid grid-rows-2 ">
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
                            <div>
                              <h2 className="text-xs"> date</h2>
                              <h1>{formatedDepartureDate}</h1>
                            </div>
                            {/* departure time  */}
                            <div>
                              <h2 className="text-xs">departure</h2>
                              <h1 className="whitespace-nowrap ">
                                {departureStationDetails.departureTime}
                              </h1>
                            </div>
                            {/* arrival time */}
                            <div>
                              <h2 className="text-xs">arrival</h2>
                              <h1 className="whitespace-nowrap">
                                {arrivalStationDetails.arrivalTime}
                              </h1>
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

// import React from "react";

// const TrainPayment = ({
//   trainData,
//   bookingDetails,
//   departureStationDetails,
//   arrivalStationDetails,
// }) => {
//   const [day, month, year] = departureStationDetails.departureDate.split("-");
//   const formattedDepartureDate = new Date(
//     `${year}-${month}-${day}`
//   ).toLocaleDateString("en-us", { month: "short", day: "numeric" });

//   return (
//     <div className="p-4 bg-gray-100 min-h-screen">
//       {trainData.map((data) => (
//         <div
//           key={data._id}
//           className="bg-white shadow-md rounded-xl overflow-hidden mb-6"
//         >
//           <div className="flex flex-col sm:flex-row">
//             {/* Left Section: Main Ticket Details */}
//             <div className="sm:w-3/4 p-4 border-r">
//               {/* Train Name and Number */}
//               <div className="flex justify-between items-center border-b pb-2 mb-4">
//                 <div>
//                   <h1 className="text-lg font-bold">{data.trainName}</h1>
//                   <p className="text-sm text-gray-600">{data.trainNumber}</p>
//                 </div>
//                 <div className="bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold">
//                   {formattedDepartureDate}
//                 </div>
//               </div>

//               {/* Passenger Details */}
//               {bookingDetails.userDetails.map((user, index) => (
//                 <div key={index} className="mb-4">
//                   <h2 className="font-semibold text-gray-700">Passenger</h2>
//                   <p>{user.name}</p>
//                   <p className="text-sm text-gray-500">Economy Class</p>
//                 </div>
//               ))}

//               {/* Travel Details */}
//               <div className="grid grid-cols-2 gap-4">
//                 {/* Departure Details */}
//                 <div>
//                   <h3 className="text-sm font-semibold text-gray-600">From</h3>
//                   <p>{departureStationDetails.city}</p>
//                   <p className="text-sm text-gray-500">
//                     {departureStationDetails.departureTime}
//                   </p>
//                 </div>

//                 {/* Arrival Details */}
//                 <div>
//                   <h3 className="text-sm font-semibold text-gray-600">To</h3>
//                   <p>{arrivalStationDetails.city}</p>
//                   <p className="text-sm text-gray-500">
//                     {arrivalStationDetails.arrivalTime}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Section: QR Code and Misc Details */}
//             <div className="sm:w-1/4 p-4 bg-gray-50">
//               <div className="flex flex-col items-center justify-center h-full">
//                 <div className="bg-gray-200 w-24 h-24 flex items-center justify-center mb-4">
//                   <span className="text-gray-400 text-sm">QR Code</span>
//                 </div>
//                 <p className="text-sm text-gray-500">Scan for details</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TrainPayment;
