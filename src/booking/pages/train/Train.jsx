import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TrainDetails } from "../../../store/slice/TrainSlice";

const Train = () => {
  const [From, setFrom] = useState("");
  const [To, setTo] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    dispatch(
      TrainDetails({
        from: From,
        to: To,
      })
    ),
      navigate("/result/TrainResult");
  };

  return (
    <div className="bg-green-300 flex justify-center">
      <form>
        <div className="bg-green-300 mt-2">
          <div>
            <input type="text" onChange={(e) => setFrom(e.target.value)} />
          </div>
          <div className="mt-2">
            <input type="text" onChange={(e) => setTo(e.target.value)} />
          </div>
          <button onClick={submit} className="bg-blue-300 mt-2">
            search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Train;
