import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const handleNavigate = (value) => {
    navigate(`/home/${value}`);
  };
  return (
    <div className="  flex justify-start space-x-2 p-1">
      <div className="flex">
        Transit<p className="text-red-500 font-bold">H</p>ub
      </div>
      <div className="rounded-lg " onClick={() => handleNavigate("flight")}>
        <img
          className="w-11 h-11  "
          src="https://edge.ixigo.com/st/vimaan/_next/static/media/flight.f515b25a.svg"
          alt="Flights"
        />
      </div>
      <div className="rounded-lg " onClick={() => handleNavigate("bus")}>
        <img
          className="w-11 h-11  "
          src="https://images.ixigo.com/image/upload/trains/trains/d59e0e79f7d5d31a6dcb048f96c2dd6b-umlsp.png"
          alt="Bus"
        />
      </div>
      <div className="rounded-lg " onClick={() => handleNavigate("train")}>
        <img
          className="w-11 h-11  "
          src="https://images.ixigo.com/image/upload/trains/trains/6219365fbe7fdb49d5fa346457de8190-decie.png"
          alt="Train"
        />
      </div>
    </div>
  );
};

export default NavBar;
