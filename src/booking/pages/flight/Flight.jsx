import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Flightdetails } from "../../../store/slice/FlightSlice";

const Flight = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const results = (e) => {
    e.preventDefault();
    dispatch(
      Flightdetails({
        from: from,
        to: to,
      })
    );

    navigate("/result/FlightResult");
  };

  return (
    <div className="bg-yellow-200 flex justify-center">
      <form onSubmit={results}>
        <div>
          <div className="mt-2">
            <input
              type="text"
              placeholder="kannur"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="mt-2">
            <input value={to} onChange={(e) => setTo(e.target.value)} />
          </div>

          <button className="bg-red-500 mt-5" type="submit">
            flight search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Flight;
