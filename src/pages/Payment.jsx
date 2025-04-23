import React from "react";
import { Routes, Route } from "react-router-dom";
import TrainPayment from "../payment/TrainPayment";
import axios from "axios";

const checkout = async (amount) => {
  const { data: keyData } = await axios.get(
    "http://localhost:2001/payment/getkey"
  );
  const { key } = keyData;

  const { data: orderData } = await axios.post(
    "http://localhost:2001/payment/process",
    {
      amount,
    }
  );
  const { order } = orderData;

  const options = {
    key, // Replace with your Razorpay key_id
    amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "FinalEdge",
    description: "transithub payment",
    order_id: order.id, // This is the order_id created in the backend
    callback_url: "http://localhost:3000/payment-success", // Your success URL
    prefill: {
      name: "transithub",
      email: "transithubmap@gmail.com",
      contact: "9999999999",
    },
    theme: {
      color: "#F37254",
    },
  };

  const rzp = new Razorpay(options);
  rzp.open();
};

const Payment = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div>
        <div>car</div>
        <button className="bg-red-200" onClick={() => checkout(400)}>
          click to pay 400
        </button>
      </div>
    </div>
  );
};

export default Payment;
