// import React, { useState } from "react";
// import Flight from "./pages/flight/Flight";
// import Bus from "./pages/bus/Bus";
// import Train from "./pages/train/Train";
// import { Link, Route, Routes } from "react-router-dom";
// // import Menu from "../AddNew/Menu";

// const PageCombine = () => {
//   return (
//     <div className="bg-gray-100 p-3 ">
//       <div className=" p-1 grid grid-rows-6 ">
//         <div className="">gg</div>
//         <div className="row-span-1 grid grid-cols-3 gap-1">
//           <div className=""></div>
//           <div className="flex justify-between  items-end bg-white relative border ">
//             {/* <div className="bg-white flex  relative "> */}
//             <div className="">
//               <Link className="" to={"/flight"}>
//                 <img
//                   className="w-[5rem] "
//                   src="https://edge.ixigo.com/st/vimaan/_next/static/media/flight.f515b25a.svg"
//                   alt=""
//                 />
//                 <div className=" flex justify-center items-center">
//                   <h1>Flights</h1>
//                 </div>
//               </Link>
//             </div>
//             <div className=" ">
//               <Link className="" to={"/Train"}>
//                 <img
//                   className="w-[5rem]"
//                   src="https://images.ixigo.com/image/upload/trains/trains/d59e0e79f7d5d31a6dcb048f96c2dd6b-umlsp.png"
//                   alt=""
//                 />
//                 <div className="flex justify-center items-center">
//                   <h1>Trains</h1>
//                 </div>
//               </Link>
//             </div>

//             <div className="">
//               <Link className="" to={"/Bus"}>
//                 <img
//                   className="w-[5rem]"
//                   src="https://images.ixigo.com/image/upload/trains/trains/6219365fbe7fdb49d5fa346457de8190-decie.png"
//                   alt=""
//                 />
//                 <div className="flex justify-center  items-center">
//                   <h1>Buses</h1>
//                 </div>
//               </Link>
//             </div>
//           </div>
//           <div className=""></div>
//         </div>

//         <div className="bg-green-50  row-span-3  ">
//           <Routes>
//             <Route path="/flight" element={<Flight />} />
//             <Route path="/Train" element={<Train />} />
//             <Route path="/Bus" element={<Bus />} />
//           </Routes>
//         </div>
//         <div className="  bg-red-100 row-span-1">h</div>
//       </div>
//     </div>
//   );
// };

// export default PageCombine;

import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Flight from "./pages/flight/Flight";
import Bus from "./pages/bus/Bus";
import Train from "./pages/train/Train";

const PageCombine = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-5">
      {/* Header Section */}
      <div className="bg-blue-500 text-white text-center py-3 rounded-md shadow-md">
        <h1 className="text-xl font-bold">Travel Booking Portal</h1>
        <p className="text-sm">Book flights, trains, and buses seamlessly</p>
      </div>

      {/* Navigation Section */}
      <div className="flex justify-center mt-5 gap-6">
        {/* Flight Option */}
        <Link
          to="/flight"
          className="flex flex-col items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-all hover:bg-gray-50"
        >
          <img
            className="w-16 h-16"
            src="https://edge.ixigo.com/st/vimaan/_next/static/media/flight.f515b25a.svg"
            alt="Flights"
          />
          <h2 className="mt-2 text-sm font-semibold">Flights</h2>
        </Link>

        {/* Train Option */}
        <Link
          to="/Train"
          className="flex flex-col items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-all hover:bg-gray-50"
        >
          <img
            className="w-16 h-16"
            src="https://images.ixigo.com/image/upload/trains/trains/d59e0e79f7d5d31a6dcb048f96c2dd6b-umlsp.png"
            alt="Trains"
          />
          <h2 className="mt-2 text-sm font-semibold">Trains</h2>
        </Link>

        {/* Bus Option */}
        <Link
          to="/Bus"
          className="flex flex-col items-center bg-white p-4 rounded-md shadow-md hover:shadow-lg transition-all hover:bg-gray-50"
        >
          <img
            className="w-16 h-16"
            src="https://images.ixigo.com/image/upload/trains/trains/6219365fbe7fdb49d5fa346457de8190-decie.png"
            alt="Buses"
          />
          <h2 className="mt-2 text-sm font-semibold">Buses</h2>
        </Link>
      </div>

      {/* Main Content Section */}
      <div className="bg-white mt-8 p-6 rounded-md shadow-md">
        <Routes>
          <Route path="/flight" element={<Flight />} />
          <Route path="/Train" element={<Train />} />
          <Route path="/Bus" element={<Bus />} />
        </Routes>
      </div>

      {/* Footer Section */}
      <footer className="bg-blue-500 text-white text-center py-3 mt-10 rounded-md shadow-md">
        <p className="text-sm">
          © 2025 Travel Booking Portal | All rights reserved
        </p>
      </footer>
    </div>
  );
};

export default PageCombine;
