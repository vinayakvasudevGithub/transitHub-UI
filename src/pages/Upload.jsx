import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import AddBus from "../features/upload/bus/pages/AddBus";
import AddFlight from "../features/upload/flight/pages/AddFlight";

const Upload = () => {
  return (
    <>
      <Routes>
        <Route path="/uploadbus" element={<AddBus />} />
        <Route path="/uploadflight" element={<AddFlight />} />
        {/* <Route path="/uploadtrain" element={<ToAddNewTrainToData />} /> */}
      </Routes>
    </>
  );
};

export default Upload;
