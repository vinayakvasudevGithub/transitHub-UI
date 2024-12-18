import React from "react";
import { Route, Routes } from "react-router-dom";
import TrainPayment from "./paymentForTrain/TrainPayment";

const PayMentPageCombined = () => {
  return (
    <div>
      <Routes>
        <Route path="/trainPayment" element={<TrainPayment />} />
      </Routes>
    </div>
  );
};

export default PayMentPageCombined;
