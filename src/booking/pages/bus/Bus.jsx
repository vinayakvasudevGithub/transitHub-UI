import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BusDetails } from "../../../store/slice/BusSlice";

const Bus = () => {
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(From);

  const results = (e) => {
    e.preventDefault();
    dispatch(
      BusDetails({
        from: From,
        to: To,
      })
    );
    // setFrom("");
    navigate("/result/BusResult");
  };

  return (
    <div className="bg-green-400 flex justify-center">
      <form action="" onSubmit={results}>
        <div className="">
          <div className="mt-2">
            <input type="text" onChange={(e) => setFrom(e.target.value)} />
          </div>
          <div className="mt-2">
            <input type="text" onChange={(e) => setTo(e.target.value)} />
          </div>
          <button className="bg-red-300 mt-2">search bus</button>
        </div>
      </form>
    </div>
  );
};

export default Bus;
