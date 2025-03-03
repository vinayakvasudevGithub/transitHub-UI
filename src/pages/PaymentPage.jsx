import React from "react";
import { Route, Routes } from "react-router-dom";
import TrainPayment from "../payment/TrainPayment";

const PaymentPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/trainPayment" element={<TrainPayment />} />
      </Routes>
    </div>
  );
};

export default PaymentPage;
