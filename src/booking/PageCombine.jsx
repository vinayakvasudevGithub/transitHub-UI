import React, { useState } from "react";
import Flight from "./pages/flight/Flight";
import Bus from "./pages/bus/Bus";
import Train from "./pages/train/Train";
import { Link, Route, Routes } from "react-router-dom";
// import Menu from "../AddNew/Menu";

const PageCombine = () => {
  const [ShowAndHideMenu, SetShowAndHideMenu] = useState();
  // const HideAndShowMenu=()=>{

  // }

  return (
    <div className="bg-red-300 p-5">
      {/* <Link to={"/menu"}>
        <div className="bg-blue-600">menu</div>
      </Link> */}

      <div className="flex justify-center">
        <Link className="bg-green-600 p-2" to={"/flight"}>
          flight
        </Link>
        <Link className="bg-blue-600 p-2" to={"/Train"}>
          train
        </Link>
        <Link className="bg-yellow-600 p-2" to={"/Bus"}>
          bus
        </Link>
      </div>
      <Routes>
        {/* <Route path="/menu/*" element={<Menu />} /> */}
        <Route path="/flight" element={<Flight />} />
        <Route path="/Train" element={<Train />} />
        <Route path="/Bus" element={<Bus />} />
      </Routes>
    </div>
  );
};

export default PageCombine;
