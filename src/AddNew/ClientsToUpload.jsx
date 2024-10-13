import React from "react";
import { Route, Routes } from "react-router-dom";
import ToAddNewBusToData from "./Bus/ToAddNewBusToData";
import ToAddNewFlightToData from "./Flight/ToAddNewFlightToData";
import ToAddNewTrainToData from "./Train/ToAddNewTrainToData";

const ClientsToUpload = () => {
  return (
    <>
      <Routes>
        <Route path="/uploadbus" element={<ToAddNewBusToData />} />
        <Route path="/uploadflight" element={<ToAddNewFlightToData />} />
        <Route path="/uploadtrain" element={<ToAddNewTrainToData />} />
      </Routes>
    </>
  );
};

export default ClientsToUpload;
