import React from "react";

const FlightDetails = ({ handleFlightInfoChange, flightData }) => {
  return (
    <div>
      <p className="bg-yellow-200 ">flight details</p>
      <div className="bg-red-300 flex justify-center p-1">
        <div className="mt-4 bg-green-300 p-1">
          <div className="bg-red-400 p-1">
            <label htmlFor="">Airline</label>
            <input
              name="airline"
              value={flightData.airline}
              onChange={handleFlightInfoChange}
            ></input>
          </div>

          {/* this should change to dropdown */}
          <div className="bg-blue-300 p-1">
            <label htmlFor="">airlineimagecode</label>
            <input
              name="airlineimagecode"
              value={flightData.airlineimagecode}
              onChange={handleFlightInfoChange}
            ></input>
          </div>
          <div className="bg-yellow-300">
            <label htmlFor="">flightNumber</label>
            <input
              name="flightNumber"
              value={flightData.flightNumber}
              onChange={handleFlightInfoChange}
              type="text"
            />
          </div>
          <div className="bg-green-400">
            <label htmlFor="">aircraft</label>
            <input
              name="aircraft"
              value={flightData.aircraft}
              onChange={handleFlightInfoChange}
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetails;
