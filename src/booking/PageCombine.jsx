// import React from "react";
// import { Link, Route, Routes } from "react-router-dom";
// import Flight from "./pages/flight/Flight";
// import Bus from "./pages/bus/Bus";
// import Train from "./pages/train/Train";
// import compass from "../assets/compass.png";
// import travel from "../assets/travel.jpg";
// import camping from "../assets/camping.jpg";
// import roadtrip from "../assets/roadtrip.png";

// const PageCombine = () => {
//   return (
//     <div
//       className="relative grid grid-rows-10 h-full  "
//       style={{
//         // backgroundImage: `url(${roadtrip})`,
//         // backgroundSize: "cover",
//         backgroundSize: "inherit",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Header Section */}
//       <div className=" row-span-1   text-white text-center py-3 rounded-md shadow-md">
//         <h1 className="text-xl font-bold">Travel Booking Portal</h1>
//         <p className="text-sm">Book flights, trains, and buses seamlessly</p>
//       </div>

//       <div
//         className="bg-yellow-50  row-span-8 flex justify-center items-center"
//         style={{
//           backgroundImage: `url(${roadtrip})`,
//           backgroundSize: "cover",
//           // backgroundSize: "inherit",
//           backgroundPosition: "center",
//         }}
//       >
//         <div className=" w-full md:w-[80%] bg-blue-200 bg-opacity-10 rounded-lg p-2 ">
//           <div className="flex justify-center">
//             <div className=" flex justify-center items-center  p-7 ">
//               <Link to="/flight">
//                 <div className="  p-1 mt-10 relative flex justify-center ">
//                   <div className=" rounded-full  absolute bottom-9 flex justify-center items-center ">
//                     <img
//                       className="w-14 h-14  rounded-full shadow-md bg-white bg-opacity-30 hover:shadow-lg transition-all hover:bg-gray-50"
//                       src="https://edge.ixigo.com/st/vimaan/_next/static/media/flight.f515b25a.svg"
//                       alt="Flights"
//                     />
//                   </div>
//                   <div className="bg-opacity-30 bg-white  flex px-9 p-2 rounded-3xl justify-center items-center  ">
//                     flight
//                   </div>
//                 </div>
//               </Link>

//               <Link to="/Bus">
//                 <div className=" p-1 mt-10 relative flex justify-center ">
//                   <div className="bg-white bg-opacity-40 rounded-full  absolute bottom-9 flex justify-center items-center ">
//                     <img
//                       className="w-14 h-14"
//                       src="https://images.ixigo.com/image/upload/trains/trains/d59e0e79f7d5d31a6dcb048f96c2dd6b-umlsp.png"
//                       alt="Bus"
//                     />
//                   </div>
//                   <div className="bg-white opacity-40  flex px-9 p-2 rounded-3xl justify-center items-center  ">
//                     Bus
//                   </div>
//                 </div>
//               </Link>

//               <Link to="/Train">
//                 <div className="   p-1 mt-10 relative flex justify-center ">
//                   <div className="bg-white bg-opacity-40 rounded-full  absolute bottom-9 flex justify-center items-center ">
//                     <img
//                       className="w-14 h-14"
//                       src="https://images.ixigo.com/image/upload/trains/trains/6219365fbe7fdb49d5fa346457de8190-decie.png"
//                       alt="Train"
//                     />
//                   </div>
//                   <div className="bg-white opacity-40  flex px-9 p-2 rounded-3xl justify-center items-center  ">
//                     Train
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           </div>
//           {/* <div className=" bg-red-200   md:flex justify-center items-center rounded-md shadow-md"> */}
//           <Routes>
//             <Route path="/flight" element={<Flight />} />
//             <Route path="/Train" element={<Train />} />
//             <Route path="/Bus" element={<Bus />} />
//           </Routes>
//           {/* </div> */}
//         </div>
//       </div>

//       <div className="row-span-1 flex justify-center items-end">
//         <footer className="  text-white text-center py-3  rounded-md shadow-md">
//           <p className="text-sm">
//             © 2025 Travel Booking Portal | All rights reserved
//           </p>
//         </footer>
//       </div>
//     </div>
//   );
// };

// export default PageCombine;

import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Flight from "./pages/flight/Flight";
import Bus from "./pages/bus/Bus";
import Train from "./pages/train/Train";
import roadtrip from "../assets/roadtrip.png";
import plane from "../assets/plane.png";
import plane3 from "../assets/plane3.png";
import map from "../assets/map.png";
import sand from "../assets/sand.jpg";
import alaska from "../assets/alaska.jpg";
import sky from "../assets/sky.jpg";
import aircraft from "../assets/aircraft.png";

const PageCombine = () => {
  const [select, setSelect] = useState("");

  console.log(select);
  return (
    <div
      // className="relative grid grid-rows-10 h-full p-2 bg-gradient-to-r from-blue-300 to-rose-100 "
      className="relative grid grid-rows-10   bg-gray-50"
      // style={{
      //   backgroundImage: `url(${plane})`,
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
    >
      {/* Header Section */}
      <div className="row-span-1  text-center py-3 ">
        <h1 className="text-xl font-bold">Travel Booking Portal</h1>
        <p className="text-sm">Book flights, trains, and buses seamlessly</p>
      </div>
      {/* Main Section */}
      <div
        className="row-span-8 grid grid-rows-4"
        style={{
          backgroundImage: `url(${sand})`,
          // backgroundImage: `url(${alaska})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" row-span-1 hidden md:block"></div>

        <div
          className=" row-span-2  flex justify-center items-center"
          // style={{
          //   backgroundImage: `url(${map})`,
          //   backgroundSize: "cover",
          //   backgroundPosition: "center",
          // }}
        >
          {/* <div
            className="border-[10px] border-solid"
            style={{ borderColor: "var(--clr)" }}
          ></div> */}

          <div
            className="w-full md:w-[80%]   bg-white bg-opacity-20  rounded-lg p-6 shadow-lg"
            // style={{
            //   backgroundImage: `url(${plane})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          >
            <div className="flex justify-center ">
              <div className="flex justify-center items-center space-x-6 p-7">
                {/* Flights Button */}
                <Link to="/flight" onClick={() => setSelect("flight")}>
                  <div className="p-2 mt-5 relative flex justify-center group">
                    <div className="rounded-full bg-gray-300 border-[4px]  absolute bottom-10 flex justify-center items-center ">
                      <img
                        className="w-14 h-14  "
                        src="https://edge.ixigo.com/st/vimaan/_next/static/media/flight.f515b25a.svg"
                        alt="Flights"
                      />
                    </div>

                    <div className="border-[4px]  bg-gray-300 flex px-9 py-2 rounded-3xl justify-center items-center text-sm text-black font-medium">
                      Flight
                    </div>
                  </div>
                  {/* <div className="p-2 mt-5 relative flex justify-center group">
                  <div className="rounded-full absolute bottom-10 flex justify-center items-center bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg group-hover:shadow-2xl transition-all duration-300 ease-in-out">
                    <img
                      className="w-16 h-16 p-2 rounded-full bg-white"
                      src="https://edge.ixigo.com/st/vimaan/_next/static/media/flight.f515b25a.svg"
                      alt="Flights"
                    />
                  </div>

                  <div className="bg-gradient-to-r from-gray-200 to-gray-300 flex px-10 py-3 rounded-3xl justify-center items-center text-base text-black font-semibold group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-cyan-500 group-hover:text-white transition-all duration-300 ease-in-out">
                    Flights
                  </div>
                </div> */}

                  {/* <div className="p-2 mt-5 relative flex justify-center group">
                  <div className="rounded-full absolute bottom-9 flex justify-center items-center bg-gray-200  group-hover:shadow-lg shadow-lg transition-all">
                    <img
                      className="w-14 h-14"
                      src="https://edge.ixigo.com/st/vimaan/_next/static/media/flight.f515b25a.svg"
                      alt="Flights"
                    />
                  </div>
                  <div className="  bg-gray-200 flex px-9 py-2 rounded-3xl justify-center items-center text-sm text-black font-medium group-hover:bg-blue-100 transition-all">
                    Flights
                  </div>
                </div> */}
                </Link>

                {/* Bus Button */}
                <Link to="/Bus" onClick={() => setSelect("bus")}>
                  <div className="p-2 mt-5 relative flex justify-center group">
                    <div
                      className={`rounded-full absolute bottom-9 flex justify-center items-center ${
                        select === "bus" ? "bg-red-500" : "bg-gray-300"
                      }   border-[4px]   transition-all `}
                    >
                      <img
                        className="w-14 h-14"
                        src="https://images.ixigo.com/image/upload/trains/trains/d59e0e79f7d5d31a6dcb048f96c2dd6b-umlsp.png"
                        alt="Bus"
                      />
                    </div>
                    <div className=" border-[4px]  bg-gray-300 flex px-9 py-2 rounded-3xl justify-center items-center text-sm text-black font-medium  ">
                      Buses
                    </div>
                  </div>
                </Link>

                {/* Train Button */}
                <Link to="/Train">
                  <div className="p-2 mt-5 relative flex justify-center group">
                    <div className="rounded-full absolute bottom-9 flex justify-center items-center bg-gray-300 border-[4px]  ">
                      <img
                        className="w-14 h-14"
                        src="https://images.ixigo.com/image/upload/trains/trains/6219365fbe7fdb49d5fa346457de8190-decie.png"
                        alt="Train"
                      />
                    </div>
                    <div className="bg-gray-300 border-[4px]  flex px-9 py-2 rounded-3xl justify-center items-center text-sm text-black font-medium ">
                      Trains
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            {/* Routes */}
            <Routes>
              <Route path="/flight" element={<Flight />} />
              <Route path="/Train" element={<Train />} />
              <Route path="/Bus" element={<Bus />} />
            </Routes>
          </div>
        </div>
        <div className="row-span-1 flex justify-center">g</div>
      </div>
      {/* Footer Section */}
      <div className="row-span-1 flex justify-center items-end">
        <footer className="text-center py-3 rounded-md shadow-md">
          <p className="text-sm">
            © 2025 Travel Booking Portal | All rights reserved
          </p>
        </footer>
      </div>
    </div>
  );
};

export default PageCombine;
